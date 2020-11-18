// grab chart holder DOM element
const SimpleBarChartHolder = document.getElementById("my-simple-chart");

const SimpleBarChartData = [{
        "group": "Qty",
        "value": 65000
    },
    {
        "group": "More",
        "value": 29123
    },
    {
        "group": "Sold",
        "value": 35213
    },
    {
        "group": "Restocking",
        "value": 51213
    },
    {
        "group": "Misc",
        "value": 16932
    }
];

const SimpleBarChartOptions = {
    "title": "Simple bar (discrete)",
    "axes": {
        "left": {
            "mapsTo": "value"
        },
        "bottom": {
            "mapsTo": "group",
            "scaleType": "labels"
        }
    },
    "height": "240px"
};

// initialize the chart
new Charts.SimpleBarChart(SimpleBarChartHolder, {
    data: SimpleBarChartData,
    options: SimpleBarChartOptions,
});

/* STACKED AREA CHARD */
const StackedAreaChartHolder = document.getElementById("my-area-chart");

const StackedAreaChartData = [{
        "group": "Dataset 1",
        "date": "2019-01-01T06:00:00.000Z",
        "value": 10000
    },
    {
        "group": "Dataset 1",
        "date": "2019-01-05T06:00:00.000Z",
        "value": 65000
    },
    {
        "group": "Dataset 1",
        "date": "2019-01-08T06:00:00.000Z",
        "value": 10000
    },
    {
        "group": "Dataset 1",
        "date": "2019-01-13T06:00:00.000Z",
        "value": 49213
    },
    {
        "group": "Dataset 1",
        "date": "2019-01-17T06:00:00.000Z",
        "value": 51213
    },
    {
        "group": "Dataset 2",
        "date": "2019-01-01T06:00:00.000Z",
        "value": 20000
    },
    {
        "group": "Dataset 2",
        "date": "2019-01-05T06:00:00.000Z",
        "value": 25000
    },
    {
        "group": "Dataset 2",
        "date": "2019-01-08T06:00:00.000Z",
        "value": 60000
    },
    {
        "group": "Dataset 2",
        "date": "2019-01-13T06:00:00.000Z",
        "value": 30213
    },
    {
        "group": "Dataset 2",
        "date": "2019-01-17T06:00:00.000Z",
        "value": 55213
    },
    {
        "group": "Dataset 3",
        "date": "2019-01-01T06:00:00.000Z",
        "value": 30000
    },
    {
        "group": "Dataset 3",
        "date": "2019-01-05T06:00:00.000Z",
        "value": 20000
    },
    {
        "group": "Dataset 3",
        "date": "2019-01-08T06:00:00.000Z",
        "value": 40000
    },
    {
        "group": "Dataset 3",
        "date": "2019-01-13T06:00:00.000Z",
        "value": 60213
    },
    {
        "group": "Dataset 3",
        "date": "2019-01-17T06:00:00.000Z",
        "value": 25213
    }
];

const StackedAreaChartOptions = {
    "title": "Stacked area (time series) - Zoom bar enabled",
    "axes": {
        "left": {
            "stacked": true
        },
        "bottom": {
            "scaleType": "time"
        }
    },
    "curve": "curveMonotoneX",
    "experimental": true,
    "zoomBar": {
        "top": {
            "enabled": true
        }
    },
    "height": "240px"

};

// initialize the chart
new Charts.StackedAreaChart(StackedAreaChartHolder, {
    data: StackedAreaChartData,
    options: StackedAreaChartOptions,
});