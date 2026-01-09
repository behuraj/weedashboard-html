<!-- Color Top line -->
<div class="color-line"></div>

<!-- Topbar Start -->
<header class="app-topbar">
    <div class="page-container topbar-menu">
        <div class="d-flex align-items-center justify-content-between w-100">
            <!-- Left Section -->
            <div class="d-flex align-items-center gap-2">
                <!-- Brand Logo -->
                <a href="index.php" class="logo">
                    <span class="logo-light">
                        <span class="logo-lg"><img src="assets/images/logo.png" alt="logo"></span>
                        <span class="logo-sm"><img src="assets/images/logo-sm.png" alt="small logo"></span>
                    </span>

                    <span class="logo-dark">
                        <span class="logo-lg"><img src="assets/images/logo-dark.png" alt="dark logo"></span>
                        <span class="logo-sm"><img src="assets/images/logo-sm.png" alt="small logo"></span>
                    </span>
                </a>

                <!-- Sidebar Menu Toggle Button -->
                <button class="sidenav-toggle-button px-2">
                    <i class="ri-menu-5-line fs-24"></i>
                </button>

                <!-- Horizontal Menu Toggle Button -->
                <button class="topnav-toggle-button px-2" data-bs-toggle="collapse" data-bs-target="#topnav-menu-content">
                    <i class="ri-menu-5-line fs-24"></i>
                </button>

                <!-- Topbar Page Title -->
                <div class="topbar-item d-none d-md-flex">
                    <?php if (isset($title)): ?>
                        <div>
                            <h4 class="page-title fs-18 fw-bold mb-0"><?= $title ?></h4>
                        </div>
                    <?php endif ?>

                    <?php if (!isset($title)): ?>
                        <div>
                            <h4 class="page-title fs-18 fw-bold mb-0">Welcome!</h4>
                        </div>
                    <?php endif ?>
                </div>
            </div>

            <!-- Center Section -->
            <div class="position-absolute start-50 translate-middle-x d-none d-md-block">
                <h4 class="page-title fs-18 fw-bolder mb-0 text-center" style="font-weight: 700 !important;">Planning Department, Govt. of UP</h4>
            </div>

            <!-- Right Section -->
            <div class="d-flex align-items-center gap-2">

            <!-- Light/Dark Mode Button -->
            <div class="topbar-item d-none d-sm-flex">
                <button class="topbar-link" id="light-dark-mode" type="button">
                    <i class="ri-moon-line fs-22"></i>
                </button>
            </div>

            <!-- User Dropdown -->
            <div class="topbar-item nav-user">
                <div class="dropdown">
                    <a class="topbar-link dropdown-toggle drop-arrow-none px-2" data-bs-toggle="dropdown"
                        data-bs-offset="0,25" type="button" aria-haspopup="false" aria-expanded="false">
                        <img src="assets/images/users/avatar-1.jpg" width="32" class="rounded-circle me-lg-2 d-flex"
                            alt="user-image">
                        <span class="d-lg-flex flex-column gap-1 d-none">
                            <h5 class="my-0">Maxine K.</h5>
                        </span>
                        <i class="ri-arrow-down-s-line d-none d-lg-block align-middle ms-2"></i>
                    </a>
                    <div class="dropdown-menu dropdown-menu-end">
                        <!-- item-->
                        <div class="dropdown-header noti-title">
                            <h6 class="text-overflow m-0">Welcome !</h6>
                        </div>

                        <!-- item-->
                        <a href="javascript:void(0);" class="dropdown-item">
                            <i class="ri-account-circle-line me-1 fs-16 align-middle"></i>
                            <span class="align-middle">My Account</span>
                        </a>

                        <!-- item-->
                        <a href="javascript:void(0);" class="dropdown-item">
                            <i class="ri-wallet-3-line me-1 fs-16 align-middle"></i>
                            <span class="align-middle">Wallet : <span class="fw-semibold">$89.25k</span></span>
                        </a>

                        <!-- item-->
                        <a href="javascript:void(0);" class="dropdown-item">
                            <i class="ri-settings-2-line me-1 fs-16 align-middle"></i>
                            <span class="align-middle">Settings</span>
                        </a>

                        <!-- item-->
                        <a href="javascript:void(0);" class="dropdown-item">
                            <i class="ri-question-line me-1 fs-16 align-middle"></i>
                            <span class="align-middle">Support</span>
                        </a>

                        <div class="dropdown-divider"></div>

                        <!-- item-->
                        <a href="javascript:void(0);" class="dropdown-item">
                            <i class="ri-lock-line me-1 fs-16 align-middle"></i>
                            <span class="align-middle">Lock Screen</span>
                        </a>

                        <!-- item-->
                        <a href="javascript:void(0);" class="dropdown-item active fw-semibold text-danger">
                            <i class="ri-logout-box-line me-1 fs-16 align-middle"></i>
                            <span class="align-middle">Sign Out</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</header>
<!-- Topbar End -->

<!-- Search Modal -->
<div class="modal fade" id="searchModal" tabindex="-1" aria-labelledby="searchModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-lg">
        <div class="modal-content bg-transparent">
            <form>
                <div class="card mb-1">
                    <div class="px-3 py-2 d-flex flex-row align-items-center" id="top-search">
                        <i class="ri-search-line fs-22"></i>
                        <input type="search" class="form-control border-0" id="search-modal-input"
                            placeholder="Search for actions, people,">
                        <button type="submit" class="btn p-0" data-bs-dismiss="modal" aria-label="Close">[esc]</button>
                    </div>
                </div>
            </form>
        </div>
    </div>
</div>