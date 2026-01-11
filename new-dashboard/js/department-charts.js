// Department Charts Initialization and Filtering
document.addEventListener('DOMContentLoaded', function() {
    let chartInstances = {}; // Store chart instances for updates
    const years = ['2020', '2021', '2022', '2023', '2024'];

    // Get selected filters
    function getSelectedFilters() {
        const yearFilter = document.getElementById('yearFilter');
        const departmentFilter = document.getElementById('departmentFilter');
        return {
            year: yearFilter ? yearFilter.value : '2024',
            department: departmentFilter ? departmentFilter.value : ''
        };
    }

    // Filter charts based on selected department
    function filterChartsByDepartment(selectedDepartment) {
        const allChartCards = document.querySelectorAll('.chart-card[data-department]');
        
        if (allChartCards.length === 0) {
            console.warn('No chart cards found with data-department attribute');
            return;
        }
        
        allChartCards.forEach(card => {
            const cardDepartment = card.getAttribute('data-department');
            
            if (!selectedDepartment || selectedDepartment === '' || selectedDepartment === cardDepartment) {
                card.style.display = '';
            } else {
                card.style.display = 'none';
            }
        });
    }

    // Initialize all charts
    function initAllCharts() {
        const filters = getSelectedFilters();
        const selectedYear = filters.year || '2024';

        // MSME & Export Promotion Charts (6 charts)
        initChart('chart-msme-1', 'line', 'Percentage', years, [30, 35, 40, 45, 50], '%');
        initChart('chart-msme-2', 'area', 'Percentage', years, [25, 30, 35, 40, 45], '%');
        initChart('chart-msme-3', 'line', 'Percentage', years, [35, 40, 45, 50, 55], '%');
        initChart('chart-msme-4', 'bar', 'Percentage', years, [20, 25, 30, 35, 40], '%');
        initChart('chart-msme-5', 'area', 'Percentage', years, [15, 20, 25, 30, 35], '%');
        initChart('chart-msme-6', 'line', 'Percentage', years, [10, 15, 20, 25, 30], '%');

        // Urban Development Charts (5 charts)
        initChart('chart-urban-1', 'bar', 'Loans per lakh', years, [200, 250, 300, 350, 400], ' loans');
        initChart('chart-urban-2', 'line', 'Percentage', years, [40, 45, 50, 55, 60], '%');
        initChart('chart-urban-3', 'area', 'Percentage', years, [25, 30, 35, 40, 45], '%');
        initChart('chart-urban-4', 'bar', 'Percentage', years, [20, 25, 30, 35, 40], '%');
        initChart('chart-urban-5', 'line', 'Percentage', years, [50, 55, 60, 65, 70], '%');

        // Vocational Education, Skill Development and Entrepreneurship Charts (12 charts)
        initChart('chart-vocational-1', 'bar', 'Percentage', years, [35, 40, 45, 50, 55], '%');
        initChart('chart-vocational-2', 'area', 'Percentage', years, [40, 45, 50, 55, 60], '%');
        initChart('chart-vocational-3', 'line', 'Percentage', years, [30, 35, 40, 45, 50], '%');
        initChart('chart-vocational-4', 'bar', 'Percentage', years, [25, 30, 35, 40, 45], '%');
        initChart('chart-vocational-5', 'area', 'Percentage', years, [45, 50, 55, 60, 65], '%');
        initChart('chart-vocational-6', 'line', 'Percentage', years, [50, 55, 60, 65, 70], '%');
        initChart('chart-vocational-7', 'bar', 'Percentage', years, [35, 40, 45, 50, 55], '%');
        initChart('chart-vocational-8', 'area', 'Percentage', years, [40, 45, 50, 55, 60], '%');
        initChart('chart-vocational-9', 'line', 'Percentage', years, [30, 35, 40, 45, 50], '%');
        initChart('chart-vocational-10', 'bar', 'Percentage', years, [55, 60, 65, 70, 75], '%');
        initChart('chart-vocational-11', 'area', 'Percentage', years, [40, 45, 50, 55, 60], '%');
        initChart('chart-vocational-12', 'line', 'Percentage', years, [45, 50, 55, 60, 65], '%');

        // IT & Electronics Charts (3 charts)
        // Chart 1: Radial Bar Chart
        const categories = ['2020', '2021', '2022', '2023', '2024'];
        const chartIt1Data = categories.map(() => Math.floor(Math.random() * 30) + 20);
        if (document.getElementById('chart-it-1')) {
            if (chartInstances['chart-it-1']) chartInstances['chart-it-1'].destroy();
            chartInstances['chart-it-1'] = new ApexCharts(document.querySelector("#chart-it-1"), {
                chart: { type: 'radialBar', height: 350, toolbar: { show: false } },
                plotOptions: {
                    radialBar: {
                        dataLabels: {
                            show: true,
                            name: { show: true, fontSize: '13px', fontWeight: 600, color: '#212529', offsetY: -5 },
                            value: { show: true, fontSize: '18px', fontWeight: 700, color: '#212529', offsetY: 10, formatter: function (val) { return val; } },
                            total: { show: true, label: 'Average', fontSize: '15px', fontWeight: 600, color: '#212529', formatter: function (w) { const avg = w.globals.seriesTotals.reduce((a, b) => a + b, 0) / w.globals.seriesTotals.length; return Math.round(avg); } }
                        },
                        track: { background: '#e7e7e7', strokeWidth: '97%', margin: 5 },
                        hollow: { margin: 0, size: '30%' }
                    }
                },
                series: chartIt1Data,
                labels: categories,
                colors: ['#f06548', '#ff7a5c', '#ff8f6e', '#ffa480', '#ffb992'],
                legend: { show: true, position: 'bottom', fontSize: '13px', fontWeight: 500, labels: { useSeriesColors: true }, markers: { size: 8, width: 8, height: 8 }, formatter: function(seriesName, opts) { return seriesName + ": " + opts.w.globals.series[opts.seriesIndex]; } },
                tooltip: { y: { formatter: function (val) { return val; } } }
            });
            chartInstances['chart-it-1'].render();
        }
        initChart('chart-it-2', 'area', 'Percentage', years, [18, 22, 26, 30, 34], '%');
        initChart('chart-it-3', 'bar', 'Percentage', years, [15, 20, 25, 30, 35], '%');

        // Rural Development Charts (5 charts)
        initChart('chart-rural-1', 'line', 'Percentage', years, [40, 45, 50, 55, 60], '%');
        initChart('chart-rural-2', 'area', 'Percentage', years, [50, 55, 60, 65, 70], '%');
        initChart('chart-rural-3', 'bar', 'Percentage', years, [45, 50, 55, 60, 65], '%');
        initChart('chart-rural-4', 'line', 'Percentage', years, [60, 65, 70, 75, 80], '%');
        initChart('chart-rural-5', 'area', 'Percentage', years, [55, 60, 65, 70, 75], '%');

        // Technical Education Charts (5 charts)
        initChart('chart-technical-1', 'bar', 'Percentage', years, [25, 30, 35, 40, 45], '%');
        initChart('chart-technical-2', 'line', 'Percentage', years, [20, 25, 30, 35, 40], '%');
        initChart('chart-technical-3', 'area', 'Percentage', years, [30, 35, 40, 45, 50], '%');
        initChart('chart-technical-4', 'bar', 'Percentage', years, [35, 40, 45, 50, 55], '%');
        initChart('chart-technical-5', 'line', 'Percentage', years, [25, 30, 35, 40, 45], '%');

        // Secondary Education Charts (2 charts)
        initChart('chart-secondary-1', 'area', 'Percentage', years, [40, 45, 50, 55, 60], '%');
        initChart('chart-secondary-2', 'bar', 'Percentage', years, [45, 50, 55, 60, 65], '%');

        // Medical Education Charts (1 chart)
        initChart('chart-medical-1', 'line', 'Percentage', years, [35, 40, 45, 50, 55], '%');

        // Transport Charts (2 charts)
        initChart('chart-transport-1', 'bar', 'Percentage', years, [5, 8, 12, 15, 18], '%');
        initChart('chart-transport-2', 'line', 'Percentage', years, [2, 4, 6, 8, 10], '%');

        // Home Charts (1 chart)
        initChart('chart-home-1', 'area', 'Number per lakh', years, [15, 18, 20, 22, 25], '', false);

        // Home Guard Charts (1 chart)
        initChart('chart-homeguard-1', 'line', 'Number per lakh', years, [10, 12, 14, 16, 18], '', false);

        // Revenue Charts (1 chart)
        initChart('chart-revenue-1', 'bar', 'Percentage', years, [12, 14, 16, 18, 20], '%');

        // Finance Charts (2 charts)
        initChart('chart-finance-1', 'area', 'Number per lakh', years, [5000, 5500, 6000, 6500, 7000], '', false);
        initChart('chart-finance-2', 'line', 'Number per lakh', years, [3000, 3500, 4000, 4500, 5000], '', false);

        // Youth Welfare Charts (1 chart)
        initChart('chart-youth-1', 'bar', 'Number per lakh', years, [8, 10, 12, 14, 16], '', false);

        // Labour Charts (2 charts)
        initChart('chart-labour-1', 'line', 'Percentage', years, [10, 12, 14, 16, 18], '%');
        initChart('chart-labour-2', 'area', 'Number per lakh', years, [5, 6, 7, 8, 9], '', false);
    }

    // Helper function to initialize a chart
    function initChart(chartId, chartType, seriesName, categories, data, suffix, isPercentage = true) {
        if (!document.getElementById(chartId)) return;

        const chartElement = document.querySelector("#" + chartId);
        if (!chartElement) return;

        // Destroy existing chart if it exists
        if (chartInstances[chartId]) {
            chartInstances[chartId].destroy();
        }

        const chartConfig = {
            chart: {
                type: chartType,
                height: chartType === 'radialBar' ? 350 : 300,
                toolbar: { show: false }
            },
            series: [{ name: seriesName, data: data }],
            xaxis: { categories: categories, title: { text: 'Year' } },
            colors: ['#333894'],
            tooltip: {
                y: {
                    formatter: function (val) {
                        return val;
                    }
                }
            }
        };

        if (chartType === 'bar') {
            chartConfig.plotOptions = {
                bar: {
                    horizontal: false,
                    borderRadius: 4,
                    dataLabels: { position: 'top' }
                }
            };
            chartConfig.dataLabels = {
                enabled: true,
                formatter: function (val) {
                    return val;
                }
            };
        } else if (chartType === 'area' || chartType === 'line') {
            chartConfig.dataLabels = {
                enabled: true,
                formatter: function (val) {
                    return val;
                }
            };
        }

        if (isPercentage && chartType !== 'radialBar') {
            chartConfig.yaxis = { title: { text: seriesName }, max: chartId.includes('home') || chartId.includes('homeguard') || chartId.includes('finance') || chartId.includes('youth') || chartId.includes('labour-2') ? undefined : 100 };
        } else {
            chartConfig.yaxis = { title: { text: seriesName } };
        }

        chartInstances[chartId] = new ApexCharts(chartElement, chartConfig);
        chartInstances[chartId].render();
    }

    // Listen for filter changes
    document.addEventListener('filtersChanged', function(event) {
        const { year, department } = event.detail;
        filterChartsByDepartment(department);
        // Re-initialize charts with new year data if needed
        // For now, we'll just filter visibility
    });

    // Initialize on page load
    initAllCharts();
    
    // Apply initial filter (show all charts by default) after charts are initialized
    setTimeout(function() {
        const filters = getSelectedFilters();
        filterChartsByDepartment(filters.department);
    }, 200);
});
