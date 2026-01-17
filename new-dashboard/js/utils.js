/**
 * Shared Utility Functions
 * Common utilities used across multiple pages
 */

// Single DOM ready handler to consolidate all DOMContentLoaded listeners
const AppUtils = {
    readyCallbacks: [],
    initialized: false,
    
    /**
     * Register a callback to run when DOM is ready
     * Consolidates multiple DOMContentLoaded listeners
     */
    ready(callback) {
        if (typeof callback !== 'function') return;
        
        if (document.readyState === 'loading') {
            this.readyCallbacks.push(callback);
            if (!this.initialized) {
                this.initialized = true;
                document.addEventListener('DOMContentLoaded', () => {
                    this.readyCallbacks.forEach(cb => {
                        try {
                            cb();
                        } catch (error) {
                            console.error('Error in ready callback:', error);
                        }
                    });
                });
            }
        } else {
            // DOM already ready, execute immediately
            callback();
        }
    },
    
    /**
     * Debounce function to limit function calls
     */
    debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    },
    
    /**
     * Throttle function to limit function calls
     */
    throttle(func, limit) {
        let inThrottle;
        return function(...args) {
            if (!inThrottle) {
                func.apply(this, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        };
    },
    
    /**
     * Check if element is in viewport
     */
    isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    },
    
    /**
     * Get query parameter from URL
     */
    getQueryParam(name) {
        const params = new URLSearchParams(window.location.search);
        return params.get(name);
    },
    
    /**
     * Set query parameter in URL
     */
    setQueryParam(name, value) {
        const url = new URL(window.location);
        url.searchParams.set(name, value);
        window.history.pushState({}, '', url);
    },
    
    /**
     * Show loading state
     */
    showLoading(element) {
        if (!element) return;
        element.classList.add('loading');
        const loader = document.createElement('div');
        loader.className = 'loading-spinner';
        loader.innerHTML = '<div class="spinner"></div>';
        element.appendChild(loader);
    },
    
    /**
     * Hide loading state
     */
    hideLoading(element) {
        if (!element) return;
        element.classList.remove('loading');
        const loader = element.querySelector('.loading-spinner');
        if (loader) {
            loader.remove();
        }
    },
    
    /**
     * Event delegation helper
     */
    delegate(parent, selector, event, handler) {
        parent.addEventListener(event, (e) => {
            if (e.target.matches(selector) || e.target.closest(selector)) {
                handler.call(e.target.closest(selector), e);
            }
        });
    }
};

// Export for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
    module.exports = AppUtils;
}
