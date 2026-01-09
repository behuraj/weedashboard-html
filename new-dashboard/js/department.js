// Department Page Filter Functionality
document.addEventListener('DOMContentLoaded', function() {
    const yearFilter = document.getElementById('yearFilter');
    const departmentFilter = document.getElementById('departmentFilter');
    const resetFilterBtn = document.getElementById('resetFilter');

    // Filter function - this will filter all page data
    function applyFilters() {
        const selectedYear = yearFilter ? yearFilter.value : '';
        const selectedDepartment = departmentFilter ? departmentFilter.value : '';

        // Update charts based on filters
        updateCharts(selectedYear, selectedDepartment);
    }

    // Update charts based on filters
    function updateCharts(year, department) {
        // Filter charts by department
        const allChartCards = document.querySelectorAll('.chart-card[data-department]');
        
        if (allChartCards.length === 0) {
            // Charts not loaded yet, try again after a short delay
            setTimeout(function() {
                updateCharts(year, department);
            }, 100);
            return;
        }
        
        allChartCards.forEach(card => {
            const cardDepartment = card.getAttribute('data-department');
            
            if (!department || department === '' || department === cardDepartment) {
                card.style.display = '';
            } else {
                card.style.display = 'none';
            }
        });
        
        // Dispatch custom event for charts to listen (for future year-based updates)
        const event = new CustomEvent('filtersChanged', {
            detail: { year, department }
        });
        document.dispatchEvent(event);
    }

    // Event listeners
    if (yearFilter) {
        yearFilter.addEventListener('change', applyFilters);
    }

    if (departmentFilter) {
        departmentFilter.addEventListener('change', applyFilters);
    }

    if (resetFilterBtn) {
        resetFilterBtn.addEventListener('click', function() {
            yearFilter.value = '2024'; // Reset to default
            departmentFilter.value = '';
            applyFilters();
        });
    }

    // Initialize - apply any default filters
    // Use requestAnimationFrame to ensure DOM is ready
    requestAnimationFrame(function() {
        applyFilters();
    });
});

