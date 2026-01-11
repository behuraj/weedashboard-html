// Charts Initialization for District Page
document.addEventListener('DOMContentLoaded', function() {
    let chartInstances = {}; // Store chart instances for updates
    
    // Section Tab Switching
    const sectionTabButtons = document.querySelectorAll('.section-tab-btn');
    const sectionContents = document.querySelectorAll('.section-content');

    sectionTabButtons.forEach(button => {
        button.addEventListener('click', function() {
            const targetSection = this.getAttribute('data-section');

            // Remove active class from all buttons and contents
            sectionTabButtons.forEach(btn => btn.classList.remove('active'));
            sectionContents.forEach(content => content.classList.remove('active'));

            // Add active class to clicked button and corresponding content
            this.classList.add('active');
            const targetContent = document.getElementById('section-' + targetSection);
            if (targetContent) {
                targetContent.classList.add('active');
                
                // Initialize charts for the active section
                if (targetSection === 'entrepreneurship') {
                    initEntrepreneurshipCharts();
                } else if (targetSection === 'employment') {
                    initEmploymentCharts();
                } else if (targetSection === 'education') {
                    initEducationCharts();
                } else if (targetSection === 'livelihood') {
                    initLivelihoodCharts();
                } else if (targetSection === 'mobility') {
                    initMobilityCharts();
                }
            }
        });
    });

    // Get selected district and year from filters
    function getSelectedFilters() {
        const yearFilter = document.getElementById('yearFilter');
        const districtFilter = document.getElementById('districtFilter');
        return {
            year: yearFilter ? yearFilter.value : '2024',
            district: districtFilter ? districtFilter.value : ''
        };
    }

    // Initialize Entrepreneurship Charts (9 charts) - Single District View
    function initEntrepreneurshipCharts() {
        const filters = getSelectedFilters();
        const selectedDistrict = filters.district || 'All Districts';
        const selectedYear = filters.year || '2024';
        
        // Time series data (last 5 years)
        const years = ['2020', '2021', '2022', '2023', '2024'];
        
        // Chart 1: Percentage of rural SHGs receiving CIF loans from CLFs - Trend over years
        if (document.getElementById('chart1')) {
            const chart1Data = years.map(() => Math.floor(Math.random() * 30) + 40);
            if (chartInstances.chart1) chartInstances.chart1.destroy();
            chartInstances.chart1 = new ApexCharts(document.querySelector("#chart1"), {
                chart: {
                    type: 'line',
                    height: 300,
                    toolbar: { show: false }
                },
                series: [{
                    name: 'Percentage',
                    data: chart1Data
                }],
                dataLabels: {
                    enabled: true,
                    formatter: function (val) { return val; }
                },
                xaxis: {
                    categories: years,
                    title: { text: 'Year' }
                },
                yaxis: {
                    title: { text: "Percentage" },
                    max: 100
                },
                colors: ['#333894'],
                tooltip: {
                    y: { formatter: function (val) { return val; } }
                },
                title: {
                    text: selectedDistrict,
                    align: 'left',
                    style: { fontSize: '14px', fontWeight: 600 }
                }
            });
            chartInstances.chart1.render();
        }

        // Chart 2: Percentage of women receiving ODOP Margin Money loans - Trend over years
        if (document.getElementById('chart2')) {
            const chart2Data = years.map(() => Math.floor(Math.random() * 25) + 30);
            if (chartInstances.chart2) chartInstances.chart2.destroy();
            chartInstances.chart2 = new ApexCharts(document.querySelector("#chart2"), {
                chart: { type: 'area', height: 300, toolbar: { show: false } },
                series: [{
                    name: 'Percentage',
                    data: chart2Data
                }],
                xaxis: { categories: years, title: { text: 'Year' } },
                yaxis: { title: { text: "Percentage" }, max: 100 },
                colors: ['#0ab39c'],
                dataLabels: { enabled: true, formatter: function (val) { return val; } },
                tooltip: { y: { formatter: function (val) { return val; } } },
                title: {
                    text: selectedDistrict,
                    align: 'left',
                    style: { fontSize: '14px', fontWeight: 600 }
                }
            });
            chartInstances.chart2.render();
        }

        // Chart 3: Percentage of women receiving PMEGP Margin Money loans - Trend over years
        if (document.getElementById('chart3')) {
            const chart3Data = years.map(() => Math.floor(Math.random() * 35) + 25);
            if (chartInstances.chart3) chartInstances.chart3.destroy();
            chartInstances.chart3 = new ApexCharts(document.querySelector("#chart3"), {
                chart: { type: 'line', height: 300, toolbar: { show: false } },
                series: [{
                    name: 'Percentage',
                    data: chart3Data
                }],
                xaxis: { categories: years, title: { text: 'Year' } },
                yaxis: { title: { text: "Percentage" }, max: 100 },
                colors: ['#39afd1'],
                dataLabels: { enabled: true, formatter: function (val) { return val; } },
                tooltip: { y: { formatter: function (val) { return val; } } },
                title: {
                    text: selectedDistrict,
                    align: 'left',
                    style: { fontSize: '14px', fontWeight: 600 }
                }
            });
            chartInstances.chart3.render();
        }

        // Chart 4: Percentage of women led startups among StartInUP incubatees - Multiple Radial Bars
        if (document.getElementById('chart4')) {
            // Generate data for multiple categories or years as radial bars
            const categories = ['2020', '2021', '2022', '2023', '2024'];
            const chart4Data = categories.map(() => Math.floor(Math.random() * 30) + 20);
            
            if (chartInstances.chart4) chartInstances.chart4.destroy();
            
            // Create chart with proper label configuration
            const chart4Options = {
                chart: {
                    type: 'radialBar',
                    height: 350,
                    toolbar: { show: false }
                },
                plotOptions: {
                    radialBar: {
                        dataLabels: {
                            show: true,
                            name: {
                                show: true,
                                fontSize: '13px',
                                fontWeight: 600,
                                color: '#212529',
                                offsetY: -5
                            },
                            value: {
                                show: true,
                                fontSize: '18px',
                                fontWeight: 700,
                                color: '#212529',
                                offsetY: 10,
                                formatter: function (val) {
                                    return val;
                                }
                            },
                            total: {
                                show: true,
                                label: 'Average',
                                fontSize: '15px',
                                fontWeight: 600,
                                color: '#212529',
                                formatter: function (w) {
                                    const avg = w.globals.seriesTotals.reduce((a, b) => a + b, 0) / w.globals.seriesTotals.length;
                                    return Math.round(avg);
                                }
                            }
                        },
                        track: {
                            background: '#e7e7e7',
                            strokeWidth: '97%',
                            margin: 5
                        },
                        hollow: {
                            margin: 0,
                            size: '30%'
                        }
                    }
                },
                series: chart4Data,
                labels: categories,
                colors: ['#f06548', '#ff7a5c', '#ff8f6e', '#ffa480', '#ffb992'],
                legend: {
                    show: true,
                    position: 'bottom',
                    fontSize: '13px',
                    fontWeight: 500,
                    labels: {
                        useSeriesColors: true
                    },
                    markers: {
                        size: 8,
                        width: 8,
                        height: 8
                    },
                    formatter: function(seriesName, opts) {
                        return seriesName + ": " + opts.w.globals.series[opts.seriesIndex];
                    }
                },
                tooltip: {
                    y: {
                        formatter: function (val) {
                            return val;
                        }
                    }
                }
            };
            
            chartInstances.chart4 = new ApexCharts(document.querySelector("#chart4"), chart4Options);
            chartInstances.chart4.render();
        }

        // Chart 5: Percentage of women availing StartInUP sustenance allowance - Trend over years
        if (document.getElementById('chart5')) {
            const chart5Data = years.map(() => Math.floor(Math.random() * 30) + 20);
            if (chartInstances.chart5) chartInstances.chart5.destroy();
            chartInstances.chart5 = new ApexCharts(document.querySelector("#chart5"), {
                chart: { type: 'area', height: 300, toolbar: { show: false } },
                series: [{
                    name: 'Percentage',
                    data: chart5Data
                }],
                xaxis: { categories: years, title: { text: 'Year' } },
                yaxis: { title: { text: "Percentage" }, max: 100 },
                colors: ['#333894'],
                dataLabels: { enabled: true, formatter: function (val) { return val; } },
                tooltip: { y: { formatter: function (val) { return val; } } },
                title: {
                    text: selectedDistrict,
                    align: 'left',
                    style: { fontSize: '14px', fontWeight: 600 }
                }
            });
            chartInstances.chart5.render();
        }

        // Chart 6: Percentage of women availing StartInUP prototype grant - Trend over years
        if (document.getElementById('chart6')) {
            const chart6Data = years.map(() => Math.floor(Math.random() * 25) + 18);
            if (chartInstances.chart6) chartInstances.chart6.destroy();
            chartInstances.chart6 = new ApexCharts(document.querySelector("#chart6"), {
                chart: { type: 'bar', height: 300, toolbar: { show: false } },
                plotOptions: {
                    bar: { horizontal: false, borderRadius: 4, dataLabels: { position: 'top' } }
                },
                series: [{
                    name: 'Percentage',
                    data: chart6Data
                }],
                dataLabels: { enabled: true, formatter: function (val) { return val; } },
                xaxis: { categories: years, title: { text: 'Year' } },
                yaxis: { title: { text: "Percentage" }, max: 100 },
                colors: ['#0ab39c'],
                tooltip: { y: { formatter: function (val) { return val; } } },
                title: {
                    text: selectedDistrict,
                    align: 'left',
                    style: { fontSize: '14px', fontWeight: 600 }
                }
            });
            chartInstances.chart6.render();
        }

        // Chart 7: Percentage of women among Udyam registered entrepreneurs - Trend over years
        if (document.getElementById('chart7')) {
            const chart7Data = years.map(() => Math.floor(Math.random() * 40) + 30);
            if (chartInstances.chart7) chartInstances.chart7.destroy();
            chartInstances.chart7 = new ApexCharts(document.querySelector("#chart7"), {
                chart: { type: 'line', height: 300, toolbar: { show: false } },
                series: [{
                    name: 'Percentage',
                    data: chart7Data
                }],
                xaxis: { categories: years, title: { text: 'Year' } },
                yaxis: { title: { text: "Percentage" }, max: 100 },
                colors: ['#39afd1'],
                dataLabels: { enabled: true, formatter: function (val) { return val; } },
                tooltip: { y: { formatter: function (val) { return val; } } },
                title: {
                    text: selectedDistrict,
                    align: 'left',
                    style: { fontSize: '14px', fontWeight: 600 }
                }
            });
            chartInstances.chart7.render();
        }

        // Chart 8: Individual SEP loans to women per lakh eligible urban women - Trend over years
        if (document.getElementById('chart8')) {
            const chart8Data = years.map(() => Math.floor(Math.random() * 300) + 200);
            if (chartInstances.chart8) chartInstances.chart8.destroy();
            chartInstances.chart8 = new ApexCharts(document.querySelector("#chart8"), {
                chart: { type: 'bar', height: 300, toolbar: { show: false } },
                plotOptions: {
                    bar: { horizontal: false, borderRadius: 4, dataLabels: { position: 'top' } }
                },
                series: [{
                    name: 'Loans per lakh women',
                    data: chart8Data
                }],
                dataLabels: { enabled: true },
                xaxis: { categories: years, title: { text: 'Year' } },
                yaxis: { title: { text: "Loans per lakh women" } },
                colors: ['#f06548'],
                tooltip: { y: { formatter: function (val) { return val + " loans"; } } },
                title: {
                    text: selectedDistrict,
                    align: 'left',
                    style: { fontSize: '14px', fontWeight: 600 }
                }
            });
            chartInstances.chart8.render();
        }

        // Chart 9: Percentage of urban SHG loans given to women under SEP - Trend over years
        if (document.getElementById('chart9')) {
            const chart9Data = years.map(() => Math.floor(Math.random() * 35) + 40);
            if (chartInstances.chart9) chartInstances.chart9.destroy();
            chartInstances.chart9 = new ApexCharts(document.querySelector("#chart9"), {
                chart: { type: 'area', height: 300, toolbar: { show: false } },
                series: [{
                    name: 'Percentage',
                    data: chart9Data
                }],
                xaxis: { categories: years, title: { text: 'Year' } },
                yaxis: { title: { text: "Percentage" }, max: 100 },
                colors: ['#333894'],
                dataLabels: { enabled: true, formatter: function (val) { return val; } },
                tooltip: { y: { formatter: function (val) { return val; } } },
                title: {
                    text: selectedDistrict,
                    align: 'left',
                    style: { fontSize: '14px', fontWeight: 600 }
                }
            });
            chartInstances.chart9.render();
        }
    }

    // Initialize Employment Charts (7 charts) - Single District View
    function initEmploymentCharts() {
        const filters = getSelectedFilters();
        const selectedDistrict = filters.district || 'All Districts';
        const selectedYear = filters.year || '2024';
        
        // Time series data (last 5 years)
        const years = ['2020', '2021', '2022', '2023', '2024'];

        // Chart 1: Percentage of women among total DDUGKY placements
        if (document.getElementById('chart-employment-1')) {
            const chart1Data = years.map(() => Math.floor(Math.random() * 40) + 30);
            if (chartInstances['chart-employment-1']) chartInstances['chart-employment-1'].destroy();
            chartInstances['chart-employment-1'] = new ApexCharts(document.querySelector("#chart-employment-1"), {
                chart: { type: 'line', height: 300, toolbar: { show: false } },
                series: [{ name: 'Percentage', data: chart1Data }],
                xaxis: { categories: years, title: { text: 'Year' } },
                yaxis: { title: { text: "Percentage" }, max: 100 },
                colors: ['#333894'],
                dataLabels: { enabled: true, formatter: function (val) { return val; } },
                tooltip: { y: { formatter: function (val) { return val; } } },
                title: { text: selectedDistrict, align: 'left', style: { fontSize: '14px', fontWeight: 600 } }
            });
            chartInstances['chart-employment-1'].render();
        }

        // Chart 2: Percentage of women among total polytechnic placements
        if (document.getElementById('chart-employment-2')) {
            const chart2Data = years.map(() => Math.floor(Math.random() * 35) + 25);
            if (chartInstances['chart-employment-2']) chartInstances['chart-employment-2'].destroy();
            chartInstances['chart-employment-2'] = new ApexCharts(document.querySelector("#chart-employment-2"), {
                chart: { type: 'area', height: 300, toolbar: { show: false } },
                series: [{ name: 'Percentage', data: chart2Data }],
                xaxis: { categories: years, title: { text: 'Year' } },
                yaxis: { title: { text: "Percentage" }, max: 100 },
                colors: ['#0ab39c'],
                dataLabels: { enabled: true, formatter: function (val) { return val; } },
                tooltip: { y: { formatter: function (val) { return val; } } },
                title: { text: selectedDistrict, align: 'left', style: { fontSize: '14px', fontWeight: 600 } }
            });
            chartInstances['chart-employment-2'].render();
        }

        // Chart 3: Percentage of women among total engineering placements
        if (document.getElementById('chart-employment-3')) {
            const chart3Data = years.map(() => Math.floor(Math.random() * 30) + 20);
            if (chartInstances['chart-employment-3']) chartInstances['chart-employment-3'].destroy();
            chartInstances['chart-employment-3'] = new ApexCharts(document.querySelector("#chart-employment-3"), {
                chart: { type: 'bar', height: 300, toolbar: { show: false } },
                plotOptions: { bar: { horizontal: false, borderRadius: 4, dataLabels: { position: 'top' } } },
                series: [{ name: 'Percentage', data: chart3Data }],
                dataLabels: { enabled: true, formatter: function (val) { return val; } },
                xaxis: { categories: years, title: { text: 'Year' } },
                yaxis: { title: { text: "Percentage" }, max: 100 },
                colors: ['#39afd1'],
                tooltip: { y: { formatter: function (val) { return val; } } },
                title: { text: selectedDistrict, align: 'left', style: { fontSize: '14px', fontWeight: 600 } }
            });
            chartInstances['chart-employment-3'].render();
        }

        // Chart 4: Percentage of women among selections via employment exchange Rozgaar Melas
        if (document.getElementById('chart-employment-4')) {
            const chart4Data = years.map(() => Math.floor(Math.random() * 45) + 35);
            if (chartInstances['chart-employment-4']) chartInstances['chart-employment-4'].destroy();
            chartInstances['chart-employment-4'] = new ApexCharts(document.querySelector("#chart-employment-4"), {
                chart: { type: 'line', height: 300, toolbar: { show: false } },
                series: [{ name: 'Percentage', data: chart4Data }],
                xaxis: { categories: years, title: { text: 'Year' } },
                yaxis: { title: { text: "Percentage" }, max: 100 },
                colors: ['#f06548'],
                dataLabels: { enabled: true, formatter: function (val) { return val; } },
                tooltip: { y: { formatter: function (val) { return val; } } },
                title: { text: selectedDistrict, align: 'left', style: { fontSize: '14px', fontWeight: 600 } }
            });
            chartInstances['chart-employment-4'].render();
        }

        // Chart 5: Percentage of women placed in ITI employment fairs
        if (document.getElementById('chart-employment-5')) {
            const chart5Data = years.map(() => Math.floor(Math.random() * 40) + 30);
            if (chartInstances['chart-employment-5']) chartInstances['chart-employment-5'].destroy();
            chartInstances['chart-employment-5'] = new ApexCharts(document.querySelector("#chart-employment-5"), {
                chart: { type: 'area', height: 300, toolbar: { show: false } },
                series: [{ name: 'Percentage', data: chart5Data }],
                xaxis: { categories: years, title: { text: 'Year' } },
                yaxis: { title: { text: "Percentage" }, max: 100 },
                colors: ['#333894'],
                dataLabels: { enabled: true, formatter: function (val) { return val; } },
                tooltip: { y: { formatter: function (val) { return val; } } },
                title: { text: selectedDistrict, align: 'left', style: { fontSize: '14px', fontWeight: 600 } }
            });
            chartInstances['chart-employment-5'].render();
        }

        // Chart 6: Percentage of women registered as Building and Other Construction Labourers
        if (document.getElementById('chart-employment-6')) {
            const chart6Data = years.map(() => Math.floor(Math.random() * 25) + 15);
            if (chartInstances['chart-employment-6']) chartInstances['chart-employment-6'].destroy();
            chartInstances['chart-employment-6'] = new ApexCharts(document.querySelector("#chart-employment-6"), {
                chart: { type: 'bar', height: 300, toolbar: { show: false } },
                plotOptions: { bar: { horizontal: false, borderRadius: 4, dataLabels: { position: 'top' } } },
                series: [{ name: 'Percentage', data: chart6Data }],
                dataLabels: { enabled: true, formatter: function (val) { return val; } },
                xaxis: { categories: years, title: { text: 'Year' } },
                yaxis: { title: { text: "Percentage" }, max: 100 },
                colors: ['#0ab39c'],
                tooltip: { y: { formatter: function (val) { return val; } } },
                title: { text: selectedDistrict, align: 'left', style: { fontSize: '14px', fontWeight: 600 } }
            });
            chartInstances['chart-employment-6'].render();
        }

        // Chart 7: Percentage of women among total SSDF placements
        if (document.getElementById('chart-employment-7')) {
            const chart7Data = years.map(() => Math.floor(Math.random() * 35) + 25);
            if (chartInstances['chart-employment-7']) chartInstances['chart-employment-7'].destroy();
            chartInstances['chart-employment-7'] = new ApexCharts(document.querySelector("#chart-employment-7"), {
                chart: { type: 'line', height: 300, toolbar: { show: false } },
                series: [{ name: 'Percentage', data: chart7Data }],
                xaxis: { categories: years, title: { text: 'Year' } },
                yaxis: { title: { text: "Percentage" }, max: 100 },
                colors: ['#39afd1'],
                dataLabels: { enabled: true, formatter: function (val) { return val; } },
                tooltip: { y: { formatter: function (val) { return val; } } },
                title: { text: selectedDistrict, align: 'left', style: { fontSize: '14px', fontWeight: 600 } }
            });
            chartInstances['chart-employment-7'].render();
        }
    }

    // Initialize Education Charts (14 charts) - Single District View
    function initEducationCharts() {
        const filters = getSelectedFilters();
        const selectedDistrict = filters.district || 'All Districts';
        const selectedYear = filters.year || '2024';
        
        // Time series data (last 5 years)
        const years = ['2020', '2021', '2022', '2023', '2024'];

        // Chart 1: Percentage of women enrolled under DDUGKY
        if (document.getElementById('chart-education-1')) {
            const chart1Data = years.map(() => Math.floor(Math.random() * 40) + 30);
            if (chartInstances['chart-education-1']) chartInstances['chart-education-1'].destroy();
            chartInstances['chart-education-1'] = new ApexCharts(document.querySelector("#chart-education-1"), {
                chart: { type: 'line', height: 300, toolbar: { show: false } },
                series: [{ name: 'Percentage', data: chart1Data }],
                xaxis: { categories: years, title: { text: 'Year' } },
                yaxis: { title: { text: "Percentage" }, max: 100 },
                colors: ['#333894'],
                dataLabels: { enabled: true, formatter: function (val) { return val; } },
                tooltip: { y: { formatter: function (val) { return val; } } },
                title: { text: selectedDistrict, align: 'left', style: { fontSize: '14px', fontWeight: 600 } }
            });
            chartInstances['chart-education-1'].render();
        }

        // Chart 2: Percentage of women completing DDUGKY out of those enrolled
        if (document.getElementById('chart-education-2')) {
            const chart2Data = years.map(() => Math.floor(Math.random() * 30) + 60);
            if (chartInstances['chart-education-2']) chartInstances['chart-education-2'].destroy();
            chartInstances['chart-education-2'] = new ApexCharts(document.querySelector("#chart-education-2"), {
                chart: { type: 'area', height: 300, toolbar: { show: false } },
                series: [{ name: 'Percentage', data: chart2Data }],
                xaxis: { categories: years, title: { text: 'Year' } },
                yaxis: { title: { text: "Percentage" }, max: 100 },
                colors: ['#0ab39c'],
                dataLabels: { enabled: true, formatter: function (val) { return val; } },
                tooltip: { y: { formatter: function (val) { return val; } } },
                title: { text: selectedDistrict, align: 'left', style: { fontSize: '14px', fontWeight: 600 } }
            });
            chartInstances['chart-education-2'].render();
        }

        // Chart 3: Percentage of women enrolled in ITIs Government and Private
        if (document.getElementById('chart-education-3')) {
            const chart3Data = years.map(() => Math.floor(Math.random() * 35) + 25);
            if (chartInstances['chart-education-3']) chartInstances['chart-education-3'].destroy();
            chartInstances['chart-education-3'] = new ApexCharts(document.querySelector("#chart-education-3"), {
                chart: { type: 'bar', height: 300, toolbar: { show: false } },
                plotOptions: { bar: { horizontal: false, borderRadius: 4, dataLabels: { position: 'top' } } },
                series: [{ name: 'Percentage', data: chart3Data }],
                dataLabels: { enabled: true, formatter: function (val) { return val; } },
                xaxis: { categories: years, title: { text: 'Year' } },
                yaxis: { title: { text: "Percentage" }, max: 100 },
                colors: ['#39afd1'],
                tooltip: { y: { formatter: function (val) { return val; } } },
                title: { text: selectedDistrict, align: 'left', style: { fontSize: '14px', fontWeight: 600 } }
            });
            chartInstances['chart-education-3'].render();
        }

        // Chart 4: Percentage of women completing ITI out of those enrolled
        if (document.getElementById('chart-education-4')) {
            const chart4Data = years.map(() => Math.floor(Math.random() * 25) + 65);
            if (chartInstances['chart-education-4']) chartInstances['chart-education-4'].destroy();
            chartInstances['chart-education-4'] = new ApexCharts(document.querySelector("#chart-education-4"), {
                chart: { type: 'line', height: 300, toolbar: { show: false } },
                series: [{ name: 'Percentage', data: chart4Data }],
                xaxis: { categories: years, title: { text: 'Year' } },
                yaxis: { title: { text: "Percentage" }, max: 100 },
                colors: ['#f06548'],
                dataLabels: { enabled: true, formatter: function (val) { return val; } },
                tooltip: { y: { formatter: function (val) { return val; } } },
                title: { text: selectedDistrict, align: 'left', style: { fontSize: '14px', fontWeight: 600 } }
            });
            chartInstances['chart-education-4'].render();
        }

        // Chart 5: Percentage of women enrolled in paramedical courses
        if (document.getElementById('chart-education-5')) {
            const chart5Data = years.map(() => Math.floor(Math.random() * 30) + 40);
            if (chartInstances['chart-education-5']) chartInstances['chart-education-5'].destroy();
            chartInstances['chart-education-5'] = new ApexCharts(document.querySelector("#chart-education-5"), {
                chart: { type: 'area', height: 300, toolbar: { show: false } },
                series: [{ name: 'Percentage', data: chart5Data }],
                xaxis: { categories: years, title: { text: 'Year' } },
                yaxis: { title: { text: "Percentage" }, max: 100 },
                colors: ['#333894'],
                dataLabels: { enabled: true, formatter: function (val) { return val; } },
                tooltip: { y: { formatter: function (val) { return val; } } },
                title: { text: selectedDistrict, align: 'left', style: { fontSize: '14px', fontWeight: 600 } }
            });
            chartInstances['chart-education-5'].render();
        }

        // Chart 6: Percentage of women enrolled in polytechnics
        if (document.getElementById('chart-education-6')) {
            const chart6Data = years.map(() => Math.floor(Math.random() * 25) + 20);
            if (chartInstances['chart-education-6']) chartInstances['chart-education-6'].destroy();
            chartInstances['chart-education-6'] = new ApexCharts(document.querySelector("#chart-education-6"), {
                chart: { type: 'bar', height: 300, toolbar: { show: false } },
                plotOptions: { bar: { horizontal: false, borderRadius: 4, dataLabels: { position: 'top' } } },
                series: [{ name: 'Percentage', data: chart6Data }],
                dataLabels: { enabled: true, formatter: function (val) { return val; } },
                xaxis: { categories: years, title: { text: 'Year' } },
                yaxis: { title: { text: "Percentage" }, max: 100 },
                colors: ['#0ab39c'],
                tooltip: { y: { formatter: function (val) { return val; } } },
                title: { text: selectedDistrict, align: 'left', style: { fontSize: '14px', fontWeight: 600 } }
            });
            chartInstances['chart-education-6'].render();
        }

        // Chart 7: Percentage of women completing polytechnics out of those enrolled
        if (document.getElementById('chart-education-7')) {
            const chart7Data = years.map(() => Math.floor(Math.random() * 20) + 70);
            if (chartInstances['chart-education-7']) chartInstances['chart-education-7'].destroy();
            chartInstances['chart-education-7'] = new ApexCharts(document.querySelector("#chart-education-7"), {
                chart: { type: 'line', height: 300, toolbar: { show: false } },
                series: [{ name: 'Percentage', data: chart7Data }],
                xaxis: { categories: years, title: { text: 'Year' } },
                yaxis: { title: { text: "Percentage" }, max: 100 },
                colors: ['#39afd1'],
                dataLabels: { enabled: true, formatter: function (val) { return val; } },
                tooltip: { y: { formatter: function (val) { return val; } } },
                title: { text: selectedDistrict, align: 'left', style: { fontSize: '14px', fontWeight: 600 } }
            });
            chartInstances['chart-education-7'].render();
        }

        // Chart 8: Percentage of women enrolled under SSDF
        if (document.getElementById('chart-education-8')) {
            const chart8Data = years.map(() => Math.floor(Math.random() * 35) + 30);
            if (chartInstances['chart-education-8']) chartInstances['chart-education-8'].destroy();
            chartInstances['chart-education-8'] = new ApexCharts(document.querySelector("#chart-education-8"), {
                chart: { type: 'area', height: 300, toolbar: { show: false } },
                series: [{ name: 'Percentage', data: chart8Data }],
                xaxis: { categories: years, title: { text: 'Year' } },
                yaxis: { title: { text: "Percentage" }, max: 100 },
                colors: ['#f06548'],
                dataLabels: { enabled: true, formatter: function (val) { return val; } },
                tooltip: { y: { formatter: function (val) { return val; } } },
                title: { text: selectedDistrict, align: 'left', style: { fontSize: '14px', fontWeight: 600 } }
            });
            chartInstances['chart-education-8'].render();
        }

        // Chart 9: Percentage of women completing SSDF out of those enrolled
        if (document.getElementById('chart-education-9')) {
            const chart9Data = years.map(() => Math.floor(Math.random() * 25) + 65);
            if (chartInstances['chart-education-9']) chartInstances['chart-education-9'].destroy();
            chartInstances['chart-education-9'] = new ApexCharts(document.querySelector("#chart-education-9"), {
                chart: { type: 'line', height: 300, toolbar: { show: false } },
                series: [{ name: 'Percentage', data: chart9Data }],
                xaxis: { categories: years, title: { text: 'Year' } },
                yaxis: { title: { text: "Percentage" }, max: 100 },
                colors: ['#333894'],
                dataLabels: { enabled: true, formatter: function (val) { return val; } },
                tooltip: { y: { formatter: function (val) { return val; } } },
                title: { text: selectedDistrict, align: 'left', style: { fontSize: '14px', fontWeight: 600 } }
            });
            chartInstances['chart-education-9'].render();
        }

        // Chart 10: Percentage of girls enrolled in STEM Science in HSS
        if (document.getElementById('chart-education-10')) {
            const chart10Data = years.map(() => Math.floor(Math.random() * 20) + 35);
            if (chartInstances['chart-education-10']) chartInstances['chart-education-10'].destroy();
            chartInstances['chart-education-10'] = new ApexCharts(document.querySelector("#chart-education-10"), {
                chart: { type: 'bar', height: 300, toolbar: { show: false } },
                plotOptions: { bar: { horizontal: false, borderRadius: 4, dataLabels: { position: 'top' } } },
                series: [{ name: 'Percentage', data: chart10Data }],
                dataLabels: { enabled: true, formatter: function (val) { return val; } },
                xaxis: { categories: years, title: { text: 'Year' } },
                yaxis: { title: { text: "Percentage" }, max: 100 },
                colors: ['#0ab39c'],
                tooltip: { y: { formatter: function (val) { return val; } } },
                title: { text: selectedDistrict, align: 'left', style: { fontSize: '14px', fontWeight: 600 } }
            });
            chartInstances['chart-education-10'].render();
        }

        // Chart 11: Percentage of girls completing STEM Science in HSS
        if (document.getElementById('chart-education-11')) {
            const chart11Data = years.map(() => Math.floor(Math.random() * 15) + 80);
            if (chartInstances['chart-education-11']) chartInstances['chart-education-11'].destroy();
            chartInstances['chart-education-11'] = new ApexCharts(document.querySelector("#chart-education-11"), {
                chart: { type: 'area', height: 300, toolbar: { show: false } },
                series: [{ name: 'Percentage', data: chart11Data }],
                xaxis: { categories: years, title: { text: 'Year' } },
                yaxis: { title: { text: "Percentage" }, max: 100 },
                colors: ['#39afd1'],
                dataLabels: { enabled: true, formatter: function (val) { return val; } },
                tooltip: { y: { formatter: function (val) { return val; } } },
                title: { text: selectedDistrict, align: 'left', style: { fontSize: '14px', fontWeight: 600 } }
            });
            chartInstances['chart-education-11'].render();
        }

        // Chart 12: Percentage of women enrolled under PMKVY
        if (document.getElementById('chart-education-12')) {
            const chart12Data = years.map(() => Math.floor(Math.random() * 40) + 35);
            if (chartInstances['chart-education-12']) chartInstances['chart-education-12'].destroy();
            chartInstances['chart-education-12'] = new ApexCharts(document.querySelector("#chart-education-12"), {
                chart: { type: 'line', height: 300, toolbar: { show: false } },
                series: [{ name: 'Percentage', data: chart12Data }],
                xaxis: { categories: years, title: { text: 'Year' } },
                yaxis: { title: { text: "Percentage" }, max: 100 },
                colors: ['#f06548'],
                dataLabels: { enabled: true, formatter: function (val) { return val; } },
                tooltip: { y: { formatter: function (val) { return val; } } },
                title: { text: selectedDistrict, align: 'left', style: { fontSize: '14px', fontWeight: 600 } }
            });
            chartInstances['chart-education-12'].render();
        }

        // Chart 13: Percentage of women completing PMKVY out of those enrolled
        if (document.getElementById('chart-education-13')) {
            const chart13Data = years.map(() => Math.floor(Math.random() * 30) + 60);
            if (chartInstances['chart-education-13']) chartInstances['chart-education-13'].destroy();
            chartInstances['chart-education-13'] = new ApexCharts(document.querySelector("#chart-education-13"), {
                chart: { type: 'bar', height: 300, toolbar: { show: false } },
                plotOptions: { bar: { horizontal: false, borderRadius: 4, dataLabels: { position: 'top' } } },
                series: [{ name: 'Percentage', data: chart13Data }],
                dataLabels: { enabled: true, formatter: function (val) { return val; } },
                xaxis: { categories: years, title: { text: 'Year' } },
                yaxis: { title: { text: "Percentage" }, max: 100 },
                colors: ['#0ab39c'],
                tooltip: { y: { formatter: function (val) { return val; } } },
                title: { text: selectedDistrict, align: 'left', style: { fontSize: '14px', fontWeight: 600 } }
            });
            chartInstances['chart-education-13'].render();
        }

        // Chart 14: Percentage of women among engineering college enrollees
        if (document.getElementById('chart-education-14')) {
            const chart14Data = years.map(() => Math.floor(Math.random() * 25) + 20);
            if (chartInstances['chart-education-14']) chartInstances['chart-education-14'].destroy();
            chartInstances['chart-education-14'] = new ApexCharts(document.querySelector("#chart-education-14"), {
                chart: { type: 'area', height: 300, toolbar: { show: false } },
                series: [{ name: 'Percentage', data: chart14Data }],
                xaxis: { categories: years, title: { text: 'Year' } },
                yaxis: { title: { text: "Percentage" }, max: 100 },
                colors: ['#39afd1'],
                dataLabels: { enabled: true, formatter: function (val) { return val; } },
                tooltip: { y: { formatter: function (val) { return val; } } },
                title: { text: selectedDistrict, align: 'left', style: { fontSize: '14px', fontWeight: 600 } }
            });
            chartInstances['chart-education-14'].render();
        }
    }

    // Initialize Livelihood Charts (10 charts) - Single District View
    function initLivelihoodCharts() {
        const filters = getSelectedFilters();
        const selectedDistrict = filters.district || 'All Districts';
        const selectedYear = filters.year || '2024';
        
        // Time series data (last 5 years)
        const years = ['2020', '2021', '2022', '2023', '2024'];

        // Chart 1: Percentage of women receiving loans under MYSY
        if (document.getElementById('chart-livelihood-1')) {
            const chart1Data = years.map(() => Math.floor(Math.random() * 40) + 30);
            if (chartInstances['chart-livelihood-1']) chartInstances['chart-livelihood-1'].destroy();
            chartInstances['chart-livelihood-1'] = new ApexCharts(document.querySelector("#chart-livelihood-1"), {
                chart: { type: 'line', height: 300, toolbar: { show: false } },
                series: [{ name: 'Percentage', data: chart1Data }],
                xaxis: { categories: years, title: { text: 'Year' } },
                yaxis: { title: { text: "Percentage" }, max: 100 },
                colors: ['#333894'],
                dataLabels: { enabled: true, formatter: function (val) { return val; } },
                tooltip: { y: { formatter: function (val) { return val; } } },
                title: { text: selectedDistrict, align: 'left', style: { fontSize: '14px', fontWeight: 600 } }
            });
            chartInstances['chart-livelihood-1'].render();
        }

        // Chart 2: Percentage of women trained under ODOP Toolkit
        if (document.getElementById('chart-livelihood-2')) {
            const chart2Data = years.map(() => Math.floor(Math.random() * 35) + 25);
            if (chartInstances['chart-livelihood-2']) chartInstances['chart-livelihood-2'].destroy();
            chartInstances['chart-livelihood-2'] = new ApexCharts(document.querySelector("#chart-livelihood-2"), {
                chart: { type: 'area', height: 300, toolbar: { show: false } },
                series: [{ name: 'Percentage', data: chart2Data }],
                xaxis: { categories: years, title: { text: 'Year' } },
                yaxis: { title: { text: "Percentage" }, max: 100 },
                colors: ['#0ab39c'],
                dataLabels: { enabled: true, formatter: function (val) { return val; } },
                tooltip: { y: { formatter: function (val) { return val; } } },
                title: { text: selectedDistrict, align: 'left', style: { fontSize: '14px', fontWeight: 600 } }
            });
            chartInstances['chart-livelihood-2'].render();
        }

        // Chart 3: Percentage of rural households mobilised into SHGs
        if (document.getElementById('chart-livelihood-3')) {
            const chart3Data = years.map(() => Math.floor(Math.random() * 30) + 40);
            if (chartInstances['chart-livelihood-3']) chartInstances['chart-livelihood-3'].destroy();
            chartInstances['chart-livelihood-3'] = new ApexCharts(document.querySelector("#chart-livelihood-3"), {
                chart: { type: 'bar', height: 300, toolbar: { show: false } },
                plotOptions: { bar: { horizontal: false, borderRadius: 4, dataLabels: { position: 'top' } } },
                series: [{ name: 'Percentage', data: chart3Data }],
                dataLabels: { enabled: true, formatter: function (val) { return val; } },
                xaxis: { categories: years, title: { text: 'Year' } },
                yaxis: { title: { text: "Percentage" }, max: 100 },
                colors: ['#39afd1'],
                tooltip: { y: { formatter: function (val) { return val; } } },
                title: { text: selectedDistrict, align: 'left', style: { fontSize: '14px', fontWeight: 600 } }
            });
            chartInstances['chart-livelihood-3'].render();
        }

        // Chart 4: Percentage of rural SHGs availing bank loans
        if (document.getElementById('chart-livelihood-4')) {
            const chart4Data = years.map(() => Math.floor(Math.random() * 25) + 60);
            if (chartInstances['chart-livelihood-4']) chartInstances['chart-livelihood-4'].destroy();
            chartInstances['chart-livelihood-4'] = new ApexCharts(document.querySelector("#chart-livelihood-4"), {
                chart: { type: 'line', height: 300, toolbar: { show: false } },
                series: [{ name: 'Percentage', data: chart4Data }],
                xaxis: { categories: years, title: { text: 'Year' } },
                yaxis: { title: { text: "Percentage" }, max: 100 },
                colors: ['#f06548'],
                dataLabels: { enabled: true, formatter: function (val) { return val; } },
                tooltip: { y: { formatter: function (val) { return val; } } },
                title: { text: selectedDistrict, align: 'left', style: { fontSize: '14px', fontWeight: 600 } }
            });
            chartInstances['chart-livelihood-4'].render();
        }

        // Chart 5: Percentage of Community Sakhis achieved against target
        if (document.getElementById('chart-livelihood-5')) {
            const chart5Data = years.map(() => Math.floor(Math.random() * 30) + 70);
            if (chartInstances['chart-livelihood-5']) chartInstances['chart-livelihood-5'].destroy();
            chartInstances['chart-livelihood-5'] = new ApexCharts(document.querySelector("#chart-livelihood-5"), {
                chart: { type: 'area', height: 300, toolbar: { show: false } },
                series: [{ name: 'Percentage', data: chart5Data }],
                xaxis: { categories: years, title: { text: 'Year' } },
                yaxis: { title: { text: "Percentage" }, max: 100 },
                colors: ['#333894'],
                dataLabels: { enabled: true, formatter: function (val) { return val; } },
                tooltip: { y: { formatter: function (val) { return val; } } },
                title: { text: selectedDistrict, align: 'left', style: { fontSize: '14px', fontWeight: 600 } }
            });
            chartInstances['chart-livelihood-5'].render();
        }

        // Chart 6: Percentage of SHGs receiving Revolving Fund
        if (document.getElementById('chart-livelihood-6')) {
            const chart6Data = years.map(() => Math.floor(Math.random() * 20) + 75);
            if (chartInstances['chart-livelihood-6']) chartInstances['chart-livelihood-6'].destroy();
            chartInstances['chart-livelihood-6'] = new ApexCharts(document.querySelector("#chart-livelihood-6"), {
                chart: { type: 'bar', height: 300, toolbar: { show: false } },
                plotOptions: { bar: { horizontal: false, borderRadius: 4, dataLabels: { position: 'top' } } },
                series: [{ name: 'Percentage', data: chart6Data }],
                dataLabels: { enabled: true, formatter: function (val) { return val; } },
                xaxis: { categories: years, title: { text: 'Year' } },
                yaxis: { title: { text: "Percentage" }, max: 100 },
                colors: ['#0ab39c'],
                tooltip: { y: { formatter: function (val) { return val; } } },
                title: { text: selectedDistrict, align: 'left', style: { fontSize: '14px', fontWeight: 600 } }
            });
            chartInstances['chart-livelihood-6'].render();
        }

        // Chart 7: Percentage of women trained under Vishwakarma Yojana
        if (document.getElementById('chart-livelihood-7')) {
            const chart7Data = years.map(() => Math.floor(Math.random() * 35) + 30);
            if (chartInstances['chart-livelihood-7']) chartInstances['chart-livelihood-7'].destroy();
            chartInstances['chart-livelihood-7'] = new ApexCharts(document.querySelector("#chart-livelihood-7"), {
                chart: { type: 'line', height: 300, toolbar: { show: false } },
                series: [{ name: 'Percentage', data: chart7Data }],
                xaxis: { categories: years, title: { text: 'Year' } },
                yaxis: { title: { text: "Percentage" }, max: 100 },
                colors: ['#39afd1'],
                dataLabels: { enabled: true, formatter: function (val) { return val; } },
                tooltip: { y: { formatter: function (val) { return val; } } },
                title: { text: selectedDistrict, align: 'left', style: { fontSize: '14px', fontWeight: 600 } }
            });
            chartInstances['chart-livelihood-7'].render();
        }

        // Chart 8: Percentage of women receiving second term PM SVANidhi loans
        if (document.getElementById('chart-livelihood-8')) {
            const chart8Data = years.map(() => Math.floor(Math.random() * 25) + 50);
            if (chartInstances['chart-livelihood-8']) chartInstances['chart-livelihood-8'].destroy();
            chartInstances['chart-livelihood-8'] = new ApexCharts(document.querySelector("#chart-livelihood-8"), {
                chart: { type: 'area', height: 300, toolbar: { show: false } },
                series: [{ name: 'Percentage', data: chart8Data }],
                xaxis: { categories: years, title: { text: 'Year' } },
                yaxis: { title: { text: "Percentage" }, max: 100 },
                colors: ['#f06548'],
                dataLabels: { enabled: true, formatter: function (val) { return val; } },
                tooltip: { y: { formatter: function (val) { return val; } } },
                title: { text: selectedDistrict, align: 'left', style: { fontSize: '14px', fontWeight: 600 } }
            });
            chartInstances['chart-livelihood-8'].render();
        }

        // Chart 9: Percentage of women receiving third term PM SVANidhi loans
        if (document.getElementById('chart-livelihood-9')) {
            const chart9Data = years.map(() => Math.floor(Math.random() * 20) + 30);
            if (chartInstances['chart-livelihood-9']) chartInstances['chart-livelihood-9'].destroy();
            chartInstances['chart-livelihood-9'] = new ApexCharts(document.querySelector("#chart-livelihood-9"), {
                chart: { type: 'bar', height: 300, toolbar: { show: false } },
                plotOptions: { bar: { horizontal: false, borderRadius: 4, dataLabels: { position: 'top' } } },
                series: [{ name: 'Percentage', data: chart9Data }],
                dataLabels: { enabled: true, formatter: function (val) { return val; } },
                xaxis: { categories: years, title: { text: 'Year' } },
                yaxis: { title: { text: "Percentage" }, max: 100 },
                colors: ['#0ab39c'],
                tooltip: { y: { formatter: function (val) { return val; } } },
                title: { text: selectedDistrict, align: 'left', style: { fontSize: '14px', fontWeight: 600 } }
            });
            chartInstances['chart-livelihood-9'].render();
        }

        // Chart 10: Percentage of women PM SVANidhi beneficiaries with digital activation
        if (document.getElementById('chart-livelihood-10')) {
            const chart10Data = years.map(() => Math.floor(Math.random() * 30) + 60);
            if (chartInstances['chart-livelihood-10']) chartInstances['chart-livelihood-10'].destroy();
            chartInstances['chart-livelihood-10'] = new ApexCharts(document.querySelector("#chart-livelihood-10"), {
                chart: { type: 'line', height: 300, toolbar: { show: false } },
                series: [{ name: 'Percentage', data: chart10Data }],
                xaxis: { categories: years, title: { text: 'Year' } },
                yaxis: { title: { text: "Percentage" }, max: 100 },
                colors: ['#39afd1'],
                dataLabels: { enabled: true, formatter: function (val) { return val; } },
                tooltip: { y: { formatter: function (val) { return val; } } },
                title: { text: selectedDistrict, align: 'left', style: { fontSize: '14px', fontWeight: 600 } }
            });
            chartInstances['chart-livelihood-10'].render();
        }
    }

    // Initialize Mobility Charts (9 charts) - Single District View
    function initMobilityCharts() {
        const filters = getSelectedFilters();
        const selectedDistrict = filters.district || 'All Districts';
        const selectedYear = filters.year || '2024';
        
        // Time series data (last 5 years)
        const years = ['2020', '2021', '2022', '2023', '2024'];

        // Chart 1: Percentage of women among total bus conductors
        if (document.getElementById('chart-mobility-1')) {
            const chart1Data = years.map(() => Math.floor(Math.random() * 15) + 5);
            if (chartInstances['chart-mobility-1']) chartInstances['chart-mobility-1'].destroy();
            chartInstances['chart-mobility-1'] = new ApexCharts(document.querySelector("#chart-mobility-1"), {
                chart: { type: 'line', height: 300, toolbar: { show: false } },
                series: [{ name: 'Percentage', data: chart1Data }],
                xaxis: { categories: years, title: { text: 'Year' } },
                yaxis: { title: { text: "Percentage" }, max: 100 },
                colors: ['#333894'],
                dataLabels: { enabled: true, formatter: function (val) { return val; } },
                tooltip: { y: { formatter: function (val) { return val; } } },
                title: { text: selectedDistrict, align: 'left', style: { fontSize: '14px', fontWeight: 600 } }
            });
            chartInstances['chart-mobility-1'].render();
        }

        // Chart 2: Number of women police per lakh female population
        if (document.getElementById('chart-mobility-2')) {
            const chart2Data = years.map(() => Math.floor(Math.random() * 50) + 20);
            if (chartInstances['chart-mobility-2']) chartInstances['chart-mobility-2'].destroy();
            chartInstances['chart-mobility-2'] = new ApexCharts(document.querySelector("#chart-mobility-2"), {
                chart: { type: 'area', height: 300, toolbar: { show: false } },
                series: [{ name: 'Number', data: chart2Data }],
                xaxis: { categories: years, title: { text: 'Year' } },
                yaxis: { title: { text: "Number per lakh" } },
                colors: ['#0ab39c'],
                dataLabels: { enabled: true },
                tooltip: { y: { formatter: function (val) { return val + " per lakh"; } } },
                title: { text: selectedDistrict, align: 'left', style: { fontSize: '14px', fontWeight: 600 } }
            });
            chartInstances['chart-mobility-2'].render();
        }

        // Chart 3: Number of women Home Guards per lakh female population
        if (document.getElementById('chart-mobility-3')) {
            const chart3Data = years.map(() => Math.floor(Math.random() * 40) + 15);
            if (chartInstances['chart-mobility-3']) chartInstances['chart-mobility-3'].destroy();
            chartInstances['chart-mobility-3'] = new ApexCharts(document.querySelector("#chart-mobility-3"), {
                chart: { type: 'bar', height: 300, toolbar: { show: false } },
                plotOptions: { bar: { horizontal: false, borderRadius: 4, dataLabels: { position: 'top' } } },
                series: [{ name: 'Number', data: chart3Data }],
                dataLabels: { enabled: true },
                xaxis: { categories: years, title: { text: 'Year' } },
                yaxis: { title: { text: "Number per lakh" } },
                colors: ['#39afd1'],
                tooltip: { y: { formatter: function (val) { return val + " per lakh"; } } },
                title: { text: selectedDistrict, align: 'left', style: { fontSize: '14px', fontWeight: 600 } }
            });
            chartInstances['chart-mobility-3'].render();
        }

        // Chart 4: Percentage of land holdings owned by women
        if (document.getElementById('chart-mobility-4')) {
            const chart4Data = years.map(() => Math.floor(Math.random() * 20) + 10);
            if (chartInstances['chart-mobility-4']) chartInstances['chart-mobility-4'].destroy();
            chartInstances['chart-mobility-4'] = new ApexCharts(document.querySelector("#chart-mobility-4"), {
                chart: { type: 'line', height: 300, toolbar: { show: false } },
                series: [{ name: 'Percentage', data: chart4Data }],
                xaxis: { categories: years, title: { text: 'Year' } },
                yaxis: { title: { text: "Percentage" }, max: 100 },
                colors: ['#f06548'],
                dataLabels: { enabled: true, formatter: function (val) { return val; } },
                tooltip: { y: { formatter: function (val) { return val; } } },
                title: { text: selectedDistrict, align: 'left', style: { fontSize: '14px', fontWeight: 600 } }
            });
            chartInstances['chart-mobility-4'].render();
        }

        // Chart 5: Number of PMJJBY enrolments per lakh eligible women
        if (document.getElementById('chart-mobility-5')) {
            const chart5Data = years.map(() => Math.floor(Math.random() * 2000) + 5000);
            if (chartInstances['chart-mobility-5']) chartInstances['chart-mobility-5'].destroy();
            chartInstances['chart-mobility-5'] = new ApexCharts(document.querySelector("#chart-mobility-5"), {
                chart: { type: 'area', height: 300, toolbar: { show: false } },
                series: [{ name: 'Number', data: chart5Data }],
                xaxis: { categories: years, title: { text: 'Year' } },
                yaxis: { title: { text: "Number per lakh" } },
                colors: ['#333894'],
                dataLabels: { enabled: true },
                tooltip: { y: { formatter: function (val) { return val + " per lakh"; } } },
                title: { text: selectedDistrict, align: 'left', style: { fontSize: '14px', fontWeight: 600 } }
            });
            chartInstances['chart-mobility-5'].render();
        }

        // Chart 6: Number of PMSBY enrolments per lakh eligible women
        if (document.getElementById('chart-mobility-6')) {
            const chart6Data = years.map(() => Math.floor(Math.random() * 3000) + 4000);
            if (chartInstances['chart-mobility-6']) chartInstances['chart-mobility-6'].destroy();
            chartInstances['chart-mobility-6'] = new ApexCharts(document.querySelector("#chart-mobility-6"), {
                chart: { type: 'bar', height: 300, toolbar: { show: false } },
                plotOptions: { bar: { horizontal: false, borderRadius: 4, dataLabels: { position: 'top' } } },
                series: [{ name: 'Number', data: chart6Data }],
                dataLabels: { enabled: true },
                xaxis: { categories: years, title: { text: 'Year' } },
                yaxis: { title: { text: "Number per lakh" } },
                colors: ['#0ab39c'],
                tooltip: { y: { formatter: function (val) { return val + " per lakh"; } } },
                title: { text: selectedDistrict, align: 'left', style: { fontSize: '14px', fontWeight: 600 } }
            });
            chartInstances['chart-mobility-6'].render();
        }

        // Chart 7: Percentage of women among bus drivers
        if (document.getElementById('chart-mobility-7')) {
            const chart7Data = years.map(() => Math.floor(Math.random() * 5) + 2);
            if (chartInstances['chart-mobility-7']) chartInstances['chart-mobility-7'].destroy();
            chartInstances['chart-mobility-7'] = new ApexCharts(document.querySelector("#chart-mobility-7"), {
                chart: { type: 'line', height: 300, toolbar: { show: false } },
                series: [{ name: 'Percentage', data: chart7Data }],
                xaxis: { categories: years, title: { text: 'Year' } },
                yaxis: { title: { text: "Percentage" }, max: 100 },
                colors: ['#39afd1'],
                dataLabels: { enabled: true, formatter: function (val) { return val; } },
                tooltip: { y: { formatter: function (val) { return val; } } },
                title: { text: selectedDistrict, align: 'left', style: { fontSize: '14px', fontWeight: 600 } }
            });
            chartInstances['chart-mobility-7'].render();
        }

        // Chart 8: Number of functional factory creches per lakh working women
        if (document.getElementById('chart-mobility-8')) {
            const chart8Data = years.map(() => Math.floor(Math.random() * 10) + 5);
            if (chartInstances['chart-mobility-8']) chartInstances['chart-mobility-8'].destroy();
            chartInstances['chart-mobility-8'] = new ApexCharts(document.querySelector("#chart-mobility-8"), {
                chart: { type: 'area', height: 300, toolbar: { show: false } },
                series: [{ name: 'Number', data: chart8Data }],
                xaxis: { categories: years, title: { text: 'Year' } },
                yaxis: { title: { text: "Number per lakh" } },
                colors: ['#f06548'],
                dataLabels: { enabled: true },
                tooltip: { y: { formatter: function (val) { return val + " per lakh"; } } },
                title: { text: selectedDistrict, align: 'left', style: { fontSize: '14px', fontWeight: 600 } }
            });
            chartInstances['chart-mobility-8'].render();
        }

        // Chart 9: Number of female Prantiya Rakshaks per lakh female population
        if (document.getElementById('chart-mobility-9')) {
            const chart9Data = years.map(() => Math.floor(Math.random() * 30) + 10);
            if (chartInstances['chart-mobility-9']) chartInstances['chart-mobility-9'].destroy();
            chartInstances['chart-mobility-9'] = new ApexCharts(document.querySelector("#chart-mobility-9"), {
                chart: { type: 'bar', height: 300, toolbar: { show: false } },
                plotOptions: { bar: { horizontal: false, borderRadius: 4, dataLabels: { position: 'top' } } },
                series: [{ name: 'Number', data: chart9Data }],
                dataLabels: { enabled: true },
                xaxis: { categories: years, title: { text: 'Year' } },
                yaxis: { title: { text: "Number per lakh" } },
                colors: ['#0ab39c'],
                tooltip: { y: { formatter: function (val) { return val + " per lakh"; } } },
                title: { text: selectedDistrict, align: 'left', style: { fontSize: '14px', fontWeight: 600 } }
            });
            chartInstances['chart-mobility-9'].render();
        }
    }

    // Initialize charts on page load if Entrepreneurship section is active
    if (document.getElementById('section-entrepreneurship')?.classList.contains('active')) {
        initEntrepreneurshipCharts();
    } else if (document.getElementById('section-employment')?.classList.contains('active')) {
        initEmploymentCharts();
    } else if (document.getElementById('section-education')?.classList.contains('active')) {
        initEducationCharts();
    } else if (document.getElementById('section-livelihood')?.classList.contains('active')) {
        initLivelihoodCharts();
    } else if (document.getElementById('section-mobility')?.classList.contains('active')) {
        initMobilityCharts();
    }

    // Update charts when filters change
    const yearFilter = document.getElementById('yearFilter');
    const districtFilter = document.getElementById('districtFilter');
    
    if (yearFilter) {
        yearFilter.addEventListener('change', function() {
            if (document.getElementById('section-entrepreneurship')?.classList.contains('active')) {
                initEntrepreneurshipCharts();
            } else if (document.getElementById('section-employment')?.classList.contains('active')) {
                initEmploymentCharts();
            } else if (document.getElementById('section-education')?.classList.contains('active')) {
                initEducationCharts();
            } else if (document.getElementById('section-livelihood')?.classList.contains('active')) {
                initLivelihoodCharts();
            } else if (document.getElementById('section-mobility')?.classList.contains('active')) {
                initMobilityCharts();
            }
        });
    }
    
    if (districtFilter) {
        districtFilter.addEventListener('change', function() {
            if (document.getElementById('section-entrepreneurship')?.classList.contains('active')) {
                initEntrepreneurshipCharts();
            } else if (document.getElementById('section-employment')?.classList.contains('active')) {
                initEmploymentCharts();
            } else if (document.getElementById('section-education')?.classList.contains('active')) {
                initEducationCharts();
            } else if (document.getElementById('section-livelihood')?.classList.contains('active')) {
                initLivelihoodCharts();
            } else if (document.getElementById('section-mobility')?.classList.contains('active')) {
                initMobilityCharts();
            }
        });
    }
});

