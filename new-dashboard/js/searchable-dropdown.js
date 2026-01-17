/**
 * Searchable Dropdown Component
 * Converts regular select elements into searchable dropdowns
 */
class SearchableDropdown {
    constructor(selectElement, options = {}) {
        this.select = selectElement;
        this.options = {
            placeholder: options.placeholder || 'Select an option...',
            searchPlaceholder: options.searchPlaceholder || 'Search...',
            noResultsText: options.noResultsText || 'No results found',
            minOptionsToShowSearch: options.minOptionsToShowSearch || 5,
            ...options
        };
        
        this.isOpen = false;
        this.filteredOptions = [];
        this.selectedValue = this.select.value;
        this.selectedText = this.select.options[this.select.selectedIndex]?.text || '';
        
        this.init();
    }
    
    init() {
        // Hide original select
        this.select.style.display = 'none';
        
        // Create wrapper
        this.wrapper = document.createElement('div');
        this.wrapper.className = 'searchable-dropdown';
        this.wrapper.setAttribute('data-dropdown-id', this.select.id || `dropdown-${Date.now()}`);
        
        // Create trigger button
        this.trigger = document.createElement('button');
        this.trigger.type = 'button';
        this.trigger.className = 'searchable-dropdown-trigger';
        this.trigger.innerHTML = `
            <span class="searchable-dropdown-text">${this.selectedText || this.options.placeholder}</span>
            <i class="ri-arrow-down-s-line searchable-dropdown-arrow"></i>
        `;
        
        // Create dropdown
        this.dropdown = document.createElement('div');
        this.dropdown.className = 'searchable-dropdown-menu';
        
        // Create search input (only if enough options)
        const optionCount = this.select.options.length;
        if (optionCount >= this.options.minOptionsToShowSearch) {
            this.searchInput = document.createElement('input');
            this.searchInput.type = 'text';
            this.searchInput.className = 'searchable-dropdown-search';
            this.searchInput.placeholder = this.options.searchPlaceholder;
            this.searchInput.setAttribute('autocomplete', 'off');
            
            this.searchInput.addEventListener('input', (e) => this.filterOptions(e.target.value));
            this.searchInput.addEventListener('keydown', (e) => this.handleSearchKeydown(e));
            
            const searchWrapper = document.createElement('div');
            searchWrapper.className = 'searchable-dropdown-search-wrapper';
            searchWrapper.innerHTML = '<i class="ri-search-line searchable-dropdown-search-icon"></i>';
            searchWrapper.appendChild(this.searchInput);
            this.dropdown.appendChild(searchWrapper);
        }
        
        // Create options container
        this.optionsContainer = document.createElement('div');
        this.optionsContainer.className = 'searchable-dropdown-options';
        this.dropdown.appendChild(this.optionsContainer);
        
        // Create no results message
        this.noResults = document.createElement('div');
        this.noResults.className = 'searchable-dropdown-no-results';
        this.noResults.textContent = this.options.noResultsText;
        this.noResults.style.display = 'none';
        this.dropdown.appendChild(this.noResults);
        
        // Build options
        this.buildOptions();
        
        // Append elements
        this.wrapper.appendChild(this.trigger);
        this.wrapper.appendChild(this.dropdown);
        this.select.parentNode.insertBefore(this.wrapper, this.select);
        
        // Store initial parent for restoration
        this.initialParent = this.wrapper;
        
        // Event listeners
        this.trigger.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            this.toggle();
        });
        
        // Close on outside click
        document.addEventListener('click', (e) => {
            if (!this.wrapper.contains(e.target)) {
                this.close();
            }
        });
        
        // Update when original select changes
        this.select.addEventListener('change', () => {
            this.updateSelected();
        });
    }
    
    buildOptions() {
        this.optionsContainer.innerHTML = '';
        const options = Array.from(this.select.options);
        
        options.forEach((option, index) => {
            const optionElement = document.createElement('div');
            optionElement.className = 'searchable-dropdown-option';
            optionElement.textContent = option.text;
            optionElement.setAttribute('data-value', option.value);
            
            if (option.value === this.selectedValue) {
                optionElement.classList.add('selected');
            }
            
            optionElement.addEventListener('click', () => {
                this.selectOption(option.value, option.text);
            });
            
            this.optionsContainer.appendChild(optionElement);
        });
        
        this.filteredOptions = options;
    }
    
    filterOptions(searchTerm) {
        const term = searchTerm.toLowerCase().trim();
        const options = Array.from(this.select.options);
        
        if (term === '') {
            this.filteredOptions = options;
        } else {
            this.filteredOptions = options.filter(option => 
                option.text.toLowerCase().includes(term)
            );
        }
        
        this.renderFilteredOptions();
    }
    
    renderFilteredOptions() {
        this.optionsContainer.innerHTML = '';
        
        if (this.filteredOptions.length === 0) {
            this.noResults.style.display = 'block';
            return;
        }
        
        this.noResults.style.display = 'none';
        
        this.filteredOptions.forEach((option) => {
            const optionElement = document.createElement('div');
            optionElement.className = 'searchable-dropdown-option';
            
            if (option.value === this.selectedValue) {
                optionElement.classList.add('selected');
            }
            
            // Highlight search term if present
            if (this.searchInput && this.searchInput.value.trim()) {
                const searchTerm = this.searchInput.value.trim();
                const text = option.text;
                const regex = new RegExp(`(${searchTerm})`, 'gi');
                const highlightedText = text.replace(regex, '<mark>$1</mark>');
                optionElement.innerHTML = highlightedText;
            } else {
                optionElement.textContent = option.text;
            }
            
            optionElement.setAttribute('data-value', option.value);
            
            optionElement.addEventListener('click', () => {
                this.selectOption(option.value, option.text);
            });
            
            this.optionsContainer.appendChild(optionElement);
        });
    }
    
    selectOption(value, text) {
        this.selectedValue = value;
        this.selectedText = text;
        
        // Update original select
        this.select.value = value;
        this.select.dispatchEvent(new Event('change', { bubbles: true }));
        
        // Update trigger text
        const textElement = this.trigger.querySelector('.searchable-dropdown-text');
        textElement.textContent = text || this.options.placeholder;
        
        // Update selected state in options
        this.optionsContainer.querySelectorAll('.searchable-dropdown-option').forEach(opt => {
            opt.classList.remove('selected');
            if (opt.getAttribute('data-value') === value) {
                opt.classList.add('selected');
            }
        });
        
        // Clear search
        if (this.searchInput) {
            this.searchInput.value = '';
            this.filterOptions('');
        }
        
        this.close();
    }
    
    updateSelected() {
        const selectedOption = this.select.options[this.select.selectedIndex];
        this.selectedValue = this.select.value;
        this.selectedText = selectedOption ? selectedOption.text : '';
        
        const textElement = this.trigger.querySelector('.searchable-dropdown-text');
        textElement.textContent = this.selectedText || this.options.placeholder;
        
        // Update selected state
        this.optionsContainer.querySelectorAll('.searchable-dropdown-option').forEach(opt => {
            opt.classList.remove('selected');
            if (opt.getAttribute('data-value') === this.selectedValue) {
                opt.classList.add('selected');
            }
        });
    }
    
    toggle() {
        if (this.isOpen) {
            this.close();
        } else {
            this.open();
        }
    }
    
    open() {
        this.isOpen = true;
        this.wrapper.classList.add('active');
        this.trigger.classList.add('active');
        
        // Calculate position for fixed positioning
        const triggerRect = this.trigger.getBoundingClientRect();
        const dropdown = this.dropdown;
        
        // Append dropdown to body when open to avoid stacking context issues
        if (!document.body.contains(dropdown)) {
            document.body.appendChild(dropdown);
        }
        
        // Set fixed position with high z-index
        dropdown.style.position = 'fixed';
        dropdown.style.top = `${triggerRect.bottom + window.scrollY + 6}px`;
        dropdown.style.left = `${triggerRect.left + window.scrollX}px`;
        dropdown.style.width = `${triggerRect.width}px`;
        dropdown.style.maxWidth = `${triggerRect.width}px`;
        dropdown.style.minWidth = `${triggerRect.width}px`;
        dropdown.style.zIndex = '99999';
        dropdown.style.pointerEvents = 'auto';
        
        // Focus search input if present
        if (this.searchInput) {
            setTimeout(() => {
                this.searchInput.focus();
            }, 100);
        }
        
        // Scroll to selected option
        const selectedOption = this.optionsContainer.querySelector('.selected');
        if (selectedOption) {
            selectedOption.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
        }
        
        // Handle window resize only - don't update on scroll to prevent flickering with charts
        // Only reposition on actual window resize, not scroll events
        this.lastTriggerRect = {
            top: triggerRect.top,
            left: triggerRect.left,
            width: triggerRect.width
        };
        
        this.handleResize = () => {
            if (!this.isOpen || !this.trigger) return;
            
            try {
                const newRect = this.trigger.getBoundingClientRect();
                // Only update if position actually changed significantly (resize, not scroll)
                const threshold = 10; // pixels
                if (Math.abs(newRect.left - this.lastTriggerRect.left) > threshold ||
                    Math.abs(newRect.width - this.lastTriggerRect.width) > threshold) {
                    dropdown.style.top = `${newRect.bottom + window.scrollY + 6}px`;
                    dropdown.style.left = `${newRect.left + window.scrollX}px`;
                    dropdown.style.width = `${newRect.width}px`;
                    this.lastTriggerRect = {
                        top: newRect.top,
                        left: newRect.left,
                        width: newRect.width
                    };
                }
            } catch (e) {
                console.warn('Error updating dropdown position:', e);
            }
        };
        
        // Only listen to resize events, not scroll - this prevents flickering with charts
        window.addEventListener('resize', this.handleResize, { passive: true });
    }
    
    close() {
        this.isOpen = false;
        this.wrapper.classList.remove('active');
        this.trigger.classList.remove('active');
        
        // Reset dropdown position and move back to wrapper
        this.dropdown.style.position = '';
        this.dropdown.style.top = '';
        this.dropdown.style.left = '';
        this.dropdown.style.width = '';
        this.dropdown.style.maxWidth = '';
        this.dropdown.style.minWidth = '';
        this.dropdown.style.zIndex = '';
        this.dropdown.style.pointerEvents = '';
        
        // Clear any pending resize timeout
        if (this.resizeTimeout) {
            clearTimeout(this.resizeTimeout);
            this.resizeTimeout = null;
        }
        
        // Move dropdown back to wrapper if it's in body
        if (document.body.contains(this.dropdown) && this.initialParent && this.initialParent.parentNode) {
            this.initialParent.appendChild(this.dropdown);
        }
        
        // Remove event listeners
        if (this.handleResize) {
            window.removeEventListener('resize', this.handleResize, { passive: true });
        }
        this.lastTriggerRect = null;
        
        // Clear search
        if (this.searchInput) {
            this.searchInput.value = '';
            this.filterOptions('');
        }
    }
    
    handleSearchKeydown(e) {
        if (e.key === 'Escape') {
            this.close();
        } else if (e.key === 'Enter') {
            e.preventDefault();
            const firstOption = this.optionsContainer.querySelector('.searchable-dropdown-option:not(.hidden)');
            if (firstOption) {
                const value = firstOption.getAttribute('data-value');
                const text = firstOption.textContent.replace(/<mark>|<\/mark>/g, '');
                this.selectOption(value, text);
            }
        } else if (e.key === 'ArrowDown') {
            e.preventDefault();
            this.focusNextOption(1);
        } else if (e.key === 'ArrowUp') {
            e.preventDefault();
            this.focusNextOption(-1);
        }
    }
    
    focusNextOption(direction) {
        const options = Array.from(this.optionsContainer.querySelectorAll('.searchable-dropdown-option:not(.hidden)'));
        const currentFocused = this.optionsContainer.querySelector('.searchable-dropdown-option.focused');
        
        let currentIndex = currentFocused ? options.indexOf(currentFocused) : -1;
        let nextIndex = currentIndex + direction;
        
        if (nextIndex < 0) nextIndex = options.length - 1;
        if (nextIndex >= options.length) nextIndex = 0;
        
        if (currentFocused) {
            currentFocused.classList.remove('focused');
        }
        
        options[nextIndex].classList.add('focused');
        options[nextIndex].scrollIntoView({ block: 'nearest', behavior: 'smooth' });
    }
}

// Initialize all searchable dropdowns conditionally
// Only runs if dropdowns exist on the page
function initSearchableDropdowns() {
    try {
        // Check if there are any selects that need conversion
        const selects = document.querySelectorAll('select.filter-select, select.searchable-select, select.form-select');
        
        // Early return if no selects found
        if (selects.length === 0) {
            return;
        }
        
        selects.forEach(select => {
            try {
                // Skip if already converted to searchable dropdown
                if (select.closest('.searchable-dropdown')) {
                    return;
                }
                
                const optionCount = select.options.length;
                // Only convert to searchable if it has 5 or more options
                if (optionCount >= 5) {
                    new SearchableDropdown(select, {
                        placeholder: select.options[0]?.text || 'Select an option...',
                        searchPlaceholder: 'Search...',
                        noResultsText: 'No results found',
                        minOptionsToShowSearch: 5
                    });
                }
            } catch (error) {
                console.error('Error initializing searchable dropdown for select:', select, error);
            }
        });
    } catch (error) {
        console.error('Error in searchable dropdown initialization:', error);
    }
}

// Use Components.initSearchableDropdowns if available, otherwise use local function
if (typeof Components !== 'undefined' && Components.initSearchableDropdowns) {
    // Use the centralized component initialization
    if (typeof AppUtils !== 'undefined') {
        AppUtils.ready(() => {
            Components.initSearchableDropdowns();
        });
    } else {
        // Fallback if AppUtils not loaded
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', initSearchableDropdowns);
        } else {
            initSearchableDropdowns();
        }
    }
} else {
    // Fallback initialization
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initSearchableDropdowns);
    } else {
        initSearchableDropdowns();
    }
}

// Export for manual initialization
if (typeof module !== 'undefined' && module.exports) {
    module.exports = SearchableDropdown;
}
