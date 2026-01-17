// Profile Dropdown Toggle
document.addEventListener('DOMContentLoaded', function() {
    const profileBtn = document.getElementById('profileBtn');
    const profileMenu = document.getElementById('profileMenu');

    if (profileBtn && profileMenu) {
        let touchStarted = false;
        
        // Touch start to prevent double-firing on mobile
        profileBtn.addEventListener('touchstart', function(e) {
            touchStarted = true;
        }, { passive: true });

        // Click event handler
        profileBtn.addEventListener('click', function(e) {
            // On mobile, prevent click if touch was used
            if (touchStarted) {
                touchStarted = false;
                return;
            }
            e.preventDefault();
            e.stopPropagation();
            profileMenu.classList.toggle('show');
        });

        // Touch event for mobile
        profileBtn.addEventListener('touchend', function(e) {
            e.preventDefault();
            e.stopPropagation();
            profileMenu.classList.toggle('show');
            touchStarted = false;
        });

        // Close dropdown when clicking outside
        document.addEventListener('click', function(e) {
            if (profileBtn && profileMenu && !profileBtn.contains(e.target) && !profileMenu.contains(e.target)) {
                profileMenu.classList.remove('show');
            }
        });
    }

    // Get sidebar and body reference - declared once
    const sidebar = document.getElementById('sidebar');
    const body = document.body;

    // Sidebar hover effect - regular nav links (not submenu toggles)
    const navLinks = document.querySelectorAll('.nav-link:not(.submenu-toggle)');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Only handle if it's not a submenu toggle
            if (!this.classList.contains('submenu-toggle')) {
                // Remove active class from all links
                document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
                // Add active class to clicked link
                this.classList.add('active');
            }
        });
    });

    // Submenu Toggle Functionality
    const submenuToggles = document.querySelectorAll('.submenu-toggle');
    
    submenuToggles.forEach(toggle => {
        toggle.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            const navItem = this.closest('.nav-item');
            if (navItem) {
                navItem.classList.toggle('submenu-open');
            }
        });

        // Touch event for mobile submenu
        toggle.addEventListener('touchend', function(e) {
            e.preventDefault();
            e.stopPropagation();
            const navItem = this.closest('.nav-item');
            if (navItem) {
                navItem.classList.toggle('submenu-open');
            }
        });
    });

    // Mobile Menu Toggle
    const mobileMenuToggle = document.getElementById('mobileMenuToggle');

    // Create sidebar overlay if it doesn't exist
    let sidebarOverlay = document.querySelector('.sidebar-overlay');
    if (!sidebarOverlay) {
        sidebarOverlay = document.createElement('div');
        sidebarOverlay.className = 'sidebar-overlay';
        body.appendChild(sidebarOverlay);
    }

    if (mobileMenuToggle && sidebar) {
        let menuTouchStarted = false;

        // Touch start to prevent double-firing on mobile
        mobileMenuToggle.addEventListener('touchstart', function(e) {
            menuTouchStarted = true;
        }, { passive: true });

        // Function to toggle sidebar
        function toggleSidebar(e) {
            if (e) {
                e.preventDefault();
                e.stopPropagation();
            }
            const isOpen = sidebar.classList.contains('mobile-open');
            if (isOpen) {
                sidebar.classList.remove('mobile-open');
                if (sidebarOverlay) sidebarOverlay.classList.remove('active');
                body.style.overflow = '';
            } else {
                sidebar.classList.add('mobile-open');
                if (sidebarOverlay) sidebarOverlay.classList.add('active');
                body.style.overflow = 'hidden';
            }
        }

        // Click event handler
        mobileMenuToggle.addEventListener('click', function(e) {
            // On mobile, prevent click if touch was used
            if (menuTouchStarted) {
                menuTouchStarted = false;
                return;
            }
            toggleSidebar(e);
        });

        // Touch event handler for mobile
        mobileMenuToggle.addEventListener('touchend', function(e) {
            toggleSidebar(e);
            menuTouchStarted = false;
        });

        // Close sidebar when clicking overlay
        sidebarOverlay.addEventListener('click', function() {
            sidebar.classList.remove('mobile-open');
            sidebarOverlay.classList.remove('active');
            body.style.overflow = '';
        });

        // Close sidebar when clicking on a nav link on mobile
        const navLinks = document.querySelectorAll('.nav-link:not(.submenu-toggle)');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                if (window.innerWidth <= 768) {
                    sidebar.classList.remove('mobile-open');
                    sidebarOverlay.classList.remove('active');
                    body.style.overflow = '';
                }
            });
        });
    }

    // Submenu Link Click Handler
    const submenuLinks = document.querySelectorAll('.submenu-link');
    
    submenuLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Allow navigation to proceed - don't prevent default
            // Remove active class from all submenu links
            submenuLinks.forEach(l => l.classList.remove('active'));
            // Add active class to clicked link
            this.classList.add('active');
            // Navigation will happen naturally via href
        });
    });

    // Tab Switching Functionality
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');

    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            const targetTab = this.getAttribute('data-tab');

            // Remove active class from all buttons and contents
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));

            // Add active class to clicked button and corresponding content
            this.classList.add('active');
            const targetContent = document.getElementById('tab-' + targetTab);
            if (targetContent) {
                targetContent.classList.add('active');
            }
        });
    });

    // District Search and Sort Functionality
    const searchToggle = document.getElementById('searchToggle');
    const searchBox = document.getElementById('searchBox');
    const districtSearch = document.getElementById('districtSearch');
    const sortButtons = document.querySelectorAll('.sort-btn');
    const rankingBody = document.getElementById('rankingBody');
    let currentSort = 'alphabetical'; // default sort
    let searchTerm = '';

    // Store original order of districts
    const originalDistricts = Array.from(rankingBody.querySelectorAll('.district-item'));

    // Toggle search box
    if (searchToggle && searchBox) {
        searchToggle.addEventListener('click', function() {
            searchBox.classList.toggle('active');
            if (searchBox.classList.contains('active')) {
                districtSearch.focus();
            } else {
                // Clear search when closing
                districtSearch.value = '';
                searchTerm = '';
                filterAndSortDistricts();
            }
        });
    }

    // Search functionality
    if (districtSearch) {
        districtSearch.addEventListener('input', function() {
            searchTerm = this.value.toLowerCase().trim();
            filterAndSortDistricts();
        });
    }

    // Sort functionality
    sortButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all sort buttons
            sortButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            this.classList.add('active');
            
            currentSort = this.getAttribute('data-sort');
            filterAndSortDistricts();
        });
    });

    function filterAndSortDistricts() {
        // Get all district items
        let districts = Array.from(rankingBody.querySelectorAll('.district-item'));

        // Filter by search term
        if (searchTerm) {
            districts = districts.filter(district => {
                const districtName = district.getAttribute('data-district').toLowerCase();
                return districtName.includes(searchTerm);
            });
        }

        // Sort districts
        if (currentSort === 'alphabetical') {
            districts.sort((a, b) => {
                const nameA = a.querySelector('.district-name').textContent.toLowerCase();
                const nameB = b.querySelector('.district-name').textContent.toLowerCase();
                return nameA.localeCompare(nameB);
            });
        } else if (currentSort === 'rank') {
            districts.sort((a, b) => {
                const rankA = parseInt(a.getAttribute('data-rank')) || 0;
                const rankB = parseInt(b.getAttribute('data-rank')) || 0;
                return rankB - rankA; // Sort descending (highest rank first)
            });
        }

        // Clear and re-append sorted districts
        rankingBody.innerHTML = '';
        districts.forEach(district => {
            rankingBody.appendChild(district);
        });

        // Show message if no results
        if (districts.length === 0 && searchTerm) {
            const noResults = document.createElement('div');
            noResults.className = 'no-results';
            noResults.innerHTML = '<p>No districts found matching "' + searchTerm + '"</p>';
            rankingBody.appendChild(noResults);
        }
    }

    // Set default sort button as active
    if (sortButtons.length > 0) {
        const alphabeticalBtn = Array.from(sortButtons).find(btn => btn.getAttribute('data-sort') === 'alphabetical');
        if (alphabeticalBtn) {
            alphabeticalBtn.classList.add('active');
        }
    }

    // Top 10 and Bottom 10 Districts Ranking
    const allDistricts = [
        'Agra', 'Aligarh', 'Ambedkar Nagar', 'Amethi', 'Amroha', 'Auraiya', 'Ayodhya', 'Azamgarh',
        'Badaun', 'Baghpat', 'Bahraich', 'Ballia', 'Balrampur', 'Banda', 'Barabanki', 'Bareilly',
        'Basti', 'Bhadohi', 'Bijnor', 'Bulandshahar', 'Chandauli', 'Chitrakoot', 'Deoria', 'Etah',
        'Etawah', 'Farrukhabad', 'Fatehpur', 'Firozabad', 'G. B. Nagar', 'Ghaziabad', 'Ghazipur',
        'Gonda', 'Gorakhpur', 'Hamirpur', 'Hapur', 'Hardoi', 'Hathras', 'Jalaun', 'Jaunpur',
        'Jhansi', 'Kannauj', 'Kanpur Dehat', 'Kanpur Nagar', 'Kasganj', 'Kaushambi', 'Kushi Nagar',
        'Lakhimpur Kheri', 'Lalitpur', 'Lucknow', 'Mahoba', 'Mahrajganj', 'Mainpuri', 'Mathura',
        'Mau', 'Meerut', 'Mirzapur', 'Moradabad', 'Muzaffarnagar', 'Pilibhit', 'Pratapgarh',
        'Prayagraj', 'Raebareli', 'Rampur', 'Saharanpur', 'Sambhal', 'Sant Kabir Nagar',
        'Shahjahanpur', 'Shamli', 'Shrawasti', 'Siddharth Nagar', 'Sitapur', 'Sonbhadra',
        'Sultanpur', 'Unnao', 'Varanasi'
    ];

    // Generate dummy data for all 6 metrics
    function generateMetricData(districts) {
        const metrics = ['entrepreneurship', 'employment', 'education', 'livelihood', 'mobility', 'wee-index'];
        const data = {};

        metrics.forEach(metric => {
            const pairs = districts.map(district => ({
                district: district,
                value: Math.floor(Math.random() * 100) + 1, // Values between 1-100
                change: (Math.random() > 0.5 ? 1 : -1) * (Math.random() * 10 + 1) // Random change between -11 to +11
            }));
            
            // Sort by value descending
            pairs.sort((a, b) => b.value - a.value);
            
            data[metric] = {
                top10: pairs.slice(0, 10),
                bottom10: pairs.slice(-10).reverse() // Reverse to show lowest first
            };
        });

        return data;
    }

    // Render district ranking list
    function renderDistrictList(containerId, districts, isTop) {
        const container = document.getElementById(containerId);
        if (!container) return;

        container.innerHTML = '';
        
        districts.forEach((item, index) => {
            const rank = isTop ? index + 1 : index + 1;
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

    // Initialize metric tabs
    const metricTabButtons = document.querySelectorAll('.metric-tab-btn');
    const metricContents = document.querySelectorAll('.metric-content');
    const metricData = generateMetricData(allDistricts);

    // Render initial data
    Object.keys(metricData).forEach(metric => {
        renderDistrictList(`top-10-${metric}`, metricData[metric].top10, true);
        renderDistrictList(`bottom-10-${metric}`, metricData[metric].bottom10, false);
    });

    // Tab switching
    metricTabButtons.forEach(button => {
        button.addEventListener('click', function() {
            const targetMetric = this.getAttribute('data-metric');

            // Remove active class from all buttons and contents
            metricTabButtons.forEach(btn => btn.classList.remove('active'));
            metricContents.forEach(content => content.classList.remove('active'));

            // Add active class to clicked button and corresponding content
            this.classList.add('active');
            const targetContent = document.getElementById('metric-' + targetMetric);
            if (targetContent) {
                targetContent.classList.add('active');
            }
        });
    });
});

