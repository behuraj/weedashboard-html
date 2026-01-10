// Indicator Wise Page - Charts and Filter Functionality
(function() {
    'use strict';
    
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

    // All 49 indicators organized by category
    const indicatorsByCategory = {
        'wee-index': [
            'WEE Index'
        ],
        'entrepreneurship': [
            'Percentage of women receiving ODOP Margin Money loans',
            'Percentage of women receiving PMEGP Margin Money loans',
            'Percentage of women among Udyam registered entrepreneurs',
            'Percentage of women receiving loans under MYSY',
            'Percentage of women trained under ODOP Toolkit',
            'Percentage of women trained under Vishwakarma Yojana',
            'Percentage of women led startups among StartInUP incubatees',
            'Percentage of women availing StartInUP sustenance allowance',
            'Percentage of women availing StartInUP prototype grant'
        ],
        'employment': [
            'Percentage of women among selections via employment exchange Rozgaar Melas',
            'Percentage of women placed in ITI employment fairs',
            'Percentage of women among total DDUGKY placements',
            'Percentage of women among total SSDF placements',
            'Percentage of women enrolled under DDUGKY',
            'Percentage of women completing DDUGKY out of those enrolled',
            'Percentage of women enrolled in ITIs Government and Private',
            'Percentage of women completing ITI out of those enrolled',
            'Percentage of women enrolled under SSDF',
            'Percentage of women completing SSDF out of those enrolled',
            'Percentage of women enrolled under PMKVY',
            'Percentage of women completing PMKVY out of those enrolled',
            'Percentage of women among total polytechnic placements',
            'Percentage of women among total engineering placements',
            'Percentage of women enrolled in polytechnics',
            'Percentage of women completing polytechnics out of those enrolled',
            'Percentage of women among engineering college enrollees',
            'Percentage of women registered as Building and Other Construction Labourers',
            'Number of functional factory creches per lakh working women'
        ],
        'education-skilling': [
            'Percentage of girls enrolled in STEM Science in HSS',
            'Percentage of girls completing STEM Science in HSS',
            'Percentage of women enrolled in paramedical courses'
        ],
        'livelihood': [
            'Percentage of rural SHGs receiving CIF loans from CLFs',
            'Percentage of rural households mobilised into SHGs',
            'Percentage of rural SHGs availing bank loans',
            'Percentage of Community Sakhis achieved against target',
            'Percentage of SHGs receiving Revolving Fund',
            'Individual SEP loans to women per lakh eligible urban women',
            'Percentage of urban SHG loans given to women under SEP',
            'Percentage of women receiving second term PM SVANidhi loans',
            'Percentage of women receiving third term PM SVANidhi loans',
            'Percentage of women PM SVANidhi beneficiaries with digital activation',
            'Percentage of land holdings owned by women',
            'Number of PMJJBY enrolments per lakh eligible women',
            'Number of PMSBY enrolments per lakh eligible women'
        ],
        'mobility-safety': [
            'Percentage of women among total bus conductors',
            'Percentage of women among total bus drivers',
            'Number of women police per lakh female population',
            'Number of women Home Guards per lakh female population',
            'Number of female Prantiya Rakshaks per lakh female population'
        ]
    };

    // Get all indicators as a flat list
    function getAllIndicators() {
        let allIndicators = [];
        Object.values(indicatorsByCategory).forEach(categoryIndicators => {
            allIndicators = allIndicators.concat(categoryIndicators);
        });
        return allIndicators;
    }

    // Initialize indicator dropdown based on category
    function populateIndicators(category) {
        const indicatorFilter = document.getElementById('indicatorFilter');
        if (!indicatorFilter) return;

        indicatorFilter.innerHTML = '<option value="">Select Indicator</option>';
        
        const indicators = indicatorsByCategory[category] || [];
        indicators.forEach((indicator, index) => {
            const option = document.createElement('option');
            option.value = indicator.toLowerCase().replace(/\s+/g, '-');
            option.textContent = indicator;
            indicatorFilter.appendChild(option);
        });
    }

    // Get selected filters
    function getSelectedFilters() {
        const yearFilter = document.getElementById('yearFilter');
        const categoryFilter = document.getElementById('categoryFilter');
        const indicatorFilter = document.getElementById('indicatorFilter');

        return {
            year: yearFilter ? yearFilter.value : '2024',
            category: categoryFilter ? categoryFilter.value : 'wee-index',
            indicator: indicatorFilter ? indicatorFilter.value : ''
        };
    }

    // Initialize Gradient Circular Chart (Radial Bar Chart)
    function initGradientCircularChart(chartId, value, year, colors = ['#3577f1', '#0ab39c']) {
        const chartElement = document.getElementById(chartId);
        if (!chartElement) return;

        // Destroy existing chart instance if it exists
        if (chartInstances[chartId]) {
            chartInstances[chartId].destroy();
        }

        const chartConfig = {
            chart: {
                height: 330,
                type: 'radialBar',
                toolbar: {
                    show: false
                }
            },
            plotOptions: {
                radialBar: {
                    startAngle: -135,
                    endAngle: 225,
                    hollow: {
                        margin: 0,
                        size: '70%',
                        background: 'transparent',
                        position: 'front',
                        dropShadow: {
                            enabled: true,
                            top: 3,
                            left: 0,
                            blur: 4,
                            opacity: 0.24
                        }
                    },
                    track: {
                        background: "rgba(170,184,197, 0.2)",
                        strokeWidth: '67%',
                        margin: 0
                    },
                    dataLabels: {
                        showOn: 'always',
                        name: {
                            offsetY: -10,
                            show: true,
                            color: '#888',
                            fontSize: '17px'
                        },
                        value: {
                            formatter: function (val) {
                                return parseInt(val) + '%';
                            },
                            color: '#111',
                            fontSize: '36px',
                            fontWeight: 700,
                            show: true
                        }
                    }
                }
            },
            fill: {
                type: 'gradient',
                gradient: {
                    shade: 'dark',
                    type: 'horizontal',
                    shadeIntensity: 0.5,
                    gradientToColors: colors,
                    inverseColors: true,
                    opacityFrom: 1,
                    opacityTo: 1,
                    stops: [0, 100]
                }
            },
            series: [value],
            stroke: {
                lineCap: 'round'
            },
            labels: [year]
        };

        chartInstances[chartId] = new ApexCharts(chartElement, chartConfig);
        chartInstances[chartId].render();
    }

    // Generate district ranking data
    function generateDistrictRanking() {
        const districts = allDistricts.map(district => ({
            district: district,
            value: Math.floor(Math.random() * 100) + 1,
            change: (Math.random() > 0.5 ? 1 : -1) * (Math.random() * 10 + 1)
        }));

        // Sort by value descending
        districts.sort((a, b) => b.value - a.value);

        return {
            top10: districts.slice(0, 10),
            bottom10: districts.slice(-10).reverse()
        };
    }

    // Render district ranking list
    function renderDistrictList(containerId, districts, isTop) {
        const container = document.getElementById(containerId);
        if (!container) return;

        container.innerHTML = '';
        
        districts.forEach((item, index) => {
            const rank = index + 1;
            const isPositive = item.change > 0;
            const arrowIcon = isPositive ? 'ri-arrow-up-line' : 'ri-arrow-down-line';
            const arrowClass = isPositive ? 'arrow-up' : 'arrow-down';
            
            const districtItem = document.createElement('div');
            districtItem.className = 'district-rank-item';
            districtItem.innerHTML = `
                <div class="rank-number ${isTop ? 'rank-top' : 'rank-bottom'}">${rank}</div>
                <div class="rank-district-name">${item.district}</div>
                <div class="rank-value-wrapper">
                    <div class="rank-value">${item.value}</div>
                    <i class="${arrowIcon} ${arrowClass}"></i>
                </div>
            `;
            container.appendChild(districtItem);
        });
    }

    // Initialize pie charts
    function initPieCharts() {
        const filters = getSelectedFilters();
        const currentYear = parseInt(filters.year);
        const previousYear = currentYear - 1;
        
        // Generate random values for current and previous year (0-100%)
        const currentValue = Math.floor(Math.random() * 40) + 60; // 60-100%
        const previousValue = Math.floor(Math.random() * 40) + 60; // 60-100%

        initGradientCircularChart('pie-chart-current-year', currentValue, currentYear.toString(), ['#3577f1', '#0ab39c']);
        initGradientCircularChart('pie-chart-previous-year', previousValue, previousYear.toString(), ['#3577f1', '#0ab39c']);

        // Update chart titles dynamically
        const currentYearTitle = document.getElementById('current-year-title');
        const previousYearTitle = document.getElementById('previous-year-title');
        
        if (currentYearTitle) {
            currentYearTitle.textContent = `Current Year (${currentYear})`;
        }
        if (previousYearTitle) {
            previousYearTitle.textContent = `Previous Year (${previousYear})`;
        }
    }

    // Initialize district rankings
    function initDistrictRankings() {
        const rankingData = generateDistrictRanking();
        renderDistrictList('top-10-indicator', rankingData.top10, true);
        renderDistrictList('bottom-10-indicator', rankingData.bottom10, false);
    }

    // Initialize page
    function initPage() {
        // Set default category and populate indicators
        const categoryFilter = document.getElementById('categoryFilter');
        if (categoryFilter) {
            populateIndicators(categoryFilter.value);
        }

        // Initialize charts and rankings
        initPieCharts();
        initDistrictRankings();
    }

    // Category filter change handler
    const categoryFilter = document.getElementById('categoryFilter');
    if (categoryFilter) {
        categoryFilter.addEventListener('change', function() {
            populateIndicators(this.value);
            // Reset indicator filter when category changes
            const indicatorFilter = document.getElementById('indicatorFilter');
            if (indicatorFilter) {
                indicatorFilter.value = '';
            }
            initPieCharts();
            initDistrictRankings();
        });
    }

    // Year filter change handler
    const yearFilter = document.getElementById('yearFilter');
    if (yearFilter) {
        yearFilter.addEventListener('change', function() {
            initPieCharts();
            initDistrictRankings();
        });
    }

    // Indicator filter change handler
    const indicatorFilter = document.getElementById('indicatorFilter');
    if (indicatorFilter) {
        indicatorFilter.addEventListener('change', function() {
            initPieCharts();
            initDistrictRankings();
        });
    }

    // Reset filter handler
    const resetFilter = document.getElementById('resetFilter');
    if (resetFilter) {
        resetFilter.addEventListener('click', function() {
            if (yearFilter) yearFilter.value = '2024';
            if (categoryFilter) {
                categoryFilter.value = 'wee-index';
                populateIndicators('wee-index');
            }
            if (indicatorFilter) indicatorFilter.value = '';
            initPieCharts();
            initDistrictRankings();
        });
    }

    // Initialize on page load
    document.addEventListener('DOMContentLoaded', function() {
        initPage();
    });

    // Initialize on DOM ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initPage);
    } else {
        // DOM already loaded, initialize immediately
        setTimeout(initPage, 100);
    }
})();
