// Entrepreneurship Charts Initialization - Horizontal Bar Charts Comparing 10 Districts
document.addEventListener('DOMContentLoaded', function() {
    let chartInstances = {}; // Store chart instances for updates

    // All 75 districts list
    const allDistricts = [
        'Lucknow', 'Kanpur Nagar', 'Varanasi', 'Gautam Buddha Nagar', 'Ghaziabad', 'Jhansi',
        'Prayagraj', 'Meerut', 'Saharanpur', 'Mathura', 'Agra', 'Aligarh', 'Ambedkar Nagar',
        'Amethi', 'Amroha', 'Auraiya', 'Ayodhya', 'Azamgarh', 'Badaun', 'Baghpat', 'Bahraich',
        'Ballia', 'Balrampur', 'Banda', 'Barabanki', 'Bareilly', 'Basti', 'Bhadohi', 'Bijnor',
        'Bulandshahar', 'Chandauli', 'Chitrakoot', 'Deoria', 'Etah', 'Etawah', 'Farrukhabad',
        'Fatehpur', 'Firozabad', 'Ghazipur', 'Gonda', 'Gorakhpur', 'Hamirpur', 'Hapur', 'Hardoi',
        'Hathras', 'Jalaun', 'Jaunpur', 'Kannauj', 'Kanpur Dehat', 'Kasganj', 'Kaushambi',
        'Kushi Nagar', 'Lakhimpur Kheri', 'Lalitpur', 'Mahoba', 'Mahrajganj', 'Mainpuri', 'Mau',
        'Mirzapur', 'Moradabad', 'Muzaffarnagar', 'Pilibhit', 'Pratapgarh', 'Raebareli', 'Rampur',
        'Sambhal', 'Sant Kabir Nagar', 'Shahjahanpur', 'Shamli', 'Shrawasti', 'Siddharth Nagar',
        'Sitapur', 'Sonbhadra', 'Sultanpur', 'Unnao'
    ];

    // Get selected filters
    function getSelectedFilters() {
        const yearFilter = document.getElementById('yearFilter');
        const districtTypeFilter = document.getElementById('districtTypeFilter');
        return {
            year: yearFilter ? yearFilter.value : '2024',
            districtType: districtTypeFilter ? districtTypeFilter.value : 'top10'
        };
    }

    // Get districts based on district type filter (returns district names only, no values)
    function getDistrictsByType(districtType) {
        // Generate consistent district list based on type (using seeded random for consistency)
        let selectedDistricts = [];
        
        switch(districtType) {
            case 'top10':
                // Top performing districts (consistent list)
                selectedDistricts = ['Lucknow', 'Kanpur Nagar', 'Varanasi', 'Gautam Buddha Nagar', 'Ghaziabad', 
                                    'Jhansi', 'Prayagraj', 'Meerut', 'Saharanpur', 'Mathura'];
                break;
            case 'bottom10':
                // Bottom performing districts (consistent list)
                selectedDistricts = ['Shrawasti', 'Siddharth Nagar', 'Bahraich', 'Balrampur', 'Sonbhadra', 
                                    'Chitrakoot', 'Kushi Nagar', 'Banda', 'Hamirpur', 'Chandauli'];
                break;
            case 'region':
                // West UP region districts
                selectedDistricts = ['Meerut', 'Ghaziabad', 'Gautam Buddha Nagar', 'Saharanpur', 'Muzaffarnagar', 
                                    'Hapur', 'Baghpat', 'Shamli', 'Bulandshahar', 'Mathura'];
                break;
            case 'aspirational':
                // Aspirational districts
                selectedDistricts = ['Shrawasti', 'Siddharth Nagar', 'Bahraich', 'Balrampur', 'Sonbhadra', 
                                    'Chitrakoot', 'Kushi Nagar', 'Banda', 'Chandauli', 'Hamirpur'];
                break;
            case 'agra-division':
                selectedDistricts = ['Agra', 'Firozabad', 'Mainpuri', 'Mathura', 'Etah', 'Kasganj', 'Aligarh', 'Hathras', 'Etawah', 'Auraiya'];
                break;
            case 'aligarh-division':
                selectedDistricts = ['Aligarh', 'Hathras', 'Kasganj', 'Etah', 'Agra', 'Mathura', 'Firozabad', 'Mainpuri', 'Etawah', 'Auraiya'];
                break;
            case 'ayodhya-division':
                selectedDistricts = ['Ayodhya', 'Ambedkar Nagar', 'Barabanki', 'Sultanpur', 'Amethi', 'Pratapgarh', 'Gonda', 'Bahraich', 'Balrampur', 'Shrawasti'];
                break;
            case 'azamgarh-division':
                selectedDistricts = ['Azamgarh', 'Mau', 'Ballia', 'Deoria', 'Ghazipur', 'Jaunpur', 'Varanasi', 'Sant Kabir Nagar', 'Gorakhpur', 'Kushi Nagar'];
                break;
            case 'bareilly-division':
                selectedDistricts = ['Bareilly', 'Badaun', 'Pilibhit', 'Shahjahanpur', 'Moradabad', 'Rampur', 'Sambhal', 'Amroha', 'Bijnor', 'Hardoi'];
                break;
            case 'basti-division':
                selectedDistricts = ['Basti', 'Sant Kabir Nagar', 'Siddharth Nagar', 'Gorakhpur', 'Deoria', 'Mahrajganj', 'Kushi Nagar', 'Azamgarh', 'Mau', 'Ballia'];
                break;
            case 'chitrakoot-division':
                selectedDistricts = ['Chitrakoot', 'Banda', 'Hamirpur', 'Mahoba', 'Jalaun', 'Jhansi', 'Lalitpur', 'Kanpur Dehat', 'Kanpur Nagar', 'Fatehpur'];
                break;
            case 'devipatan-division':
                selectedDistricts = ['Bahraich', 'Balrampur', 'Shrawasti', 'Gonda', 'Ayodhya', 'Barabanki', 'Sultanpur', 'Amethi', 'Pratapgarh', 'Ambedkar Nagar'];
                break;
            case 'gorakhpur-division':
                selectedDistricts = ['Gorakhpur', 'Mahrajganj', 'Deoria', 'Kushi Nagar', 'Basti', 'Sant Kabir Nagar', 'Siddharth Nagar', 'Azamgarh', 'Mau', 'Ballia'];
                break;
            case 'jhansi-division':
                selectedDistricts = ['Jhansi', 'Lalitpur', 'Jalaun', 'Hamirpur', 'Mahoba', 'Banda', 'Chitrakoot', 'Kanpur Dehat', 'Kanpur Nagar', 'Fatehpur'];
                break;
            case 'kanpur-division':
                selectedDistricts = ['Kanpur Nagar', 'Kanpur Dehat', 'Etawah', 'Auraiya', 'Farrukhabad', 'Kannauj', 'Fatehpur', 'Unnao', 'Raebareli', 'Hardoi'];
                break;
            case 'lucknow-division':
                selectedDistricts = ['Lucknow', 'Raebareli', 'Sitapur', 'Lakhimpur Kheri', 'Hardoi', 'Unnao', 'Barabanki', 'Kanpur Nagar', 'Kanpur Dehat', 'Fatehpur'];
                break;
            case 'meerut-division':
                selectedDistricts = ['Meerut', 'Ghaziabad', 'Gautam Buddha Nagar', 'Hapur', 'Baghpat', 'Bulandshahar', 'Saharanpur', 'Muzaffarnagar', 'Shamli', 'Bijnor'];
                break;
            case 'mirzapur-division':
                selectedDistricts = ['Mirzapur', 'Sonbhadra', 'Chandauli', 'Varanasi', 'Jaunpur', 'Ghazipur', 'Azamgarh', 'Ballia', 'Mau', 'Bhadohi'];
                break;
            case 'moradabad-division':
                selectedDistricts = ['Moradabad', 'Rampur', 'Sambhal', 'Amroha', 'Bijnor', 'Bareilly', 'Badaun', 'Pilibhit', 'Shahjahanpur', 'Hardoi'];
                break;
            case 'prayagraj-division':
                selectedDistricts = ['Prayagraj', 'Kaushambi', 'Fatehpur', 'Pratapgarh', 'Sultanpur', 'Amethi', 'Barabanki', 'Raebareli', 'Unnao', 'Hardoi'];
                break;
            case 'saharanpur-division':
                selectedDistricts = ['Saharanpur', 'Muzaffarnagar', 'Shamli', 'Meerut', 'Ghaziabad', 'Gautam Buddha Nagar', 'Hapur', 'Baghpat', 'Bulandshahar', 'Bijnor'];
                break;
            case 'varanasi-division':
                selectedDistricts = ['Varanasi', 'Chandauli', 'Jaunpur', 'Ghazipur', 'Mirzapur', 'Sonbhadra', 'Bhadohi', 'Azamgarh', 'Mau', 'Ballia'];
                break;
            default:
                selectedDistricts = ['Lucknow', 'Kanpur Nagar', 'Varanasi', 'Gautam Buddha Nagar', 'Ghaziabad', 
                                    'Jhansi', 'Prayagraj', 'Meerut', 'Saharanpur', 'Mathura'];
        }
        
        return selectedDistricts;
    }

    // Initialize horizontal bar chart
    function initHorizontalBarChart(chartId, title, districtsData, suffix) {
        const chartElement = document.getElementById(chartId);
        if (!chartElement) return;

        // Destroy existing chart instance if it exists
        if (chartInstances[chartId]) {
            chartInstances[chartId].destroy();
        }

        // Calculate state average from all district values
        const stateAverage = districtsData.reduce((sum, d) => sum + d.value, 0) / districtsData.length;
        
        // Add state average at the beginning
        const districts = ['State Average', ...districtsData.map(d => d.district)];
        const values = [Math.round(stateAverage * 10) / 10, ...districtsData.map(d => d.value)];

        // Create colors array: first bar (State Average) gets teal, rest get blue
        const barColors = values.map((val, index) => {
            return index === 0 ? '#0ab39c' : '#3577f1';
        });

        const chartConfig = {
            chart: {
                type: 'bar',
                height: 450,
                toolbar: { show: false }
            },
            plotOptions: {
                bar: {
                    horizontal: true,
                    borderRadius: 4,
                    dataLabels: {
                        position: 'right'
                    },
                    distributed: true
                }
            },
            series: [{
                name: 'Value',
                data: values
            }],
            xaxis: {
                categories: districts,
                title: { 
                    text: '',
                    show: false
                },
                axisBorder: {
                    show: false
                },
                axisTicks: {
                    show: false
                },
                labels: {
                    offsetY: 0
                }
            },
            yaxis: {
                title: { 
                    text: '',
                    show: false
                },
                max: suffix === '%' ? 100 : undefined,
                min: 0
            },
            colors: barColors,
            dataLabels: {
                enabled: true,
                formatter: function (val) {
                    return val + (suffix || '%');
                },
                offsetX: 10,
                style: {
                    fontSize: '12px',
                    fontWeight: 700,
                    colors: values.map((val, index) => {
                        // White text for state average column (teal background), dark for others
                        return index === 0 ? '#ffffff' : '#212529';
                    })
                },
                background: {
                    enabled: false
                },
                dropShadow: {
                    enabled: false
                }
            },
            tooltip: {
                y: {
                    formatter: function (val) {
                        return val + (suffix || '%');
                    }
                }
            },
            grid: {
                borderColor: '#f1f3fa',
                padding: {
                    left: 0,
                    right: 40,
                    bottom: 20
                },
                xaxis: {
                    lines: {
                        show: false
                    }
                }
            },
            states: {
                hover: {
                    filter: {
                        type: 'none'
                    }
                }
            },
            legend: {
                show: false
            },
            title: {
                show: false
            }
        };

        chartInstances[chartId] = new ApexCharts(chartElement, chartConfig);
        chartInstances[chartId].render();
    }

    // Initialize all entrepreneurship charts
    function initEntrepreneurshipCharts() {
        const filters = getSelectedFilters();
        const selectedDistricts = getDistrictsByType(filters.districtType);
        
        // Generate unique values for each indicator while keeping the same districts
        // Each chart gets different values but same districts, sorted by value for that indicator
        function generateChartData(districts, chartIndex, variation = 20) {
            // Use a simple seed based on chart index and district name for consistency
            return districts.map((district, index) => {
                // Generate a pseudo-random value based on district name and chart index
                const seed = (district.charCodeAt(0) + chartIndex * 10 + index * 5) % 80;
                const value = Math.max(10, Math.min(90, 50 + seed + (Math.random() * variation - variation/2)));
                return {
                    district: district,
                    value: Math.round(value * 10) / 10 // Round to 1 decimal
                };
            }).sort((a, b) => b.value - a.value); // Sort by value descending
        }
        
        // Chart 1: Percentage of women receiving ODOP Margin Money loans
        initHorizontalBarChart('entrepreneurship-chart-1', 'Percentage of women receiving ODOP Margin Money loans', 
            generateChartData(selectedDistricts, 1, 25), '%');

        // Chart 2: Percentage of women receiving PMEGP Margin Money loans
        initHorizontalBarChart('entrepreneurship-chart-2', 'Percentage of women receiving PMEGP Margin Money loans', 
            generateChartData(selectedDistricts, 2, 25), '%');

        // Chart 3: Percentage of women among Udyam registered entrepreneurs
        initHorizontalBarChart('entrepreneurship-chart-3', 'Percentage of women among Udyam registered entrepreneurs', 
            generateChartData(selectedDistricts, 3, 25), '%');

        // Chart 4: Percentage of women receiving loans under MYSY
        initHorizontalBarChart('entrepreneurship-chart-4', 'Percentage of women receiving loans under MYSY', 
            generateChartData(selectedDistricts, 4, 25), '%');

        // Chart 5: Percentage of women trained under ODOP Toolkit
        initHorizontalBarChart('entrepreneurship-chart-5', 'Percentage of women trained under ODOP Toolkit', 
            generateChartData(selectedDistricts, 5, 25), '%');

        // Chart 6: Percentage of women trained under Vishwakarma Yojana
        initHorizontalBarChart('entrepreneurship-chart-6', 'Percentage of women trained under Vishwakarma Yojana', 
            generateChartData(selectedDistricts, 6, 25), '%');

        // Chart 7: Percentage of women led startups among StartInUP incubatees
        initHorizontalBarChart('entrepreneurship-chart-7', 'Percentage of women led startups among StartInUP incubatees', 
            generateChartData(selectedDistricts, 7, 25), '%');

        // Chart 8: Percentage of women availing StartInUP sustenance allowance
        initHorizontalBarChart('entrepreneurship-chart-8', 'Percentage of women availing StartInUP sustenance allowance', 
            generateChartData(selectedDistricts, 8, 25), '%');

        // Chart 9: Percentage of women availing StartInUP prototype grant
        initHorizontalBarChart('entrepreneurship-chart-9', 'Percentage of women availing StartInUP prototype grant', 
            generateChartData(selectedDistricts, 9, 25), '%');
    }

    // Initialize charts on page load
    initEntrepreneurshipCharts();

    // Re-initialize charts when filters change
    const yearFilter = document.getElementById('yearFilter');
    const districtTypeFilter = document.getElementById('districtTypeFilter');
    const resetFilter = document.getElementById('resetFilter');

    if (yearFilter) {
        yearFilter.addEventListener('change', function() {
            initEntrepreneurshipCharts();
        });
    }

    if (districtTypeFilter) {
        districtTypeFilter.addEventListener('change', function() {
            initEntrepreneurshipCharts();
        });
    }

    if (resetFilter) {
        resetFilter.addEventListener('click', function() {
            if (yearFilter) yearFilter.value = '2024';
            if (districtTypeFilter) districtTypeFilter.value = 'top10';
            initEntrepreneurshipCharts();
        });
    }
});
