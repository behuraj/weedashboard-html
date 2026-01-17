/**
 * Shared Component Utilities
 * Reusable components and initialization helpers
 */

const Components = {
    /**
     * Initialize chart with loading state
     */
    initChart(containerId, options, chartType = 'line') {
        const container = typeof containerId === 'string' 
            ? document.getElementById(containerId) 
            : containerId;
            
        if (!container) {
            console.warn(`Chart container ${containerId} not found`);
            return Promise.resolve(null);
        }
        
        // Show loading state
        if (typeof AppUtils !== 'undefined' && AppUtils.showLoading) {
            AppUtils.showLoading(container);
        }
        
        // Initialize chart after a short delay to allow DOM to render
        return new Promise((resolve) => {
            setTimeout(() => {
                try {
                    if (typeof ApexCharts === 'undefined') {
                        console.error('ApexCharts not loaded');
                        if (typeof AppUtils !== 'undefined' && AppUtils.hideLoading) {
                            AppUtils.hideLoading(container);
                        }
                        return resolve(null);
                    }
                    
                    const chart = new ApexCharts(container, options);
                    chart.render().then(() => {
                        if (typeof AppUtils !== 'undefined' && AppUtils.hideLoading) {
                            AppUtils.hideLoading(container);
                        }
                        resolve(chart);
                    });
                } catch (error) {
                    console.error('Error initializing chart:', error);
                    if (typeof AppUtils !== 'undefined' && AppUtils.hideLoading) {
                        AppUtils.hideLoading(container);
                    }
                    resolve(null);
                }
            }, 100);
        });
    },
    
    /**
     * Chart instances cache
     */
    chartInstances: {},
    
    /**
     * Get or create chart instance
     */
    getChartInstance(chartId, container, options) {
        if (this.chartInstances[chartId]) {
            return this.chartInstances[chartId];
        }
        
        return this.initChart(container, options).then(chart => {
            if (chart) {
                this.chartInstances[chartId] = chart;
            }
            return chart;
        });
    },
    
    /**
     * Update existing chart
     */
    updateChart(chartId, options) {
        if (this.chartInstances[chartId]) {
            this.chartInstances[chartId].updateOptions(options);
            return this.chartInstances[chartId];
        }
        return null;
    },
    
    /**
     * Shared chart options factory
     */
    getChartOptions(baseOptions = {}) {
        const defaults = {
            chart: {
                fontFamily: 'Inter, sans-serif',
                toolbar: {
                    show: false
                },
                animations: {
                    enabled: true,
                    easing: 'easeinout',
                    speed: 800
                }
            },
            colors: ['#333894', '#0ab39c', '#39afd1', '#f06548'],
            grid: {
                borderColor: '#e9ecef',
                strokeDashArray: 4,
                xaxis: {
                    lines: {
                        show: false
                    }
                },
                yaxis: {
                    lines: {
                        show: true
                    }
                }
            },
            legend: {
                show: true,
                position: 'top',
                horizontalAlign: 'right',
                fontSize: '12px',
                fontFamily: 'Inter, sans-serif'
            },
            tooltip: {
                theme: 'light',
                style: {
                    fontSize: '12px',
                    fontFamily: 'Inter, sans-serif'
                }
            }
        };
        
        return { ...defaults, ...baseOptions };
    },
    
    /**
     * Initialize searchable dropdowns conditionally
     */
    initSearchableDropdowns(container = document) {
        try {
            // Only initialize if searchable dropdown class exists
            const selects = container.querySelectorAll('select.filter-select, select.searchable-select, select.form-select');
            
            // Early return if no selects found
            if (selects.length === 0) return;
            
            // Check if SearchableDropdown class is available
            if (typeof SearchableDropdown === 'undefined') {
                console.warn('SearchableDropdown class not loaded');
                return;
            }
            
            selects.forEach(select => {
                try {
                    // Skip if already converted
                    if (select.closest('.searchable-dropdown')) {
                        return;
                    }
                    
                    const optionCount = select.options.length;
                    if (optionCount >= 5) {
                        new SearchableDropdown(select, {
                            placeholder: select.options[0]?.text || 'Select an option...',
                            searchPlaceholder: 'Search...',
                            noResultsText: 'No results found',
                            minOptionsToShowSearch: 5
                        });
                    }
                } catch (error) {
                    console.error('Error initializing searchable dropdown:', error);
                }
            });
        } catch (error) {
            console.error('Error in searchable dropdown initialization:', error);
        }
    },
    
    /**
     * Initialize tooltips
     */
    initTooltips() {
        const tooltipElements = document.querySelectorAll('[data-tooltip]');
        tooltipElements.forEach(element => {
            element.addEventListener('mouseenter', function() {
                const tooltip = document.createElement('div');
                tooltip.className = 'custom-tooltip';
                tooltip.textContent = this.getAttribute('data-tooltip');
                document.body.appendChild(tooltip);
                
                const rect = this.getBoundingClientRect();
                tooltip.style.top = `${rect.top - tooltip.offsetHeight - 5}px`;
                tooltip.style.left = `${rect.left + (rect.width / 2) - (tooltip.offsetWidth / 2)}px`;
                
                this._tooltip = tooltip;
            });
            
            element.addEventListener('mouseleave', function() {
                if (this._tooltip) {
                    this._tooltip.remove();
                    this._tooltip = null;
                }
            });
        });
    }
};

// Export for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
    module.exports = Components;
}
