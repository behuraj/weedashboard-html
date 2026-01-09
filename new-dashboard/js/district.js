// District Page Filter Functionality
document.addEventListener('DOMContentLoaded', function() {
    const yearFilter = document.getElementById('yearFilter');
    const districtFilter = document.getElementById('districtFilter');
    const resetFilterBtn = document.getElementById('resetFilter');

    // Filter function - this will filter all page data
    function applyFilters() {
        const selectedYear = yearFilter.value;
        const selectedDistrict = districtFilter.value.toLowerCase();

        // Filter cards data
        filterCards(selectedYear, selectedDistrict);

        // Filter district ranking data
        filterDistrictRanking(selectedDistrict);

        // Filter top 10 / bottom 10 data
        filterTopBottomLists(selectedDistrict);

        // Update map/tabs if needed
        updateMapData(selectedYear, selectedDistrict);
    }

    // Filter the 8 cards section
    function filterCards(year, district) {
        // In a real application, this would fetch data based on filters
        // For now, we'll just show/hide or update card values
        const cards = document.querySelectorAll('.stat-card');
        
        if (district && district !== '') {
            // If a specific district is selected, you might want to show district-specific data
            // For now, we'll keep the cards visible but could update values
            cards.forEach(card => {
                card.style.opacity = '1';
            });
        } else {
            cards.forEach(card => {
                card.style.opacity = '1';
            });
        }
    }

    // Filter district ranking list
    function filterDistrictRanking(district) {
        const districtItems = document.querySelectorAll('.district-item');
        
        districtItems.forEach(item => {
            const districtName = item.getAttribute('data-district').toLowerCase();
            
            if (district === '' || districtName.includes(district)) {
                item.style.display = '';
            } else {
                item.style.display = 'none';
            }
        });
    }

    // Filter top 10 and bottom 10 lists
    function filterTopBottomLists(district) {
        // This would filter the top 10 and bottom 10 lists
        // For now, the JavaScript in main.js generates this data
        // In a real app, you'd regenerate the lists based on filters
        if (district && district !== '') {
            // Could regenerate lists for specific district
            console.log('Filtering top/bottom lists for:', district);
        }
    }

    // Update map data based on filters
    function updateMapData(year, district) {
        // In a real application, this would load different map images or data
        // based on the selected year and district
        console.log('Updating map for year:', year, 'district:', district);
    }

    // Event listeners
    if (yearFilter) {
        yearFilter.addEventListener('change', applyFilters);
    }

    if (districtFilter) {
        districtFilter.addEventListener('change', applyFilters);
    }

    if (resetFilterBtn) {
        resetFilterBtn.addEventListener('click', function() {
            yearFilter.value = '2024'; // Reset to default
            districtFilter.value = '';
            applyFilters();
        });
    }

    // Initialize - apply any default filters
    applyFilters();
});

