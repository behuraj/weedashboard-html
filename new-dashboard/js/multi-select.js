// Custom Multi-Select Dropdown Functionality
(function() {
    'use strict';
    
    function initMultiSelect() {
        const multiSelect = document.querySelector('.custom-multi-select');
        const triggerBtn = document.getElementById('districtMultiSelectBtn');
        const dropdown = document.getElementById('districtMultiSelectDropdown');
        
        if (!multiSelect || !triggerBtn || !dropdown) {
            return;
        }

        const searchInput = document.getElementById('districtSearch');
        const options = document.querySelectorAll('#districtMultiSelectOptions .multi-select-option');
        const selectAllBtn = document.getElementById('selectAllDistricts');
        const clearAllBtn = document.getElementById('clearAllDistricts');
        const selectedCountSpan = document.getElementById('selectedDistrictsCount');
        const placeholderSpan = triggerBtn.querySelector('.multi-select-placeholder');

        let selectedDistricts = [];

        // Toggle dropdown
        triggerBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            e.preventDefault();
            const isActive = multiSelect.classList.toggle('active');
            
            // On mobile, fix dropdown position
            if (isActive && window.innerWidth <= 768) {
                const triggerRect = triggerBtn.getBoundingClientRect();
                dropdown.style.position = 'fixed';
                dropdown.style.left = '10px';
                dropdown.style.right = '10px';
                dropdown.style.width = `calc(100vw - 20px)`;
                dropdown.style.maxWidth = `calc(100vw - 20px)`;
                dropdown.style.top = `${triggerRect.bottom + window.scrollY + 6}px`;
                dropdown.style.maxHeight = `${window.innerHeight - triggerRect.bottom - 20}px`;
            } else if (!isActive) {
                // Reset styles when closed
                dropdown.style.position = '';
                dropdown.style.left = '';
                dropdown.style.right = '';
                dropdown.style.width = '';
                dropdown.style.maxWidth = '';
                dropdown.style.top = '';
                dropdown.style.maxHeight = '';
            }
        });

        // Close dropdown when clicking outside
        document.addEventListener('click', function(e) {
            if (!multiSelect.contains(e.target)) {
                multiSelect.classList.remove('active');
                // Reset mobile styles when closed
                if (window.innerWidth <= 768) {
                    dropdown.style.position = '';
                    dropdown.style.left = '';
                    dropdown.style.right = '';
                    dropdown.style.width = '';
                    dropdown.style.maxWidth = '';
                    dropdown.style.top = '';
                    dropdown.style.maxHeight = '';
                }
            }
        });

        // Handle checkbox selection
        options.forEach(option => {
            const checkbox = option.querySelector('input[type="checkbox"]');
            if (checkbox) {
                checkbox.addEventListener('change', function() {
                    const value = this.value;
                    const districtName = this.dataset.district;

                    if (this.checked) {
                        if (!selectedDistricts.find(d => d.value === value)) {
                            selectedDistricts.push({ value: value, name: districtName });
                        }
                    } else {
                        selectedDistricts = selectedDistricts.filter(d => d.value !== value);
                    }

                    updateTriggerText();
                });
            }
        });

        // Search functionality
        if (searchInput) {
            searchInput.addEventListener('input', function(e) {
                const searchTerm = e.target.value.toLowerCase();
                
                options.forEach(option => {
                    const span = option.querySelector('span');
                    if (span) {
                        const districtName = span.textContent.toLowerCase();
                        if (districtName.includes(searchTerm)) {
                            option.classList.remove('hidden');
                        } else {
                            option.classList.add('hidden');
                        }
                    }
                });
            });
        }

        // Select All functionality
        if (selectAllBtn) {
            selectAllBtn.addEventListener('click', function(e) {
                e.preventDefault();
                e.stopPropagation();
                const visibleOptions = Array.from(options).filter(opt => !opt.classList.contains('hidden'));
                
                visibleOptions.forEach(option => {
                    const checkbox = option.querySelector('input[type="checkbox"]');
                    if (checkbox && !checkbox.checked) {
                        checkbox.checked = true;
                        const value = checkbox.value;
                        const districtName = checkbox.dataset.district;
                        
                        if (!selectedDistricts.find(d => d.value === value)) {
                            selectedDistricts.push({ value: value, name: districtName });
                        }
                    }
                });

                updateTriggerText();
            });
        }

        // Clear All functionality
        if (clearAllBtn) {
            clearAllBtn.addEventListener('click', function(e) {
                e.preventDefault();
                e.stopPropagation();
                options.forEach(option => {
                    const checkbox = option.querySelector('input[type="checkbox"]');
                    if (checkbox) {
                        checkbox.checked = false;
                    }
                });

                selectedDistricts = [];
                updateTriggerText();
            });
        }

        // Update trigger button text based on selected items
        function updateTriggerText() {
            if (!placeholderSpan || !selectedCountSpan) return;
            
            const count = selectedDistricts.length;

            if (count === 0) {
                placeholderSpan.style.display = 'inline';
                selectedCountSpan.style.display = 'none';
                selectedCountSpan.textContent = '';
            } else if (count === 1) {
                placeholderSpan.style.display = 'none';
                selectedCountSpan.style.display = 'inline';
                selectedCountSpan.textContent = selectedDistricts[0].name;
            } else {
                placeholderSpan.style.display = 'none';
                selectedCountSpan.style.display = 'inline';
                selectedCountSpan.textContent = `${count} districts selected`;
            }
        }

        // Prevent dropdown from closing when clicking inside it
        dropdown.addEventListener('click', function(e) {
            e.stopPropagation();
        });
    }
    
    // Try to initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initMultiSelect);
    } else {
        // DOM is already ready
        initMultiSelect();
    }
})();
