// Main JavaScript - Consolidated DOM ready handling
// Profile Dropdown Toggle
try {
(function() {
    // Simple DOM ready function that always works
    function ready(callback) {
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', callback);
        } else {
            // DOM already ready, execute immediately
            callback();
        }
    }

    // Profile Dropdown - Initialize immediately
    ready(function() {
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
            }, false);

            // Touch event for mobile
            profileBtn.addEventListener('touchend', function(e) {
                e.preventDefault();
                e.stopPropagation();
                profileMenu.classList.toggle('show');
                touchStarted = false;
            });

            // Close dropdown when clicking outside
            document.addEventListener('click', function(e) {
                // Don't close if clicking on submenu toggle
                if (e.target.closest('.submenu-toggle')) {
                    return;
                }
                if (profileBtn && profileMenu && !profileBtn.contains(e.target) && !profileMenu.contains(e.target)) {
                    profileMenu.classList.remove('show');
                }
            }, false);
        }
    });

    // Get sidebar and body reference - declared once
    const sidebar = document.getElementById('sidebar');
    const body = document.body;

    // Auto-highlight active menu item based on current page
    ready(function() {
        function highlightActiveMenu() {
        try {
            const currentPage = window.location.pathname.split('/').pop() || 'index.html';
            
            // Find and highlight the matching nav link
            const allNavLinks = document.querySelectorAll('.nav-link:not(.submenu-toggle), .submenu-link');
            
            if (allNavLinks.length === 0) {
                // If links not found yet, retry after a short delay
                setTimeout(highlightActiveMenu, 100);
                return;
            }
            
            let found = false;
            const activeLinks = [];
            const activeNavItems = [];
            
            // First pass: find matching links
            allNavLinks.forEach(link => {
                const linkHref = link.getAttribute('href');
                if (linkHref) {
                    // Normalize the href and current page for comparison
                    const linkPage = linkHref.split('/').pop() || linkHref;
                    const pageName = currentPage.split('/').pop() || currentPage;
                    
                    // Check multiple matching conditions
                    const matches = linkPage === pageName || 
                                  linkPage === currentPage ||
                                  (linkPage.endsWith('.html') && pageName.endsWith('.html') && linkPage === pageName) ||
                                  (!linkPage.endsWith('.html') && !pageName.endsWith('.html') && linkPage === pageName.replace('.html', '')) ||
                                  (linkPage.replace('.html', '') === pageName.replace('.html', ''));
                    
                    if (matches) {
                        found = true;
                        activeLinks.push(link);
                        
                        // Also add active class to parent nav-item if it exists
                        const navItem = link.closest('.nav-item');
                        if (navItem) {
                            activeNavItems.push(navItem);
                        }
                        
                        // If it's a submenu link, open the parent submenu
                        const submenuItem = link.closest('.submenu-item');
                        if (submenuItem) {
                            const parentNavItem = submenuItem.closest('.nav-item.has-submenu');
                            if (parentNavItem) {
                                parentNavItem.classList.add('submenu-open');
                            }
                        }
                    }
                }
            });
            
            // Only remove active classes if we found matches
            if (found) {
                // Remove active class from all links and nav-items first
                document.querySelectorAll('.nav-link, .submenu-link').forEach(l => l.classList.remove('active'));
                document.querySelectorAll('.nav-item').forEach(item => item.classList.remove('active'));
                
                // Add active classes to matching items
                activeLinks.forEach(link => link.classList.add('active'));
                activeNavItems.forEach(item => item.classList.add('active'));
            }
            
        } catch (error) {
            console.error('Error highlighting active menu:', error);
        }
        }
    
        // Run once after DOM is ready, with a single retry if needed
        const runHighlighting = () => {
            const allNavLinks = document.querySelectorAll('.nav-link:not(.submenu-toggle), .submenu-link');
            if (allNavLinks.length > 0) {
                highlightActiveMenu();
            } else {
                // Single retry after short delay
                setTimeout(() => {
                    highlightActiveMenu();
                }, 150);
            }
        };
        
        // Run when DOM is ready using consolidated ready function
        ready(runHighlighting);
    }); // End of ready callback for menu highlighting
    
    // Export ready function for other scripts
    
    // Export ready function for other scripts
    window.AppUtils = window.AppUtils || {};
    window.AppUtils.ready = ready;

    // Submenu Toggle Functionality - Simple and direct
    ready(function initSubmenuToggle() {
        function setupSubmenuToggles() {
            try {
                const submenuToggles = document.querySelectorAll('.submenu-toggle');
                
                if (submenuToggles.length === 0) {
                    setTimeout(setupSubmenuToggles, 300);
                    return;
                }
                
                submenuToggles.forEach(function(toggle) {
                    try {
                        // Remove any existing handlers
                        const newToggle = toggle.cloneNode(true);
                        toggle.parentNode.replaceChild(newToggle, toggle);
                        
                        // Add new click handler
                        newToggle.addEventListener('click', function(e) {
                            e.preventDefault();
                            e.stopPropagation();
                            
                            // Find the nav-item parent - try multiple methods
                            let navItem = this.closest('.nav-item.has-submenu');
                            if (!navItem) {
                                // Try finding parent li
                                let parent = this.parentElement;
                                while (parent && parent !== document.body) {
                                    if (parent.classList && parent.classList.contains('nav-item') && parent.classList.contains('has-submenu')) {
                                        navItem = parent;
                                        break;
                                    }
                                    parent = parent.parentElement;
                                }
                            }
                            
                            if (navItem) {
                                // Close other open submenus
                                document.querySelectorAll('.nav-item.has-submenu.submenu-open').forEach(function(item) {
                                    if (item !== navItem) {
                                        item.classList.remove('submenu-open');
                                    }
                                });
                                
                                // Toggle current submenu
                                navItem.classList.toggle('submenu-open');
                            }
                        }, false); // Use bubble phase
                    } catch (err) {
                        console.error('Error setting up toggle:', err);
                    }
                });
            } catch (err) {
                console.error('Error in setupSubmenuToggles:', err);
            }
        }
        
        // Run immediately and retry if needed
        setupSubmenuToggles();
        setTimeout(setupSubmenuToggles, 100);
    });
    
    // Sidebar hover effect - regular nav links (not submenu toggles)
    ready(function() {
        const navLinks = document.querySelectorAll('.nav-link:not(.submenu-toggle)');

        navLinks.forEach(link => {
            link.addEventListener('click', function(e) {
                // Don't interfere with submenu toggles
                if (this.classList.contains('submenu-toggle')) {
                    return;
                }
                // Remove active class from all links
                document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
                // Add active class to clicked link
                this.classList.add('active');
            }, false);
        });
    });

    // Mobile Menu Toggle - Initialize when DOM is ready
    ready(function() {
        const sidebar = document.getElementById('sidebar');
        const body = document.body;
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
    }); // End of ready callback for mobile menu toggle

    // Submenu Link Click Handler - Initialize when DOM is ready
    ready(function() {
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
    }); // End of ready callback for submenu links

    // Tab Switching Functionality - Initialize when DOM is ready
    ready(function() {
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
    }); // End of ready callback for tabs

    // District Search and Sort Functionality - Initialize when DOM is ready
    ready(function() {
        const searchToggle = document.getElementById('searchToggle');
        const searchBox = document.getElementById('searchBox');
        const districtSearch = document.getElementById('districtSearch');
        const sortButtons = document.querySelectorAll('.sort-btn');
        const rankingBody = document.getElementById('rankingBody');
        let currentSort = 'alphabetical'; // default sort
        let searchTerm = '';

        // Store original order of districts
        if (rankingBody) {
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
                if (!rankingBody) return;
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
            
            // Assign ranks
            pairs.forEach((pair, index) => {
                pair.rank = index + 1;
            });
            
            data[metric] = {
                champions: pairs.slice(0, 15),      // Rank 1-15
                frontRunners: pairs.slice(15, 30),   // Rank 16-30
                contenders: pairs.slice(30, 45),      // Rank 31-45
                strivers: pairs.slice(45, 60),       // Rank 46-60
                aspirants: pairs.slice(60, 75)       // Rank 61-75
            };
        });

        return data;
    }

        // Render district category list
        function renderCategoryList(containerId, districts) {
                const container = document.getElementById(containerId);
                if (!container) return;

                container.innerHTML = '';
                
                districts.forEach((item) => {
                    const isPositive = item.change > 0;
                    const arrowIcon = isPositive ? 'ri-arrow-up-line' : 'ri-arrow-down-line';
                    const arrowClass = isPositive ? 'arrow-up' : 'arrow-down';
                    
                    const districtItem = document.createElement('div');
                    districtItem.className = 'district-rank-item';
                    districtItem.innerHTML = `
                        <div class="rank-district-name">${item.district}</div>
                        <div class="rank-value-box">
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
            renderCategoryList(`category-champions-${metric}`, metricData[metric].champions);
            renderCategoryList(`category-front-runners-${metric}`, metricData[metric].frontRunners);
            renderCategoryList(`category-contenders-${metric}`, metricData[metric].contenders);
            renderCategoryList(`category-strivers-${metric}`, metricData[metric].strivers);
            renderCategoryList(`category-aspirants-${metric}`, metricData[metric].aspirants);
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
    }); // End of ready callback for district search and metric tabs
    
})(); // End of main IIFE
} catch (error) {
    console.error('Error in main.js IIFE:', error);
}

