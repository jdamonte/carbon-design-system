// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"js/index.js":[function(require,module,exports) {
var chartHolder = document.getElementById("my-bar-chart");
var stackedBarData = [// refer to tabular data format tutorial
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
}];
var stackedBarOptions = {
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
}; // initialize the chart

new Charts.StackedBarChart(chartHolder, {
  data: stackedBarData,
  options: stackedBarOptions
});
/* PIE CHART */

var PiechartHolder = document.getElementById("my-pie-chart");
var PieChartData = [// refer to tabular data format tutorial
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
}];
var PieChartOptions = {
  "title": "Pie (centered)",
  "resizable": true,
  "legend": {
    "alignment": "center"
  },
  "pie": {
    "alignment": "center"
  }
  /* "height": "232px" */

}; // initialize the chart

new Charts.PieChart(PiechartHolder, {
  data: PieChartData,
  options: PieChartOptions
});
/* DONUT CHART */

var DonutchartHolder = document.getElementById("my-donut-chart");
var DonutChartData = [// refer to tabular data format tutorial
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
  "value": 16000
}, {
  "group": "Misc",
  "value": 25000
}];
var DonutChartOptions = {
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
  }
  /* "height": "232px" */

}; // initialize the chart

new Charts.DonutChart(DonutchartHolder, {
  data: DonutChartData,
  options: DonutChartOptions
});
/* METER CHART */

var MeterchartHolder = document.getElementById("my-meter-chart");
var MeterChartData = [// refer to tabular data format tutorial
{
  "group": "Dataset 1",
  "value": 56
}];
var MeterChartOptions = {
  "title": "Meter Chart - with statuses",
  "meter": {
    "peak": 80,
    "status": {
      "ranges": [{
        "range": [0, 50],
        "status": "success"
      }, {
        "range": [50, 60],
        "status": "warning"
      }, {
        "range": [60, 100],
        "status": "danger"
      }]
    }
  },
  "height": "100px"
}; // initialize the chart

new Charts.MeterChart(MeterchartHolder, {
  data: MeterChartData,
  options: MeterChartOptions
});
/*Guage CHART */

var GaugechartHolder = document.getElementById("my-guage-chart");
var GaugeChartData = [// refer to tabular data format tutorial
{
  "group": "value",
  "value": 42
}, {
  "group": "delta",
  "value": -13.37
}];
var GaugeChartOptions = {
  "title": "Gauge circular -- warning status",
  "resizable": true,
  "height": "250px",
  "gauge": {
    "status": "warning",
    "type": "full"
  }
}; // initialize the chart

new Charts.GaugeChart(GaugechartHolder, {
  data: GuageChartData,
  options: GauageChartOptions
});
/* Simple BAR CHART */

var Gauge2chartHolder = document.getElementById("my-simplebar-chart");
var Gauge2ChartData = [// refer to tabular data format tutorial
{
  "group": "value",
  "value": 42
}, {
  "group": "delta",
  "value": -13.37
}];
var Gauge2ChartOptions = {
  "title": "Gauge circular -- warning status",
  "resizable": true,
  "height": "250px",
  "gauge": {
    "status": "warning",
    "type": "full"
  }
}; // initialize the chart

new Charts.GaugeChart(Gauge2chartHolder, {
  data: Guage2ChartData,
  options: Gauage2ChartOptions
});
},{}],"../../../../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "57483" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../../../../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","js/index.js"], null)
//# sourceMappingURL=/js.00a46daa.js.map