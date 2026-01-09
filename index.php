<!DOCTYPE html>
<html lang="en" data-sidenav-size="sm-hover">

<head>
    <?php
    $title = "WEE Index Dashboard";
    $subtitle = "Layout";
    include('partials/title-meta.php');
    ?>

    <!-- Vector Maps css -->
    <link href="assets/vendor/jsvectormap/jsvectormap.min.css" rel="stylesheet" type="text/css">

    <?php include('partials/head-css.php'); ?>
</head>

<body>
    <!-- Begin page -->
    <div class="wrapper">

        <?php include('partials/topbar.php'); ?>

        <?php include('partials/sidenav.php'); ?>

        <!-- ============================================================== -->
        <!-- Start Page Content here -->
        <!-- ============================================================== -->

        <div class="page-content">
            <div class="page-container">

                <div class="row row-cols-xxl-4 row-cols-lg-3 row-cols-md-2 row-cols-1">
                    <div class="col">
                        <div class="card border-top border-top-4 border-primary h-100" style="transition: all 0.3s ease; cursor: pointer;" onmouseover="this.style.transform='translateY(-5px)'; this.style.boxShadow='0 10px 25px rgba(0,0,0,0.1)'" onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow=''">
                            <div class="card-body p-4">
                                <div class="d-flex align-items-center gap-3 justify-content-between">
                                    <div class="flex-grow-1">
                                        <h5 class="text-muted fs-13 fw-bold text-uppercase mb-2">
                                            WEE Index</h5>
                                        <h3 class="my-2 py-1 fw-bold mb-2">65</h3>
                                        <p class="mb-0 text-muted small">
                                            <span class="text-danger me-1"><i class="ri-arrow-left-down-box-line"></i>
                                                9.19%</span>
                                            <span class="text-nowrap">From last year</span>
                                        </p>
                                    </div>
                                    <div class="avatar-xl flex-shrink-0">
                                        <span class="avatar-title bg-primary-subtle text-primary rounded-circle fs-42 d-flex align-items-center justify-content-center" style="width: 64px; height: 64px;">
                                            <iconify-icon icon="solar:chart-bold-duotone" style="font-size: 32px;"></iconify-icon>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div><!-- end col -->

                    <div class="col">
                        <div class="card border-top border-top-4 border-success h-100" style="transition: all 0.3s ease; cursor: pointer;" onmouseover="this.style.transform='translateY(-5px)'; this.style.boxShadow='0 10px 25px rgba(0,0,0,0.1)'" onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow=''">
                            <div class="card-body p-4">
                                <div class="d-flex align-items-center gap-3 justify-content-between">
                                    <div class="flex-grow-1">
                                        <h5 class="text-muted fs-13 fw-bold text-uppercase mb-2">No of Indicators</h5>
                                        <h3 class="my-2 py-1 fw-bold mb-2">43</h3>
                                        <p class="mb-0 text-muted small">
                                            <span class="text-success me-1"><i class="ri-arrow-left-up-box-line"></i>
                                                4.67%</span>
                                            <span class="text-nowrap">From last year</span>
                                        </p>
                                    </div>
                                    <div class="avatar-xl flex-shrink-0">
                                        <span class="avatar-title bg-success-subtle text-success rounded-circle fs-42 d-flex align-items-center justify-content-center" style="width: 64px; height: 64px;">
                                            <iconify-icon icon="solar:graph-bold-duotone" style="font-size: 32px;"></iconify-icon>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div><!-- end col -->

                    <div class="col">
                        <div class="card border-top border-top-4 border-primary h-100" style="transition: all 0.3s ease; cursor: pointer;" onmouseover="this.style.transform='translateY(-5px)'; this.style.boxShadow='0 10px 25px rgba(0,0,0,0.1)'" onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow=''">
                            <div class="card-body p-4">
                                <div class="d-flex align-items-center gap-3 justify-content-between">
                                    <div class="flex-grow-1">
                                        <h5 class="text-muted fs-13 fw-bold text-uppercase mb-2">No of Departments</h5>
                                        <h3 class="my-2 py-1 fw-bold mb-2">71</h3>
                                        <p class="mb-0 text-muted small">
                                            <span class="text-success me-1"><i class="ri-arrow-left-up-box-line"></i>
                                                2.85%</span>
                                            <span class="text-nowrap">From last year</span>
                                        </p>
                                    </div>
                                    <div class="avatar-xl flex-shrink-0">
                                        <span class="avatar-title bg-primary-subtle text-primary rounded-circle fs-42 d-flex align-items-center justify-content-center" style="width: 64px; height: 64px;">
                                            <iconify-icon icon="solar:buildings-bold-duotone" style="font-size: 32px;"></iconify-icon>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div><!-- end col -->

                    <div class="col">
                        <div class="card border-top border-top-4 border-info h-100" style="transition: all 0.3s ease; cursor: pointer;" onmouseover="this.style.transform='translateY(-5px)'; this.style.boxShadow='0 10px 25px rgba(0,0,0,0.1)'" onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow=''">
                            <div class="card-body p-4">
                                <div class="d-flex align-items-center gap-3 justify-content-between">
                                    <div class="flex-grow-1">
                                        <h5 class="text-muted fs-13 fw-bold text-uppercase mb-2">Entrepreneurship</h5>
                                        <h3 class="my-2 py-1 fw-bold mb-2">87</h3>
                                        <p class="mb-0 text-muted small">
                                            <span class="text-success me-1"><i class="ri-arrow-left-up-box-line"></i>
                                                1.32%</span>
                                            <span class="text-nowrap">From last year</span>
                                        </p>
                                    </div>
                                    <div class="avatar-xl flex-shrink-0">
                                        <span class="avatar-title bg-info-subtle text-info rounded-circle fs-42 d-flex align-items-center justify-content-center" style="width: 64px; height: 64px;">
                                            <iconify-icon icon="solar:lightbulb-bold-duotone" style="font-size: 32px;"></iconify-icon>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div><!-- end col -->

                    <div class="col">
                        <div class="card border-top border-top-4 border-primary h-100" style="transition: all 0.3s ease; cursor: pointer;" onmouseover="this.style.transform='translateY(-5px)'; this.style.boxShadow='0 10px 25px rgba(0,0,0,0.1)'" onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow=''">
                            <div class="card-body p-4">
                                <div class="d-flex align-items-center gap-3 justify-content-between">
                                    <div class="flex-grow-1">
                                        <h5 class="text-muted fs-13 fw-bold text-uppercase mb-2">Employment</h5>
                                        <h3 class="my-2 py-1 fw-bold mb-2">94</h3>
                                        <p class="mb-0 text-muted small">
                                            <span class="text-danger me-1"><i class="ri-arrow-left-down-box-line"></i>
                                                9.19%</span>
                                            <span class="text-nowrap">From last year</span>
                                        </p>
                                    </div>
                                    <div class="avatar-xl flex-shrink-0">
                                        <span class="avatar-title bg-primary-subtle text-primary rounded-circle fs-42 d-flex align-items-center justify-content-center" style="width: 64px; height: 64px;">
                                            <iconify-icon icon="solar:case-bold-duotone" style="font-size: 32px;"></iconify-icon>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div><!-- end col -->

                    <div class="col">
                        <div class="card border-top border-top-4 border-success h-100" style="transition: all 0.3s ease; cursor: pointer;" onmouseover="this.style.transform='translateY(-5px)'; this.style.boxShadow='0 10px 25px rgba(0,0,0,0.1)'" onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow=''">
                            <div class="card-body p-4">
                                <div class="d-flex align-items-center gap-3 justify-content-between">
                                    <div class="flex-grow-1">
                                        <h5 class="text-muted fs-13 fw-bold text-uppercase mb-2">Education & Skilling</h5>
                                        <h3 class="my-2 py-1 fw-bold mb-2">96</h3>
                                        <p class="mb-0 text-muted small">
                                            <span class="text-success me-1"><i class="ri-arrow-left-up-box-line"></i>
                                                4.67%</span>
                                            <span class="text-nowrap">From last year</span>
                                        </p>
                                    </div>
                                    <div class="avatar-xl flex-shrink-0">
                                        <span class="avatar-title bg-success-subtle text-success rounded-circle fs-42 d-flex align-items-center justify-content-center" style="width: 64px; height: 64px;">
                                            <iconify-icon icon="solar:book-bold-duotone" style="font-size: 32px;"></iconify-icon>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div><!-- end col -->

                    <div class="col">
                        <div class="card border-top border-top-4 border-success h-100" style="transition: all 0.3s ease; cursor: pointer;" onmouseover="this.style.transform='translateY(-5px)'; this.style.boxShadow='0 10px 25px rgba(0,0,0,0.1)'" onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow=''">
                            <div class="card-body p-4">
                                <div class="d-flex align-items-center gap-3 justify-content-between">
                                    <div class="flex-grow-1">
                                        <h5 class="text-muted fs-13 fw-bold text-uppercase mb-2">Livelihood</h5>
                                        <h3 class="my-2 py-1 fw-bold mb-2">66</h3>
                                        <p class="mb-0 text-muted small">
                                            <span class="text-success me-1"><i class="ri-arrow-left-up-box-line"></i>
                                                2.85%</span>
                                            <span class="text-nowrap">From last year</span>
                                        </p>
                                    </div>
                                    <div class="avatar-xl flex-shrink-0">
                                        <span class="avatar-title bg-success-subtle text-success rounded-circle fs-42 d-flex align-items-center justify-content-center" style="width: 64px; height: 64px;">
                                            <iconify-icon icon="solar:hand-money-bold-duotone" style="font-size: 32px;"></iconify-icon>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div><!-- end col -->

                    <div class="col">
                        <div class="card border-top border-top-4 border-info h-100" style="transition: all 0.3s ease; cursor: pointer;" onmouseover="this.style.transform='translateY(-5px)'; this.style.boxShadow='0 10px 25px rgba(0,0,0,0.1)'" onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow=''">
                            <div class="card-body p-4">
                                <div class="d-flex align-items-center gap-3 justify-content-between">
                                    <div class="flex-grow-1">
                                        <h5 class="text-muted fs-13 fw-bold text-uppercase mb-2">Mobility, Safety & Inclusive Infra</h5>
                                        <h3 class="my-2 py-1 fw-bold mb-2">77</h3>
                                        <p class="mb-0 text-muted small">
                                            <span class="text-success me-1"><i class="ri-arrow-left-up-box-line"></i>
                                                1.32%</span>
                                            <span class="text-nowrap">From last year</span>
                                        </p>
                                    </div>
                                    <div class="avatar-xl flex-shrink-0">
                                        <span class="avatar-title bg-info-subtle text-info rounded-circle fs-42 d-flex align-items-center justify-content-center" style="width: 64px; height: 64px;">
                                            <iconify-icon icon="solar:car-bold-duotone" style="font-size: 32px;"></iconify-icon>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div><!-- end col -->
                </div><!-- end row -->

                <div class="row">
                    <div class="col-xl-6">
                        <div class="card">
                            <div class="d-flex card-header justify-content-between align-items-center">
                                <div>
                                    <h4 class="header-title">WEE Index Uttar Pradesh Overall</h4>
                                </div>
                                
                            </div>

                            <div class="card-body px-0 pt-0" style="max-height: 600px;">
                                <div class="bg-light bg-opacity-50">
                                    <!-- <div class="row text-center">
                                        <div class="col-md-3 col-6">
                                            <p class="text-muted mt-3 mb-1">Total Income</p>
                                            <h4 class="mb-3">
                                                <span class="ri-arrow-left-down-box-line text-success me-1"></span>
                                                <span>$35.2k</span>
                                            </h4>
                                        </div>
                                        <div class="col-md-3 col-6">
                                            <p class="text-muted mt-3 mb-1">Total Expenditure</p>
                                            <h4 class="mb-3">
                                                <span class="ri-arrow-left-up-box-line text-danger me-1"></span>
                                                <span>$18.9k</span>
                                            </h4>
                                        </div>
                                        <div class="col-md-3 col-6">
                                            <p class="text-muted mt-3 mb-1">Capital Invested</p>
                                            <h4 class="mb-3">
                                                <span class="ri-bar-chart-line me-1"></span>
                                                <span>$5.2k</span>
                                            </h4>
                                        </div>
                                        <div class="col-md-3 col-6">
                                            <p class="text-muted mt-3 mb-1">Net Savings</p>
                                            <h4 class="mb-3">
                                                <span class="ri-bank-line me-1"></span>
                                                <span>$8.1k</span>
                                            </h4>
                                        </div>
                                    </div> -->

                                </div>

                                <div dir="ltr" class="px-1">
                                    <img src="assets/images/wee-index-map.jpeg" alt="WEE Index Uttar Pradesh Map" class="img-fluid w-100" style="max-height: 500px; object-fit: contain;">
                                </div>

                            </div>
                        </div> <!-- end card-->
                    </div> <!-- end col-->

                    <div class="col-xl-6">
                        <div class="card">
                            <div class="d-flex card-header justify-content-between align-items-center">
                                <div>
                                    <!-- <h4 class="header-title">WEE Index Uttar Pradesh Overall Details</h4> -->
                                    <h5 class="header-subtitle mb-0 mt-1">District Wise Ranking</h5>
                                </div>
                                
                            </div>

                            <div class="card-body px-0 pt-0" style="max-height: 504px; overflow-y: auto;">
                            <h5 class="header-subtitle mb-3 px-3">Agra</h5>
                                     
                            <div class="border-top border-bottom border-light border-dashed">
                                    <div class="row text-center align-items-center">
                                        <div class="col-md-4 col-6">
                                            <p class="text-muted mt-3 mb-1">WEE Index</p>
                                            <h4 class="mb-3">
                                                <span class="ri-arrow-up-line text-success me-1"></span>
                                                <span>65</span>
                                            </h4>
                                        </div>
                                        <div class="col-md-4 col-6 border-start border-light border-dashed">
                                            <p class="text-muted mt-3 mb-1">Employment</p>
                                            <h4 class="mb-3">
                                                <span class="ri-arrow-down-line text-danger me-1"></span>
                                                <span>94</span>
                                            </h4>
                                        </div>
                                        <div class="col-md-4 col-6 border-start border-light border-dashed">
                                            <p class="text-muted mt-3 mb-1">Education & Skilling</p>
                                            <h4 class="mb-3">
                                                <span class="ri-arrow-up-line text-success me-1"></span>
                                                <span>96</span>
                                            </h4>
                                        </div>
                                    </div>
                                    <div class="row text-center align-items-center border-top border-light border-dashed">
                                        <div class="col-md-4 col-6 bg-light bg-opacity-50">
                                            <p class="text-muted mt-3 mb-1">Livelihood</p>
                                            <h4 class="mb-3">
                                                <span class="ri-arrow-up-line text-success me-1"></span>
                                                <span>66</span>
                                            </h4>
                                        </div>
                                        <div class="col-md-4 col-6 bg-light bg-opacity-50 border-start border-light border-dashed">
                                            <p class="text-muted mt-3 mb-1">Mobility, Safety & Inclusive Infra</p>
                                            <h4 class="mb-3">
                                                <span class="ri-arrow-down-line text-danger me-1"></span>
                                                <span>77</span>
                                            </h4>
                                        </div>
                                        <div class="col-md-4 col-6 bg-light bg-opacity-50 border-start border-light border-dashed">
                                            <p class="text-muted mt-3 mb-1">Entrepreneurship</p>
                                            <h4 class="mb-3">
                                                <span class="ri-arrow-down-line text-danger me-1"></span>
                                                <span>87</span>
                                            </h4>
                                        </div>
                                    </div>
                                </div>

                                <!-- <div dir="ltr" class="px-2">
                                    <div id="revenue-chart" class="apex-charts" data-colors="#0acf97,#45bbe0"></div>
                                </div> -->

                                <!-- ALIGARH Section -->
                                <div class="mt-4">
                                    <h5 class="header-subtitle mb-3 px-3">ALIGARH</h5>
                                    <div class="border-top border-bottom border-light border-dashed">
                                        <div class="row text-center align-items-center">
                                            <div class="col-md-4 col-6">
                                                <p class="text-muted mt-3 mb-1">WEE Index</p>
                                                <h4 class="mb-3">
                                                    <span class="ri-arrow-up-line text-success me-1"></span>
                                                    <span>65</span>
                                                </h4>
                                            </div>
                                            <div class="col-md-4 col-6 border-start border-light border-dashed">
                                                <p class="text-muted mt-3 mb-1">Employment</p>
                                                <h4 class="mb-3">
                                                    <span class="ri-arrow-down-line text-danger me-1"></span>
                                                    <span>94</span>
                                                </h4>
                                            </div>
                                            <div class="col-md-4 col-6 border-start border-light border-dashed">
                                                <p class="text-muted mt-3 mb-1">Education & Skilling</p>
                                                <h4 class="mb-3">
                                                    <span class="ri-arrow-up-line text-success me-1"></span>
                                                    <span>96</span>
                                                </h4>
                                            </div>
                                        </div>
                                        <div class="row text-center align-items-center border-top border-light border-dashed">
                                            <div class="col-md-4 col-6 bg-light bg-opacity-50">
                                                <p class="text-muted mt-3 mb-1">Livelihood</p>
                                                <h4 class="mb-3">
                                                    <span class="ri-arrow-down-line text-danger me-1"></span>
                                                    <span>66</span>
                                                </h4>
                                            </div>
                                            <div
                                                class="col-md-4 col-6 bg-light bg-opacity-50 border-start border-light border-dashed">
                                                <p class="text-muted mt-3 mb-1">Mobility, Safety & Inclusive Infra</p>
                                                <h4 class="mb-3">
                                                    <span class="ri-arrow-up-line text-success me-1"></span>
                                                    <span>77</span>
                                                </h4>
                                            </div>
                                            <div class="col-md-4 col-6 bg-light bg-opacity-50 border-start border-light border-dashed">
                                                <p class="text-muted mt-3 mb-1">Entrepreneurship</p>
                                                <h4 class="mb-3">
                                                    <span class="ri-arrow-down-line text-danger me-1"></span>
                                                    <span>87</span>
                                                </h4>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <!-- AMBEDKAR NAGAR Section -->
                                <div class="mt-4">
                                    <h5 class="header-subtitle mb-3 px-3">AMBEDKAR NAGAR</h5>
                                    <div class="border-top border-bottom border-light border-dashed">
                                        <div class="row text-center align-items-center">
                                            <div class="col-md-4 col-6">
                                                <p class="text-muted mt-3 mb-1">WEE Index</p>
                                                <h4 class="mb-3">
                                                    <span class="ri-arrow-up-line text-success me-1"></span>
                                                    <span>65</span>
                                                </h4>
                                            </div>
                                            <div class="col-md-4 col-6 border-start border-light border-dashed">
                                                <p class="text-muted mt-3 mb-1">Employment</p>
                                                <h4 class="mb-3">
                                                    <span class="ri-arrow-down-line text-danger me-1"></span>
                                                    <span>94</span>
                                                </h4>
                                            </div>
                                            <div class="col-md-4 col-6 border-start border-light border-dashed">
                                                <p class="text-muted mt-3 mb-1">Education & Skilling</p>
                                                <h4 class="mb-3">
                                                    <span class="ri-arrow-up-line text-success me-1"></span>
                                                    <span>96</span>
                                                </h4>
                                            </div>
                                        </div>
                                        <div class="row text-center align-items-center border-top border-light border-dashed">
                                            <div class="col-md-4 col-6 bg-light bg-opacity-50">
                                                <p class="text-muted mt-3 mb-1">Livelihood</p>
                                                <h4 class="mb-3">
                                                    <span class="ri-arrow-down-line text-danger me-1"></span>
                                                    <span>66</span>
                                                </h4>
                                            </div>
                                            <div
                                                class="col-md-4 col-6 bg-light bg-opacity-50 border-start border-light border-dashed">
                                                <p class="text-muted mt-3 mb-1">Mobility, Safety & Inclusive Infra</p>
                                                <h4 class="mb-3">
                                                    <span class="ri-arrow-up-line text-success me-1"></span>
                                                    <span>77</span>
                                                </h4>
                                            </div>
                                            <div class="col-md-4 col-6 bg-light bg-opacity-50 border-start border-light border-dashed">
                                                <p class="text-muted mt-3 mb-1">Entrepreneurship</p>
                                                <h4 class="mb-3">
                                                    <span class="ri-arrow-down-line text-danger me-1"></span>
                                                    <span>87</span>
                                                </h4>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <!-- AMETHI Section -->
                                <div class="mt-4">
                                    <h5 class="header-subtitle mb-3 px-3">AMETHI</h5>
                                    <div class="border-top border-bottom border-light border-dashed">
                                        <div class="row text-center align-items-center">
                                            <div class="col-md-4 col-6">
                                                <p class="text-muted mt-3 mb-1">WEE Index</p>
                                                <h4 class="mb-3">
                                                    <span class="ri-arrow-up-line text-success me-1"></span>
                                                    <span>65</span>
                                                </h4>
                                            </div>
                                            <div class="col-md-4 col-6 border-start border-light border-dashed">
                                                <p class="text-muted mt-3 mb-1">Employment</p>
                                                <h4 class="mb-3">
                                                    <span class="ri-arrow-down-line text-danger me-1"></span>
                                                    <span>94</span>
                                                </h4>
                                            </div>
                                            <div class="col-md-4 col-6 border-start border-light border-dashed">
                                                <p class="text-muted mt-3 mb-1">Education & Skilling</p>
                                                <h4 class="mb-3">
                                                    <span class="ri-arrow-up-line text-success me-1"></span>
                                                    <span>96</span>
                                                </h4>
                                            </div>
                                        </div>
                                        <div class="row text-center align-items-center border-top border-light border-dashed">
                                            <div class="col-md-4 col-6 bg-light bg-opacity-50">
                                                <p class="text-muted mt-3 mb-1">Livelihood</p>
                                                <h4 class="mb-3">
                                                    <span class="ri-arrow-down-line text-danger me-1"></span>
                                                    <span>66</span>
                                                </h4>
                                            </div>
                                            <div
                                                class="col-md-4 col-6 bg-light bg-opacity-50 border-start border-light border-dashed">
                                                <p class="text-muted mt-3 mb-1">Mobility, Safety & Inclusive Infra</p>
                                                <h4 class="mb-3">
                                                    <span class="ri-arrow-up-line text-success me-1"></span>
                                                    <span>77</span>
                                                </h4>
                                            </div>
                                            <div class="col-md-4 col-6 bg-light bg-opacity-50 border-start border-light border-dashed">
                                                <p class="text-muted mt-3 mb-1">Entrepreneurship</p>
                                                <h4 class="mb-3">
                                                    <span class="ri-arrow-down-line text-danger me-1"></span>
                                                    <span>87</span>
                                                </h4>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <!-- AMROHA Section -->
                                <div class="mt-4">
                                    <h5 class="header-subtitle mb-3 px-3">AMROHA</h5>
                                    <div class="border-top border-bottom border-light border-dashed">
                                        <div class="row text-center align-items-center">
                                            <div class="col-md-4 col-6">
                                                <p class="text-muted mt-3 mb-1">WEE Index</p>
                                                <h4 class="mb-3">
                                                    <span class="ri-arrow-up-line text-success me-1"></span>
                                                    <span>65</span>
                                                </h4>
                                            </div>
                                            <div class="col-md-4 col-6 border-start border-light border-dashed">
                                                <p class="text-muted mt-3 mb-1">Employment</p>
                                                <h4 class="mb-3">
                                                    <span class="ri-arrow-down-line text-danger me-1"></span>
                                                    <span>94</span>
                                                </h4>
                                            </div>
                                            <div class="col-md-4 col-6 border-start border-light border-dashed">
                                                <p class="text-muted mt-3 mb-1">Education & Skilling</p>
                                                <h4 class="mb-3">
                                                    <span class="ri-arrow-up-line text-success me-1"></span>
                                                    <span>96</span>
                                                </h4>
                                            </div>
                                        </div>
                                        <div class="row text-center align-items-center border-top border-light border-dashed">
                                            <div class="col-md-4 col-6 bg-light bg-opacity-50">
                                                <p class="text-muted mt-3 mb-1">Livelihood</p>
                                                <h4 class="mb-3">
                                                    <span class="ri-arrow-down-line text-danger me-1"></span>
                                                    <span>66</span>
                                                </h4>
                                            </div>
                                            <div
                                                class="col-md-4 col-6 bg-light bg-opacity-50 border-start border-light border-dashed">
                                                <p class="text-muted mt-3 mb-1">Mobility, Safety & Inclusive Infra</p>
                                                <h4 class="mb-3">
                                                    <span class="ri-arrow-up-line text-success me-1"></span>
                                                    <span>77</span>
                                                </h4>
                                            </div>
                                            <div class="col-md-4 col-6 bg-light bg-opacity-50 border-start border-light border-dashed">
                                                <p class="text-muted mt-3 mb-1">Entrepreneurship</p>
                                                <h4 class="mb-3">
                                                    <span class="ri-arrow-down-line text-danger me-1"></span>
                                                    <span>87</span>
                                                </h4>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <!-- AURAIYA Section -->
                                <div class="mt-4">
                                    <h5 class="header-subtitle mb-3 px-3">AURAIYA</h5>
                                    <div class="border-top border-bottom border-light border-dashed">
                                        <div class="row text-center align-items-center">
                                            <div class="col-md-4 col-6">
                                                <p class="text-muted mt-3 mb-1">WEE Index</p>
                                                <h4 class="mb-3">
                                                    <span class="ri-arrow-up-line text-success me-1"></span>
                                                    <span>65</span>
                                                </h4>
                                            </div>
                                            <div class="col-md-4 col-6 border-start border-light border-dashed">
                                                <p class="text-muted mt-3 mb-1">Employment</p>
                                                <h4 class="mb-3">
                                                    <span class="ri-arrow-down-line text-danger me-1"></span>
                                                    <span>94</span>
                                                </h4>
                                            </div>
                                            <div class="col-md-4 col-6 border-start border-light border-dashed">
                                                <p class="text-muted mt-3 mb-1">Education & Skilling</p>
                                                <h4 class="mb-3">
                                                    <span class="ri-arrow-up-line text-success me-1"></span>
                                                    <span>96</span>
                                                </h4>
                                            </div>
                                        </div>
                                        <div class="row text-center align-items-center border-top border-light border-dashed">
                                            <div class="col-md-4 col-6 bg-light bg-opacity-50">
                                                <p class="text-muted mt-3 mb-1">Livelihood</p>
                                                <h4 class="mb-3">
                                                    <span class="ri-arrow-down-line text-danger me-1"></span>
                                                    <span>66</span>
                                                </h4>
                                            </div>
                                            <div
                                                class="col-md-4 col-6 bg-light bg-opacity-50 border-start border-light border-dashed">
                                                <p class="text-muted mt-3 mb-1">Mobility, Safety & Inclusive Infra</p>
                                                <h4 class="mb-3">
                                                    <span class="ri-arrow-up-line text-success me-1"></span>
                                                    <span>77</span>
                                                </h4>
                                            </div>
                                            <div class="col-md-4 col-6 bg-light bg-opacity-50 border-start border-light border-dashed">
                                                <p class="text-muted mt-3 mb-1">Entrepreneurship</p>
                                                <h4 class="mb-3">
                                                    <span class="ri-arrow-down-line text-danger me-1"></span>
                                                    <span>87</span>
                                                </h4>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div> <!-- end card-->
                    </div> <!-- end col-->
                </div> <!-- end row-->

                <!-- Entrepreneurship Graphs Section -->
                <div class="row">
                    <div class="col-xl-6">
                        <div class="card">
                            <div class="card-body">
                                <h4 class="header-title">WEE Index</h4>
                                <div dir="ltr" style="max-height: 400px; overflow-y: auto;">
                                    <div id="entrepreneurship-chart-1" class="apex-charts" data-colors="#39afd1"></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-xl-6">
                        <div class="card">
                            <div class="card-body">
                                <h4 class="header-title">Employment</h4>
                                <div dir="ltr" style="max-height: 400px; overflow-y: auto;">
                                    <div id="entrepreneurship-chart-2" class="apex-charts" data-colors="#39afd1"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="row">
                    <div class="col-xl-6">
                        <div class="card">
                            <div class="card-body">
                                <h4 class="header-title">Education & Skilling</h4>
                                <div dir="ltr" style="max-height: 400px; overflow-y: auto;">
                                    <div id="entrepreneurship-chart-3" class="apex-charts" data-colors="#39afd1"></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-xl-6">
                        <div class="card">
                            <div class="card-body">
                                <h4 class="header-title">Livelihood</h4>
                                <div dir="ltr" style="max-height: 400px; overflow-y: auto;">
                                    <div id="entrepreneurship-chart-4" class="apex-charts" data-colors="#39afd1"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="row">
                    <div class="col-xl-6">
                        <div class="card">
                            <div class="card-body">
                                <h4 class="header-title">Mobility, Safety & Inclusive Infra</h4>
                                <div dir="ltr" style="max-height: 400px; overflow-y: auto;">
                                    <div id="entrepreneurship-chart-5" class="apex-charts" data-colors="#39afd1"></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-xl-6">
                        <div class="card">
                            <div class="card-body">
                                <h4 class="header-title">Entrepreneurship</h4>
                                <div dir="ltr" style="max-height: 400px; overflow-y: auto;">
                                    <div id="entrepreneurship-chart-6" class="apex-charts" data-colors="#39afd1"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                

            </div> <!-- container -->

            <?php include('partials/footer.php'); ?>

        </div>

        <!-- ============================================================== -->
        <!-- End Page content -->
        <!-- ============================================================== -->

    </div>
    <!-- END wrapper -->

    <?php include('partials/customizer.php'); ?>

    <?php include('partials/footer-scripts.php'); ?>

    <!-- Apex Chart js -->
    <script src="assets/vendor/apexcharts/apexcharts.min.js"></script>

    <!-- Projects Analytics Dashboard App js -->
    <script src="assets/js/pages/dashboard.js"></script>

    <!-- Entrepreneurship Charts Script -->
    <script>
        // Generate 75 districts dummy data for Entrepreneurship
        function generateDistrictsData() {
            const districts = [
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
            
            // Create pairs of district and data
            const pairs = [];
            for (let i = 0; i < districts.length; i++) {
                // Generate random values similar to Basic Bar Chart range
                pairs.push({
                    district: districts[i],
                    value: Math.floor(Math.random() * 1000) + 400
                });
            }
            
            // Sort by value from high to low
            pairs.sort((a, b) => b.value - a.value);
            
            // Separate back into districts and data arrays
            const sortedDistricts = pairs.map(pair => pair.district);
            const sortedData = pairs.map(pair => pair.value);
            
            return { districts: sortedDistricts, data: sortedData };
        }

        // Function to create Basic Bar Chart (matching charts-apex-bar.php)
        function createEntrepreneurshipChart(chartId) {
            const chartData = generateDistrictsData();
            var colors = ["#39afd1"];
            var dataColors = $("#" + chartId).data('colors');
            if (dataColors) {
                colors = dataColors.split(",");
            }

            var options = {
                chart: {
                    height: 75 * 25, // Height for 75 districts
                    type: 'bar',
                    toolbar: {
                        show: false
                    }
                },
                plotOptions: {
                    bar: {
                        horizontal: true,
                    }
                },
                dataLabels: {
                    enabled: false
                },
                series: [{
                    data: chartData.data
                }],
                colors: colors,
                xaxis: {
                    categories: chartData.districts,
                    axisBorder: {
                        show: false,
                    }
                },
                states: {
                    hover: {
                        filter: 'none'
                    }
                },
                grid: {
                    borderColor: '#f1f3fa'
                }
            };

            var chart = new ApexCharts(
                document.querySelector("#" + chartId),
                options
            );
            chart.render();
        }

        // Initialize all 6 charts
        for (let i = 1; i <= 6; i++) {
            createEntrepreneurshipChart('entrepreneurship-chart-' + i);
        }
    </script>
</body>

</html>