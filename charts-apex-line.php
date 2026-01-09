<!DOCTYPE html>
<html lang="en">

<head>
    <?php
    $title = "Apex Line Chart";
    $subtitle = "Apex";
    include('partials/title-meta.php');
    ?>

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

                <div class="row">
                    <div class="col-xl-6">
                        <div class="card">
                            <div class="card-body">
                                <h4 class="header-title mb-4">Simple line chart</h4>
                                <div dir="ltr">
                                    <div id="line-chart" class="apex-charts" data-colors="#f9bc0b"></div>
                                </div>
                            </div>
                            <!-- end card body-->
                        </div>
                        <!-- end card -->
                    </div>
                    <!-- end col-->

                    <div class="col-xl-6">
                        <div class="card">
                            <div class="card-body">
                                <h4 class="header-title mb-4">Line with Data Labels</h4>
                                <div dir="ltr">
                                    <div id="line-chart-datalabel" class="apex-charts" data-colors="#45bbe0,#777edd">
                                    </div>
                                </div>
                            </div>
                            <!-- end card body-->
                        </div>
                        <!-- end card -->
                    </div>
                    <!-- end col-->
                </div>
                <!-- end row-->

                <div class="row">
                    <div class="col-xl-6">
                        <div class="card">
                            <div class="card-body">
                                <h4 class="header-title mb-4">Zoomable Timeseries</h4>
                                <div dir="ltr">
                                    <div id="line-chart-zoomable" class="apex-charts" data-colors="#fa5c7c"></div>
                                </div>
                            </div>
                            <!-- end card body-->
                        </div>
                        <!-- end card -->
                    </div>
                    <!-- end col-->

                    <div class="col-xl-6">
                        <div class="card">
                            <div class="card-body">
                                <h4 class="header-title mb-4">Line Chart with Annotations</h4>
                                <div dir="ltr">
                                    <div id="line-chart-annotations" class="apex-charts" data-colors="#39afd1"></div>
                                </div>
                            </div>
                            <!-- end card body-->
                        </div>
                        <!-- end card -->
                    </div>
                    <!-- end col-->
                </div>
                <!-- end row-->

                <div class="row">
                    <div class="col-xl-6">
                        <div class="card">
                            <div class="card-body">
                                <h4 class="header-title mb-4">Syncing charts</h4>
                                <div id="line-chart-syncing2" data-colors="#777edd"></div>
                                <div dir="ltr">
                                    <div id="line-chart-syncing" class="apex-charts" data-colors="#45bbe0"></div>
                                </div>
                            </div>
                            <!-- end card body-->
                        </div>
                        <!-- end card -->
                    </div>
                    <!-- end col-->

                    <div class="col-xl-6">
                        <div class="card">
                            <div class="card-body">
                                <h4 class="header-title mb-4">Gradient Line Chart</h4>
                                <div dir="ltr">
                                    <div id="line-chart-gradient" class="apex-charts"></div>
                                </div>
                            </div>
                            <!-- end card body-->
                        </div>
                        <!-- end card -->
                    </div>
                    <!-- end col-->
                </div>
                <!-- end row-->

                <div class="row">
                    <div class="col-xl-6">
                        <div class="card">
                            <div class="card-body">
                                <h4 class="header-title mb-4">Missing / Null values</h4>
                                <div dir="ltr">
                                    <div id="line-chart-missing" class="apex-charts"
                                        data-colors="#f9bc0b,#0acf97,#39afd1"></div>
                                </div>
                            </div>
                            <!-- end card body-->
                        </div>
                        <!-- end card -->
                    </div>
                    <!-- end col-->

                    <div class="col-xl-6">
                        <div class="card">
                            <div class="card-body">
                                <h4 class="header-title mb-4">Dashed Line Chart</h4>
                                <div dir="ltr">
                                    <div id="line-chart-dashed" class="apex-charts"
                                        data-colors="#45bbe0,#0acf97,#39afd1"></div>
                                </div>
                            </div>
                            <!-- end card body-->
                        </div>
                        <!-- end card -->
                    </div>
                    <!-- end col-->
                </div>
                <!-- end row-->

                <div class="row">
                    <div class="col-xl-6">
                        <div class="card">
                            <div class="card-body">
                                <h4 class="header-title mb-3">Stepline Chart</h4>
                                <div dir="ltr">
                                    <div id="line-chart-stepline" class="apex-charts" data-colors="#0acf97"></div>
                                </div>
                            </div>
                            <!-- end card body-->
                        </div>
                        <!-- end card -->
                    </div>
                    <!-- end col-->

                    <div class="col-xl-6">
                        <div class="card">
                            <div class="card-body">
                                <h4 class="header-title">Brush Chart</h4>
                                <div dir="ltr">
                                    <div id="chart-line2" class="apex-charts" data-colors="#777edd"></div>
                                    <div id="chart-line" class="apex-charts" data-colors="#39afd1"></div>
                                </div>
                            </div>
                            <!-- end card body-->
                        </div>
                        <!-- end card -->
                    </div>
                    <!-- end col-->
                </div>
                <!-- end row-->

                <div class="row">
                    <div class="col-xl-6">
                        <div class="card">
                            <div class="card-body">
                                <h4 class="header-title">Realtime Chart</h4>
                                <div dir="ltr">
                                    <div id="line-chart-realtime" class="apex-charts" data-colors="#39afd1"></div>
                                </div>
                            </div>
                            <!-- end card body-->
                        </div>
                        <!-- end card -->
                    </div>
                    <!-- end col-->
                </div>
                <!-- end row-->

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

    <!-- Apex Chart line Demo js -->
    <script src="https://apexcharts.com/samples/assets/stock-prices.js"></script>
    <script src="https://apexcharts.com/samples/assets/irregular-data-series.js"></script>
    <script src="assets/js/components/chart-apex-line.js"></script>

</body>

</html>