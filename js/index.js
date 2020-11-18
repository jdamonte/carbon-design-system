const chartHolder = document.getElementById("my-bar-chart");

const stackedBarData = [
    // refer to tabular data format tutorial
    {
        "group": "Dataset 1",
        "key": "Qty",
        "value": 65000
    }, {
        "group": "Dataset 1",
        "key": "More",
        "value": 29123
    }, {
        "group": "Dataset 1",
        "key": "Sold",
        "value": 35213
    }, {
        "group": "Dataset 1",
        "key": "Restocking",
        "value": 51213
    }, {
        "group": "Dataset 1",
        "key": "Misc",
        "value": 16932
    }, {
        "group": "Dataset 2",
        "key": "Qty",
        "value": 32432
    }, {
        "group": "Dataset 2",
        "key": "More",
        "value": 21312
    }, {
        "group": "Dataset 2",
        "key": "Sold",
        "value": 56456
    }, {
        "group": "Dataset 2",
        "key": "Restocking",
        "value": 21312
    }, {
        "group": "Dataset 2",
        "key": "Misc",
        "value": 34234
    }, {
        "group": "Dataset 3",
        "key": "Qty",
        "value": 12312
    }, {
        "group": "Dataset 3",
        "key": "More",
        "value": 23232
    }, {
        "group": "Dataset 3",
        "key": "Sold",
        "value": 34232
    }, {
        "group": "Dataset 3",
        "key": "Restocking",
        "value": 12312
    }, {
        "group": "Dataset 3",
        "key": "Misc",
        "value": 34234
    }, {
        "group": "Dataset 4",
        "key": "Qty",
        "value": 32423
    }, {
        "group": "Dataset 4",
        "key": "More",
        "value": 21313
    }, {
        "group": "Dataset 4",
        "key": "Sold",
        "value": 64353
    }, {
        "group": "Dataset 4",
        "key": "Restocking",
        "value": 24134
    }, {
        "group": "Dataset 4",
        "key": "Misc",
        "value": 32423
    }
];

const stackedBarOptions = {
    "title": "Samples Logged (YTD)",
    "axes": {
        "left": {
            "mapsTo": "value",
            "stacked": true
        },
        "bottom": {
            "mapsTo": "key",
            "scaleType": "labels"
        }
    },
    "height": "232px"
};

// initialize the chart
new Charts.StackedBarChart(chartHolder, {
    data: stackedBarData,
    options: stackedBarOptions,
});

/* PIE CHART */

const PiechartHolder = document.getElementById("my-pie-chart");

const PieChartData = [
    // refer to tabular data format tutorial
    {
        "group": "2V2N 9KYPM version 1",
        "value": 20000
    }, {
        "group": "L22I P66EP L22I P66EP L22I P66EP",
        "value": 65000
    }, {
        "group": "JQAI 2M4L1",
        "value": 75000
    }, {
        "group": "J9DZ F37AP",
        "value": 1200
    }, {
        "group": "YEL48 Q6XK YEL48",
        "value": 10000
    }, {
        "group": "Misc",
        "value": 25000
    }
];

const PieChartOptions = {
    "title": "Pie (centered)",
    "resizable": true,
    "legend": {
        "alignment": "center"
    },
    "pie": {
        "alignment": "center"
    },
    /* "height": "232px" */
};

// initialize the chart
new Charts.PieChart(PiechartHolder, {
    data: PieChartData,
    options: PieChartOptions,
});



/* DONUT CHART */

const DonutchartHolder = document.getElementById("my-donut-chart");

const DonutChartData = [
    // refer to tabular data format tutorial
    {
        "group": "2V2N 9KYPM version 1",
        "value": 20000
    },
    {
        "group": "L22I P66EP L22I P66EP L22I P66EP",
        "value": 65000
    },
    {
        "group": "JQAI 2M4L1",
        "value": 75000
    },
    {
        "group": "J9DZ F37AP",
        "value": 1200
    },
    {
        "group": "YEL48 Q6XK YEL48",
        "value": 16000
    },
    {
        "group": "Misc",
        "value": 25000
    }
];

const DonutChartOptions = {
    "title": "Customers (Hong Kong)",
    "resizable": true,
    "legend": {
        "alignment": "center"
    },
    "donut": {
        "center": {
            "label": "NAmer Customers"
        },
        "alignment": "center"
    },
    /* "height": "232px" */
};

// initialize the chart
new Charts.DonutChart(DonutchartHolder, {
    data: DonutChartData,
    options: DonutChartOptions,
});




/* METER CHART */

const MeterchartHolder = document.getElementById("my-meter-chart");

const MeterChartData = [
    // refer to tabular data format tutorial
    {
        "group": "Dataset 1",
        "value": 56
    }
];

const MeterChartOptions = {
    "title": "Meter Chart - with statuses",
    "meter": {
        "peak": 80,
        "status": {
            "ranges": [{
                    "range": [
                        0,
                        50
                    ],
                    "status": "success"
                },
                {
                    "range": [
                        50,
                        60
                    ],
                    "status": "warning"
                },
                {
                    "range": [
                        60,
                        100
                    ],
                    "status": "danger"
                }
            ]
        }
    },
    "height": "100px"
};

// initialize the chart
new Charts.MeterChart(MeterchartHolder, {
    data: MeterChartData,
    options: MeterChartOptions,
});

/*Guage CHART */

const GaugechartHolder = document.getElementById("my-guage-chart");

const GaugeChartData = [
    // refer to tabular data format tutorial
    {
        "group": "value",
        "value": 42
    },
    {
        "group": "delta",
        "value": -13.37
    }
];

const GaugeChartOptions = {
    "title": "Gauge circular -- warning status",
    "resizable": true,
    "height": "250px",
    "gauge": {
        "status": "warning",
        "type": "full"
    }
};
// initialize the chart
new Charts.GaugeChart(GaugechartHolder, {
    data: GuageChartData,
    options: GauageChartOptions,
});


/* Simple BAR CHART */

const Gauge2chartHolder = document.getElementById("my-simplebar-chart");

const Gauge2ChartData = [
    // refer to tabular data format tutorial
    {
        "group": "value",
        "value": 42
    },
    {
        "group": "delta",
        "value": -13.37
    }
];

const Gauge2ChartOptions = {
    "title": "Gauge circular -- warning status",
    "resizable": true,
    "height": "250px",
    "gauge": {
        "status": "warning",
        "type": "full"
    }
};
// initialize the chart
new Charts.GaugeChart(Gauge2chartHolder, {
    data: Guage2ChartData,
    options: Gauage2ChartOptions,
});