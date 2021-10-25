// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function(modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
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

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x) {
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
  newRequire.register = function(id, exports) {
    modules[id] = [
      function(require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function() {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function() {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"cgLB2":[function(require,module,exports) {
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "4a236f9275d0a351";
module.bundle.HMR_BUNDLE_ID = "5bb40f258eb82e9b";
"use strict";
function _createForOfIteratorHelper(o, allowArrayLike) {
    var it;
    if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function F() {
            };
            return {
                s: F,
                n: function n() {
                    if (i >= o.length) return {
                        done: true
                    };
                    return {
                        done: false,
                        value: o[i++]
                    };
                },
                e: function e(_e) {
                    throw _e;
                },
                f: F
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true, didErr = false, err;
    return {
        s: function s() {
            it = o[Symbol.iterator]();
        },
        n: function n() {
            var step = it.next();
            normalCompletion = step.done;
            return step;
        },
        e: function e(_e2) {
            didErr = true;
            err = _e2;
        },
        f: function f() {
            try {
                if (!normalCompletion && it.return != null) it.return();
            } finally{
                if (didErr) throw err;
            }
        }
    };
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function accept(fn) {
            this._acceptCallbacks.push(fn || function() {
            });
        },
        dispose: function dispose(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? 'wss' : 'ws';
    var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/'); // $FlowFixMe
    ws.onmessage = function(event) {
        checkedAssets = {
        };
        acceptedAssets = {
        };
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === 'update') {
            // Remove error overlay if there is one
            if (typeof document !== 'undefined') removeErrorOverlay();
            var assets = data.assets.filter(function(asset) {
                return asset.envHash === HMR_ENV_HASH;
            }); // Handle HMR Update
            var handled = assets.every(function(asset) {
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                assets.forEach(function(asset) {
                    hmrApply(module.bundle.root, asset);
                });
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else window.location.reload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            var _iterator = _createForOfIteratorHelper(data.diagnostics.ansi), _step;
            try {
                for(_iterator.s(); !(_step = _iterator.n()).done;){
                    var ansiDiagnostic = _step.value;
                    var stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                    console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
                }
            } catch (err) {
                _iterator.e(err);
            } finally{
                _iterator.f();
            }
            if (typeof document !== 'undefined') {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log('[parcel] ✨ Error resolved');
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    var errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    var _iterator2 = _createForOfIteratorHelper(diagnostics), _step2;
    try {
        for(_iterator2.s(); !(_step2 = _iterator2.n()).done;){
            var diagnostic = _step2.value;
            var stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
            errorHTML += "\n      <div>\n        <div style=\"font-size: 18px; font-weight: bold; margin-top: 20px;\">\n          \uD83D\uDEA8 ".concat(diagnostic.message, "\n        </div>\n        <pre>").concat(stack, "</pre>\n        <div>\n          ").concat(diagnostic.hints.map(function(hint) {
                return '<div>💡 ' + hint + '</div>';
            }).join(''), "\n        </div>\n        ").concat(diagnostic.documentation ? "<div>\uD83D\uDCDD <a style=\"color: violet\" href=\"".concat(diagnostic.documentation, "\" target=\"_blank\">Learn more</a></div>") : '', "\n      </div>\n    ");
        }
    } catch (err) {
        _iterator2.e(err);
    } finally{
        _iterator2.f();
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', link.getAttribute('href').split('?')[0] + '?' + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(window.location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        var deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            var fn = new Function('require', 'module', 'exports', asset.output);
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) return true;
    var parents = getParents(module.bundle.root, id); // If no parents, the asset is new. Prevent reloading the page.
    if (!parents.length) return true;
    return parents.some(function(v) {
        return hmrAcceptCheck(v[0], v[1], null);
    });
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {
    };
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"iJDgK":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _lightCss = require("@shoelace-style/shoelace/dist/themes/light.css");
var _tooltipJs = require("@shoelace-style/shoelace/dist/components/tooltip/tooltip.js");
var _buttonJs = require("@shoelace-style/shoelace/dist/components/button/button.js");
var _drawerJs = require("@shoelace-style/shoelace/dist/components/drawer/drawer.js");
var _iconJs = require("@shoelace-style/shoelace/dist/components/icon/icon.js");
var _iconButtonJs = require("@shoelace-style/shoelace/dist/components/icon-button/icon-button.js");
var _progressBarJs = require("@shoelace-style/shoelace/dist/components/progress-bar/progress-bar.js");
var _basePathJs = require("@shoelace-style/shoelace/dist/utilities/base-path.js");
var _splide = require("@splidejs/splide");
var _splideDefault = parcelHelpers.interopDefault(_splide);
_basePathJs.setBasePath('./../dist/shoelace');
window.onscroll = function() {
    myFunction();
};
var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;
function myFunction() {
    if (window.pageYOffset >= sticky) navbar.classList.add("sticky");
    else navbar.classList.remove("sticky");
}
new _splideDefault.default('.splide', {
    type: 'fade',
    perPage: 1,
    padding: 0,
    rewind: true,
    heightRatio: 0.4,
    drag: true
}).mount();
document.addEventListener('DOMContentLoaded', function() {
    new _splideDefault.default('#image-slider', {
        'cover': true,
        'heightRatio': 0.5
    }).mount();
});

},{"@shoelace-style/shoelace/dist/themes/light.css":"kNIVk","@shoelace-style/shoelace/dist/components/tooltip/tooltip.js":"dMCrT","@shoelace-style/shoelace/dist/components/button/button.js":"dJo7P","@shoelace-style/shoelace/dist/components/drawer/drawer.js":"fp2wd","@shoelace-style/shoelace/dist/components/icon/icon.js":"hlNg4","@shoelace-style/shoelace/dist/components/icon-button/icon-button.js":"lQHTH","@shoelace-style/shoelace/dist/components/progress-bar/progress-bar.js":"ba30O","@shoelace-style/shoelace/dist/utilities/base-path.js":"dMfIw","@splidejs/splide":"jKkq4","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"kNIVk":[function() {},{}],"dMCrT":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>_chunkBJU2F72WJs.tooltip_default
);
var _chunkBJU2F72WJs = require("../../chunks/chunk.BJU2F72W.js");
var _chunkGADG7AUGJs = require("../../chunks/chunk.GADG7AUG.js");
var _chunkNVGT36PIJs = require("../../chunks/chunk.NVGT36PI.js");
var _chunkEVK2ASE6Js = require("../../chunks/chunk.EVK2ASE6.js");
var _chunkBD26TKS4Js = require("../../chunks/chunk.BD26TKS4.js");
var _chunkI4TE3TJVJs = require("../../chunks/chunk.I4TE3TJV.js");
var _chunkJTSEMIY7Js = require("../../chunks/chunk.JTSEMIY7.js");
var _chunk2JQPDYNAJs = require("../../chunks/chunk.2JQPDYNA.js");
var _chunkG466JWVFJs = require("../../chunks/chunk.G466JWVF.js");
var _chunkL2RLCVJQJs = require("../../chunks/chunk.L2RLCVJQ.js");
var _chunkX3WLUTHFJs = require("../../chunks/chunk.X3WLUTHF.js");
var _chunkIHGPZX35Js = require("../../chunks/chunk.IHGPZX35.js");

},{"../../chunks/chunk.BJU2F72W.js":"51rJH","../../chunks/chunk.GADG7AUG.js":"ekhb6","../../chunks/chunk.NVGT36PI.js":"eF7TG","../../chunks/chunk.EVK2ASE6.js":"76eJj","../../chunks/chunk.BD26TKS4.js":"ipINT","../../chunks/chunk.I4TE3TJV.js":"9KUzU","../../chunks/chunk.JTSEMIY7.js":"aWFCQ","../../chunks/chunk.2JQPDYNA.js":"9nuKG","../../chunks/chunk.G466JWVF.js":"ewNFt","../../chunks/chunk.L2RLCVJQ.js":"iaOsv","../../chunks/chunk.X3WLUTHF.js":"1Nmoi","../../chunks/chunk.IHGPZX35.js":"4lKzp","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"51rJH":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "tooltip_default", ()=>tooltip_default
);
var _chunkGADG7AUGJs = require("./chunk.GADG7AUG.js");
var _chunkNVGT36PIJs = require("./chunk.NVGT36PI.js");
var _chunkEVK2ASE6Js = require("./chunk.EVK2ASE6.js");
var _chunkBD26TKS4Js = require("./chunk.BD26TKS4.js");
var _chunkI4TE3TJVJs = require("./chunk.I4TE3TJV.js");
var _chunkJTSEMIY7Js = require("./chunk.JTSEMIY7.js");
var _chunkG466JWVFJs = require("./chunk.G466JWVF.js");
var _chunkL2RLCVJQJs = require("./chunk.L2RLCVJQ.js");
var _chunkX3WLUTHFJs = require("./chunk.X3WLUTHF.js");
var _chunkIHGPZX35Js = require("./chunk.IHGPZX35.js");
// src/components/tooltip/tooltip.styles.ts
var tooltip_styles_default = _chunkX3WLUTHFJs.r`
  ${_chunkG466JWVFJs.component_styles_default}

  :host {
    --max-width: 20rem;
    --hide-delay: 0ms;
    --show-delay: 150ms;

    display: contents;
  }

  .tooltip-positioner {
    position: absolute;
    z-index: var(--sl-z-index-tooltip);
    pointer-events: none;
  }

  .tooltip {
    max-width: var(--max-width);
    border-radius: var(--sl-tooltip-border-radius);
    background-color: rgb(var(--sl-tooltip-background-color));
    font-family: var(--sl-tooltip-font-family);
    font-size: var(--sl-tooltip-font-size);
    font-weight: var(--sl-tooltip-font-weight);
    line-height: var(--sl-tooltip-line-height);
    color: rgb(var(--sl-tooltip-color));
    padding: var(--sl-tooltip-padding);
  }

  .tooltip:after {
    content: '';
    position: absolute;
    width: 0;
    height: 0;
  }

  .tooltip-positioner[data-popper-placement^='top'] .tooltip {
    transform-origin: bottom;
  }

  .tooltip-positioner[data-popper-placement^='bottom'] .tooltip {
    transform-origin: top;
  }

  .tooltip-positioner[data-popper-placement^='left'] .tooltip {
    transform-origin: right;
  }

  .tooltip-positioner[data-popper-placement^='right'] .tooltip {
    transform-origin: left;
  }

  /* Arrow + bottom */
  .tooltip-positioner[data-popper-placement^='bottom'] .tooltip:after {
    bottom: 100%;
    left: calc(50% - var(--sl-tooltip-arrow-size));
    border-bottom: var(--sl-tooltip-arrow-size) solid rgb(var(--sl-tooltip-background-color));
    border-left: var(--sl-tooltip-arrow-size) solid transparent;
    border-right: var(--sl-tooltip-arrow-size) solid transparent;
  }

  .tooltip-positioner[data-popper-placement='bottom-start'] .tooltip:after {
    left: var(--sl-tooltip-arrow-start-end-offset);
  }

  .tooltip-positioner[data-popper-placement='bottom-end'] .tooltip:after {
    right: var(--sl-tooltip-arrow-start-end-offset);
    left: auto;
  }

  /* Arrow + top */
  .tooltip-positioner[data-popper-placement^='top'] .tooltip:after {
    top: 100%;
    left: calc(50% - var(--sl-tooltip-arrow-size));
    border-top: var(--sl-tooltip-arrow-size) solid rgb(var(--sl-tooltip-background-color));
    border-left: var(--sl-tooltip-arrow-size) solid transparent;
    border-right: var(--sl-tooltip-arrow-size) solid transparent;
  }

  .tooltip-positioner[data-popper-placement='top-start'] .tooltip:after {
    left: var(--sl-tooltip-arrow-start-end-offset);
  }

  .tooltip-positioner[data-popper-placement='top-end'] .tooltip:after {
    right: var(--sl-tooltip-arrow-start-end-offset);
    left: auto;
  }

  /* Arrow + left */
  .tooltip-positioner[data-popper-placement^='left'] .tooltip:after {
    top: calc(50% - var(--sl-tooltip-arrow-size));
    left: 100%;
    border-left: var(--sl-tooltip-arrow-size) solid rgb(var(--sl-tooltip-background-color));
    border-top: var(--sl-tooltip-arrow-size) solid transparent;
    border-bottom: var(--sl-tooltip-arrow-size) solid transparent;
  }

  .tooltip-positioner[data-popper-placement='left-start'] .tooltip:after {
    top: var(--sl-tooltip-arrow-start-end-offset);
  }

  .tooltip-positioner[data-popper-placement='left-end'] .tooltip:after {
    top: auto;
    bottom: var(--sl-tooltip-arrow-start-end-offset);
  }

  /* Arrow + right */
  .tooltip-positioner[data-popper-placement^='right'] .tooltip:after {
    top: calc(50% - var(--sl-tooltip-arrow-size));
    right: 100%;
    border-right: var(--sl-tooltip-arrow-size) solid rgb(var(--sl-tooltip-background-color));
    border-top: var(--sl-tooltip-arrow-size) solid transparent;
    border-bottom: var(--sl-tooltip-arrow-size) solid transparent;
  }

  .tooltip-positioner[data-popper-placement='right-start'] .tooltip:after {
    top: var(--sl-tooltip-arrow-start-end-offset);
  }

  .tooltip-positioner[data-popper-placement='right-end'] .tooltip:after {
    top: auto;
    bottom: var(--sl-tooltip-arrow-start-end-offset);
  }
`;
// src/components/tooltip/tooltip.ts
var id = 0;
var SlTooltip = class extends _chunkX3WLUTHFJs.n {
    constructor(){
        super(...arguments);
        this.componentId = `tooltip-${++id}`;
        this.content = "";
        this.placement = "top";
        this.disabled = false;
        this.distance = 10;
        this.open = false;
        this.skidding = 0;
        this.trigger = "hover focus";
        this.hoist = false;
    }
    connectedCallback() {
        super.connectedCallback();
        this.handleBlur = this.handleBlur.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handleFocus = this.handleFocus.bind(this);
        this.handleKeyDown = this.handleKeyDown.bind(this);
        this.handleMouseOver = this.handleMouseOver.bind(this);
        this.handleMouseOut = this.handleMouseOut.bind(this);
        this.updateComplete.then(()=>{
            this.addEventListener("blur", this.handleBlur, true);
            this.addEventListener("focus", this.handleFocus, true);
            this.addEventListener("click", this.handleClick);
            this.addEventListener("keydown", this.handleKeyDown);
            this.addEventListener("mouseover", this.handleMouseOver);
            this.addEventListener("mouseout", this.handleMouseOut);
            this.target = this.getTarget();
            this.syncOptions();
        });
    }
    firstUpdated() {
        this.tooltip.hidden = !this.open;
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        this.removeEventListener("blur", this.handleBlur, true);
        this.removeEventListener("focus", this.handleFocus, true);
        this.removeEventListener("click", this.handleClick);
        this.removeEventListener("keydown", this.handleKeyDown);
        this.removeEventListener("mouseover", this.handleMouseOver);
        this.removeEventListener("mouseout", this.handleMouseOut);
        if (this.popover) this.popover.destroy();
    }
    async show() {
        if (this.open) return;
        this.open = true;
        return _chunkI4TE3TJVJs.waitForEvent(this, "sl-after-show");
    }
    async hide() {
        if (!this.open) return;
        this.open = false;
        return _chunkI4TE3TJVJs.waitForEvent(this, "sl-after-hide");
    }
    getTarget() {
        const target = [
            ...this.children
        ].find((el)=>el.tagName.toLowerCase() !== "style" && el.getAttribute("slot") !== "content"
        );
        if (!target) throw new Error("Invalid tooltip target: no child element was found.");
        return target;
    }
    handleBlur() {
        if (this.hasTrigger("focus")) this.hide();
    }
    handleClick() {
        if (this.hasTrigger("click")) this.open ? this.hide() : this.show();
    }
    handleFocus() {
        if (this.hasTrigger("focus")) this.show();
    }
    handleKeyDown(event) {
        if (this.open && event.key === "Escape") {
            event.stopPropagation();
            this.hide();
        }
    }
    handleMouseOver() {
        if (this.hasTrigger("hover")) {
            const delay = _chunkNVGT36PIJs.parseDuration(getComputedStyle(this).getPropertyValue("--show-delay"));
            clearTimeout(this.hoverTimeout);
            this.hoverTimeout = setTimeout(()=>this.show()
            , delay);
        }
    }
    handleMouseOut() {
        if (this.hasTrigger("hover")) {
            const delay = _chunkNVGT36PIJs.parseDuration(getComputedStyle(this).getPropertyValue("--hide-delay"));
            clearTimeout(this.hoverTimeout);
            this.hoverTimeout = setTimeout(()=>this.hide()
            , delay);
        }
    }
    async handleOpenChange() {
        if (this.disabled) return;
        if (this.open) {
            _chunkI4TE3TJVJs.emit(this, "sl-show");
            await _chunkNVGT36PIJs.stopAnimations(this.tooltip);
            if (this.popover) this.popover.destroy();
            this.popover = _chunkGADG7AUGJs.createPopper(this.target, this.positioner, {
                placement: this.placement,
                strategy: this.hoist ? "fixed" : "absolute",
                modifiers: [
                    {
                        name: "flip",
                        options: {
                            boundary: "viewport"
                        }
                    },
                    {
                        name: "offset",
                        options: {
                            offset: [
                                this.skidding,
                                this.distance
                            ]
                        }
                    }
                ]
            });
            this.tooltip.hidden = false;
            const { keyframes , options  } = _chunkEVK2ASE6Js.getAnimation(this, "tooltip.show");
            await _chunkNVGT36PIJs.animateTo(this.tooltip, keyframes, options);
            _chunkI4TE3TJVJs.emit(this, "sl-after-show");
        } else {
            _chunkI4TE3TJVJs.emit(this, "sl-hide");
            await _chunkNVGT36PIJs.stopAnimations(this.tooltip);
            const { keyframes , options  } = _chunkEVK2ASE6Js.getAnimation(this, "tooltip.hide");
            await _chunkNVGT36PIJs.animateTo(this.tooltip, keyframes, options);
            this.tooltip.hidden = true;
            if (this.popover) this.popover.destroy();
            _chunkI4TE3TJVJs.emit(this, "sl-after-hide");
        }
    }
    handleOptionsChange() {
        this.syncOptions();
    }
    handleDisabledChange() {
        if (this.disabled && this.open) this.hide();
    }
    handleSlotChange() {
        const oldTarget = this.target;
        const newTarget = this.getTarget();
        if (newTarget !== oldTarget) {
            if (oldTarget) oldTarget.removeAttribute("aria-describedby");
            newTarget.setAttribute("aria-describedby", this.componentId);
        }
    }
    hasTrigger(triggerType) {
        const triggers = this.trigger.split(" ");
        return triggers.includes(triggerType);
    }
    syncOptions() {
        if (this.popover) this.popover.setOptions({
            placement: this.placement,
            strategy: this.hoist ? "fixed" : "absolute",
            modifiers: [
                {
                    name: "flip",
                    options: {
                        boundary: "viewport"
                    }
                },
                {
                    name: "offset",
                    options: {
                        offset: [
                            this.skidding,
                            this.distance
                        ]
                    }
                }
            ]
        });
    }
    render() {
        return _chunkX3WLUTHFJs.y`
      <slot @slotchange=${this.handleSlotChange}></slot>

      <div class="tooltip-positioner">
        <div
          part="base"
          id=${this.componentId}
          class=${_chunkJTSEMIY7Js.o({
            tooltip: true,
            "tooltip--open": this.open
        })}
          role="tooltip"
          aria-hidden=${this.open ? "false" : "true"}
        >
          <slot name="content">${this.content}</slot>
        </div>
      </div>
    `;
    }
};
SlTooltip.styles = tooltip_styles_default;
_chunkIHGPZX35Js.__decorateClass([
    _chunkL2RLCVJQJs.i(".tooltip-positioner")
], SlTooltip.prototype, "positioner", 2);
_chunkIHGPZX35Js.__decorateClass([
    _chunkL2RLCVJQJs.i(".tooltip")
], SlTooltip.prototype, "tooltip", 2);
_chunkIHGPZX35Js.__decorateClass([
    _chunkL2RLCVJQJs.e()
], SlTooltip.prototype, "content", 2);
_chunkIHGPZX35Js.__decorateClass([
    _chunkL2RLCVJQJs.e()
], SlTooltip.prototype, "placement", 2);
_chunkIHGPZX35Js.__decorateClass([
    _chunkL2RLCVJQJs.e({
        type: Boolean,
        reflect: true
    })
], SlTooltip.prototype, "disabled", 2);
_chunkIHGPZX35Js.__decorateClass([
    _chunkL2RLCVJQJs.e({
        type: Number
    })
], SlTooltip.prototype, "distance", 2);
_chunkIHGPZX35Js.__decorateClass([
    _chunkL2RLCVJQJs.e({
        type: Boolean,
        reflect: true
    })
], SlTooltip.prototype, "open", 2);
_chunkIHGPZX35Js.__decorateClass([
    _chunkL2RLCVJQJs.e({
        type: Number
    })
], SlTooltip.prototype, "skidding", 2);
_chunkIHGPZX35Js.__decorateClass([
    _chunkL2RLCVJQJs.e()
], SlTooltip.prototype, "trigger", 2);
_chunkIHGPZX35Js.__decorateClass([
    _chunkL2RLCVJQJs.e({
        type: Boolean
    })
], SlTooltip.prototype, "hoist", 2);
_chunkIHGPZX35Js.__decorateClass([
    _chunkBD26TKS4Js.watch("open", {
        waitUntilFirstUpdate: true
    })
], SlTooltip.prototype, "handleOpenChange", 1);
_chunkIHGPZX35Js.__decorateClass([
    _chunkBD26TKS4Js.watch("placement"),
    _chunkBD26TKS4Js.watch("distance"),
    _chunkBD26TKS4Js.watch("skidding"),
    _chunkBD26TKS4Js.watch("hoist")
], SlTooltip.prototype, "handleOptionsChange", 1);
_chunkIHGPZX35Js.__decorateClass([
    _chunkBD26TKS4Js.watch("disabled")
], SlTooltip.prototype, "handleDisabledChange", 1);
SlTooltip = _chunkIHGPZX35Js.__decorateClass([
    _chunkL2RLCVJQJs.n("sl-tooltip")
], SlTooltip);
var tooltip_default = SlTooltip;
_chunkEVK2ASE6Js.setDefaultAnimation("tooltip.show", {
    keyframes: [
        {
            opacity: 0,
            transform: "scale(0.8)"
        },
        {
            opacity: 1,
            transform: "scale(1)"
        }
    ],
    options: {
        duration: 150,
        easing: "ease"
    }
});
_chunkEVK2ASE6Js.setDefaultAnimation("tooltip.hide", {
    keyframes: [
        {
            opacity: 1,
            transform: "scale(1)"
        },
        {
            opacity: 0,
            transform: "scale(0.8)"
        }
    ],
    options: {
        duration: 150,
        easing: "ease"
    }
});

},{"./chunk.GADG7AUG.js":"ekhb6","./chunk.NVGT36PI.js":"eF7TG","./chunk.EVK2ASE6.js":"76eJj","./chunk.BD26TKS4.js":"ipINT","./chunk.I4TE3TJV.js":"9KUzU","./chunk.JTSEMIY7.js":"aWFCQ","./chunk.G466JWVF.js":"ewNFt","./chunk.L2RLCVJQ.js":"iaOsv","./chunk.X3WLUTHF.js":"1Nmoi","./chunk.IHGPZX35.js":"4lKzp","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"ekhb6":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "createPopper", ()=>createPopper
);
// node_modules/@popperjs/core/dist/esm/dom-utils/getBoundingClientRect.js
function getBoundingClientRect(element) {
    var rect = element.getBoundingClientRect();
    return {
        width: rect.width,
        height: rect.height,
        top: rect.top,
        right: rect.right,
        bottom: rect.bottom,
        left: rect.left,
        x: rect.left,
        y: rect.top
    };
}
// node_modules/@popperjs/core/dist/esm/dom-utils/getWindow.js
function getWindow(node) {
    if (node.toString() !== "[object Window]") {
        var ownerDocument = node.ownerDocument;
        return ownerDocument ? ownerDocument.defaultView || window : window;
    }
    return node;
}
// node_modules/@popperjs/core/dist/esm/dom-utils/getWindowScroll.js
function getWindowScroll(node) {
    var win = getWindow(node);
    var scrollLeft = win.pageXOffset;
    var scrollTop = win.pageYOffset;
    return {
        scrollLeft,
        scrollTop
    };
}
// node_modules/@popperjs/core/dist/esm/dom-utils/instanceOf.js
function isElement(node) {
    var OwnElement = getWindow(node).Element;
    return node instanceof OwnElement || node instanceof Element;
}
function isHTMLElement(node) {
    var OwnElement = getWindow(node).HTMLElement;
    return node instanceof OwnElement || node instanceof HTMLElement;
}
function isShadowRoot(node) {
    if (typeof ShadowRoot === "undefined") return false;
    var OwnElement = getWindow(node).ShadowRoot;
    return node instanceof OwnElement || node instanceof ShadowRoot;
}
// node_modules/@popperjs/core/dist/esm/dom-utils/getHTMLElementScroll.js
function getHTMLElementScroll(element) {
    return {
        scrollLeft: element.scrollLeft,
        scrollTop: element.scrollTop
    };
}
// node_modules/@popperjs/core/dist/esm/dom-utils/getNodeScroll.js
function getNodeScroll(node) {
    if (node === getWindow(node) || !isHTMLElement(node)) return getWindowScroll(node);
    else return getHTMLElementScroll(node);
}
// node_modules/@popperjs/core/dist/esm/dom-utils/getNodeName.js
function getNodeName(element) {
    return element ? (element.nodeName || "").toLowerCase() : null;
}
// node_modules/@popperjs/core/dist/esm/dom-utils/getDocumentElement.js
function getDocumentElement(element) {
    return ((isElement(element) ? element.ownerDocument : element.document) || window.document).documentElement;
}
// node_modules/@popperjs/core/dist/esm/dom-utils/getWindowScrollBarX.js
function getWindowScrollBarX(element) {
    return getBoundingClientRect(getDocumentElement(element)).left + getWindowScroll(element).scrollLeft;
}
// node_modules/@popperjs/core/dist/esm/dom-utils/getComputedStyle.js
function getComputedStyle(element) {
    return getWindow(element).getComputedStyle(element);
}
// node_modules/@popperjs/core/dist/esm/dom-utils/isScrollParent.js
function isScrollParent(element) {
    var _getComputedStyle = getComputedStyle(element), overflow = _getComputedStyle.overflow, overflowX = _getComputedStyle.overflowX, overflowY = _getComputedStyle.overflowY;
    return /auto|scroll|overlay|hidden/.test(overflow + overflowY + overflowX);
}
// node_modules/@popperjs/core/dist/esm/dom-utils/getCompositeRect.js
function getCompositeRect(elementOrVirtualElement, offsetParent, isFixed) {
    if (isFixed === void 0) isFixed = false;
    var documentElement = getDocumentElement(offsetParent);
    var rect = getBoundingClientRect(elementOrVirtualElement);
    var isOffsetParentAnElement = isHTMLElement(offsetParent);
    var scroll = {
        scrollLeft: 0,
        scrollTop: 0
    };
    var offsets = {
        x: 0,
        y: 0
    };
    if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
        if (getNodeName(offsetParent) !== "body" || isScrollParent(documentElement)) scroll = getNodeScroll(offsetParent);
        if (isHTMLElement(offsetParent)) {
            offsets = getBoundingClientRect(offsetParent);
            offsets.x += offsetParent.clientLeft;
            offsets.y += offsetParent.clientTop;
        } else if (documentElement) offsets.x = getWindowScrollBarX(documentElement);
    }
    return {
        x: rect.left + scroll.scrollLeft - offsets.x,
        y: rect.top + scroll.scrollTop - offsets.y,
        width: rect.width,
        height: rect.height
    };
}
// node_modules/@popperjs/core/dist/esm/dom-utils/getLayoutRect.js
function getLayoutRect(element) {
    return {
        x: element.offsetLeft,
        y: element.offsetTop,
        width: element.offsetWidth,
        height: element.offsetHeight
    };
}
// node_modules/@popperjs/core/dist/esm/dom-utils/getParentNode.js
function getParentNode(element) {
    if (getNodeName(element) === "html") return element;
    return element.assignedSlot || element.parentNode || (isShadowRoot(element) ? element.host : null) || getDocumentElement(element);
}
// node_modules/@popperjs/core/dist/esm/dom-utils/getScrollParent.js
function getScrollParent(node) {
    if ([
        "html",
        "body",
        "#document"
    ].indexOf(getNodeName(node)) >= 0) return node.ownerDocument.body;
    if (isHTMLElement(node) && isScrollParent(node)) return node;
    return getScrollParent(getParentNode(node));
}
// node_modules/@popperjs/core/dist/esm/dom-utils/listScrollParents.js
function listScrollParents(element, list) {
    var _element$ownerDocumen;
    if (list === void 0) list = [];
    var scrollParent = getScrollParent(element);
    var isBody = scrollParent === ((_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body);
    var win = getWindow(scrollParent);
    var target = isBody ? [
        win
    ].concat(win.visualViewport || [], isScrollParent(scrollParent) ? scrollParent : []) : scrollParent;
    var updatedList = list.concat(target);
    return isBody ? updatedList : updatedList.concat(listScrollParents(getParentNode(target)));
}
// node_modules/@popperjs/core/dist/esm/dom-utils/isTableElement.js
function isTableElement(element) {
    return [
        "table",
        "td",
        "th"
    ].indexOf(getNodeName(element)) >= 0;
}
// node_modules/@popperjs/core/dist/esm/dom-utils/getOffsetParent.js
function getTrueOffsetParent(element) {
    if (!isHTMLElement(element) || getComputedStyle(element).position === "fixed") return null;
    return element.offsetParent;
}
function getContainingBlock(element) {
    var isFirefox = navigator.userAgent.toLowerCase().includes("firefox");
    var currentNode = getParentNode(element);
    while(isHTMLElement(currentNode) && [
        "html",
        "body"
    ].indexOf(getNodeName(currentNode)) < 0){
        var css = getComputedStyle(currentNode);
        if (css.transform !== "none" || css.perspective !== "none" || css.contain === "paint" || [
            "transform",
            "perspective"
        ].includes(css.willChange) || isFirefox && css.willChange === "filter" || isFirefox && css.filter && css.filter !== "none") return currentNode;
        else currentNode = currentNode.parentNode;
    }
    return null;
}
function getOffsetParent(element) {
    var window2 = getWindow(element);
    var offsetParent = getTrueOffsetParent(element);
    while(offsetParent && isTableElement(offsetParent) && getComputedStyle(offsetParent).position === "static")offsetParent = getTrueOffsetParent(offsetParent);
    if (offsetParent && (getNodeName(offsetParent) === "html" || getNodeName(offsetParent) === "body" && getComputedStyle(offsetParent).position === "static")) return window2;
    return offsetParent || getContainingBlock(element) || window2;
}
// node_modules/@popperjs/core/dist/esm/enums.js
var top = "top";
var bottom = "bottom";
var right = "right";
var left = "left";
var auto = "auto";
var basePlacements = [
    top,
    bottom,
    right,
    left
];
var start = "start";
var end = "end";
var clippingParents = "clippingParents";
var viewport = "viewport";
var popper = "popper";
var reference = "reference";
var variationPlacements = /* @__PURE__ */ basePlacements.reduce(function(acc, placement) {
    return acc.concat([
        placement + "-" + start,
        placement + "-" + end
    ]);
}, []);
var placements = /* @__PURE__ */ [].concat(basePlacements, [
    auto
]).reduce(function(acc, placement) {
    return acc.concat([
        placement,
        placement + "-" + start,
        placement + "-" + end
    ]);
}, []);
var beforeRead = "beforeRead";
var read = "read";
var afterRead = "afterRead";
var beforeMain = "beforeMain";
var main = "main";
var afterMain = "afterMain";
var beforeWrite = "beforeWrite";
var write = "write";
var afterWrite = "afterWrite";
var modifierPhases = [
    beforeRead,
    read,
    afterRead,
    beforeMain,
    main,
    afterMain,
    beforeWrite,
    write,
    afterWrite
];
// node_modules/@popperjs/core/dist/esm/utils/orderModifiers.js
function order(modifiers) {
    var map = new Map();
    var visited = new Set();
    var result = [];
    modifiers.forEach(function(modifier) {
        map.set(modifier.name, modifier);
    });
    function sort(modifier) {
        visited.add(modifier.name);
        var requires = [].concat(modifier.requires || [], modifier.requiresIfExists || []);
        requires.forEach(function(dep) {
            if (!visited.has(dep)) {
                var depModifier = map.get(dep);
                if (depModifier) sort(depModifier);
            }
        });
        result.push(modifier);
    }
    modifiers.forEach(function(modifier) {
        if (!visited.has(modifier.name)) sort(modifier);
    });
    return result;
}
function orderModifiers(modifiers) {
    var orderedModifiers = order(modifiers);
    return modifierPhases.reduce(function(acc, phase) {
        return acc.concat(orderedModifiers.filter(function(modifier) {
            return modifier.phase === phase;
        }));
    }, []);
}
// node_modules/@popperjs/core/dist/esm/utils/debounce.js
function debounce(fn2) {
    var pending;
    return function() {
        if (!pending) pending = new Promise(function(resolve) {
            Promise.resolve().then(function() {
                pending = void 0;
                resolve(fn2());
            });
        });
        return pending;
    };
}
// node_modules/@popperjs/core/dist/esm/utils/getBasePlacement.js
function getBasePlacement(placement) {
    return placement.split("-")[0];
}
// node_modules/@popperjs/core/dist/esm/utils/mergeByName.js
function mergeByName(modifiers) {
    var merged = modifiers.reduce(function(merged2, current) {
        var existing = merged2[current.name];
        merged2[current.name] = existing ? Object.assign({
        }, existing, current, {
            options: Object.assign({
            }, existing.options, current.options),
            data: Object.assign({
            }, existing.data, current.data)
        }) : current;
        return merged2;
    }, {
    });
    return Object.keys(merged).map(function(key) {
        return merged[key];
    });
}
// node_modules/@popperjs/core/dist/esm/dom-utils/getViewportRect.js
function getViewportRect(element) {
    var win = getWindow(element);
    var html = getDocumentElement(element);
    var visualViewport = win.visualViewport;
    var width = html.clientWidth;
    var height = html.clientHeight;
    var x = 0;
    var y = 0;
    if (visualViewport) {
        width = visualViewport.width;
        height = visualViewport.height;
        if (!/^((?!chrome|android).)*safari/i.test(navigator.userAgent)) {
            x = visualViewport.offsetLeft;
            y = visualViewport.offsetTop;
        }
    }
    return {
        width,
        height,
        x: x + getWindowScrollBarX(element),
        y
    };
}
// node_modules/@popperjs/core/dist/esm/utils/math.js
var max = Math.max;
var min = Math.min;
var round = Math.round;
// node_modules/@popperjs/core/dist/esm/dom-utils/getDocumentRect.js
function getDocumentRect(element) {
    var _element$ownerDocumen;
    var html = getDocumentElement(element);
    var winScroll = getWindowScroll(element);
    var body = (_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body;
    var width = max(html.scrollWidth, html.clientWidth, body ? body.scrollWidth : 0, body ? body.clientWidth : 0);
    var height = max(html.scrollHeight, html.clientHeight, body ? body.scrollHeight : 0, body ? body.clientHeight : 0);
    var x = -winScroll.scrollLeft + getWindowScrollBarX(element);
    var y = -winScroll.scrollTop;
    if (getComputedStyle(body || html).direction === "rtl") x += max(html.clientWidth, body ? body.clientWidth : 0) - width;
    return {
        width,
        height,
        x,
        y
    };
}
// node_modules/@popperjs/core/dist/esm/dom-utils/contains.js
function contains(parent, child) {
    var rootNode = child.getRootNode && child.getRootNode();
    if (parent.contains(child)) return true;
    else if (rootNode && isShadowRoot(rootNode)) {
        var next = child;
        do {
            if (next && parent.isSameNode(next)) return true;
            next = next.parentNode || next.host;
        }while (next)
    }
    return false;
}
// node_modules/@popperjs/core/dist/esm/utils/rectToClientRect.js
function rectToClientRect(rect) {
    return Object.assign({
    }, rect, {
        left: rect.x,
        top: rect.y,
        right: rect.x + rect.width,
        bottom: rect.y + rect.height
    });
}
// node_modules/@popperjs/core/dist/esm/dom-utils/getClippingRect.js
function getInnerBoundingClientRect(element) {
    var rect = getBoundingClientRect(element);
    rect.top = rect.top + element.clientTop;
    rect.left = rect.left + element.clientLeft;
    rect.bottom = rect.top + element.clientHeight;
    rect.right = rect.left + element.clientWidth;
    rect.width = element.clientWidth;
    rect.height = element.clientHeight;
    rect.x = rect.left;
    rect.y = rect.top;
    return rect;
}
function getClientRectFromMixedType(element, clippingParent) {
    return clippingParent === viewport ? rectToClientRect(getViewportRect(element)) : isHTMLElement(clippingParent) ? getInnerBoundingClientRect(clippingParent) : rectToClientRect(getDocumentRect(getDocumentElement(element)));
}
function getClippingParents(element) {
    var clippingParents2 = listScrollParents(getParentNode(element));
    var canEscapeClipping = [
        "absolute",
        "fixed"
    ].indexOf(getComputedStyle(element).position) >= 0;
    var clipperElement = canEscapeClipping && isHTMLElement(element) ? getOffsetParent(element) : element;
    if (!isElement(clipperElement)) return [];
    return clippingParents2.filter(function(clippingParent) {
        return isElement(clippingParent) && contains(clippingParent, clipperElement) && getNodeName(clippingParent) !== "body";
    });
}
function getClippingRect(element, boundary, rootBoundary) {
    var mainClippingParents = boundary === "clippingParents" ? getClippingParents(element) : [].concat(boundary);
    var clippingParents2 = [].concat(mainClippingParents, [
        rootBoundary
    ]);
    var firstClippingParent = clippingParents2[0];
    var clippingRect = clippingParents2.reduce(function(accRect, clippingParent) {
        var rect = getClientRectFromMixedType(element, clippingParent);
        accRect.top = max(rect.top, accRect.top);
        accRect.right = min(rect.right, accRect.right);
        accRect.bottom = min(rect.bottom, accRect.bottom);
        accRect.left = max(rect.left, accRect.left);
        return accRect;
    }, getClientRectFromMixedType(element, firstClippingParent));
    clippingRect.width = clippingRect.right - clippingRect.left;
    clippingRect.height = clippingRect.bottom - clippingRect.top;
    clippingRect.x = clippingRect.left;
    clippingRect.y = clippingRect.top;
    return clippingRect;
}
// node_modules/@popperjs/core/dist/esm/utils/getVariation.js
function getVariation(placement) {
    return placement.split("-")[1];
}
// node_modules/@popperjs/core/dist/esm/utils/getMainAxisFromPlacement.js
function getMainAxisFromPlacement(placement) {
    return [
        "top",
        "bottom"
    ].indexOf(placement) >= 0 ? "x" : "y";
}
// node_modules/@popperjs/core/dist/esm/utils/computeOffsets.js
function computeOffsets(_ref) {
    var reference2 = _ref.reference, element = _ref.element, placement = _ref.placement;
    var basePlacement = placement ? getBasePlacement(placement) : null;
    var variation = placement ? getVariation(placement) : null;
    var commonX = reference2.x + reference2.width / 2 - element.width / 2;
    var commonY = reference2.y + reference2.height / 2 - element.height / 2;
    var offsets;
    switch(basePlacement){
        case top:
            offsets = {
                x: commonX,
                y: reference2.y - element.height
            };
            break;
        case bottom:
            offsets = {
                x: commonX,
                y: reference2.y + reference2.height
            };
            break;
        case right:
            offsets = {
                x: reference2.x + reference2.width,
                y: commonY
            };
            break;
        case left:
            offsets = {
                x: reference2.x - element.width,
                y: commonY
            };
            break;
        default:
            offsets = {
                x: reference2.x,
                y: reference2.y
            };
    }
    var mainAxis = basePlacement ? getMainAxisFromPlacement(basePlacement) : null;
    if (mainAxis != null) {
        var len = mainAxis === "y" ? "height" : "width";
        switch(variation){
            case start:
                offsets[mainAxis] = offsets[mainAxis] - (reference2[len] / 2 - element[len] / 2);
                break;
            case end:
                offsets[mainAxis] = offsets[mainAxis] + (reference2[len] / 2 - element[len] / 2);
                break;
            default:
        }
    }
    return offsets;
}
// node_modules/@popperjs/core/dist/esm/utils/getFreshSideObject.js
function getFreshSideObject() {
    return {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
    };
}
// node_modules/@popperjs/core/dist/esm/utils/mergePaddingObject.js
function mergePaddingObject(paddingObject) {
    return Object.assign({
    }, getFreshSideObject(), paddingObject);
}
// node_modules/@popperjs/core/dist/esm/utils/expandToHashMap.js
function expandToHashMap(value, keys) {
    return keys.reduce(function(hashMap, key) {
        hashMap[key] = value;
        return hashMap;
    }, {
    });
}
// node_modules/@popperjs/core/dist/esm/utils/detectOverflow.js
function detectOverflow(state, options) {
    if (options === void 0) options = {
    };
    var _options = options, _options$placement = _options.placement, placement = _options$placement === void 0 ? state.placement : _options$placement, _options$boundary = _options.boundary, boundary = _options$boundary === void 0 ? clippingParents : _options$boundary, _options$rootBoundary = _options.rootBoundary, rootBoundary = _options$rootBoundary === void 0 ? viewport : _options$rootBoundary, _options$elementConte = _options.elementContext, elementContext = _options$elementConte === void 0 ? popper : _options$elementConte, _options$altBoundary = _options.altBoundary, altBoundary = _options$altBoundary === void 0 ? false : _options$altBoundary, _options$padding = _options.padding, padding = _options$padding === void 0 ? 0 : _options$padding;
    var paddingObject = mergePaddingObject(typeof padding !== "number" ? padding : expandToHashMap(padding, basePlacements));
    var altContext = elementContext === popper ? reference : popper;
    var referenceElement = state.elements.reference;
    var popperRect = state.rects.popper;
    var element = state.elements[altBoundary ? altContext : elementContext];
    var clippingClientRect = getClippingRect(isElement(element) ? element : element.contextElement || getDocumentElement(state.elements.popper), boundary, rootBoundary);
    var referenceClientRect = getBoundingClientRect(referenceElement);
    var popperOffsets2 = computeOffsets({
        reference: referenceClientRect,
        element: popperRect,
        strategy: "absolute",
        placement
    });
    var popperClientRect = rectToClientRect(Object.assign({
    }, popperRect, popperOffsets2));
    var elementClientRect = elementContext === popper ? popperClientRect : referenceClientRect;
    var overflowOffsets = {
        top: clippingClientRect.top - elementClientRect.top + paddingObject.top,
        bottom: elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom,
        left: clippingClientRect.left - elementClientRect.left + paddingObject.left,
        right: elementClientRect.right - clippingClientRect.right + paddingObject.right
    };
    var offsetData = state.modifiersData.offset;
    if (elementContext === popper && offsetData) {
        var offset2 = offsetData[placement];
        Object.keys(overflowOffsets).forEach(function(key) {
            var multiply = [
                right,
                bottom
            ].indexOf(key) >= 0 ? 1 : -1;
            var axis = [
                top,
                bottom
            ].indexOf(key) >= 0 ? "y" : "x";
            overflowOffsets[key] += offset2[axis] * multiply;
        });
    }
    return overflowOffsets;
}
// node_modules/@popperjs/core/dist/esm/createPopper.js
var DEFAULT_OPTIONS = {
    placement: "bottom",
    modifiers: [],
    strategy: "absolute"
};
function areValidElements() {
    for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++)args[_key] = arguments[_key];
    return !args.some(function(element) {
        return !(element && typeof element.getBoundingClientRect === "function");
    });
}
function popperGenerator(generatorOptions) {
    if (generatorOptions === void 0) generatorOptions = {
    };
    var _generatorOptions = generatorOptions, _generatorOptions$def = _generatorOptions.defaultModifiers, defaultModifiers2 = _generatorOptions$def === void 0 ? [] : _generatorOptions$def, _generatorOptions$def2 = _generatorOptions.defaultOptions, defaultOptions = _generatorOptions$def2 === void 0 ? DEFAULT_OPTIONS : _generatorOptions$def2;
    return function createPopper2(reference2, popper2, options) {
        if (options === void 0) options = defaultOptions;
        var state = {
            placement: "bottom",
            orderedModifiers: [],
            options: Object.assign({
            }, DEFAULT_OPTIONS, defaultOptions),
            modifiersData: {
            },
            elements: {
                reference: reference2,
                popper: popper2
            },
            attributes: {
            },
            styles: {
            }
        };
        var effectCleanupFns = [];
        var isDestroyed = false;
        var instance = {
            state,
            setOptions: function setOptions(options2) {
                cleanupModifierEffects();
                state.options = Object.assign({
                }, defaultOptions, state.options, options2);
                state.scrollParents = {
                    reference: isElement(reference2) ? listScrollParents(reference2) : reference2.contextElement ? listScrollParents(reference2.contextElement) : [],
                    popper: listScrollParents(popper2)
                };
                var orderedModifiers = orderModifiers(mergeByName([].concat(defaultModifiers2, state.options.modifiers)));
                state.orderedModifiers = orderedModifiers.filter(function(m) {
                    return m.enabled;
                });
                var modifiers, _ref, name, flipModifier, _ref2, name1, _getComputedStyle, marginTop, marginRight, marginBottom, marginLeft, margin;
                runModifierEffects();
                return instance.update();
            },
            forceUpdate: function forceUpdate() {
                if (isDestroyed) return;
                var _state$elements = state.elements, reference3 = _state$elements.reference, popper3 = _state$elements.popper;
                if (!areValidElements(reference3, popper3)) return;
                state.rects = {
                    reference: getCompositeRect(reference3, getOffsetParent(popper3), state.options.strategy === "fixed"),
                    popper: getLayoutRect(popper3)
                };
                state.reset = false;
                state.placement = state.options.placement;
                state.orderedModifiers.forEach(function(modifier) {
                    return state.modifiersData[modifier.name] = Object.assign({
                    }, modifier.data);
                });
                var __debug_loops__ = 0;
                for(var index = 0; index < state.orderedModifiers.length; index++){
                    if (state.reset === true) {
                        state.reset = false;
                        index = -1;
                        continue;
                    }
                    var _state$orderedModifie = state.orderedModifiers[index], fn2 = _state$orderedModifie.fn, _state$orderedModifie2 = _state$orderedModifie.options, _options = _state$orderedModifie2 === void 0 ? {
                    } : _state$orderedModifie2, name = _state$orderedModifie.name;
                    if (typeof fn2 === "function") state = fn2({
                        state,
                        options: _options,
                        name,
                        instance
                    }) || state;
                }
            },
            update: debounce(function() {
                return new Promise(function(resolve) {
                    instance.forceUpdate();
                    resolve(state);
                });
            }),
            destroy: function destroy() {
                cleanupModifierEffects();
                isDestroyed = true;
            }
        };
        if (!areValidElements(reference2, popper2)) return instance;
        instance.setOptions(options).then(function(state2) {
            if (!isDestroyed && options.onFirstUpdate) options.onFirstUpdate(state2);
        });
        function runModifierEffects() {
            state.orderedModifiers.forEach(function(_ref3) {
                var name = _ref3.name, _ref3$options = _ref3.options, options2 = _ref3$options === void 0 ? {
                } : _ref3$options, effect4 = _ref3.effect;
                if (typeof effect4 === "function") {
                    var cleanupFn = effect4({
                        state,
                        name,
                        instance,
                        options: options2
                    });
                    var noopFn = function noopFn2() {
                    };
                    effectCleanupFns.push(cleanupFn || noopFn);
                }
            });
        }
        function cleanupModifierEffects() {
            effectCleanupFns.forEach(function(fn2) {
                return fn2();
            });
            effectCleanupFns = [];
        }
        return instance;
    };
}
// node_modules/@popperjs/core/dist/esm/modifiers/eventListeners.js
var passive = {
    passive: true
};
function effect(_ref) {
    var state = _ref.state, instance = _ref.instance, options = _ref.options;
    var _options$scroll = options.scroll, scroll = _options$scroll === void 0 ? true : _options$scroll, _options$resize = options.resize, resize = _options$resize === void 0 ? true : _options$resize;
    var window2 = getWindow(state.elements.popper);
    var scrollParents = [].concat(state.scrollParents.reference, state.scrollParents.popper);
    if (scroll) scrollParents.forEach(function(scrollParent) {
        scrollParent.addEventListener("scroll", instance.update, passive);
    });
    if (resize) window2.addEventListener("resize", instance.update, passive);
    return function() {
        if (scroll) scrollParents.forEach(function(scrollParent) {
            scrollParent.removeEventListener("scroll", instance.update, passive);
        });
        if (resize) window2.removeEventListener("resize", instance.update, passive);
    };
}
var eventListeners_default = {
    name: "eventListeners",
    enabled: true,
    phase: "write",
    fn: function fn() {
    },
    effect,
    data: {
    }
};
// node_modules/@popperjs/core/dist/esm/modifiers/popperOffsets.js
function popperOffsets(_ref) {
    var state = _ref.state, name = _ref.name;
    state.modifiersData[name] = computeOffsets({
        reference: state.rects.reference,
        element: state.rects.popper,
        strategy: "absolute",
        placement: state.placement
    });
}
var popperOffsets_default = {
    name: "popperOffsets",
    enabled: true,
    phase: "read",
    fn: popperOffsets,
    data: {
    }
};
// node_modules/@popperjs/core/dist/esm/modifiers/computeStyles.js
var unsetSides = {
    top: "auto",
    right: "auto",
    bottom: "auto",
    left: "auto"
};
function roundOffsetsByDPR(_ref) {
    var x = _ref.x, y = _ref.y;
    var win = window;
    var dpr = win.devicePixelRatio || 1;
    return {
        x: round(round(x * dpr) / dpr) || 0,
        y: round(round(y * dpr) / dpr) || 0
    };
}
function mapToStyles(_ref2) {
    var _Object$assign2;
    var popper2 = _ref2.popper, popperRect = _ref2.popperRect, placement = _ref2.placement, offsets = _ref2.offsets, position = _ref2.position, gpuAcceleration = _ref2.gpuAcceleration, adaptive = _ref2.adaptive, roundOffsets = _ref2.roundOffsets;
    var _ref3 = roundOffsets === true ? roundOffsetsByDPR(offsets) : typeof roundOffsets === "function" ? roundOffsets(offsets) : offsets, _ref3$x = _ref3.x, x = _ref3$x === void 0 ? 0 : _ref3$x, _ref3$y = _ref3.y, y = _ref3$y === void 0 ? 0 : _ref3$y;
    var hasX = offsets.hasOwnProperty("x");
    var hasY = offsets.hasOwnProperty("y");
    var sideX = left;
    var sideY = top;
    var win = window;
    if (adaptive) {
        var offsetParent = getOffsetParent(popper2);
        var heightProp = "clientHeight";
        var widthProp = "clientWidth";
        if (offsetParent === getWindow(popper2)) {
            offsetParent = getDocumentElement(popper2);
            if (getComputedStyle(offsetParent).position !== "static") {
                heightProp = "scrollHeight";
                widthProp = "scrollWidth";
            }
        }
        if (placement === top) {
            sideY = bottom;
            y -= offsetParent[heightProp] - popperRect.height;
            y *= gpuAcceleration ? 1 : -1;
        }
        if (placement === left) {
            sideX = right;
            x -= offsetParent[widthProp] - popperRect.width;
            x *= gpuAcceleration ? 1 : -1;
        }
    }
    var commonStyles = Object.assign({
        position
    }, adaptive && unsetSides);
    if (gpuAcceleration) {
        var _Object$assign;
        return Object.assign({
        }, commonStyles, (_Object$assign = {
        }, _Object$assign[sideY] = hasY ? "0" : "", _Object$assign[sideX] = hasX ? "0" : "", _Object$assign.transform = (win.devicePixelRatio || 1) < 2 ? "translate(" + x + "px, " + y + "px)" : "translate3d(" + x + "px, " + y + "px, 0)", _Object$assign));
    }
    return Object.assign({
    }, commonStyles, (_Object$assign2 = {
    }, _Object$assign2[sideY] = hasY ? y + "px" : "", _Object$assign2[sideX] = hasX ? x + "px" : "", _Object$assign2.transform = "", _Object$assign2));
}
function computeStyles(_ref4) {
    var state = _ref4.state, options = _ref4.options;
    var _options$gpuAccelerat = options.gpuAcceleration, gpuAcceleration = _options$gpuAccelerat === void 0 ? true : _options$gpuAccelerat, _options$adaptive = options.adaptive, adaptive = _options$adaptive === void 0 ? true : _options$adaptive, _options$roundOffsets = options.roundOffsets, roundOffsets = _options$roundOffsets === void 0 ? true : _options$roundOffsets;
    var transitionProperty, property;
    var commonStyles = {
        placement: getBasePlacement(state.placement),
        popper: state.elements.popper,
        popperRect: state.rects.popper,
        gpuAcceleration
    };
    if (state.modifiersData.popperOffsets != null) state.styles.popper = Object.assign({
    }, state.styles.popper, mapToStyles(Object.assign({
    }, commonStyles, {
        offsets: state.modifiersData.popperOffsets,
        position: state.options.strategy,
        adaptive,
        roundOffsets
    })));
    if (state.modifiersData.arrow != null) state.styles.arrow = Object.assign({
    }, state.styles.arrow, mapToStyles(Object.assign({
    }, commonStyles, {
        offsets: state.modifiersData.arrow,
        position: "absolute",
        adaptive: false,
        roundOffsets
    })));
    state.attributes.popper = Object.assign({
    }, state.attributes.popper, {
        "data-popper-placement": state.placement
    });
}
var computeStyles_default = {
    name: "computeStyles",
    enabled: true,
    phase: "beforeWrite",
    fn: computeStyles,
    data: {
    }
};
// node_modules/@popperjs/core/dist/esm/modifiers/applyStyles.js
function applyStyles(_ref) {
    var state = _ref.state;
    Object.keys(state.elements).forEach(function(name) {
        var style = state.styles[name] || {
        };
        var attributes = state.attributes[name] || {
        };
        var element = state.elements[name];
        if (!isHTMLElement(element) || !getNodeName(element)) return;
        Object.assign(element.style, style);
        Object.keys(attributes).forEach(function(name2) {
            var value = attributes[name2];
            if (value === false) element.removeAttribute(name2);
            else element.setAttribute(name2, value === true ? "" : value);
        });
    });
}
function effect2(_ref2) {
    var state = _ref2.state;
    var initialStyles = {
        popper: {
            position: state.options.strategy,
            left: "0",
            top: "0",
            margin: "0"
        },
        arrow: {
            position: "absolute"
        },
        reference: {
        }
    };
    Object.assign(state.elements.popper.style, initialStyles.popper);
    state.styles = initialStyles;
    if (state.elements.arrow) Object.assign(state.elements.arrow.style, initialStyles.arrow);
    return function() {
        Object.keys(state.elements).forEach(function(name) {
            var element = state.elements[name];
            var attributes = state.attributes[name] || {
            };
            var styleProperties = Object.keys(state.styles.hasOwnProperty(name) ? state.styles[name] : initialStyles[name]);
            var style = styleProperties.reduce(function(style2, property) {
                style2[property] = "";
                return style2;
            }, {
            });
            if (!isHTMLElement(element) || !getNodeName(element)) return;
            Object.assign(element.style, style);
            Object.keys(attributes).forEach(function(attribute) {
                element.removeAttribute(attribute);
            });
        });
    };
}
var applyStyles_default = {
    name: "applyStyles",
    enabled: true,
    phase: "write",
    fn: applyStyles,
    effect: effect2,
    requires: [
        "computeStyles"
    ]
};
// node_modules/@popperjs/core/dist/esm/modifiers/offset.js
function distanceAndSkiddingToXY(placement, rects, offset2) {
    var basePlacement = getBasePlacement(placement);
    var invertDistance = [
        left,
        top
    ].indexOf(basePlacement) >= 0 ? -1 : 1;
    var _ref = typeof offset2 === "function" ? offset2(Object.assign({
    }, rects, {
        placement
    })) : offset2, skidding = _ref[0], distance = _ref[1];
    skidding = skidding || 0;
    distance = (distance || 0) * invertDistance;
    return [
        left,
        right
    ].indexOf(basePlacement) >= 0 ? {
        x: distance,
        y: skidding
    } : {
        x: skidding,
        y: distance
    };
}
function offset(_ref2) {
    var state = _ref2.state, options = _ref2.options, name = _ref2.name;
    var _options$offset = options.offset, offset2 = _options$offset === void 0 ? [
        0,
        0
    ] : _options$offset;
    var data = placements.reduce(function(acc, placement) {
        acc[placement] = distanceAndSkiddingToXY(placement, state.rects, offset2);
        return acc;
    }, {
    });
    var _data$state$placement = data[state.placement], x = _data$state$placement.x, y = _data$state$placement.y;
    if (state.modifiersData.popperOffsets != null) {
        state.modifiersData.popperOffsets.x += x;
        state.modifiersData.popperOffsets.y += y;
    }
    state.modifiersData[name] = data;
}
var offset_default = {
    name: "offset",
    enabled: true,
    phase: "main",
    requires: [
        "popperOffsets"
    ],
    fn: offset
};
// node_modules/@popperjs/core/dist/esm/utils/getOppositePlacement.js
var hash = {
    left: "right",
    right: "left",
    bottom: "top",
    top: "bottom"
};
function getOppositePlacement(placement) {
    return placement.replace(/left|right|bottom|top/g, function(matched) {
        return hash[matched];
    });
}
// node_modules/@popperjs/core/dist/esm/utils/getOppositeVariationPlacement.js
var hash2 = {
    start: "end",
    end: "start"
};
function getOppositeVariationPlacement(placement) {
    return placement.replace(/start|end/g, function(matched) {
        return hash2[matched];
    });
}
// node_modules/@popperjs/core/dist/esm/utils/computeAutoPlacement.js
function computeAutoPlacement(state, options) {
    if (options === void 0) options = {
    };
    var _options = options, placement = _options.placement, boundary = _options.boundary, rootBoundary = _options.rootBoundary, padding = _options.padding, flipVariations = _options.flipVariations, _options$allowedAutoP = _options.allowedAutoPlacements, allowedAutoPlacements = _options$allowedAutoP === void 0 ? placements : _options$allowedAutoP;
    var variation = getVariation(placement);
    var placements2 = variation ? flipVariations ? variationPlacements : variationPlacements.filter(function(placement2) {
        return getVariation(placement2) === variation;
    }) : basePlacements;
    var allowedPlacements = placements2.filter(function(placement2) {
        return allowedAutoPlacements.indexOf(placement2) >= 0;
    });
    if (allowedPlacements.length === 0) allowedPlacements = placements2;
    var overflows = allowedPlacements.reduce(function(acc, placement2) {
        acc[placement2] = detectOverflow(state, {
            placement: placement2,
            boundary,
            rootBoundary,
            padding
        })[getBasePlacement(placement2)];
        return acc;
    }, {
    });
    return Object.keys(overflows).sort(function(a, b) {
        return overflows[a] - overflows[b];
    });
}
// node_modules/@popperjs/core/dist/esm/modifiers/flip.js
function getExpandedFallbackPlacements(placement) {
    if (getBasePlacement(placement) === auto) return [];
    var oppositePlacement = getOppositePlacement(placement);
    return [
        getOppositeVariationPlacement(placement),
        oppositePlacement,
        getOppositeVariationPlacement(oppositePlacement)
    ];
}
function flip(_ref) {
    var state = _ref.state, options = _ref.options, name = _ref.name;
    if (state.modifiersData[name]._skip) return;
    var _options$mainAxis = options.mainAxis, checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis, _options$altAxis = options.altAxis, checkAltAxis = _options$altAxis === void 0 ? true : _options$altAxis, specifiedFallbackPlacements = options.fallbackPlacements, padding = options.padding, boundary = options.boundary, rootBoundary = options.rootBoundary, altBoundary = options.altBoundary, _options$flipVariatio = options.flipVariations, flipVariations = _options$flipVariatio === void 0 ? true : _options$flipVariatio, allowedAutoPlacements = options.allowedAutoPlacements;
    var preferredPlacement = state.options.placement;
    var basePlacement = getBasePlacement(preferredPlacement);
    var isBasePlacement = basePlacement === preferredPlacement;
    var fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipVariations ? [
        getOppositePlacement(preferredPlacement)
    ] : getExpandedFallbackPlacements(preferredPlacement));
    var placements2 = [
        preferredPlacement
    ].concat(fallbackPlacements).reduce(function(acc, placement2) {
        return acc.concat(getBasePlacement(placement2) === auto ? computeAutoPlacement(state, {
            placement: placement2,
            boundary,
            rootBoundary,
            padding,
            flipVariations,
            allowedAutoPlacements
        }) : placement2);
    }, []);
    var referenceRect = state.rects.reference;
    var popperRect = state.rects.popper;
    var checksMap = new Map();
    var makeFallbackChecks = true;
    var firstFittingPlacement = placements2[0];
    for(var i = 0; i < placements2.length; i++){
        var placement = placements2[i];
        var _basePlacement = getBasePlacement(placement);
        var isStartVariation = getVariation(placement) === start;
        var isVertical = [
            top,
            bottom
        ].indexOf(_basePlacement) >= 0;
        var len = isVertical ? "width" : "height";
        var overflow = detectOverflow(state, {
            placement,
            boundary,
            rootBoundary,
            altBoundary,
            padding
        });
        var mainVariationSide = isVertical ? isStartVariation ? right : left : isStartVariation ? bottom : top;
        if (referenceRect[len] > popperRect[len]) mainVariationSide = getOppositePlacement(mainVariationSide);
        var altVariationSide = getOppositePlacement(mainVariationSide);
        var checks = [];
        if (checkMainAxis) checks.push(overflow[_basePlacement] <= 0);
        if (checkAltAxis) checks.push(overflow[mainVariationSide] <= 0, overflow[altVariationSide] <= 0);
        if (checks.every(function(check) {
            return check;
        })) {
            firstFittingPlacement = placement;
            makeFallbackChecks = false;
            break;
        }
        checksMap.set(placement, checks);
    }
    if (makeFallbackChecks) {
        var numberOfChecks = flipVariations ? 3 : 1;
        var _loop = function _loop2(_i2) {
            var fittingPlacement = placements2.find(function(placement2) {
                var checks2 = checksMap.get(placement2);
                if (checks2) return checks2.slice(0, _i2).every(function(check) {
                    return check;
                });
            });
            if (fittingPlacement) {
                firstFittingPlacement = fittingPlacement;
                return "break";
            }
        };
        for(var _i = numberOfChecks; _i > 0; _i--){
            var _ret = _loop(_i);
            if (_ret === "break") break;
        }
    }
    if (state.placement !== firstFittingPlacement) {
        state.modifiersData[name]._skip = true;
        state.placement = firstFittingPlacement;
        state.reset = true;
    }
}
var flip_default = {
    name: "flip",
    enabled: true,
    phase: "main",
    fn: flip,
    requiresIfExists: [
        "offset"
    ],
    data: {
        _skip: false
    }
};
// node_modules/@popperjs/core/dist/esm/utils/getAltAxis.js
function getAltAxis(axis) {
    return axis === "x" ? "y" : "x";
}
// node_modules/@popperjs/core/dist/esm/utils/within.js
function within(min2, value, max2) {
    return max(min2, min(value, max2));
}
// node_modules/@popperjs/core/dist/esm/modifiers/preventOverflow.js
function preventOverflow(_ref) {
    var state = _ref.state, options = _ref.options, name = _ref.name;
    var _options$mainAxis = options.mainAxis, checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis, _options$altAxis = options.altAxis, checkAltAxis = _options$altAxis === void 0 ? false : _options$altAxis, boundary = options.boundary, rootBoundary = options.rootBoundary, altBoundary = options.altBoundary, padding = options.padding, _options$tether = options.tether, tether = _options$tether === void 0 ? true : _options$tether, _options$tetherOffset = options.tetherOffset, tetherOffset = _options$tetherOffset === void 0 ? 0 : _options$tetherOffset;
    var overflow = detectOverflow(state, {
        boundary,
        rootBoundary,
        padding,
        altBoundary
    });
    var basePlacement = getBasePlacement(state.placement);
    var variation = getVariation(state.placement);
    var isBasePlacement = !variation;
    var mainAxis = getMainAxisFromPlacement(basePlacement);
    var altAxis = getAltAxis(mainAxis);
    var popperOffsets2 = state.modifiersData.popperOffsets;
    var referenceRect = state.rects.reference;
    var popperRect = state.rects.popper;
    var tetherOffsetValue = typeof tetherOffset === "function" ? tetherOffset(Object.assign({
    }, state.rects, {
        placement: state.placement
    })) : tetherOffset;
    var data = {
        x: 0,
        y: 0
    };
    if (!popperOffsets2) return;
    if (checkMainAxis || checkAltAxis) {
        var mainSide = mainAxis === "y" ? top : left;
        var altSide = mainAxis === "y" ? bottom : right;
        var len = mainAxis === "y" ? "height" : "width";
        var offset2 = popperOffsets2[mainAxis];
        var min2 = popperOffsets2[mainAxis] + overflow[mainSide];
        var max2 = popperOffsets2[mainAxis] - overflow[altSide];
        var additive = tether ? -popperRect[len] / 2 : 0;
        var minLen = variation === start ? referenceRect[len] : popperRect[len];
        var maxLen = variation === start ? -popperRect[len] : -referenceRect[len];
        var arrowElement = state.elements.arrow;
        var arrowRect = tether && arrowElement ? getLayoutRect(arrowElement) : {
            width: 0,
            height: 0
        };
        var arrowPaddingObject = state.modifiersData["arrow#persistent"] ? state.modifiersData["arrow#persistent"].padding : getFreshSideObject();
        var arrowPaddingMin = arrowPaddingObject[mainSide];
        var arrowPaddingMax = arrowPaddingObject[altSide];
        var arrowLen = within(0, referenceRect[len], arrowRect[len]);
        var minOffset = isBasePlacement ? referenceRect[len] / 2 - additive - arrowLen - arrowPaddingMin - tetherOffsetValue : minLen - arrowLen - arrowPaddingMin - tetherOffsetValue;
        var maxOffset = isBasePlacement ? -referenceRect[len] / 2 + additive + arrowLen + arrowPaddingMax + tetherOffsetValue : maxLen + arrowLen + arrowPaddingMax + tetherOffsetValue;
        var arrowOffsetParent = state.elements.arrow && getOffsetParent(state.elements.arrow);
        var clientOffset = arrowOffsetParent ? mainAxis === "y" ? arrowOffsetParent.clientTop || 0 : arrowOffsetParent.clientLeft || 0 : 0;
        var offsetModifierValue = state.modifiersData.offset ? state.modifiersData.offset[state.placement][mainAxis] : 0;
        var tetherMin = popperOffsets2[mainAxis] + minOffset - offsetModifierValue - clientOffset;
        var tetherMax = popperOffsets2[mainAxis] + maxOffset - offsetModifierValue;
        if (checkMainAxis) {
            var preventedOffset = within(tether ? min(min2, tetherMin) : min2, offset2, tether ? max(max2, tetherMax) : max2);
            popperOffsets2[mainAxis] = preventedOffset;
            data[mainAxis] = preventedOffset - offset2;
        }
        if (checkAltAxis) {
            var _mainSide = mainAxis === "x" ? top : left;
            var _altSide = mainAxis === "x" ? bottom : right;
            var _offset = popperOffsets2[altAxis];
            var _min = _offset + overflow[_mainSide];
            var _max = _offset - overflow[_altSide];
            var _preventedOffset = within(tether ? min(_min, tetherMin) : _min, _offset, tether ? max(_max, tetherMax) : _max);
            popperOffsets2[altAxis] = _preventedOffset;
            data[altAxis] = _preventedOffset - _offset;
        }
    }
    state.modifiersData[name] = data;
}
var preventOverflow_default = {
    name: "preventOverflow",
    enabled: true,
    phase: "main",
    fn: preventOverflow,
    requiresIfExists: [
        "offset"
    ]
};
// node_modules/@popperjs/core/dist/esm/modifiers/arrow.js
var toPaddingObject = function toPaddingObject2(padding, state) {
    padding = typeof padding === "function" ? padding(Object.assign({
    }, state.rects, {
        placement: state.placement
    })) : padding;
    return mergePaddingObject(typeof padding !== "number" ? padding : expandToHashMap(padding, basePlacements));
};
function arrow(_ref) {
    var _state$modifiersData$;
    var state = _ref.state, name = _ref.name, options = _ref.options;
    var arrowElement = state.elements.arrow;
    var popperOffsets2 = state.modifiersData.popperOffsets;
    var basePlacement = getBasePlacement(state.placement);
    var axis = getMainAxisFromPlacement(basePlacement);
    var isVertical = [
        left,
        right
    ].indexOf(basePlacement) >= 0;
    var len = isVertical ? "height" : "width";
    if (!arrowElement || !popperOffsets2) return;
    var paddingObject = toPaddingObject(options.padding, state);
    var arrowRect = getLayoutRect(arrowElement);
    var minProp = axis === "y" ? top : left;
    var maxProp = axis === "y" ? bottom : right;
    var endDiff = state.rects.reference[len] + state.rects.reference[axis] - popperOffsets2[axis] - state.rects.popper[len];
    var startDiff = popperOffsets2[axis] - state.rects.reference[axis];
    var arrowOffsetParent = getOffsetParent(arrowElement);
    var clientSize = arrowOffsetParent ? axis === "y" ? arrowOffsetParent.clientHeight || 0 : arrowOffsetParent.clientWidth || 0 : 0;
    var centerToReference = endDiff / 2 - startDiff / 2;
    var min2 = paddingObject[minProp];
    var max2 = clientSize - arrowRect[len] - paddingObject[maxProp];
    var center = clientSize / 2 - arrowRect[len] / 2 + centerToReference;
    var offset2 = within(min2, center, max2);
    var axisProp = axis;
    state.modifiersData[name] = (_state$modifiersData$ = {
    }, _state$modifiersData$[axisProp] = offset2, _state$modifiersData$.centerOffset = offset2 - center, _state$modifiersData$);
}
function effect3(_ref2) {
    var state = _ref2.state, options = _ref2.options;
    var _options$element = options.element, arrowElement = _options$element === void 0 ? "[data-popper-arrow]" : _options$element;
    if (arrowElement == null) return;
    if (typeof arrowElement === "string") {
        arrowElement = state.elements.popper.querySelector(arrowElement);
        if (!arrowElement) return;
    }
    if (!contains(state.elements.popper, arrowElement)) return;
    state.elements.arrow = arrowElement;
}
var arrow_default = {
    name: "arrow",
    enabled: true,
    phase: "main",
    fn: arrow,
    effect: effect3,
    requires: [
        "popperOffsets"
    ],
    requiresIfExists: [
        "preventOverflow"
    ]
};
// node_modules/@popperjs/core/dist/esm/modifiers/hide.js
function getSideOffsets(overflow, rect, preventedOffsets) {
    if (preventedOffsets === void 0) preventedOffsets = {
        x: 0,
        y: 0
    };
    return {
        top: overflow.top - rect.height - preventedOffsets.y,
        right: overflow.right - rect.width + preventedOffsets.x,
        bottom: overflow.bottom - rect.height + preventedOffsets.y,
        left: overflow.left - rect.width - preventedOffsets.x
    };
}
function isAnySideFullyClipped(overflow) {
    return [
        top,
        right,
        bottom,
        left
    ].some(function(side) {
        return overflow[side] >= 0;
    });
}
function hide(_ref) {
    var state = _ref.state, name = _ref.name;
    var referenceRect = state.rects.reference;
    var popperRect = state.rects.popper;
    var preventedOffsets = state.modifiersData.preventOverflow;
    var referenceOverflow = detectOverflow(state, {
        elementContext: "reference"
    });
    var popperAltOverflow = detectOverflow(state, {
        altBoundary: true
    });
    var referenceClippingOffsets = getSideOffsets(referenceOverflow, referenceRect);
    var popperEscapeOffsets = getSideOffsets(popperAltOverflow, popperRect, preventedOffsets);
    var isReferenceHidden = isAnySideFullyClipped(referenceClippingOffsets);
    var hasPopperEscaped = isAnySideFullyClipped(popperEscapeOffsets);
    state.modifiersData[name] = {
        referenceClippingOffsets,
        popperEscapeOffsets,
        isReferenceHidden,
        hasPopperEscaped
    };
    state.attributes.popper = Object.assign({
    }, state.attributes.popper, {
        "data-popper-reference-hidden": isReferenceHidden,
        "data-popper-escaped": hasPopperEscaped
    });
}
var hide_default = {
    name: "hide",
    enabled: true,
    phase: "main",
    requiresIfExists: [
        "preventOverflow"
    ],
    fn: hide
};
// node_modules/@popperjs/core/dist/esm/popper.js
var defaultModifiers = [
    eventListeners_default,
    popperOffsets_default,
    computeStyles_default,
    applyStyles_default,
    offset_default,
    flip_default,
    preventOverflow_default,
    arrow_default,
    hide_default
];
var createPopper = /* @__PURE__ */ popperGenerator({
    defaultModifiers
});

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"ciiiV":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule' || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"eF7TG":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "animateTo", ()=>animateTo
);
parcelHelpers.export(exports, "parseDuration", ()=>parseDuration
);
parcelHelpers.export(exports, "stopAnimations", ()=>stopAnimations
);
parcelHelpers.export(exports, "shimKeyframesHeightAuto", ()=>shimKeyframesHeightAuto
);
var _chunkIHGPZX35Js = require("./chunk.IHGPZX35.js");
// src/internal/animate.ts
function animateTo(el, keyframes, options) {
    return new Promise(async (resolve)=>{
        if ((options == null ? void 0 : options.duration) === Infinity) throw new Error("Promise-based animations must be finite.");
        const animation = el.animate(keyframes, _chunkIHGPZX35Js.__spreadProps(_chunkIHGPZX35Js.__spreadValues({
        }, options), {
            duration: prefersReducedMotion() ? 0 : options.duration
        }));
        animation.addEventListener("cancel", resolve, {
            once: true
        });
        animation.addEventListener("finish", resolve, {
            once: true
        });
    });
}
function parseDuration(delay) {
    delay = (delay + "").toLowerCase();
    if (delay.indexOf("ms") > -1) return parseFloat(delay);
    if (delay.indexOf("s") > -1) return parseFloat(delay) * 1000;
    return parseFloat(delay);
}
function prefersReducedMotion() {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    return query == null ? void 0 : query.matches;
}
function stopAnimations(el) {
    return Promise.all(el.getAnimations().map((animation)=>{
        return new Promise((resolve)=>{
            const handleAnimationEvent = requestAnimationFrame(resolve);
            animation.addEventListener("cancel", ()=>handleAnimationEvent
            , {
                once: true
            });
            animation.addEventListener("finish", ()=>handleAnimationEvent
            , {
                once: true
            });
            animation.cancel();
        });
    }));
}
function shimKeyframesHeightAuto(keyframes, calculatedHeight) {
    return keyframes.map((keyframe)=>Object.assign({
        }, keyframe, {
            height: keyframe.height === "auto" ? `${calculatedHeight}px` : keyframe.height
        })
    );
}

},{"./chunk.IHGPZX35.js":"4lKzp","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"4lKzp":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "__spreadValues", ()=>__spreadValues
);
parcelHelpers.export(exports, "__spreadProps", ()=>__spreadProps
);
parcelHelpers.export(exports, "__commonJS", ()=>__commonJS
);
parcelHelpers.export(exports, "__export", ()=>__export
);
parcelHelpers.export(exports, "__toModule", ()=>__toModule
);
parcelHelpers.export(exports, "__decorateClass", ()=>__decorateClass
);
var __create = Object.create;
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value)=>key in obj ? __defProp(obj, key, {
        enumerable: true,
        configurable: true,
        writable: true,
        value
    }) : obj[key] = value
;
var __spreadValues = (a, b)=>{
    for(var prop in b || (b = {
    }))if (__hasOwnProp.call(b, prop)) __defNormalProp(a, prop, b[prop]);
    if (__getOwnPropSymbols) {
        for (var prop of __getOwnPropSymbols(b))if (__propIsEnum.call(b, prop)) __defNormalProp(a, prop, b[prop]);
    }
    return a;
};
var __spreadProps = (a, b)=>__defProps(a, __getOwnPropDescs(b))
;
var __markAsModule = (target)=>__defProp(target, "__esModule", {
        value: true
    })
;
var __commonJS = (cb, mod)=>function __require() {
        return mod || cb[Object.keys(cb)[0]]((mod = {
            exports: {
            }
        }).exports, mod), mod.exports;
    }
;
var __export = (target, all)=>{
    for(var name in all)__defProp(target, name, {
        get: all[name],
        enumerable: true
    });
};
var __reExport = (target, module, desc)=>{
    if (module && typeof module === "object" || typeof module === "function") {
        for (let key of __getOwnPropNames(module))if (!__hasOwnProp.call(target, key) && key !== "default") __defProp(target, key, {
            get: ()=>module[key]
            ,
            enumerable: !(desc = __getOwnPropDesc(module, key)) || desc.enumerable
        });
    }
    return target;
};
var __toModule = (module)=>{
    return __reExport(__markAsModule(__defProp(module != null ? __create(__getProtoOf(module)) : {
    }, "default", module && module.__esModule && "default" in module ? {
        get: ()=>module.default
        ,
        enumerable: true
    } : {
        value: module,
        enumerable: true
    })), module);
};
var __decorateClass = (decorators, target, key, kind)=>{
    var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc(target, key) : target;
    for(var i = decorators.length - 1, decorator; i >= 0; i--)if (decorator = decorators[i]) result = (kind ? decorator(target, key, result) : decorator(result)) || result;
    if (kind && result) __defProp(target, key, result);
    return result;
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"76eJj":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "setDefaultAnimation", ()=>setDefaultAnimation
);
parcelHelpers.export(exports, "setAnimation", ()=>setAnimation
);
parcelHelpers.export(exports, "getAnimation", ()=>getAnimation
);
// src/utilities/animation-registry.ts
var defaultAnimationRegistry = new Map();
var customAnimationRegistry = new WeakMap();
function ensureAnimation(animation) {
    return animation != null ? animation : {
        keyframes: [],
        options: {
            duration: 0
        }
    };
}
function setDefaultAnimation(animationName, animation) {
    defaultAnimationRegistry.set(animationName, ensureAnimation(animation));
}
function setAnimation(el, animationName, animation) {
    customAnimationRegistry.set(el, Object.assign({
    }, customAnimationRegistry.get(el), {
        [animationName]: ensureAnimation(animation)
    }));
}
function getAnimation(el, animationName) {
    const customAnimation = customAnimationRegistry.get(el);
    if (customAnimation && customAnimation[animationName]) return customAnimation[animationName];
    const defaultAnimation = defaultAnimationRegistry.get(animationName);
    if (defaultAnimation) return defaultAnimation;
    return {
        keyframes: [],
        options: {
            duration: 0
        }
    };
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"ipINT":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "watch", ()=>watch
);
// src/internal/watch.ts
function watch(propName, options) {
    return (protoOrDescriptor, name)=>{
        const { update  } = protoOrDescriptor;
        options = Object.assign({
            waitUntilFirstUpdate: false
        }, options);
        protoOrDescriptor.update = function(changedProps) {
            if (changedProps.has(propName)) {
                const oldValue = changedProps.get(propName);
                const newValue = this[propName];
                if (oldValue !== newValue) {
                    if (!(options == null ? void 0 : options.waitUntilFirstUpdate) || this.hasUpdated) this[name].call(this, oldValue, newValue);
                }
            }
            update.call(this, changedProps);
        };
    };
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"9KUzU":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "emit", ()=>emit
);
parcelHelpers.export(exports, "waitForEvent", ()=>waitForEvent
);
// src/internal/event.ts
function emit(el, name, options) {
    const event = new CustomEvent(name, Object.assign({
        bubbles: true,
        cancelable: false,
        composed: true,
        detail: {
        }
    }, options));
    el.dispatchEvent(event);
    return event;
}
function waitForEvent(el, eventName) {
    return new Promise((resolve)=>{
        function done(event) {
            if (event.target === el) {
                el.removeEventListener(eventName, done);
                resolve();
            }
        }
        el.addEventListener(eventName, done);
    });
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"aWFCQ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "o", ()=>o
) /**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ ;
var _chunk2JQPDYNAJs = require("./chunk.2JQPDYNA.js");
var _chunkX3WLUTHFJs = require("./chunk.X3WLUTHF.js");
// node_modules/lit-html/directives/class-map.js
var o = _chunk2JQPDYNAJs.e(class extends _chunk2JQPDYNAJs.i {
    constructor(t2){
        var i2;
        if (super(t2), t2.type !== _chunk2JQPDYNAJs.t.ATTRIBUTE || t2.name !== "class" || ((i2 = t2.strings) === null || i2 === void 0 ? void 0 : i2.length) > 2) throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.");
    }
    render(t2) {
        return " " + Object.keys(t2).filter((i2)=>t2[i2]
        ).join(" ") + " ";
    }
    update(i2, [s]) {
        var r, o2;
        if (this.st === void 0) {
            this.st = new Set(), i2.strings !== void 0 && (this.et = new Set(i2.strings.join(" ").split(/\s/).filter((t2)=>t2 !== ""
            )));
            for(const t2 in s)s[t2] && !((r = this.et) === null || r === void 0 ? void 0 : r.has(t2)) && this.st.add(t2);
            return this.render(s);
        }
        const e2 = i2.element.classList;
        this.st.forEach((t2)=>{
            t2 in s || (e2.remove(t2), this.st.delete(t2));
        });
        for(const t2 in s){
            const i3 = !!s[t2];
            i3 === this.st.has(t2) || ((o2 = this.et) === null || o2 === void 0 ? void 0 : o2.has(t2)) || (i3 ? (e2.add(t2), this.st.add(t2)) : (e2.remove(t2), this.st.delete(t2)));
        }
        return _chunkX3WLUTHFJs.T;
    }
});

},{"./chunk.2JQPDYNA.js":"9nuKG","./chunk.X3WLUTHF.js":"1Nmoi","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"9nuKG":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "t", ()=>t
) /**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ ;
parcelHelpers.export(exports, "e", ()=>e
);
parcelHelpers.export(exports, "i", ()=>i
);
// node_modules/lit-html/directive.js
var t = {
    ATTRIBUTE: 1,
    CHILD: 2,
    PROPERTY: 3,
    BOOLEAN_ATTRIBUTE: 4,
    EVENT: 5,
    ELEMENT: 6
};
var e = (t2)=>(...e2)=>({
            _$litDirective$: t2,
            values: e2
        })
;
var i = class {
    constructor(t2){
    }
    get _$AU() {
        return this._$AM._$AU;
    }
    _$AT(t2, e2, i2) {
        this._$Ct = t2, this._$AM = e2, this._$Ci = i2;
    }
    _$AS(t2, e2) {
        return this.update(t2, e2);
    }
    update(t2, e2) {
        return this.render(...e2);
    }
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"1Nmoi":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "o", ()=>o
) /**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */  /**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ ;
parcelHelpers.export(exports, "r", ()=>r
);
parcelHelpers.export(exports, "y", ()=>y
);
parcelHelpers.export(exports, "T", ()=>T
);
parcelHelpers.export(exports, "x", ()=>x
);
parcelHelpers.export(exports, "n", ()=>n4
);
// node_modules/@lit/reactive-element/css-tag.js
var t = window.ShadowRoot && (window.ShadyCSS === void 0 || window.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype;
var e = Symbol();
var n = new Map();
var s = class {
    constructor(t3, n5){
        if (this._$cssResult$ = true, n5 !== e) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
        this.cssText = t3;
    }
    get styleSheet() {
        let e4 = n.get(this.cssText);
        return t && e4 === void 0 && (n.set(this.cssText, e4 = new CSSStyleSheet()), e4.replaceSync(this.cssText)), e4;
    }
    toString() {
        return this.cssText;
    }
};
var o = (t3)=>new s(typeof t3 == "string" ? t3 : t3 + "", e)
;
var r = (t3, ...n5)=>{
    const o5 = t3.length === 1 ? t3[0] : n5.reduce((e4, n6, s4)=>e4 + ((t4)=>{
            if (t4._$cssResult$ === true) return t4.cssText;
            if (typeof t4 == "number") return t4;
            throw Error("Value passed to 'css' function must be a 'css' function result: " + t4 + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
        })(n6) + t3[s4 + 1]
    , t3[0]);
    return new s(o5, e);
};
var i = (e4, n5)=>{
    t ? e4.adoptedStyleSheets = n5.map((t3)=>t3 instanceof CSSStyleSheet ? t3 : t3.styleSheet
    ) : n5.forEach((t3)=>{
        const n6 = document.createElement("style"), s4 = window.litNonce;
        s4 !== void 0 && n6.setAttribute("nonce", s4), n6.textContent = t3.cssText, e4.appendChild(n6);
    });
};
var S = t ? (t3)=>t3
 : (t3)=>t3 instanceof CSSStyleSheet ? ((t4)=>{
        let e4 = "";
        for (const n5 of t4.cssRules)e4 += n5.cssText;
        return o(e4);
    })(t3) : t3
;
// node_modules/@lit/reactive-element/reactive-element.js
var s2;
var e2;
var r2 = {
    toAttribute (t3, i3) {
        switch(i3){
            case Boolean:
                t3 = t3 ? "" : null;
                break;
            case Object:
            case Array:
                t3 = t3 == null ? t3 : JSON.stringify(t3);
        }
        return t3;
    },
    fromAttribute (t3, i3) {
        let s4 = t3;
        switch(i3){
            case Boolean:
                s4 = t3 !== null;
                break;
            case Number:
                s4 = t3 === null ? null : Number(t3);
                break;
            case Object:
            case Array:
                try {
                    s4 = JSON.parse(t3);
                } catch (t4) {
                    s4 = null;
                }
        }
        return s4;
    }
};
var h = (t3, i3)=>i3 !== t3 && (i3 == i3 || t3 == t3)
;
var o2 = {
    attribute: true,
    type: String,
    converter: r2,
    reflect: false,
    hasChanged: h
};
var n2 = class extends HTMLElement {
    constructor(){
        super(), this._$Et = new Map(), this.isUpdatePending = false, this.hasUpdated = false, this._$Ei = null, this.o();
    }
    static addInitializer(t3) {
        var i3;
        (i3 = this.l) !== null && i3 !== void 0 || (this.l = []), this.l.push(t3);
    }
    static get observedAttributes() {
        this.finalize();
        const t3 = [];
        return this.elementProperties.forEach((i3, s4)=>{
            const e4 = this._$Eh(s4, i3);
            e4 !== void 0 && (this._$Eu.set(e4, s4), t3.push(e4));
        }), t3;
    }
    static createProperty(t3, i3 = o2) {
        if (i3.state && (i3.attribute = false), this.finalize(), this.elementProperties.set(t3, i3), !i3.noAccessor && !this.prototype.hasOwnProperty(t3)) {
            const s4 = typeof t3 == "symbol" ? Symbol() : "__" + t3, e4 = this.getPropertyDescriptor(t3, s4, i3);
            e4 !== void 0 && Object.defineProperty(this.prototype, t3, e4);
        }
    }
    static getPropertyDescriptor(t3, i3, s4) {
        return {
            get () {
                return this[i3];
            },
            set (e4) {
                const r5 = this[t3];
                this[i3] = e4, this.requestUpdate(t3, r5, s4);
            },
            configurable: true,
            enumerable: true
        };
    }
    static getPropertyOptions(t3) {
        return this.elementProperties.get(t3) || o2;
    }
    static finalize() {
        if (this.hasOwnProperty("finalized")) return false;
        this.finalized = true;
        const t3 = Object.getPrototypeOf(this);
        if (t3.finalize(), this.elementProperties = new Map(t3.elementProperties), this._$Eu = new Map(), this.hasOwnProperty("properties")) {
            const t4 = this.properties, i3 = [
                ...Object.getOwnPropertyNames(t4),
                ...Object.getOwnPropertySymbols(t4)
            ];
            for (const s4 of i3)this.createProperty(s4, t4[s4]);
        }
        return this.elementStyles = this.finalizeStyles(this.styles), true;
    }
    static finalizeStyles(i3) {
        const s4 = [];
        if (Array.isArray(i3)) {
            const e4 = new Set(i3.flat(1 / 0).reverse());
            for (const i4 of e4)s4.unshift(S(i4));
        } else i3 !== void 0 && s4.push(S(i3));
        return s4;
    }
    static _$Eh(t3, i3) {
        const s4 = i3.attribute;
        return s4 === false ? void 0 : typeof s4 == "string" ? s4 : typeof t3 == "string" ? t3.toLowerCase() : void 0;
    }
    o() {
        var t3;
        this._$Ev = new Promise((t4)=>this.enableUpdating = t4
        ), this._$AL = new Map(), this._$Ep(), this.requestUpdate(), (t3 = this.constructor.l) === null || t3 === void 0 || t3.forEach((t4)=>t4(this)
        );
    }
    addController(t3) {
        var i3, s4;
        ((i3 = this._$Em) !== null && i3 !== void 0 ? i3 : this._$Em = []).push(t3), this.renderRoot !== void 0 && this.isConnected && ((s4 = t3.hostConnected) === null || s4 === void 0 || s4.call(t3));
    }
    removeController(t3) {
        var i3;
        (i3 = this._$Em) === null || i3 === void 0 || i3.splice(this._$Em.indexOf(t3) >>> 0, 1);
    }
    _$Ep() {
        this.constructor.elementProperties.forEach((t3, i3)=>{
            this.hasOwnProperty(i3) && (this._$Et.set(i3, this[i3]), delete this[i3]);
        });
    }
    createRenderRoot() {
        var t3;
        const s4 = (t3 = this.shadowRoot) !== null && t3 !== void 0 ? t3 : this.attachShadow(this.constructor.shadowRootOptions);
        return i(s4, this.constructor.elementStyles), s4;
    }
    connectedCallback() {
        var t3;
        this.renderRoot === void 0 && (this.renderRoot = this.createRenderRoot()), this.enableUpdating(true), (t3 = this._$Em) === null || t3 === void 0 || t3.forEach((t4)=>{
            var i3;
            return (i3 = t4.hostConnected) === null || i3 === void 0 ? void 0 : i3.call(t4);
        });
    }
    enableUpdating(t3) {
    }
    disconnectedCallback() {
        var t3;
        (t3 = this._$Em) === null || t3 === void 0 || t3.forEach((t4)=>{
            var i3;
            return (i3 = t4.hostDisconnected) === null || i3 === void 0 ? void 0 : i3.call(t4);
        });
    }
    attributeChangedCallback(t3, i3, s4) {
        this._$AK(t3, s4);
    }
    _$Eg(t3, i3, s4 = o2) {
        var e4, h3;
        const n5 = this.constructor._$Eh(t3, s4);
        if (n5 !== void 0 && s4.reflect === true) {
            const o5 = ((h3 = (e4 = s4.converter) === null || e4 === void 0 ? void 0 : e4.toAttribute) !== null && h3 !== void 0 ? h3 : r2.toAttribute)(i3, s4.type);
            this._$Ei = t3, o5 == null ? this.removeAttribute(n5) : this.setAttribute(n5, o5), this._$Ei = null;
        }
    }
    _$AK(t3, i3) {
        var s4, e4, h3;
        const o5 = this.constructor, n5 = o5._$Eu.get(t3);
        if (n5 !== void 0 && this._$Ei !== n5) {
            const t4 = o5.getPropertyOptions(n5), l3 = t4.converter, a2 = (h3 = (e4 = (s4 = l3) === null || s4 === void 0 ? void 0 : s4.fromAttribute) !== null && e4 !== void 0 ? e4 : typeof l3 == "function" ? l3 : null) !== null && h3 !== void 0 ? h3 : r2.fromAttribute;
            this._$Ei = n5, this[n5] = a2(i3, t4.type), this._$Ei = null;
        }
    }
    requestUpdate(t3, i3, s4) {
        let e4 = true;
        t3 !== void 0 && (((s4 = s4 || this.constructor.getPropertyOptions(t3)).hasChanged || h)(this[t3], i3) ? (this._$AL.has(t3) || this._$AL.set(t3, i3), s4.reflect === true && this._$Ei !== t3 && (this._$ES === void 0 && (this._$ES = new Map()), this._$ES.set(t3, s4))) : e4 = false), !this.isUpdatePending && e4 && (this._$Ev = this._$EC());
    }
    async _$EC() {
        this.isUpdatePending = true;
        try {
            await this._$Ev;
        } catch (t4) {
            Promise.reject(t4);
        }
        const t3 = this.scheduleUpdate();
        return t3 != null && await t3, !this.isUpdatePending;
    }
    scheduleUpdate() {
        return this.performUpdate();
    }
    performUpdate() {
        var t3;
        if (!this.isUpdatePending) return;
        this.hasUpdated, this._$Et && (this._$Et.forEach((t4, i4)=>this[i4] = t4
        ), this._$Et = void 0);
        let i3 = false;
        const s4 = this._$AL;
        try {
            i3 = this.shouldUpdate(s4), i3 ? (this.willUpdate(s4), (t3 = this._$Em) === null || t3 === void 0 || t3.forEach((t4)=>{
                var i4;
                return (i4 = t4.hostUpdate) === null || i4 === void 0 ? void 0 : i4.call(t4);
            }), this.update(s4)) : this._$ET();
        } catch (t4) {
            throw i3 = false, this._$ET(), t4;
        }
        i3 && this._$AE(s4);
    }
    willUpdate(t3) {
    }
    _$AE(t3) {
        var i3;
        (i3 = this._$Em) === null || i3 === void 0 || i3.forEach((t4)=>{
            var i4;
            return (i4 = t4.hostUpdated) === null || i4 === void 0 ? void 0 : i4.call(t4);
        }), this.hasUpdated || (this.hasUpdated = true, this.firstUpdated(t3)), this.updated(t3);
    }
    _$ET() {
        this._$AL = new Map(), this.isUpdatePending = false;
    }
    get updateComplete() {
        return this.getUpdateComplete();
    }
    getUpdateComplete() {
        return this._$Ev;
    }
    shouldUpdate(t3) {
        return true;
    }
    update(t3) {
        this._$ES !== void 0 && (this._$ES.forEach((t4, i3)=>this._$Eg(i3, this[i3], t4)
        ), this._$ES = void 0), this._$ET();
    }
    updated(t3) {
    }
    firstUpdated(t3) {
    }
};
n2.finalized = true, n2.elementProperties = new Map(), n2.elementStyles = [], n2.shadowRootOptions = {
    mode: "open"
}, (s2 = globalThis.reactiveElementPolyfillSupport) === null || s2 === void 0 || s2.call(globalThis, {
    ReactiveElement: n2
}), ((e2 = globalThis.reactiveElementVersions) !== null && e2 !== void 0 ? e2 : globalThis.reactiveElementVersions = []).push("1.0.0");
// node_modules/lit-html/lit-html.js
var t2;
var i2;
var s3 = globalThis.trustedTypes;
var e3 = s3 ? s3.createPolicy("lit-html", {
    createHTML: (t3)=>t3
}) : void 0;
var o3 = `lit$${(Math.random() + "").slice(9)}$`;
var n3 = "?" + o3;
var l = `<${n3}>`;
var h2 = document;
var r3 = (t3 = "")=>h2.createComment(t3)
;
var d = (t3)=>t3 === null || typeof t3 != "object" && typeof t3 != "function"
;
var u = Array.isArray;
var v = (t3)=>{
    var i3;
    return u(t3) || typeof ((i3 = t3) === null || i3 === void 0 ? void 0 : i3[Symbol.iterator]) == "function";
};
var c = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g;
var a = /-->/g;
var f = />/g;
var _ = />|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g;
var g = /'/g;
var m = /"/g;
var $ = /^(?:script|style|textarea)$/i;
var p = (t3)=>(i3, ...s4)=>({
            _$litType$: t3,
            strings: i3,
            values: s4
        })
;
var y = p(1);
var b = p(2);
var T = Symbol.for("lit-noChange");
var x = Symbol.for("lit-nothing");
var w = new WeakMap();
var A = (t3, i3, s4)=>{
    var e4, o5;
    const n5 = (e4 = s4 == null ? void 0 : s4.renderBefore) !== null && e4 !== void 0 ? e4 : i3;
    let l3 = n5._$litPart$;
    if (l3 === void 0) {
        const t4 = (o5 = s4 == null ? void 0 : s4.renderBefore) !== null && o5 !== void 0 ? o5 : null;
        n5._$litPart$ = l3 = new S2(i3.insertBefore(r3(), t4), t4, void 0, s4 != null ? s4 : {
        });
    }
    return l3._$AI(t3), l3;
};
var C = h2.createTreeWalker(h2, 129, null, false);
var P = (t3, i3)=>{
    const s4 = t3.length - 1, n5 = [];
    let h3, r5 = i3 === 2 ? "<svg>" : "", d2 = c;
    for(let i4 = 0; i4 < s4; i4++){
        const s5 = t3[i4];
        let e4, u3, v2 = -1, p2 = 0;
        for(; p2 < s5.length && (d2.lastIndex = p2, u3 = d2.exec(s5), u3 !== null);)p2 = d2.lastIndex, d2 === c ? u3[1] === "!--" ? d2 = a : u3[1] !== void 0 ? d2 = f : u3[2] !== void 0 ? ($.test(u3[2]) && (h3 = RegExp("</" + u3[2], "g")), d2 = _) : u3[3] !== void 0 && (d2 = _) : d2 === _ ? u3[0] === ">" ? (d2 = h3 != null ? h3 : c, v2 = -1) : u3[1] === void 0 ? v2 = -2 : (v2 = d2.lastIndex - u3[2].length, e4 = u3[1], d2 = u3[3] === void 0 ? _ : u3[3] === '"' ? m : g) : d2 === m || d2 === g ? d2 = _ : d2 === a || d2 === f ? d2 = c : (d2 = _, h3 = void 0);
        const y2 = d2 === _ && t3[i4 + 1].startsWith("/>") ? " " : "";
        r5 += d2 === c ? s5 + l : v2 >= 0 ? (n5.push(e4), s5.slice(0, v2) + "$lit$" + s5.slice(v2) + o3 + y2) : s5 + o3 + (v2 === -2 ? (n5.push(void 0), i4) : y2);
    }
    const u2 = r5 + (t3[s4] || "<?>") + (i3 === 2 ? "</svg>" : "");
    return [
        e3 !== void 0 ? e3.createHTML(u2) : u2,
        n5
    ];
};
var V = class {
    constructor({ strings: t3 , _$litType$: i3  }, e4){
        let l3;
        this.parts = [];
        let h3 = 0, d2 = 0;
        const u2 = t3.length - 1, v2 = this.parts, [c2, a2] = P(t3, i3);
        if (this.el = V.createElement(c2, e4), C.currentNode = this.el.content, i3 === 2) {
            const t4 = this.el.content, i4 = t4.firstChild;
            i4.remove(), t4.append(...i4.childNodes);
        }
        for(; (l3 = C.nextNode()) !== null && v2.length < u2;){
            if (l3.nodeType === 1) {
                if (l3.hasAttributes()) {
                    const t4 = [];
                    for (const i4 of l3.getAttributeNames())if (i4.endsWith("$lit$") || i4.startsWith(o3)) {
                        const s4 = a2[d2++];
                        if (t4.push(i4), s4 !== void 0) {
                            const t5 = l3.getAttribute(s4.toLowerCase() + "$lit$").split(o3), i5 = /([.?@])?(.*)/.exec(s4);
                            v2.push({
                                type: 1,
                                index: h3,
                                name: i5[2],
                                strings: t5,
                                ctor: i5[1] === "." ? k : i5[1] === "?" ? H : i5[1] === "@" ? I : M
                            });
                        } else v2.push({
                            type: 6,
                            index: h3
                        });
                    }
                    for (const i41 of t4)l3.removeAttribute(i41);
                }
                if ($.test(l3.tagName)) {
                    const t4 = l3.textContent.split(o3), i4 = t4.length - 1;
                    if (i4 > 0) {
                        l3.textContent = s3 ? s3.emptyScript : "";
                        for(let s4 = 0; s4 < i4; s4++)l3.append(t4[s4], r3()), C.nextNode(), v2.push({
                            type: 2,
                            index: ++h3
                        });
                        l3.append(t4[i4], r3());
                    }
                }
            } else if (l3.nodeType === 8) {
                if (l3.data === n3) v2.push({
                    type: 2,
                    index: h3
                });
                else {
                    let t4 = -1;
                    for(; (t4 = l3.data.indexOf(o3, t4 + 1)) !== -1;)v2.push({
                        type: 7,
                        index: h3
                    }), t4 += o3.length - 1;
                }
            }
            h3++;
        }
    }
    static createElement(t3, i3) {
        const s4 = h2.createElement("template");
        return s4.innerHTML = t3, s4;
    }
};
function E(t3, i3, s4 = t3, e4) {
    var o5, n5, l3, h3;
    if (i3 === T) return i3;
    let r5 = e4 !== void 0 ? (o5 = s4._$Cl) === null || o5 === void 0 ? void 0 : o5[e4] : s4._$Cu;
    const u2 = d(i3) ? void 0 : i3._$litDirective$;
    return (r5 == null ? void 0 : r5.constructor) !== u2 && ((n5 = r5 == null ? void 0 : r5._$AO) === null || n5 === void 0 || n5.call(r5, false), u2 === void 0 ? r5 = void 0 : (r5 = new u2(t3), r5._$AT(t3, s4, e4)), e4 !== void 0 ? ((l3 = (h3 = s4)._$Cl) !== null && l3 !== void 0 ? l3 : h3._$Cl = [])[e4] = r5 : s4._$Cu = r5), r5 !== void 0 && (i3 = E(t3, r5._$AS(t3, i3.values), r5, e4)), i3;
}
var N = class {
    constructor(t3, i3){
        this.v = [], this._$AN = void 0, this._$AD = t3, this._$AM = i3;
    }
    get parentNode() {
        return this._$AM.parentNode;
    }
    get _$AU() {
        return this._$AM._$AU;
    }
    p(t3) {
        var i3;
        const { el: { content: s4  } , parts: e4  } = this._$AD, o5 = ((i3 = t3 == null ? void 0 : t3.creationScope) !== null && i3 !== void 0 ? i3 : h2).importNode(s4, true);
        C.currentNode = o5;
        let n5 = C.nextNode(), l3 = 0, r5 = 0, d2 = e4[0];
        for(; d2 !== void 0;){
            if (l3 === d2.index) {
                let i4;
                d2.type === 2 ? i4 = new S2(n5, n5.nextSibling, this, t3) : d2.type === 1 ? i4 = new d2.ctor(n5, d2.name, d2.strings, this, t3) : d2.type === 6 && (i4 = new L(n5, this, t3)), this.v.push(i4), d2 = e4[++r5];
            }
            l3 !== (d2 == null ? void 0 : d2.index) && (n5 = C.nextNode(), l3++);
        }
        return o5;
    }
    m(t3) {
        let i3 = 0;
        for (const s4 of this.v)s4 !== void 0 && (s4.strings !== void 0 ? (s4._$AI(t3, s4, i3), i3 += s4.strings.length - 2) : s4._$AI(t3[i3])), i3++;
    }
};
var S2 = class {
    constructor(t3, i3, s4, e4){
        var o5;
        this.type = 2, this._$AH = x, this._$AN = void 0, this._$AA = t3, this._$AB = i3, this._$AM = s4, this.options = e4, this._$Cg = (o5 = e4 == null ? void 0 : e4.isConnected) === null || o5 === void 0 || o5;
    }
    get _$AU() {
        var t3, i3;
        return (i3 = (t3 = this._$AM) === null || t3 === void 0 ? void 0 : t3._$AU) !== null && i3 !== void 0 ? i3 : this._$Cg;
    }
    get parentNode() {
        let t3 = this._$AA.parentNode;
        const i3 = this._$AM;
        return i3 !== void 0 && t3.nodeType === 11 && (t3 = i3.parentNode), t3;
    }
    get startNode() {
        return this._$AA;
    }
    get endNode() {
        return this._$AB;
    }
    _$AI(t3, i3 = this) {
        t3 = E(this, t3, i3), d(t3) ? t3 === x || t3 == null || t3 === "" ? (this._$AH !== x && this._$AR(), this._$AH = x) : t3 !== this._$AH && t3 !== T && this.$(t3) : t3._$litType$ !== void 0 ? this.T(t3) : t3.nodeType !== void 0 ? this.S(t3) : v(t3) ? this.M(t3) : this.$(t3);
    }
    A(t3, i3 = this._$AB) {
        return this._$AA.parentNode.insertBefore(t3, i3);
    }
    S(t3) {
        this._$AH !== t3 && (this._$AR(), this._$AH = this.A(t3));
    }
    $(t3) {
        this._$AH !== x && d(this._$AH) ? this._$AA.nextSibling.data = t3 : this.S(h2.createTextNode(t3)), this._$AH = t3;
    }
    T(t3) {
        var i3;
        const { values: s4 , _$litType$: e4  } = t3, o5 = typeof e4 == "number" ? this._$AC(t3) : (e4.el === void 0 && (e4.el = V.createElement(e4.h, this.options)), e4);
        if (((i3 = this._$AH) === null || i3 === void 0 ? void 0 : i3._$AD) === o5) this._$AH.m(s4);
        else {
            const t4 = new N(o5, this), i4 = t4.p(this.options);
            t4.m(s4), this.S(i4), this._$AH = t4;
        }
    }
    _$AC(t3) {
        let i3 = w.get(t3.strings);
        return i3 === void 0 && w.set(t3.strings, i3 = new V(t3)), i3;
    }
    M(t3) {
        u(this._$AH) || (this._$AH = [], this._$AR());
        const i3 = this._$AH;
        let s4, e4 = 0;
        for (const o5 of t3)e4 === i3.length ? i3.push(s4 = new S2(this.A(r3()), this.A(r3()), this, this.options)) : s4 = i3[e4], s4._$AI(o5), e4++;
        e4 < i3.length && (this._$AR(s4 && s4._$AB.nextSibling, e4), i3.length = e4);
    }
    _$AR(t3 = this._$AA.nextSibling, i3) {
        var s4;
        for((s4 = this._$AP) === null || s4 === void 0 || s4.call(this, false, true, i3); t3 && t3 !== this._$AB;){
            const i4 = t3.nextSibling;
            t3.remove(), t3 = i4;
        }
    }
    setConnected(t3) {
        var i3;
        this._$AM === void 0 && (this._$Cg = t3, (i3 = this._$AP) === null || i3 === void 0 || i3.call(this, t3));
    }
};
var M = class {
    constructor(t3, i3, s4, e4, o5){
        this.type = 1, this._$AH = x, this._$AN = void 0, this.element = t3, this.name = i3, this._$AM = e4, this.options = o5, s4.length > 2 || s4[0] !== "" || s4[1] !== "" ? (this._$AH = Array(s4.length - 1).fill(new String()), this.strings = s4) : this._$AH = x;
    }
    get tagName() {
        return this.element.tagName;
    }
    get _$AU() {
        return this._$AM._$AU;
    }
    _$AI(t3, i3 = this, s4, e4) {
        const o5 = this.strings;
        let n5 = false;
        if (o5 === void 0) t3 = E(this, t3, i3, 0), n5 = !d(t3) || t3 !== this._$AH && t3 !== T, n5 && (this._$AH = t3);
        else {
            const e5 = t3;
            let l3, h3;
            for(t3 = o5[0], l3 = 0; l3 < o5.length - 1; l3++)h3 = E(this, e5[s4 + l3], i3, l3), h3 === T && (h3 = this._$AH[l3]), n5 || (n5 = !d(h3) || h3 !== this._$AH[l3]), h3 === x ? t3 = x : t3 !== x && (t3 += (h3 != null ? h3 : "") + o5[l3 + 1]), this._$AH[l3] = h3;
        }
        n5 && !e4 && this.k(t3);
    }
    k(t3) {
        t3 === x ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, t3 != null ? t3 : "");
    }
};
var k = class extends M {
    constructor(){
        super(...arguments), this.type = 3;
    }
    k(t3) {
        this.element[this.name] = t3 === x ? void 0 : t3;
    }
};
var H = class extends M {
    constructor(){
        super(...arguments), this.type = 4;
    }
    k(t3) {
        t3 && t3 !== x ? this.element.setAttribute(this.name, "") : this.element.removeAttribute(this.name);
    }
};
var I = class extends M {
    constructor(t3, i3, s4, e4, o5){
        super(t3, i3, s4, e4, o5), this.type = 5;
    }
    _$AI(t3, i3 = this) {
        var s4;
        if ((t3 = (s4 = E(this, t3, i3, 0)) !== null && s4 !== void 0 ? s4 : x) === T) return;
        const e4 = this._$AH, o5 = t3 === x && e4 !== x || t3.capture !== e4.capture || t3.once !== e4.once || t3.passive !== e4.passive, n5 = t3 !== x && (e4 === x || o5);
        o5 && this.element.removeEventListener(this.name, this, e4), n5 && this.element.addEventListener(this.name, this, t3), this._$AH = t3;
    }
    handleEvent(t3) {
        var i3, s4;
        typeof this._$AH == "function" ? this._$AH.call((s4 = (i3 = this.options) === null || i3 === void 0 ? void 0 : i3.host) !== null && s4 !== void 0 ? s4 : this.element, t3) : this._$AH.handleEvent(t3);
    }
};
var L = class {
    constructor(t3, i3, s4){
        this.element = t3, this.type = 6, this._$AN = void 0, this._$AM = i3, this.options = s4;
    }
    get _$AU() {
        return this._$AM._$AU;
    }
    _$AI(t3) {
        E(this, t3);
    }
};
(t2 = globalThis.litHtmlPolyfillSupport) === null || t2 === void 0 || t2.call(globalThis, V, S2), ((i2 = globalThis.litHtmlVersions) !== null && i2 !== void 0 ? i2 : globalThis.litHtmlVersions = []).push("2.0.0");
// node_modules/lit-element/lit-element.js
var l2;
var o4;
var r4;
var n4 = class extends n2 {
    constructor(){
        super(...arguments), this.renderOptions = {
            host: this
        }, this._$Dt = void 0;
    }
    createRenderRoot() {
        var t3, e4;
        const i3 = super.createRenderRoot();
        return (t3 = (e4 = this.renderOptions).renderBefore) !== null && t3 !== void 0 || (e4.renderBefore = i3.firstChild), i3;
    }
    update(t3) {
        const i3 = this.render();
        this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(t3), this._$Dt = A(i3, this.renderRoot, this.renderOptions);
    }
    connectedCallback() {
        var t3;
        super.connectedCallback(), (t3 = this._$Dt) === null || t3 === void 0 || t3.setConnected(true);
    }
    disconnectedCallback() {
        var t3;
        super.disconnectedCallback(), (t3 = this._$Dt) === null || t3 === void 0 || t3.setConnected(false);
    }
    render() {
        return T;
    }
};
n4.finalized = true, n4._$litElement$ = true, (l2 = globalThis.litElementHydrateSupport) === null || l2 === void 0 || l2.call(globalThis, {
    LitElement: n4
}), (o4 = globalThis.litElementPolyfillSupport) === null || o4 === void 0 || o4.call(globalThis, {
    LitElement: n4
});
((r4 = globalThis.litElementVersions) !== null && r4 !== void 0 ? r4 : globalThis.litElementVersions = []).push("3.0.0");

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"ewNFt":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "component_styles_default", ()=>component_styles_default
);
var _chunkX3WLUTHFJs = require("./chunk.X3WLUTHF.js");
// src/styles/utility.styles.ts
var utility_styles_default = _chunkX3WLUTHFJs.r`
  .sl-scroll-lock {
    overflow: hidden !important;
  }

  .sl-toast-stack {
    position: fixed;
    top: 0;
    right: 0;
    z-index: var(--sl-z-index-toast);
    width: 28rem;
    max-width: 100%;
    max-height: 100%;
    overflow: auto;
  }

  .sl-toast-stack sl-alert {
    --box-shadow: var(--sl-shadow-large);
    margin: var(--sl-spacing-medium);
  }
`;
// src/styles/component.styles.ts
var component_styles_default = _chunkX3WLUTHFJs.r`
  :host {
    position: relative;
    box-sizing: border-box;
  }

  :host *,
  :host *::before,
  :host *::after {
    box-sizing: inherit;
  }

  [hidden] {
    display: none !important;
  }
`;
var style = document.createElement("style");
style.textContent = utility_styles_default.toString();
document.head.append(style);

},{"./chunk.X3WLUTHF.js":"1Nmoi","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"iaOsv":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "n", ()=>n
) /**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ ;
parcelHelpers.export(exports, "e", ()=>e
);
parcelHelpers.export(exports, "t", ()=>t
);
parcelHelpers.export(exports, "i", ()=>i2
);
parcelHelpers.export(exports, "e2", ()=>e2
);
var _chunkIHGPZX35Js = require("./chunk.IHGPZX35.js");
// node_modules/@lit/reactive-element/decorators/custom-element.js
var n = (n2)=>(e3)=>typeof e3 == "function" ? ((n3, e4)=>(window.customElements.define(n3, e4), e4)
        )(n2, e3) : ((n3, e4)=>{
            const { kind: t2 , elements: i3  } = e4;
            return {
                kind: t2,
                elements: i3,
                finisher (e5) {
                    window.customElements.define(n3, e5);
                }
            };
        })(n2, e3)
;
// node_modules/@lit/reactive-element/decorators/property.js
var i = (i3, e3)=>e3.kind === "method" && e3.descriptor && !("value" in e3.descriptor) ? _chunkIHGPZX35Js.__spreadProps(_chunkIHGPZX35Js.__spreadValues({
    }, e3), {
        finisher (n2) {
            n2.createProperty(e3.key, i3);
        }
    }) : {
        kind: "field",
        key: Symbol(),
        placement: "own",
        descriptor: {
        },
        originalKey: e3.key,
        initializer () {
            typeof e3.initializer == "function" && (this[e3.key] = e3.initializer.call(this));
        },
        finisher (n2) {
            n2.createProperty(e3.key, i3);
        }
    }
;
function e(e3) {
    return (n2, t2)=>t2 !== void 0 ? ((i3, e4, n3)=>{
            e4.constructor.createProperty(n3, i3);
        })(e3, n2, t2) : i(e3, n2)
    ;
}
// node_modules/@lit/reactive-element/decorators/state.js
function t(t2) {
    return e(_chunkIHGPZX35Js.__spreadProps(_chunkIHGPZX35Js.__spreadValues({
    }, t2), {
        state: true
    }));
}
// node_modules/@lit/reactive-element/decorators/base.js
var o = ({ finisher: e3 , descriptor: t2  })=>(o2, n2)=>{
        var r;
        if (n2 === void 0) {
            const n3 = (r = o2.originalKey) !== null && r !== void 0 ? r : o2.key, i3 = t2 != null ? {
                kind: "method",
                placement: "prototype",
                key: n3,
                descriptor: t2(o2.key)
            } : _chunkIHGPZX35Js.__spreadProps(_chunkIHGPZX35Js.__spreadValues({
            }, o2), {
                key: n3
            });
            return e3 != null && (i3.finisher = function(t3) {
                e3(t3, n3);
            }), i3;
        }
        {
            const r2 = o2.constructor;
            t2 !== void 0 && Object.defineProperty(o2, n2, t2(n2)), e3 == null || e3(r2, n2);
        }
    }
;
// node_modules/@lit/reactive-element/decorators/query.js
function i2(i3, n2) {
    return o({
        descriptor: (o2)=>{
            const t2 = {
                get () {
                    var o3, n3;
                    return (n3 = (o3 = this.renderRoot) === null || o3 === void 0 ? void 0 : o3.querySelector(i3)) !== null && n3 !== void 0 ? n3 : null;
                },
                enumerable: true,
                configurable: true
            };
            if (n2) {
                const n3 = typeof o2 == "symbol" ? Symbol() : "__" + o2;
                t2.get = function() {
                    var o3, t3;
                    return this[n3] === void 0 && (this[n3] = (t3 = (o3 = this.renderRoot) === null || o3 === void 0 ? void 0 : o3.querySelector(i3)) !== null && t3 !== void 0 ? t3 : null), this[n3];
                };
            }
            return t2;
        }
    });
}
// node_modules/@lit/reactive-element/decorators/query-async.js
function e2(e3) {
    return o({
        descriptor: (r)=>({
                async get () {
                    var r2;
                    return await this.updateComplete, (r2 = this.renderRoot) === null || r2 === void 0 ? void 0 : r2.querySelector(e3);
                },
                enumerable: true,
                configurable: true
            })
    });
}

},{"./chunk.IHGPZX35.js":"4lKzp","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"dJo7P":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>_chunkSOQ633DPJs.button_default
);
var _chunkSOQ633DPJs = require("../../chunks/chunk.SOQ633DP.js");
var _chunk4W7IZJQJJs = require("../../chunks/chunk.4W7IZJQJ.js");
var _chunkI4TE3TJVJs = require("../../chunks/chunk.I4TE3TJV.js");
var _chunkIBDZI3K2Js = require("../../chunks/chunk.IBDZI3K2.js");
var _chunkSJSINRNQJs = require("../../chunks/chunk.SJSINRNQ.js");
var _chunkYTV73MAMJs = require("../../chunks/chunk.YTV73MAM.js");
var _chunkJTSEMIY7Js = require("../../chunks/chunk.JTSEMIY7.js");
var _chunk2JQPDYNAJs = require("../../chunks/chunk.2JQPDYNA.js");
var _chunkG466JWVFJs = require("../../chunks/chunk.G466JWVF.js");
var _chunkL2RLCVJQJs = require("../../chunks/chunk.L2RLCVJQ.js");
var _chunkX3WLUTHFJs = require("../../chunks/chunk.X3WLUTHF.js");
var _chunkIHGPZX35Js = require("../../chunks/chunk.IHGPZX35.js");

},{"../../chunks/chunk.SOQ633DP.js":"PLCtN","../../chunks/chunk.4W7IZJQJ.js":"1Z7gz","../../chunks/chunk.I4TE3TJV.js":"9KUzU","../../chunks/chunk.IBDZI3K2.js":"eLeU6","../../chunks/chunk.SJSINRNQ.js":"iJHEq","../../chunks/chunk.YTV73MAM.js":"7mkG7","../../chunks/chunk.JTSEMIY7.js":"aWFCQ","../../chunks/chunk.2JQPDYNA.js":"9nuKG","../../chunks/chunk.G466JWVF.js":"ewNFt","../../chunks/chunk.L2RLCVJQ.js":"iaOsv","../../chunks/chunk.X3WLUTHF.js":"1Nmoi","../../chunks/chunk.IHGPZX35.js":"4lKzp","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"PLCtN":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "button_default", ()=>button_default
);
var _chunkI4TE3TJVJs = require("./chunk.I4TE3TJV.js");
var _chunkIBDZI3K2Js = require("./chunk.IBDZI3K2.js");
var _chunkSJSINRNQJs = require("./chunk.SJSINRNQ.js");
var _chunkYTV73MAMJs = require("./chunk.YTV73MAM.js");
var _chunkJTSEMIY7Js = require("./chunk.JTSEMIY7.js");
var _chunkG466JWVFJs = require("./chunk.G466JWVF.js");
var _chunkL2RLCVJQJs = require("./chunk.L2RLCVJQ.js");
var _chunkX3WLUTHFJs = require("./chunk.X3WLUTHF.js");
var _chunkIHGPZX35Js = require("./chunk.IHGPZX35.js");
// src/components/button/button.styles.ts
var button_styles_default = _chunkX3WLUTHFJs.r`
  ${_chunkG466JWVFJs.component_styles_default}

  :host {
    display: inline-block;
    width: auto;
    cursor: pointer;
  }

  .button {
    display: inline-flex;
    align-items: stretch;
    justify-content: center;
    width: 100%;
    border-style: solid;
    border-width: var(--sl-input-border-width);
    font-family: var(--sl-input-font-family);
    font-weight: var(--sl-font-weight-semibold);
    text-decoration: none;
    user-select: none;
    white-space: nowrap;
    vertical-align: middle;
    padding: 0;
    transition: var(--sl-transition-fast) background-color, var(--sl-transition-fast) color,
      var(--sl-transition-fast) border, var(--sl-transition-fast) box-shadow;
    cursor: inherit;
  }

  .button::-moz-focus-inner {
    border: 0;
  }

  .button:focus {
    outline: none;
  }

  .button--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  /* When disabled, prevent mouse events from bubbling up */
  .button--disabled * {
    pointer-events: none;
  }

  /* Clicks on icons shouldn't prevent the button from gaining focus */
  .button::slotted(sl-icon) {
    pointer-events: none;
  }

  .button__prefix,
  .button__suffix {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
  }

  .button__label ::slotted(sl-icon) {
    vertical-align: -2px;
  }

  /*
   * Standard buttons
   */

  /* Default */
  .button--standard.button--default {
    background-color: rgb(var(--sl-color-neutral-0));
    border-color: rgb(var(--sl-color-neutral-300));
    color: rgb(var(--sl-color-neutral-700));
  }

  .button--standard.button--default:hover:not(.button--disabled) {
    background-color: rgb(var(--sl-color-primary-50));
    border-color: rgb(var(--sl-color-primary-300));
    color: rgb(var(--sl-color-primary-700));
  }

  .button--standard.button--default${_chunkYTV73MAMJs.focusVisibleSelector}:not(.button--disabled) {
    background-color: rgb(var(--sl-color-primary-50));
    border-color: rgb(var(--sl-color-primary-400));
    color: rgb(var(--sl-color-primary-700));
    box-shadow: 0 0 0 var(--sl-focus-ring-width) rgb(var(--sl-color-primary-500) / var(--sl-focus-ring-alpha));
  }

  .button--standard.button--default:active:not(.button--disabled) {
    background-color: rgb(var(--sl-color-primary-100));
    border-color: rgb(var(--sl-color-primary-400));
    color: rgb(var(--sl-color-primary-700));
  }

  /* Primary */
  .button--standard.button--primary {
    background-color: rgb(var(--sl-color-primary-600));
    border-color: rgb(var(--sl-color-primary-600));
    color: rgb(var(--sl-color-neutral-0));
  }

  .button--standard.button--primary:hover:not(.button--disabled) {
    background-color: rgb(var(--sl-color-primary-500));
    border-color: rgb(var(--sl-color-primary-500));
    color: rgb(var(--sl-color-neutral-0));
  }

  .button--standard.button--primary${_chunkYTV73MAMJs.focusVisibleSelector}:not(.button--disabled) {
    background-color: rgb(var(--sl-color-primary-500));
    border-color: rgb(var(--sl-color-primary-500));
    color: rgb(var(--sl-color-neutral-0));
    box-shadow: 0 0 0 var(--sl-focus-ring-width) rgb(var(--sl-color-primary-500) / var(--sl-focus-ring-alpha));
  }

  .button--standard.button--primary:active:not(.button--disabled) {
    background-color: rgb(var(--sl-color-primary-600));
    border-color: rgb(var(--sl-color-primary-600));
    color: rgb(var(--sl-color-neutral-0));
  }

  /* Success */
  .button--standard.button--success {
    background-color: rgb(var(--sl-color-success-600));
    border-color: rgb(var(--sl-color-success-600));
    color: rgb(var(--sl-color-neutral-0));
  }

  .button--standard.button--success:hover:not(.button--disabled) {
    background-color: rgb(var(--sl-color-success-500));
    border-color: rgb(var(--sl-color-success-500));
    color: rgb(var(--sl-color-neutral-0));
  }

  .button--standard.button--success${_chunkYTV73MAMJs.focusVisibleSelector}:not(.button--disabled) {
    background-color: rgb(var(--sl-color-success-600));
    border-color: rgb(var(--sl-color-success-600));
    color: rgb(var(--sl-color-neutral-0));
    box-shadow: 0 0 0 var(--sl-focus-ring-width) rgb(var(--sl-color-success-500) / var(--sl-focus-ring-alpha));
  }

  .button--standard.button--success:active:not(.button--disabled) {
    background-color: rgb(var(--sl-color-success-600));
    border-color: rgb(var(--sl-color-success-600));
    color: rgb(var(--sl-color-neutral-0));
  }

  /* Neutral */
  .button--standard.button--neutral {
    background-color: rgb(var(--sl-color-neutral-600));
    border-color: rgb(var(--sl-color-neutral-600));
    color: rgb(var(--sl-color-neutral-0));
  }

  .button--standard.button--neutral:hover:not(.button--disabled) {
    background-color: rgb(var(--sl-color-neutral-500));
    border-color: rgb(var(--sl-color-neutral-500));
    color: rgb(var(--sl-color-neutral-0));
  }

  .button--standard.button--neutral${_chunkYTV73MAMJs.focusVisibleSelector}:not(.button--disabled) {
    background-color: rgb(var(--sl-color-neutral-500));
    border-color: rgb(var(--sl-color-neutral-500));
    color: rgb(var(--sl-color-neutral-0));
    box-shadow: 0 0 0 var(--sl-focus-ring-width) rgb(var(--sl-color-neutral-500) / var(--sl-focus-ring-alpha));
  }

  .button--standard.button--neutral:active:not(.button--disabled) {
    background-color: rgb(var(--sl-color-neutral-600));
    border-color: rgb(var(--sl-color-neutral-600));
    color: rgb(var(--sl-color-neutral-0));
  }

  /* Warning */
  .button--standard.button--warning {
    background-color: rgb(var(--sl-color-warning-600));
    border-color: rgb(var(--sl-color-warning-600));
    color: rgb(var(--sl-color-neutral-0));
  }
  .button--standard.button--warning:hover:not(.button--disabled) {
    background-color: rgb(var(--sl-color-warning-500));
    border-color: rgb(var(--sl-color-warning-500));
    color: rgb(var(--sl-color-neutral-0));
  }

  .button--standard.button--warning${_chunkYTV73MAMJs.focusVisibleSelector}:not(.button--disabled) {
    background-color: rgb(var(--sl-color-warning-500));
    border-color: rgb(var(--sl-color-warning-500));
    color: rgb(var(--sl-color-neutral-0));
    box-shadow: 0 0 0 var(--sl-focus-ring-width) rgb(var(--sl-color-warning-500) / var(--sl-focus-ring-alpha));
  }

  .button--standard.button--warning:active:not(.button--disabled) {
    background-color: rgb(var(--sl-color-warning-600));
    border-color: rgb(var(--sl-color-warning-600));
    color: rgb(var(--sl-color-neutral-0));
  }

  /* Danger */
  .button--standard.button--danger {
    background-color: rgb(var(--sl-color-danger-600));
    border-color: rgb(var(--sl-color-danger-600));
    color: rgb(var(--sl-color-neutral-0));
  }

  .button--standard.button--danger:hover:not(.button--disabled) {
    background-color: rgb(var(--sl-color-danger-500));
    border-color: rgb(var(--sl-color-danger-500));
    color: rgb(var(--sl-color-neutral-0));
  }

  .button--standard.button--danger${_chunkYTV73MAMJs.focusVisibleSelector}:not(.button--disabled) {
    background-color: rgb(var(--sl-color-danger-500));
    border-color: rgb(var(--sl-color-danger-500));
    color: rgb(var(--sl-color-neutral-0));
    box-shadow: 0 0 0 var(--sl-focus-ring-width) rgb(var(--sl-color-danger-500) / var(--sl-focus-ring-alpha));
  }

  .button--standard.button--danger:active:not(.button--disabled) {
    background-color: rgb(var(--sl-color-danger-600));
    border-color: rgb(var(--sl-color-danger-600));
    color: rgb(var(--sl-color-neutral-0));
  }

  /*
   * Outline buttons
   */

  .button--outline {
    background: none;
    border: solid 1px;
  }

  /* Default */
  .button--outline.button--default {
    border-color: rgb(var(--sl-color-neutral-300));
    color: rgb(var(--sl-color-neutral-700));
  }

  .button--outline.button--default:hover:not(.button--disabled) {
    border-color: rgb(var(--sl-color-primary-600));
    background-color: rgb(var(--sl-color-primary-600));
    color: rgb(var(--sl-color-neutral-0));
  }

  .button--outline.button--default${_chunkYTV73MAMJs.focusVisibleSelector}:not(.button--disabled) {
    border-color: rgb(var(--sl-color-primary-500));
    box-shadow: 0 0 0 var(--sl-focus-ring-width) rgb(var(--sl-color-primary-500) / var(--sl-focus-ring-alpha));
  }

  .button--outline.button--default:active:not(.button--disabled) {
    border-color: rgb(var(--sl-color-primary-700));
    background-color: rgb(var(--sl-color-primary-700));
    color: rgb(var(--sl-color-neutral-0));
  }

  /* Primary */
  .button--outline.button--primary {
    border-color: rgb(var(--sl-color-primary-600));
    color: rgb(var(--sl-color-primary-600));
  }

  .button--outline.button--primary:hover:not(.button--disabled) {
    background-color: rgb(var(--sl-color-primary-600));
    color: rgb(var(--sl-color-neutral-0));
  }

  .button--outline.button--primary${_chunkYTV73MAMJs.focusVisibleSelector}:not(.button--disabled) {
    border-color: rgb(var(--sl-color-primary-500));
    box-shadow: 0 0 0 var(--sl-focus-ring-width) rgb(var(--sl-color-primary-500) / var(--sl-focus-ring-alpha));
  }

  .button--outline.button--primary:active:not(.button--disabled) {
    border-color: rgb(var(--sl-color-primary-700));
    background-color: rgb(var(--sl-color-primary-700));
    color: rgb(var(--sl-color-neutral-0));
  }

  /* Success */
  .button--outline.button--success {
    border-color: rgb(var(--sl-color-success-600));
    color: rgb(var(--sl-color-success-600));
  }

  .button--outline.button--success:hover:not(.button--disabled) {
    background-color: rgb(var(--sl-color-success-600));
    color: rgb(var(--sl-color-neutral-0));
  }

  .button--outline.button--success${_chunkYTV73MAMJs.focusVisibleSelector}:not(.button--disabled) {
    border-color: rgb(var(--sl-color-success-500));
    box-shadow: 0 0 0 var(--sl-focus-ring-width) rgb(var(--sl-color-success-500) / var(--sl-focus-ring-alpha));
  }

  .button--outline.button--success:active:not(.button--disabled) {
    border-color: rgb(var(--sl-color-success-700));
    background-color: rgb(var(--sl-color-success-700));
    color: rgb(var(--sl-color-neutral-0));
  }

  /* Neutral */
  .button--outline.button--neutral {
    border-color: rgb(var(--sl-color-neutral-600));
    color: rgb(var(--sl-color-neutral-600));
  }

  .button--outline.button--neutral:hover:not(.button--disabled) {
    background-color: rgb(var(--sl-color-neutral-600));
    color: rgb(var(--sl-color-neutral-0));
  }

  .button--outline.button--neutral${_chunkYTV73MAMJs.focusVisibleSelector}:not(.button--disabled) {
    border-color: rgb(var(--sl-color-neutral-500));
    box-shadow: 0 0 0 var(--sl-focus-ring-width) rgb(var(--sl-color-neutral-500) / var(--sl-focus-ring-alpha));
  }

  .button--outline.button--neutral:active:not(.button--disabled) {
    border-color: rgb(var(--sl-color-neutral-700));
    background-color: rgb(var(--sl-color-neutral-700));
    color: rgb(var(--sl-color-neutral-0));
  }

  /* Warning */
  .button--outline.button--warning {
    border-color: rgb(var(--sl-color-warning-600));
    color: rgb(var(--sl-color-warning-600));
  }

  .button--outline.button--warning:hover:not(.button--disabled) {
    background-color: rgb(var(--sl-color-warning-600));
    color: rgb(var(--sl-color-neutral-0));
  }

  .button--outline.button--warning${_chunkYTV73MAMJs.focusVisibleSelector}:not(.button--disabled) {
    border-color: rgb(var(--sl-color-warning-500));
    box-shadow: 0 0 0 var(--sl-focus-ring-width) rgb(var(--sl-color-warning-500) / var(--sl-focus-ring-alpha));
  }

  .button--outline.button--warning:active:not(.button--disabled) {
    border-color: rgb(var(--sl-color-warning-700));
    background-color: rgb(var(--sl-color-warning-700));
    color: rgb(var(--sl-color-neutral-0));
  }

  /* Danger */
  .button--outline.button--danger {
    border-color: rgb(var(--sl-color-danger-600));
    color: rgb(var(--sl-color-danger-600));
  }

  .button--outline.button--danger:hover:not(.button--disabled) {
    background-color: rgb(var(--sl-color-danger-600));
    color: rgb(var(--sl-color-neutral-0));
  }

  .button--outline.button--danger${_chunkYTV73MAMJs.focusVisibleSelector}:not(.button--disabled) {
    border-color: rgb(var(--sl-color-danger-500));
    box-shadow: 0 0 0 var(--sl-focus-ring-width) rgb(var(--sl-color-danger-500) / var(--sl-focus-ring-alpha));
  }

  .button--outline.button--danger:active:not(.button--disabled) {
    border-color: rgb(var(--sl-color-danger-700));
    background-color: rgb(var(--sl-color-danger-700));
    color: rgb(var(--sl-color-neutral-0));
  }

  /*
   * Text buttons
   */

  .button--text {
    background-color: transparent;
    border-color: transparent;
    color: rgb(var(--sl-color-primary-600));
  }

  .button--text:hover:not(.button--disabled) {
    background-color: transparent;
    border-color: transparent;
    color: rgb(var(--sl-color-primary-500));
  }

  .button--text${_chunkYTV73MAMJs.focusVisibleSelector}:not(.button--disabled) {
    background-color: transparent;
    border-color: transparent;
    color: rgb(var(--sl-color-primary-500));
    box-shadow: 0 0 0 var(--sl-focus-ring-width) rgb(var(--sl-color-primary-500) / var(--sl-focus-ring-alpha));
  }

  .button--text:active:not(.button--disabled) {
    background-color: transparent;
    border-color: transparent;
    color: rgb(var(--sl-color-primary-700));
  }

  /*
   * Size modifiers
   */

  .button--small {
    font-size: var(--sl-button-font-size-small);
    height: var(--sl-input-height-small);
    line-height: calc(var(--sl-input-height-small) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-small);
  }

  .button--medium {
    font-size: var(--sl-button-font-size-medium);
    height: var(--sl-input-height-medium);
    line-height: calc(var(--sl-input-height-medium) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-medium);
  }

  .button--large {
    font-size: var(--sl-button-font-size-large);
    height: var(--sl-input-height-large);
    line-height: calc(var(--sl-input-height-large) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-large);
  }

  /*
   * Pill modifier
   */

  .button--pill.button--small {
    border-radius: var(--sl-input-height-small);
  }

  .button--pill.button--medium {
    border-radius: var(--sl-input-height-medium);
  }

  .button--pill.button--large {
    border-radius: var(--sl-input-height-large);
  }

  /*
   * Circle modifier
   */

  .button--circle {
    padding-left: 0;
    padding-right: 0;
  }

  .button--circle.button--small {
    width: var(--sl-input-height-small);
    border-radius: 50%;
  }

  .button--circle.button--medium {
    width: var(--sl-input-height-medium);
    border-radius: 50%;
  }

  .button--circle.button--large {
    width: var(--sl-input-height-large);
    border-radius: 50%;
  }

  .button--circle .button__prefix,
  .button--circle .button__suffix,
  .button--circle .button__caret {
    display: none;
  }

  /*
   * Caret modifier
   */

  .button--caret .button__suffix {
    display: none;
  }

  .button--caret .button__caret {
    display: flex;
    align-items: center;
  }

  .button--caret .button__caret svg {
    width: 1em;
    height: 1em;
  }

  /*
   * Loading modifier
   */

  .button--loading {
    position: relative;
    cursor: wait;
  }

  .button--loading .button__prefix,
  .button--loading .button__label,
  .button--loading .button__suffix,
  .button--loading .button__caret {
    visibility: hidden;
  }

  .button--loading sl-spinner {
    --indicator-color: currentColor;
    position: absolute;
    font-size: 1em;
    height: 1em;
    width: 1em;
    top: calc(50% - 0.5em);
    left: calc(50% - 0.5em);
  }

  /*
   * Badges
   */

  .button ::slotted(sl-badge) {
    position: absolute;
    top: 0;
    right: 0;
    transform: translateY(-50%) translateX(50%);
    pointer-events: none;
  }

  /*
   * Button spacing
   */

  .button--has-label.button--small .button__label {
    padding: 0 var(--sl-spacing-small);
  }

  .button--has-label.button--medium .button__label {
    padding: 0 var(--sl-spacing-medium);
  }

  .button--has-label.button--large .button__label {
    padding: 0 var(--sl-spacing-large);
  }

  .button--has-prefix.button--small {
    padding-left: var(--sl-spacing-x-small);
  }

  .button--has-prefix.button--small .button__label {
    padding-left: var(--sl-spacing-x-small);
  }

  .button--has-prefix.button--medium {
    padding-left: var(--sl-spacing-small);
  }

  .button--has-prefix.button--medium .button__label {
    padding-left: var(--sl-spacing-small);
  }

  .button--has-prefix.button--large {
    padding-left: var(--sl-spacing-small);
  }

  .button--has-prefix.button--large .button__label {
    padding-left: var(--sl-spacing-small);
  }

  .button--has-suffix.button--small,
  .button--caret.button--small {
    padding-right: var(--sl-spacing-x-small);
  }

  .button--has-suffix.button--small .button__label,
  .button--caret.button--small .button__label {
    padding-right: var(--sl-spacing-x-small);
  }

  .button--has-suffix.button--medium,
  .button--caret.button--medium {
    padding-right: var(--sl-spacing-small);
  }

  .button--has-suffix.button--medium .button__label,
  .button--caret.button--medium .button__label {
    padding-right: var(--sl-spacing-small);
  }

  .button--has-suffix.button--large,
  .button--caret.button--large {
    padding-right: var(--sl-spacing-small);
  }

  .button--has-suffix.button--large .button__label,
  .button--caret.button--large .button__label {
    padding-right: var(--sl-spacing-small);
  }

  /*
   * Button groups support a variety of button types (e.g. buttons with tooltips, buttons as dropdown triggers, etc.).
   * This means buttons aren't always direct descendants of the button group, thus we can't target them with the
   * ::slotted selector. To work around this, the button group component does some magic to add these special classes to
   * buttons and we style them here instead.
   */

  :host(.sl-button-group__button--first) .button {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }

  :host(.sl-button-group__button--inner) .button {
    border-radius: 0;
  }

  :host(.sl-button-group__button--last) .button {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }

  /* All except the first */
  :host(.sl-button-group__button:not(.sl-button-group__button--first)) {
    margin-left: calc(-1 * var(--sl-input-border-width));
  }

  /* Add a visual separator between solid buttons */
  :host(.sl-button-group__button:not(.sl-button-group__button--focus, .sl-button-group__button--first, [type='default']):not(:hover, :active, :focus))
    .button:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    border-left: solid 1px rgb(var(--sl-color-neutral-0) / 20%);
  }

  /* Bump focused buttons up so their focus ring isn't clipped */
  :host(.sl-button-group__button--hover) {
    z-index: 1;
  }

  :host(.sl-button-group__button--focus) {
    z-index: 2;
  }
`;
// src/components/button/button.ts
var SlButton = class extends _chunkX3WLUTHFJs.n {
    constructor(){
        super(...arguments);
        this.hasFocus = false;
        this.hasLabel = false;
        this.hasPrefix = false;
        this.hasSuffix = false;
        this.type = "default";
        this.size = "medium";
        this.caret = false;
        this.disabled = false;
        this.loading = false;
        this.outline = false;
        this.pill = false;
        this.circle = false;
        this.submit = false;
    }
    connectedCallback() {
        super.connectedCallback();
        this.handleSlotChange();
    }
    click() {
        this.button.click();
    }
    focus(options) {
        this.button.focus(options);
    }
    blur() {
        this.button.blur();
    }
    handleSlotChange() {
        this.hasLabel = _chunkIBDZI3K2Js.hasSlot(this);
        this.hasPrefix = _chunkIBDZI3K2Js.hasSlot(this, "prefix");
        this.hasSuffix = _chunkIBDZI3K2Js.hasSlot(this, "suffix");
    }
    handleBlur() {
        this.hasFocus = false;
        _chunkI4TE3TJVJs.emit(this, "sl-blur");
    }
    handleFocus() {
        this.hasFocus = true;
        _chunkI4TE3TJVJs.emit(this, "sl-focus");
    }
    handleClick(event) {
        if (this.disabled || this.loading) {
            event.preventDefault();
            event.stopPropagation();
        }
    }
    render() {
        const isLink = this.href ? true : false;
        const interior = _chunkX3WLUTHFJs.y`
      <span part="prefix" class="button__prefix">
        <slot @slotchange=${this.handleSlotChange} name="prefix"></slot>
      </span>
      <span part="label" class="button__label">
        <slot @slotchange=${this.handleSlotChange}></slot>
      </span>
      <span part="suffix" class="button__suffix">
        <slot @slotchange=${this.handleSlotChange} name="suffix"></slot>
      </span>
      ${this.caret ? _chunkX3WLUTHFJs.y`
            <span part="caret" class="button__caret">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </span>
          ` : ""}
      ${this.loading ? _chunkX3WLUTHFJs.y`<sl-spinner></sl-spinner>` : ""}
    `;
        return isLink ? _chunkX3WLUTHFJs.y`
          <a
            part="base"
            class=${_chunkJTSEMIY7Js.o({
            button: true,
            "button--default": this.type === "default",
            "button--primary": this.type === "primary",
            "button--success": this.type === "success",
            "button--neutral": this.type === "neutral",
            "button--warning": this.type === "warning",
            "button--danger": this.type === "danger",
            "button--text": this.type === "text",
            "button--small": this.size === "small",
            "button--medium": this.size === "medium",
            "button--large": this.size === "large",
            "button--caret": this.caret,
            "button--circle": this.circle,
            "button--disabled": this.disabled,
            "button--focused": this.hasFocus,
            "button--loading": this.loading,
            "button--standard": !this.outline,
            "button--outline": this.outline,
            "button--pill": this.pill,
            "button--has-label": this.hasLabel,
            "button--has-prefix": this.hasPrefix,
            "button--has-suffix": this.hasSuffix
        })}
            href=${_chunkSJSINRNQJs.l(this.href)}
            target=${_chunkSJSINRNQJs.l(this.target)}
            download=${_chunkSJSINRNQJs.l(this.download)}
            rel=${_chunkSJSINRNQJs.l(this.target ? "noreferrer noopener" : void 0)}
            role="button"
            aria-disabled=${this.disabled ? "true" : "false"}
            tabindex=${this.disabled ? "-1" : "0"}
            @blur=${this.handleBlur}
            @focus=${this.handleFocus}
            @click=${this.handleClick}
          >
            ${interior}
          </a>
        ` : _chunkX3WLUTHFJs.y`
          <button
            part="base"
            class=${_chunkJTSEMIY7Js.o({
            button: true,
            "button--default": this.type === "default",
            "button--primary": this.type === "primary",
            "button--success": this.type === "success",
            "button--neutral": this.type === "neutral",
            "button--warning": this.type === "warning",
            "button--danger": this.type === "danger",
            "button--text": this.type === "text",
            "button--small": this.size === "small",
            "button--medium": this.size === "medium",
            "button--large": this.size === "large",
            "button--caret": this.caret,
            "button--circle": this.circle,
            "button--disabled": this.disabled,
            "button--focused": this.hasFocus,
            "button--loading": this.loading,
            "button--standard": !this.outline,
            "button--outline": this.outline,
            "button--pill": this.pill,
            "button--has-label": this.hasLabel,
            "button--has-prefix": this.hasPrefix,
            "button--has-suffix": this.hasSuffix
        })}
            ?disabled=${this.disabled}
            type=${this.submit ? "submit" : "button"}
            name=${_chunkSJSINRNQJs.l(this.name)}
            value=${_chunkSJSINRNQJs.l(this.value)}
            @blur=${this.handleBlur}
            @focus=${this.handleFocus}
            @click=${this.handleClick}
          >
            ${interior}
          </button>
        `;
    }
};
SlButton.styles = button_styles_default;
_chunkIHGPZX35Js.__decorateClass([
    _chunkL2RLCVJQJs.i(".button")
], SlButton.prototype, "button", 2);
_chunkIHGPZX35Js.__decorateClass([
    _chunkL2RLCVJQJs.t()
], SlButton.prototype, "hasFocus", 2);
_chunkIHGPZX35Js.__decorateClass([
    _chunkL2RLCVJQJs.t()
], SlButton.prototype, "hasLabel", 2);
_chunkIHGPZX35Js.__decorateClass([
    _chunkL2RLCVJQJs.t()
], SlButton.prototype, "hasPrefix", 2);
_chunkIHGPZX35Js.__decorateClass([
    _chunkL2RLCVJQJs.t()
], SlButton.prototype, "hasSuffix", 2);
_chunkIHGPZX35Js.__decorateClass([
    _chunkL2RLCVJQJs.e({
        reflect: true
    })
], SlButton.prototype, "type", 2);
_chunkIHGPZX35Js.__decorateClass([
    _chunkL2RLCVJQJs.e({
        reflect: true
    })
], SlButton.prototype, "size", 2);
_chunkIHGPZX35Js.__decorateClass([
    _chunkL2RLCVJQJs.e({
        type: Boolean,
        reflect: true
    })
], SlButton.prototype, "caret", 2);
_chunkIHGPZX35Js.__decorateClass([
    _chunkL2RLCVJQJs.e({
        type: Boolean,
        reflect: true
    })
], SlButton.prototype, "disabled", 2);
_chunkIHGPZX35Js.__decorateClass([
    _chunkL2RLCVJQJs.e({
        type: Boolean,
        reflect: true
    })
], SlButton.prototype, "loading", 2);
_chunkIHGPZX35Js.__decorateClass([
    _chunkL2RLCVJQJs.e({
        type: Boolean,
        reflect: true
    })
], SlButton.prototype, "outline", 2);
_chunkIHGPZX35Js.__decorateClass([
    _chunkL2RLCVJQJs.e({
        type: Boolean,
        reflect: true
    })
], SlButton.prototype, "pill", 2);
_chunkIHGPZX35Js.__decorateClass([
    _chunkL2RLCVJQJs.e({
        type: Boolean,
        reflect: true
    })
], SlButton.prototype, "circle", 2);
_chunkIHGPZX35Js.__decorateClass([
    _chunkL2RLCVJQJs.e({
        type: Boolean,
        reflect: true
    })
], SlButton.prototype, "submit", 2);
_chunkIHGPZX35Js.__decorateClass([
    _chunkL2RLCVJQJs.e()
], SlButton.prototype, "name", 2);
_chunkIHGPZX35Js.__decorateClass([
    _chunkL2RLCVJQJs.e()
], SlButton.prototype, "value", 2);
_chunkIHGPZX35Js.__decorateClass([
    _chunkL2RLCVJQJs.e()
], SlButton.prototype, "href", 2);
_chunkIHGPZX35Js.__decorateClass([
    _chunkL2RLCVJQJs.e()
], SlButton.prototype, "target", 2);
_chunkIHGPZX35Js.__decorateClass([
    _chunkL2RLCVJQJs.e()
], SlButton.prototype, "download", 2);
SlButton = _chunkIHGPZX35Js.__decorateClass([
    _chunkL2RLCVJQJs.n("sl-button")
], SlButton);
var button_default = SlButton;

},{"./chunk.I4TE3TJV.js":"9KUzU","./chunk.IBDZI3K2.js":"eLeU6","./chunk.SJSINRNQ.js":"iJHEq","./chunk.YTV73MAM.js":"7mkG7","./chunk.JTSEMIY7.js":"aWFCQ","./chunk.G466JWVF.js":"ewNFt","./chunk.L2RLCVJQ.js":"iaOsv","./chunk.X3WLUTHF.js":"1Nmoi","./chunk.IHGPZX35.js":"4lKzp","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"eLeU6":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getTextContent", ()=>getTextContent
);
parcelHelpers.export(exports, "hasSlot", ()=>hasSlot
);
// src/internal/slot.ts
function getTextContent(slot) {
    const nodes = slot ? slot.assignedNodes({
        flatten: true
    }) : [];
    let text = "";
    [
        ...nodes
    ].map((node)=>{
        if (node.nodeType === Node.TEXT_NODE) text += node.textContent;
    });
    return text;
}
function hasSlot(el, name) {
    if (name) return el.querySelector(`:scope > [slot="${name}"]`) !== null;
    return [
        ...el.childNodes
    ].some((node)=>{
        if (node.nodeType === node.TEXT_NODE && node.textContent.trim() !== "") return true;
        if (node.nodeType === node.ELEMENT_NODE) {
            const el2 = node;
            if (!el2.hasAttribute("slot")) return true;
        }
        return false;
    });
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"iJHEq":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "l", ()=>l
) /**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ ;
var _chunkX3WLUTHFJs = require("./chunk.X3WLUTHF.js");
// node_modules/lit-html/directives/if-defined.js
var l = (l2)=>l2 != null ? l2 : _chunkX3WLUTHFJs.x
;

},{"./chunk.X3WLUTHF.js":"1Nmoi","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"7mkG7":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "hasFocusVisible", ()=>hasFocusVisible
);
parcelHelpers.export(exports, "focusVisibleSelector", ()=>focusVisibleSelector
);
var _chunkX3WLUTHFJs = require("./chunk.X3WLUTHF.js");
// src/internal/focus-visible.ts
var hasFocusVisible = (()=>{
    const style = document.createElement("style");
    let isSupported;
    try {
        document.head.appendChild(style);
        style.sheet.insertRule(":focus-visible { color: inherit }");
        isSupported = true;
    } catch (e) {
        isSupported = false;
    } finally{
        style.remove();
    }
    return isSupported;
})();
var focusVisibleSelector = _chunkX3WLUTHFJs.o(hasFocusVisible ? ":focus-visible" : ":focus");

},{"./chunk.X3WLUTHF.js":"1Nmoi","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"1Z7gz":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "spinner_default", ()=>spinner_default
);
var _chunkG466JWVFJs = require("./chunk.G466JWVF.js");
var _chunkL2RLCVJQJs = require("./chunk.L2RLCVJQ.js");
var _chunkX3WLUTHFJs = require("./chunk.X3WLUTHF.js");
var _chunkIHGPZX35Js = require("./chunk.IHGPZX35.js");
// src/components/spinner/spinner.styles.ts
var spinner_styles_default = _chunkX3WLUTHFJs.r`
  ${_chunkG466JWVFJs.component_styles_default}

  :host {
    --track-width: 2px;
    --track-color: rgb(var(--sl-color-neutral-500) / 20%);
    --indicator-color: rgb(var(--sl-color-primary-600));
    --speed: 2.5s;

    display: inline-flex;
    width: 1em;
    height: 1em;
  }

  .spinner {
    flex: 1 1 auto;
    height: 100%;
    width: 100%;
  }

  .spinner__track,
  .spinner__indicator {
    fill: none;
    stroke-width: var(--track-width);
    r: calc(0.5em - var(--track-width) / 2);
    cx: 0.5em;
    cy: 0.5em;
    transform-origin: 50% 50%;
  }

  .spinner__track {
    stroke: var(--track-color);
    transform-origin: 0% 0%;
  }

  .spinner__indicator {
    stroke: var(--indicator-color);
    stroke-linecap: round;
    transform-origin: 50% 50%;
    transform: rotate(90deg);
    animation: spin var(--speed) linear infinite;
  }

  @keyframes spin {
    0% {
      stroke-dasharray: 0.2em 3em;
      transform: rotate(0deg);
    }

    50% {
      stroke-dasharray: 2.2em 3em;
      transform: rotate(450deg);
    }

    100% {
      stroke-dasharray: 0.2em 3em;
      transform: rotate(1080deg);
    }
  }
`;
// src/components/spinner/spinner.ts
var SlSpinner = class extends _chunkX3WLUTHFJs.n {
    render() {
        return _chunkX3WLUTHFJs.y`
      <svg part="base" class="spinner" aria-busy="true" aria-live="polite">
        <circle class="spinner__track"></circle>
        <circle class="spinner__indicator"></circle>
      </svg>
    `;
    }
};
SlSpinner.styles = spinner_styles_default;
SlSpinner = _chunkIHGPZX35Js.__decorateClass([
    _chunkL2RLCVJQJs.n("sl-spinner")
], SlSpinner);
var spinner_default = SlSpinner;

},{"./chunk.G466JWVF.js":"ewNFt","./chunk.L2RLCVJQ.js":"iaOsv","./chunk.X3WLUTHF.js":"1Nmoi","./chunk.IHGPZX35.js":"4lKzp","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"fp2wd":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>_chunk63BG5VBUJs.drawer_default
);
var _chunk63BG5VBUJs = require("../../chunks/chunk.63BG5VBU.js");
var _chunkP4ITZG26Js = require("../../chunks/chunk.P4ITZG26.js");
var _chunkDTSUHNT6Js = require("../../chunks/chunk.DTSUHNT6.js");
var _chunkXAZN5AQ5Js = require("../../chunks/chunk.XAZN5AQ5.js");
var _chunkOBQZMEYBJs = require("../../chunks/chunk.OBQZMEYB.js");
var _chunkNVGT36PIJs = require("../../chunks/chunk.NVGT36PI.js");
var _chunkEVK2ASE6Js = require("../../chunks/chunk.EVK2ASE6.js");
var _chunk67NH344LJs = require("../../chunks/chunk.67NH344L.js");
var _chunkHR6PXJB3Js = require("../../chunks/chunk.HR6PXJB3.js");
var _chunkFGIYSBZ6Js = require("../../chunks/chunk.FGIYSBZ6.js");
var _chunkS6TJZ6NJJs = require("../../chunks/chunk.S6TJZ6NJ.js");
var _chunkOTFHC4CHJs = require("../../chunks/chunk.OTFHC4CH.js");
var _chunkARRH633MJs = require("../../chunks/chunk.ARRH633M.js");
var _chunkBD26TKS4Js = require("../../chunks/chunk.BD26TKS4.js");
var _chunkI4TE3TJVJs = require("../../chunks/chunk.I4TE3TJV.js");
var _chunkIBDZI3K2Js = require("../../chunks/chunk.IBDZI3K2.js");
var _chunkSJSINRNQJs = require("../../chunks/chunk.SJSINRNQ.js");
var _chunkYTV73MAMJs = require("../../chunks/chunk.YTV73MAM.js");
var _chunkJTSEMIY7Js = require("../../chunks/chunk.JTSEMIY7.js");
var _chunk2JQPDYNAJs = require("../../chunks/chunk.2JQPDYNA.js");
var _chunkG466JWVFJs = require("../../chunks/chunk.G466JWVF.js");
var _chunkL2RLCVJQJs = require("../../chunks/chunk.L2RLCVJQ.js");
var _chunkX3WLUTHFJs = require("../../chunks/chunk.X3WLUTHF.js");
var _chunkIHGPZX35Js = require("../../chunks/chunk.IHGPZX35.js");

},{"../../chunks/chunk.63BG5VBU.js":"3ZYzY","../../chunks/chunk.P4ITZG26.js":"8H464","../../chunks/chunk.DTSUHNT6.js":"kt9Ze","../../chunks/chunk.XAZN5AQ5.js":"aM2md","../../chunks/chunk.OBQZMEYB.js":"5qMh5","../../chunks/chunk.NVGT36PI.js":"eF7TG","../../chunks/chunk.EVK2ASE6.js":"76eJj","../../chunks/chunk.67NH344L.js":"bdUuq","../../chunks/chunk.HR6PXJB3.js":"8ByF8","../../chunks/chunk.FGIYSBZ6.js":"9ssGp","../../chunks/chunk.S6TJZ6NJ.js":"edUe8","../../chunks/chunk.OTFHC4CH.js":"9rcDi","../../chunks/chunk.ARRH633M.js":"fAQVY","../../chunks/chunk.BD26TKS4.js":"ipINT","../../chunks/chunk.I4TE3TJV.js":"9KUzU","../../chunks/chunk.IBDZI3K2.js":"eLeU6","../../chunks/chunk.SJSINRNQ.js":"iJHEq","../../chunks/chunk.YTV73MAM.js":"7mkG7","../../chunks/chunk.JTSEMIY7.js":"aWFCQ","../../chunks/chunk.2JQPDYNA.js":"9nuKG","../../chunks/chunk.G466JWVF.js":"ewNFt","../../chunks/chunk.L2RLCVJQ.js":"iaOsv","../../chunks/chunk.X3WLUTHF.js":"1Nmoi","../../chunks/chunk.IHGPZX35.js":"4lKzp","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"3ZYzY":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "drawer_default", ()=>drawer_default
);
var _chunkP4ITZG26Js = require("./chunk.P4ITZG26.js");
var _chunkXAZN5AQ5Js = require("./chunk.XAZN5AQ5.js");
var _chunkNVGT36PIJs = require("./chunk.NVGT36PI.js");
var _chunkEVK2ASE6Js = require("./chunk.EVK2ASE6.js");
var _chunkBD26TKS4Js = require("./chunk.BD26TKS4.js");
var _chunkI4TE3TJVJs = require("./chunk.I4TE3TJV.js");
var _chunkIBDZI3K2Js = require("./chunk.IBDZI3K2.js");
var _chunkSJSINRNQJs = require("./chunk.SJSINRNQ.js");
var _chunkJTSEMIY7Js = require("./chunk.JTSEMIY7.js");
var _chunkG466JWVFJs = require("./chunk.G466JWVF.js");
var _chunkL2RLCVJQJs = require("./chunk.L2RLCVJQ.js");
var _chunkX3WLUTHFJs = require("./chunk.X3WLUTHF.js");
var _chunkIHGPZX35Js = require("./chunk.IHGPZX35.js");
// src/internal/string.ts
function uppercaseFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
// src/components/drawer/drawer.styles.ts
var drawer_styles_default = _chunkX3WLUTHFJs.r`
  ${_chunkG466JWVFJs.component_styles_default}

  :host {
    --size: 25rem;
    --header-spacing: var(--sl-spacing-large);
    --body-spacing: var(--sl-spacing-large);
    --footer-spacing: var(--sl-spacing-large);

    display: contents;
  }

  .drawer {
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    overflow: hidden;
  }

  .drawer--contained {
    position: absolute;
    z-index: initial;
  }

  .drawer--fixed {
    position: fixed;
    z-index: var(--sl-z-index-drawer);
  }

  .drawer__panel {
    position: absolute;
    display: flex;
    flex-direction: column;
    z-index: 2;
    max-width: 100%;
    max-height: 100%;
    background-color: rgb(var(--sl-panel-background-color));
    box-shadow: var(--sl-shadow-x-large);
    transition: var(--sl-transition-medium) transform;
    overflow: auto;
    pointer-events: all;
  }

  .drawer__panel:focus {
    outline: none;
  }

  .drawer--top .drawer__panel {
    top: 0;
    right: auto;
    bottom: auto;
    left: 0;
    width: 100%;
    height: var(--size);
  }

  .drawer--end .drawer__panel {
    top: 0;
    right: 0;
    bottom: auto;
    left: auto;
    width: var(--size);
    height: 100%;
  }

  .drawer--bottom .drawer__panel {
    top: auto;
    right: auto;
    bottom: 0;
    left: 0;
    width: 100%;
    height: var(--size);
  }

  .drawer--start .drawer__panel {
    top: 0;
    right: auto;
    bottom: auto;
    left: 0;
    width: var(--size);
    height: 100%;
  }

  .drawer__header {
    display: flex;
  }

  .drawer__title {
    flex: 1 1 auto;
    font-size: var(--sl-font-size-large);
    line-height: var(--sl-line-height-dense);
    padding: var(--header-spacing);
  }

  .drawer__close {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    font-size: var(--sl-font-size-x-large);
    padding: 0 var(--header-spacing);
  }

  .drawer__body {
    flex: 1 1 auto;
    padding: var(--body-spacing);
    overflow: auto;
    -webkit-overflow-scrolling: touch;
  }

  .drawer__footer {
    text-align: right;
    padding: var(--footer-spacing);
  }

  .drawer__footer ::slotted(sl-button:not(:last-of-type)) {
    margin-right: var(--sl-spacing-x-small);
  }

  .drawer:not(.drawer--has-footer) .drawer__footer {
    display: none;
  }

  .drawer__overlay {
    display: block;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: rgb(var(--sl-overlay-background-color) / var(--sl-overlay-opacity));
    pointer-events: all;
  }

  .drawer--contained .drawer__overlay {
    position: absolute;
  }
`;
// src/components/drawer/drawer.ts
var hasPreventScroll = _chunkP4ITZG26Js.isPreventScrollSupported();
var id = 0;
var SlDrawer = class extends _chunkX3WLUTHFJs.n {
    constructor(){
        super(...arguments);
        this.componentId = `drawer-${++id}`;
        this.hasFooter = false;
        this.open = false;
        this.label = "";
        this.placement = "end";
        this.contained = false;
        this.noHeader = false;
    }
    connectedCallback() {
        super.connectedCallback();
        this.modal = new _chunkP4ITZG26Js.modal_default(this);
        this.handleSlotChange();
    }
    firstUpdated() {
        this.drawer.hidden = !this.open;
        if (this.open && !this.contained) {
            this.modal.activate();
            _chunkXAZN5AQ5Js.lockBodyScrolling(this);
        }
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        _chunkXAZN5AQ5Js.unlockBodyScrolling(this);
    }
    async show() {
        if (this.open) return;
        this.open = true;
        return _chunkI4TE3TJVJs.waitForEvent(this, "sl-after-show");
    }
    async hide() {
        if (!this.open) return;
        this.open = false;
        return _chunkI4TE3TJVJs.waitForEvent(this, "sl-after-hide");
    }
    requestClose() {
        const slRequestClose = _chunkI4TE3TJVJs.emit(this, "sl-request-close", {
            cancelable: true
        });
        if (slRequestClose.defaultPrevented) {
            const animation = _chunkEVK2ASE6Js.getAnimation(this, "drawer.denyClose");
            _chunkNVGT36PIJs.animateTo(this.panel, animation.keyframes, animation.options);
            return;
        }
        this.hide();
    }
    handleKeyDown(event) {
        if (event.key === "Escape") {
            event.stopPropagation();
            this.requestClose();
        }
    }
    async handleOpenChange() {
        if (this.open) {
            _chunkI4TE3TJVJs.emit(this, "sl-show");
            this.originalTrigger = document.activeElement;
            if (!this.contained) {
                this.modal.activate();
                _chunkXAZN5AQ5Js.lockBodyScrolling(this);
            }
            await Promise.all([
                _chunkNVGT36PIJs.stopAnimations(this.drawer),
                _chunkNVGT36PIJs.stopAnimations(this.overlay)
            ]);
            this.drawer.hidden = false;
            if (hasPreventScroll) {
                const slInitialFocus = _chunkI4TE3TJVJs.emit(this, "sl-initial-focus", {
                    cancelable: true
                });
                if (!slInitialFocus.defaultPrevented) this.panel.focus({
                    preventScroll: true
                });
            }
            const panelAnimation = _chunkEVK2ASE6Js.getAnimation(this, `drawer.show${uppercaseFirstLetter(this.placement)}`);
            const overlayAnimation = _chunkEVK2ASE6Js.getAnimation(this, "drawer.overlay.show");
            await Promise.all([
                _chunkNVGT36PIJs.animateTo(this.panel, panelAnimation.keyframes, panelAnimation.options),
                _chunkNVGT36PIJs.animateTo(this.overlay, overlayAnimation.keyframes, overlayAnimation.options)
            ]);
            if (!hasPreventScroll) {
                const slInitialFocus = _chunkI4TE3TJVJs.emit(this, "sl-initial-focus", {
                    cancelable: true
                });
                if (!slInitialFocus.defaultPrevented) this.panel.focus({
                    preventScroll: true
                });
            }
            _chunkI4TE3TJVJs.emit(this, "sl-after-show");
        } else {
            _chunkI4TE3TJVJs.emit(this, "sl-hide");
            this.modal.deactivate();
            _chunkXAZN5AQ5Js.unlockBodyScrolling(this);
            await Promise.all([
                _chunkNVGT36PIJs.stopAnimations(this.drawer),
                _chunkNVGT36PIJs.stopAnimations(this.overlay)
            ]);
            const panelAnimation = _chunkEVK2ASE6Js.getAnimation(this, `drawer.hide${uppercaseFirstLetter(this.placement)}`);
            const overlayAnimation = _chunkEVK2ASE6Js.getAnimation(this, "drawer.overlay.hide");
            await Promise.all([
                _chunkNVGT36PIJs.animateTo(this.panel, panelAnimation.keyframes, panelAnimation.options),
                _chunkNVGT36PIJs.animateTo(this.overlay, overlayAnimation.keyframes, overlayAnimation.options)
            ]);
            this.drawer.hidden = true;
            const trigger = this.originalTrigger;
            if (trigger && typeof trigger.focus === "function") setTimeout(()=>trigger.focus()
            );
            _chunkI4TE3TJVJs.emit(this, "sl-after-hide");
        }
    }
    handleSlotChange() {
        this.hasFooter = _chunkIBDZI3K2Js.hasSlot(this, "footer");
    }
    render() {
        return _chunkX3WLUTHFJs.y`
      <div
        part="base"
        class=${_chunkJTSEMIY7Js.o({
            drawer: true,
            "drawer--open": this.open,
            "drawer--top": this.placement === "top",
            "drawer--end": this.placement === "end",
            "drawer--bottom": this.placement === "bottom",
            "drawer--start": this.placement === "start",
            "drawer--contained": this.contained,
            "drawer--fixed": !this.contained,
            "drawer--has-footer": this.hasFooter
        })}
        @keydown=${this.handleKeyDown}
      >
        <div part="overlay" class="drawer__overlay" @click=${this.requestClose} tabindex="-1"></div>

        <div
          part="panel"
          class="drawer__panel"
          role="dialog"
          aria-modal="true"
          aria-hidden=${this.open ? "false" : "true"}
          aria-label=${_chunkSJSINRNQJs.l(this.noHeader ? this.label : void 0)}
          aria-labelledby=${_chunkSJSINRNQJs.l(!this.noHeader ? `${this.componentId}-title` : void 0)}
          tabindex="0"
        >
          ${!this.noHeader ? _chunkX3WLUTHFJs.y`
                <header part="header" class="drawer__header">
                  <span part="title" class="drawer__title" id=${`${this.componentId}-title`}>
                    <!-- If there's no label, use an invisible character to prevent the heading from collapsing -->
                    <slot name="label"> ${this.label || String.fromCharCode(65279)} </slot>
                  </span>
                  <sl-icon-button
                    exportparts="base:close-button"
                    class="drawer__close"
                    name="x"
                    library="system"
                    @click=${this.requestClose}
                  ></sl-icon-button>
                </header>
              ` : ""}

          <div part="body" class="drawer__body">
            <slot></slot>
          </div>

          <footer part="footer" class="drawer__footer">
            <slot name="footer" @slotchange=${this.handleSlotChange}></slot>
          </footer>
        </div>
      </div>
    `;
    }
};
SlDrawer.styles = drawer_styles_default;
_chunkIHGPZX35Js.__decorateClass([
    _chunkL2RLCVJQJs.i(".drawer")
], SlDrawer.prototype, "drawer", 2);
_chunkIHGPZX35Js.__decorateClass([
    _chunkL2RLCVJQJs.i(".drawer__panel")
], SlDrawer.prototype, "panel", 2);
_chunkIHGPZX35Js.__decorateClass([
    _chunkL2RLCVJQJs.i(".drawer__overlay")
], SlDrawer.prototype, "overlay", 2);
_chunkIHGPZX35Js.__decorateClass([
    _chunkL2RLCVJQJs.t()
], SlDrawer.prototype, "hasFooter", 2);
_chunkIHGPZX35Js.__decorateClass([
    _chunkL2RLCVJQJs.e({
        type: Boolean,
        reflect: true
    })
], SlDrawer.prototype, "open", 2);
_chunkIHGPZX35Js.__decorateClass([
    _chunkL2RLCVJQJs.e({
        reflect: true
    })
], SlDrawer.prototype, "label", 2);
_chunkIHGPZX35Js.__decorateClass([
    _chunkL2RLCVJQJs.e({
        reflect: true
    })
], SlDrawer.prototype, "placement", 2);
_chunkIHGPZX35Js.__decorateClass([
    _chunkL2RLCVJQJs.e({
        type: Boolean,
        reflect: true
    })
], SlDrawer.prototype, "contained", 2);
_chunkIHGPZX35Js.__decorateClass([
    _chunkL2RLCVJQJs.e({
        attribute: "no-header",
        type: Boolean,
        reflect: true
    })
], SlDrawer.prototype, "noHeader", 2);
_chunkIHGPZX35Js.__decorateClass([
    _chunkBD26TKS4Js.watch("open", {
        waitUntilFirstUpdate: true
    })
], SlDrawer.prototype, "handleOpenChange", 1);
SlDrawer = _chunkIHGPZX35Js.__decorateClass([
    _chunkL2RLCVJQJs.n("sl-drawer")
], SlDrawer);
var drawer_default = SlDrawer;
_chunkEVK2ASE6Js.setDefaultAnimation("drawer.showTop", {
    keyframes: [
        {
            opacity: 0,
            transform: "translateY(-100%)"
        },
        {
            opacity: 1,
            transform: "translateY(0)"
        }
    ],
    options: {
        duration: 250,
        easing: "ease"
    }
});
_chunkEVK2ASE6Js.setDefaultAnimation("drawer.hideTop", {
    keyframes: [
        {
            opacity: 1,
            transform: "translateY(0)"
        },
        {
            opacity: 0,
            transform: "translateY(-100%)"
        }
    ],
    options: {
        duration: 250,
        easing: "ease"
    }
});
_chunkEVK2ASE6Js.setDefaultAnimation("drawer.showEnd", {
    keyframes: [
        {
            opacity: 0,
            transform: "translateX(100%)"
        },
        {
            opacity: 1,
            transform: "translateX(0)"
        }
    ],
    options: {
        duration: 250,
        easing: "ease"
    }
});
_chunkEVK2ASE6Js.setDefaultAnimation("drawer.hideEnd", {
    keyframes: [
        {
            opacity: 1,
            transform: "translateX(0)"
        },
        {
            opacity: 0,
            transform: "translateX(100%)"
        }
    ],
    options: {
        duration: 250,
        easing: "ease"
    }
});
_chunkEVK2ASE6Js.setDefaultAnimation("drawer.showBottom", {
    keyframes: [
        {
            opacity: 0,
            transform: "translateY(100%)"
        },
        {
            opacity: 1,
            transform: "translateY(0)"
        }
    ],
    options: {
        duration: 250,
        easing: "ease"
    }
});
_chunkEVK2ASE6Js.setDefaultAnimation("drawer.hideBottom", {
    keyframes: [
        {
            opacity: 1,
            transform: "translateY(0)"
        },
        {
            opacity: 0,
            transform: "translateY(100%)"
        }
    ],
    options: {
        duration: 250,
        easing: "ease"
    }
});
_chunkEVK2ASE6Js.setDefaultAnimation("drawer.showStart", {
    keyframes: [
        {
            opacity: 0,
            transform: "translateX(-100%)"
        },
        {
            opacity: 1,
            transform: "translateX(0)"
        }
    ],
    options: {
        duration: 250,
        easing: "ease"
    }
});
_chunkEVK2ASE6Js.setDefaultAnimation("drawer.hideStart", {
    keyframes: [
        {
            opacity: 1,
            transform: "translateX(0)"
        },
        {
            opacity: 0,
            transform: "translateX(-100%)"
        }
    ],
    options: {
        duration: 250,
        easing: "ease"
    }
});
_chunkEVK2ASE6Js.setDefaultAnimation("drawer.denyClose", {
    keyframes: [
        {
            transform: "scale(1)"
        },
        {
            transform: "scale(1.01)"
        },
        {
            transform: "scale(1)"
        }
    ],
    options: {
        duration: 250
    }
});
_chunkEVK2ASE6Js.setDefaultAnimation("drawer.overlay.show", {
    keyframes: [
        {
            opacity: 0
        },
        {
            opacity: 1
        }
    ],
    options: {
        duration: 250
    }
});
_chunkEVK2ASE6Js.setDefaultAnimation("drawer.overlay.hide", {
    keyframes: [
        {
            opacity: 1
        },
        {
            opacity: 0
        }
    ],
    options: {
        duration: 250
    }
});

},{"./chunk.P4ITZG26.js":"8H464","./chunk.XAZN5AQ5.js":"aM2md","./chunk.NVGT36PI.js":"eF7TG","./chunk.EVK2ASE6.js":"76eJj","./chunk.BD26TKS4.js":"ipINT","./chunk.I4TE3TJV.js":"9KUzU","./chunk.IBDZI3K2.js":"eLeU6","./chunk.SJSINRNQ.js":"iJHEq","./chunk.JTSEMIY7.js":"aWFCQ","./chunk.G466JWVF.js":"ewNFt","./chunk.L2RLCVJQ.js":"iaOsv","./chunk.X3WLUTHF.js":"1Nmoi","./chunk.IHGPZX35.js":"4lKzp","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"8H464":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "isPreventScrollSupported", ()=>isPreventScrollSupported
);
parcelHelpers.export(exports, "modal_default", ()=>modal_default
);
var _chunkDTSUHNT6Js = require("./chunk.DTSUHNT6.js");
// src/internal/support.ts
function isPreventScrollSupported() {
    let supported = false;
    document.createElement("div").focus({
        get preventScroll () {
            supported = true;
            return false;
        }
    });
    return supported;
}
// src/internal/modal.ts
var activeModals = [];
var Modal = class {
    constructor(element){
        this.tabDirection = "forward";
        this.element = element;
        this.handleFocusIn = this.handleFocusIn.bind(this);
        this.handleKeyDown = this.handleKeyDown.bind(this);
    }
    activate() {
        activeModals.push(this.element);
        document.addEventListener("focusin", this.handleFocusIn);
        document.addEventListener("keydown", this.handleKeyDown);
    }
    deactivate() {
        activeModals = activeModals.filter((modal)=>modal !== this.element
        );
        document.removeEventListener("focusin", this.handleFocusIn);
        document.removeEventListener("keydown", this.handleKeyDown);
    }
    isActive() {
        return activeModals[activeModals.length - 1] === this.element;
    }
    handleFocusIn(event) {
        const path = event.composedPath();
        if (this.isActive() && !path.includes(this.element)) {
            const { start , end  } = _chunkDTSUHNT6Js.getTabbableBoundary(this.element);
            const target = this.tabDirection === "forward" ? start : end;
            if (typeof (target == null ? void 0 : target.focus) === "function") target.focus({
                preventScroll: true
            });
        }
    }
    handleKeyDown(event) {
        if (event.key === "Tab" && event.shiftKey) {
            this.tabDirection = "backward";
            setTimeout(()=>this.tabDirection = "forward"
            );
        }
    }
};
var modal_default = Modal;

},{"./chunk.DTSUHNT6.js":"kt9Ze","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"kt9Ze":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getTabbableBoundary", ()=>getTabbableBoundary
);
// src/internal/tabbable.ts
function isTabbable(el) {
    const tag = el.tagName.toLowerCase();
    if (el.getAttribute("tabindex") === "-1") return false;
    if (el.hasAttribute("disabled")) return false;
    if (el.hasAttribute("aria-disabled") && el.getAttribute("aria-disabled") !== "false") return false;
    if (tag === "input" && el.getAttribute("type") === "radio" && !el.hasAttribute("checked")) return false;
    if (!el.offsetParent) return false;
    if (window.getComputedStyle(el).visibility === "hidden") return false;
    if ((tag === "audio" || tag === "video") && el.hasAttribute("controls")) return true;
    if (el.hasAttribute("tabindex")) return true;
    if (el.hasAttribute("contenteditable") && el.getAttribute("contenteditable") !== "false") return true;
    return [
        "button",
        "input",
        "select",
        "textarea",
        "a",
        "audio",
        "video",
        "summary"
    ].includes(tag);
}
function getTabbableBoundary(root) {
    const allElements = [];
    function walk(el) {
        if (el instanceof HTMLElement) {
            allElements.push(el);
            if (el.shadowRoot && el.shadowRoot.mode === "open") walk(el.shadowRoot);
        }
        [
            ...el.querySelectorAll("*")
        ].map((e)=>walk(e)
        );
    }
    walk(root);
    const start = allElements.find((el)=>isTabbable(el)
    ) || null;
    const end = allElements.reverse().find((el)=>isTabbable(el)
    ) || null;
    return {
        start,
        end
    };
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"aM2md":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getOffset", ()=>getOffset
);
parcelHelpers.export(exports, "lockBodyScrolling", ()=>lockBodyScrolling
);
parcelHelpers.export(exports, "unlockBodyScrolling", ()=>unlockBodyScrolling
);
parcelHelpers.export(exports, "scrollIntoView", ()=>scrollIntoView
);
// src/internal/offset.ts
function getOffset(element, parent) {
    return {
        top: Math.round(element.getBoundingClientRect().top - parent.getBoundingClientRect().top),
        left: Math.round(element.getBoundingClientRect().left - parent.getBoundingClientRect().left)
    };
}
// src/internal/scroll.ts
var locks = new Set();
function lockBodyScrolling(lockingEl) {
    locks.add(lockingEl);
    document.body.classList.add("sl-scroll-lock");
}
function unlockBodyScrolling(lockingEl) {
    locks.delete(lockingEl);
    if (locks.size === 0) document.body.classList.remove("sl-scroll-lock");
}
function scrollIntoView(element, container, direction = "vertical", behavior = "smooth") {
    const offset = getOffset(element, container);
    const offsetTop = offset.top + container.scrollTop;
    const offsetLeft = offset.left + container.scrollLeft;
    const minX = container.scrollLeft;
    const maxX = container.scrollLeft + container.offsetWidth;
    const minY = container.scrollTop;
    const maxY = container.scrollTop + container.offsetHeight;
    if (direction === "horizontal" || direction === "both") {
        if (offsetLeft < minX) container.scrollTo({
            left: offsetLeft,
            behavior
        });
        else if (offsetLeft + element.clientWidth > maxX) container.scrollTo({
            left: offsetLeft - container.offsetWidth + element.clientWidth,
            behavior
        });
    }
    if (direction === "vertical" || direction === "both") {
        if (offsetTop < minY) container.scrollTo({
            top: offsetTop,
            behavior
        });
        else if (offsetTop + element.clientHeight > maxY) container.scrollTo({
            top: offsetTop - container.offsetHeight + element.clientHeight,
            behavior
        });
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"5qMh5":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "icon_button_default", ()=>icon_button_default
);
var _chunkSJSINRNQJs = require("./chunk.SJSINRNQ.js");
var _chunkYTV73MAMJs = require("./chunk.YTV73MAM.js");
var _chunkJTSEMIY7Js = require("./chunk.JTSEMIY7.js");
var _chunkG466JWVFJs = require("./chunk.G466JWVF.js");
var _chunkL2RLCVJQJs = require("./chunk.L2RLCVJQ.js");
var _chunkX3WLUTHFJs = require("./chunk.X3WLUTHF.js");
var _chunkIHGPZX35Js = require("./chunk.IHGPZX35.js");
// src/components/icon-button/icon-button.styles.ts
var icon_button_styles_default = _chunkX3WLUTHFJs.r`
  ${_chunkG466JWVFJs.component_styles_default}

  :host {
    display: inline-block;
  }

  .icon-button {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    background: none;
    border: none;
    border-radius: var(--sl-border-radius-medium);
    font-size: inherit;
    color: rgb(var(--sl-color-neutral-600));
    padding: var(--sl-spacing-x-small);
    cursor: pointer;
    transition: var(--sl-transition-medium) color;
    -webkit-appearance: none;
  }

  .icon-button:hover:not(.icon-button--disabled),
  .icon-button:focus:not(.icon-button--disabled) {
    color: rgb(var(--sl-color-primary-600));
  }

  .icon-button:active:not(.icon-button--disabled) {
    color: rgb(var(--sl-color-primary-700));
  }

  .icon-button:focus {
    outline: none;
  }

  .icon-button--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .icon-button${_chunkYTV73MAMJs.focusVisibleSelector} {
    box-shadow: var(--sl-focus-ring);
  }
`;
// src/components/icon-button/icon-button.ts
var SlIconButton = class extends _chunkX3WLUTHFJs.n {
    constructor(){
        super(...arguments);
        this.label = "";
        this.disabled = false;
    }
    render() {
        const isLink = this.href ? true : false;
        const interior = _chunkX3WLUTHFJs.y`
      <sl-icon
        name=${_chunkSJSINRNQJs.l(this.name)}
        library=${_chunkSJSINRNQJs.l(this.library)}
        src=${_chunkSJSINRNQJs.l(this.src)}
        aria-hidden="true"
      ></sl-icon>
    `;
        return isLink ? _chunkX3WLUTHFJs.y`
          <a
            part="base"
            class="icon-button"
            href=${_chunkSJSINRNQJs.l(this.href)}
            target=${_chunkSJSINRNQJs.l(this.target)}
            download=${_chunkSJSINRNQJs.l(this.download)}
            rel=${_chunkSJSINRNQJs.l(this.target ? "noreferrer noopener" : void 0)}
            role="button"
            aria-disabled=${this.disabled ? "true" : "false"}
            aria-label="${this.label}"
            tabindex=${this.disabled ? "-1" : "0"}
          >
            ${interior}
          </a>
        ` : _chunkX3WLUTHFJs.y`
          <button
            part="base"
            class=${_chunkJTSEMIY7Js.o({
            "icon-button": true,
            "icon-button--disabled": this.disabled
        })}
            ?disabled=${this.disabled}
            type="button"
            aria-label=${this.label}
          >
            ${interior}
          </button>
        `;
    }
};
SlIconButton.styles = icon_button_styles_default;
_chunkIHGPZX35Js.__decorateClass([
    _chunkL2RLCVJQJs.i("button")
], SlIconButton.prototype, "button", 2);
_chunkIHGPZX35Js.__decorateClass([
    _chunkL2RLCVJQJs.e()
], SlIconButton.prototype, "name", 2);
_chunkIHGPZX35Js.__decorateClass([
    _chunkL2RLCVJQJs.e()
], SlIconButton.prototype, "library", 2);
_chunkIHGPZX35Js.__decorateClass([
    _chunkL2RLCVJQJs.e()
], SlIconButton.prototype, "src", 2);
_chunkIHGPZX35Js.__decorateClass([
    _chunkL2RLCVJQJs.e()
], SlIconButton.prototype, "href", 2);
_chunkIHGPZX35Js.__decorateClass([
    _chunkL2RLCVJQJs.e()
], SlIconButton.prototype, "target", 2);
_chunkIHGPZX35Js.__decorateClass([
    _chunkL2RLCVJQJs.e()
], SlIconButton.prototype, "download", 2);
_chunkIHGPZX35Js.__decorateClass([
    _chunkL2RLCVJQJs.e()
], SlIconButton.prototype, "label", 2);
_chunkIHGPZX35Js.__decorateClass([
    _chunkL2RLCVJQJs.e({
        type: Boolean,
        reflect: true
    })
], SlIconButton.prototype, "disabled", 2);
SlIconButton = _chunkIHGPZX35Js.__decorateClass([
    _chunkL2RLCVJQJs.n("sl-icon-button")
], SlIconButton);
var icon_button_default = SlIconButton;

},{"./chunk.SJSINRNQ.js":"iJHEq","./chunk.YTV73MAM.js":"7mkG7","./chunk.JTSEMIY7.js":"aWFCQ","./chunk.G466JWVF.js":"ewNFt","./chunk.L2RLCVJQ.js":"iaOsv","./chunk.X3WLUTHF.js":"1Nmoi","./chunk.IHGPZX35.js":"4lKzp","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"bdUuq":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "o", ()=>o
) /**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ ;
parcelHelpers.export(exports, "icon_default", ()=>icon_default
);
var _chunkHR6PXJB3Js = require("./chunk.HR6PXJB3.js");
var _chunkARRH633MJs = require("./chunk.ARRH633M.js");
var _chunkBD26TKS4Js = require("./chunk.BD26TKS4.js");
var _chunkI4TE3TJVJs = require("./chunk.I4TE3TJV.js");
var _chunk2JQPDYNAJs = require("./chunk.2JQPDYNA.js");
var _chunkG466JWVFJs = require("./chunk.G466JWVF.js");
var _chunkL2RLCVJQJs = require("./chunk.L2RLCVJQ.js");
var _chunkX3WLUTHFJs = require("./chunk.X3WLUTHF.js");
var _chunkIHGPZX35Js = require("./chunk.IHGPZX35.js");
// node_modules/lit-html/directives/unsafe-html.js
var e3 = class extends _chunk2JQPDYNAJs.i {
    constructor(i2){
        if (super(i2), this.it = _chunkX3WLUTHFJs.x, i2.type !== _chunk2JQPDYNAJs.t.CHILD) throw Error(this.constructor.directiveName + "() can only be used in child bindings");
    }
    render(r2) {
        if (r2 === _chunkX3WLUTHFJs.x || r2 == null) return this.vt = void 0, this.it = r2;
        if (r2 === _chunkX3WLUTHFJs.T) return r2;
        if (typeof r2 != "string") throw Error(this.constructor.directiveName + "() called with a non-string value");
        if (r2 === this.it) return this.vt;
        this.it = r2;
        const s = [
            r2
        ];
        return s.raw = s, this.vt = {
            _$litType$: this.constructor.resultType,
            strings: s,
            values: []
        };
    }
};
e3.directiveName = "unsafeHTML", e3.resultType = 1;
var o = _chunk2JQPDYNAJs.e(e3);
// node_modules/lit-html/directives/unsafe-svg.js
var t3 = class extends e3 {
};
t3.directiveName = "unsafeSVG", t3.resultType = 2;
var o2 = _chunk2JQPDYNAJs.e(t3);
// src/components/icon/icon.styles.ts
var icon_styles_default = _chunkX3WLUTHFJs.r`
  ${_chunkG466JWVFJs.component_styles_default}

  :host {
    display: inline-block;
    width: 1em;
    height: 1em;
    contain: strict;
    box-sizing: content-box !important;
  }

  .icon,
  svg {
    display: block;
    height: 100%;
    width: 100%;
  }
`;
// src/components/icon/icon.ts
var parser = new DOMParser();
var SlIcon = class extends _chunkX3WLUTHFJs.n {
    constructor(){
        super(...arguments);
        this.svg = "";
        this.library = "default";
    }
    connectedCallback() {
        super.connectedCallback();
        _chunkHR6PXJB3Js.watchIcon(this);
    }
    firstUpdated() {
        this.setIcon();
    }
    disconnectedCallback() {
        super.disconnectedCallback();
        _chunkHR6PXJB3Js.unwatchIcon(this);
    }
    getLabel() {
        let label = "";
        if (this.label) label = this.label;
        else if (this.name) label = this.name.replace(/-/g, " ");
        else if (this.src) label = this.src.replace(/.*\//, "").replace(/-/g, " ").replace(/\.svg/i, "");
        return label;
    }
    getUrl() {
        const library = _chunkHR6PXJB3Js.getIconLibrary(this.library);
        if (this.name && library) return library.resolver(this.name);
        else return this.src;
    }
    redraw() {
        this.setIcon();
    }
    async setIcon() {
        const library = _chunkHR6PXJB3Js.getIconLibrary(this.library);
        const url = this.getUrl();
        if (url) try {
            const file = await _chunkARRH633MJs.requestIcon(url);
            if (url !== this.getUrl()) return;
            else if (file.ok) {
                const doc = parser.parseFromString(file.svg, "text/html");
                const svgEl = doc.body.querySelector("svg");
                if (svgEl) {
                    if (library && library.mutator) library.mutator(svgEl);
                    this.svg = svgEl.outerHTML;
                    _chunkI4TE3TJVJs.emit(this, "sl-load");
                } else {
                    this.svg = "";
                    _chunkI4TE3TJVJs.emit(this, "sl-error", {
                        detail: {
                            status: file.status
                        }
                    });
                }
            } else {
                this.svg = "";
                _chunkI4TE3TJVJs.emit(this, "sl-error", {
                    detail: {
                        status: file.status
                    }
                });
            }
        } catch (e4) {
            _chunkI4TE3TJVJs.emit(this, "sl-error", {
                detail: {
                    status: -1
                }
            });
        }
        else if (this.svg) this.svg = "";
    }
    handleChange() {
        this.setIcon();
    }
    render() {
        return _chunkX3WLUTHFJs.y` <div part="base" class="icon" role="img" aria-label=${this.getLabel()}>${o2(this.svg)}</div>`;
    }
};
SlIcon.styles = icon_styles_default;
_chunkIHGPZX35Js.__decorateClass([
    _chunkL2RLCVJQJs.t()
], SlIcon.prototype, "svg", 2);
_chunkIHGPZX35Js.__decorateClass([
    _chunkL2RLCVJQJs.e()
], SlIcon.prototype, "name", 2);
_chunkIHGPZX35Js.__decorateClass([
    _chunkL2RLCVJQJs.e()
], SlIcon.prototype, "src", 2);
_chunkIHGPZX35Js.__decorateClass([
    _chunkL2RLCVJQJs.e()
], SlIcon.prototype, "label", 2);
_chunkIHGPZX35Js.__decorateClass([
    _chunkL2RLCVJQJs.e()
], SlIcon.prototype, "library", 2);
_chunkIHGPZX35Js.__decorateClass([
    _chunkBD26TKS4Js.watch("name"),
    _chunkBD26TKS4Js.watch("src"),
    _chunkBD26TKS4Js.watch("library")
], SlIcon.prototype, "setIcon", 1);
SlIcon = _chunkIHGPZX35Js.__decorateClass([
    _chunkL2RLCVJQJs.n("sl-icon")
], SlIcon);
var icon_default = SlIcon;

},{"./chunk.HR6PXJB3.js":"8ByF8","./chunk.ARRH633M.js":"fAQVY","./chunk.BD26TKS4.js":"ipINT","./chunk.I4TE3TJV.js":"9KUzU","./chunk.2JQPDYNA.js":"9nuKG","./chunk.G466JWVF.js":"ewNFt","./chunk.L2RLCVJQ.js":"iaOsv","./chunk.X3WLUTHF.js":"1Nmoi","./chunk.IHGPZX35.js":"4lKzp","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"8ByF8":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "watchIcon", ()=>watchIcon
);
parcelHelpers.export(exports, "unwatchIcon", ()=>unwatchIcon
);
parcelHelpers.export(exports, "getIconLibrary", ()=>getIconLibrary
);
parcelHelpers.export(exports, "registerIconLibrary", ()=>registerIconLibrary
);
parcelHelpers.export(exports, "unregisterIconLibrary", ()=>unregisterIconLibrary
);
var _chunkFGIYSBZ6Js = require("./chunk.FGIYSBZ6.js");
var _chunkOTFHC4CHJs = require("./chunk.OTFHC4CH.js");
// src/components/icon/library.ts
var registry = [_chunkFGIYSBZ6Js.library_default_default, _chunkOTFHC4CHJs.library_system_default];
var watchedIcons = [];
function watchIcon(icon) {
    watchedIcons.push(icon);
}
function unwatchIcon(icon) {
    watchedIcons = watchedIcons.filter((el)=>el !== icon
    );
}
function getIconLibrary(name) {
    return registry.filter((lib)=>lib.name === name
    )[0];
}
function registerIconLibrary(name, options) {
    unregisterIconLibrary(name);
    registry.push({
        name,
        resolver: options.resolver,
        mutator: options.mutator
    });
    watchedIcons.map((icon)=>{
        if (icon.library === name) icon.redraw();
    });
}
function unregisterIconLibrary(name) {
    registry = registry.filter((lib)=>lib.name !== name
    );
}

},{"./chunk.FGIYSBZ6.js":"9ssGp","./chunk.OTFHC4CH.js":"9rcDi","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"9ssGp":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "library_default_default", ()=>library_default_default
);
var _chunkS6TJZ6NJJs = require("./chunk.S6TJZ6NJ.js");
// src/components/icon/library.default.ts
var library = {
    name: "default",
    resolver: (name)=>`${_chunkS6TJZ6NJJs.getBasePath()}/assets/icons/${name}.svg`
};
var library_default_default = library;

},{"./chunk.S6TJZ6NJ.js":"edUe8","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"edUe8":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "setBasePath", ()=>setBasePath
);
parcelHelpers.export(exports, "getBasePath", ()=>getBasePath
);
// src/utilities/base-path.ts
var basePath = "";
function setBasePath(path) {
    basePath = path;
}
function getBasePath() {
    return basePath.replace(/\/$/, "");
}
var scripts = [
    ...document.getElementsByTagName("script")
];
var configScript = scripts.find((script)=>script.hasAttribute("data-shoelace")
);
if (configScript) setBasePath(configScript.getAttribute("data-shoelace"));
else {
    const fallbackScript = scripts.find((s)=>/shoelace(\.min)?\.js$/.test(s.src)
    );
    let path = "";
    if (fallbackScript) path = fallbackScript.getAttribute("src");
    setBasePath(path.split("/").slice(0, -1).join("/"));
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"9rcDi":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "library_system_default", ()=>library_system_default
);
// src/components/icon/library.system.ts
var icons = {
    check: `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check" viewBox="0 0 16 16">
      <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z"/>
    </svg>
  `,
    "chevron-down": `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
    </svg>
  `,
    "chevron-left": `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
    </svg>
  `,
    "chevron-right": `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
    </svg>
  `,
    eye: `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16">
      <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"/>
      <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/>
    </svg>
  `,
    "eye-slash": `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye-slash" viewBox="0 0 16 16">
      <path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7.028 7.028 0 0 0-2.79.588l.77.771A5.944 5.944 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.134 13.134 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755-.165.165-.337.328-.517.486l.708.709z"/>
      <path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829l.822.822zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829z"/>
      <path d="M3.35 5.47c-.18.16-.353.322-.518.487A13.134 13.134 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7.029 7.029 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12-.708.708z"/>
    </svg>
  `,
    "grip-vertical": `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-grip-vertical" viewBox="0 0 16 16">
      <path d="M7 2a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
    </svg>
  `,
    "person-fill": `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
      <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
    </svg>
  `,
    "play-fill": `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-play-fill" viewBox="0 0 16 16">
      <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"></path>
    </svg>
  `,
    "pause-fill": `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pause-fill" viewBox="0 0 16 16">
      <path d="M5.5 3.5A1.5 1.5 0 0 1 7 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5zm5 0A1.5 1.5 0 0 1 12 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5z"></path>
    </svg>
  `,
    "star-fill": `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
    </svg>
  `,
    x: `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
      <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
    </svg>
  `,
    "x-circle": `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle" viewBox="0 0 16 16">
      <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
      <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
    </svg>
  `
};
var systemLibrary = {
    name: "system",
    resolver: (name)=>{
        if (icons[name]) return `data:image/svg+xml,${encodeURIComponent(icons[name])}`;
        else return "";
    }
};
var library_system_default = systemLibrary;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"fAQVY":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "requestIcon", ()=>requestIcon
);
// src/components/icon/request.ts
var iconFiles = new Map();
var requestIcon = (url)=>{
    if (iconFiles.has(url)) return iconFiles.get(url);
    else {
        const request = fetch(url).then(async (response)=>{
            if (response.ok) {
                const div = document.createElement("div");
                div.innerHTML = await response.text();
                const svg = div.firstElementChild;
                return {
                    ok: response.ok,
                    status: response.status,
                    svg: svg && svg.tagName.toLowerCase() === "svg" ? svg.outerHTML : ""
                };
            } else return {
                ok: response.ok,
                status: response.status,
                svg: null
            };
        });
        iconFiles.set(url, request);
        return request;
    }
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"hlNg4":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>_chunk67NH344LJs.icon_default
);
var _chunk67NH344LJs = require("../../chunks/chunk.67NH344L.js");
var _chunkHR6PXJB3Js = require("../../chunks/chunk.HR6PXJB3.js");
var _chunkFGIYSBZ6Js = require("../../chunks/chunk.FGIYSBZ6.js");
var _chunkS6TJZ6NJJs = require("../../chunks/chunk.S6TJZ6NJ.js");
var _chunkOTFHC4CHJs = require("../../chunks/chunk.OTFHC4CH.js");
var _chunkARRH633MJs = require("../../chunks/chunk.ARRH633M.js");
var _chunkBD26TKS4Js = require("../../chunks/chunk.BD26TKS4.js");
var _chunkI4TE3TJVJs = require("../../chunks/chunk.I4TE3TJV.js");
var _chunk2JQPDYNAJs = require("../../chunks/chunk.2JQPDYNA.js");
var _chunkG466JWVFJs = require("../../chunks/chunk.G466JWVF.js");
var _chunkL2RLCVJQJs = require("../../chunks/chunk.L2RLCVJQ.js");
var _chunkX3WLUTHFJs = require("../../chunks/chunk.X3WLUTHF.js");
var _chunkIHGPZX35Js = require("../../chunks/chunk.IHGPZX35.js");

},{"../../chunks/chunk.67NH344L.js":"bdUuq","../../chunks/chunk.HR6PXJB3.js":"8ByF8","../../chunks/chunk.FGIYSBZ6.js":"9ssGp","../../chunks/chunk.S6TJZ6NJ.js":"edUe8","../../chunks/chunk.OTFHC4CH.js":"9rcDi","../../chunks/chunk.ARRH633M.js":"fAQVY","../../chunks/chunk.BD26TKS4.js":"ipINT","../../chunks/chunk.I4TE3TJV.js":"9KUzU","../../chunks/chunk.2JQPDYNA.js":"9nuKG","../../chunks/chunk.G466JWVF.js":"ewNFt","../../chunks/chunk.L2RLCVJQ.js":"iaOsv","../../chunks/chunk.X3WLUTHF.js":"1Nmoi","../../chunks/chunk.IHGPZX35.js":"4lKzp","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"lQHTH":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>_chunkOBQZMEYBJs.icon_button_default
);
var _chunkOBQZMEYBJs = require("../../chunks/chunk.OBQZMEYB.js");
var _chunk67NH344LJs = require("../../chunks/chunk.67NH344L.js");
var _chunkHR6PXJB3Js = require("../../chunks/chunk.HR6PXJB3.js");
var _chunkFGIYSBZ6Js = require("../../chunks/chunk.FGIYSBZ6.js");
var _chunkS6TJZ6NJJs = require("../../chunks/chunk.S6TJZ6NJ.js");
var _chunkOTFHC4CHJs = require("../../chunks/chunk.OTFHC4CH.js");
var _chunkARRH633MJs = require("../../chunks/chunk.ARRH633M.js");
var _chunkBD26TKS4Js = require("../../chunks/chunk.BD26TKS4.js");
var _chunkI4TE3TJVJs = require("../../chunks/chunk.I4TE3TJV.js");
var _chunkSJSINRNQJs = require("../../chunks/chunk.SJSINRNQ.js");
var _chunkYTV73MAMJs = require("../../chunks/chunk.YTV73MAM.js");
var _chunkJTSEMIY7Js = require("../../chunks/chunk.JTSEMIY7.js");
var _chunk2JQPDYNAJs = require("../../chunks/chunk.2JQPDYNA.js");
var _chunkG466JWVFJs = require("../../chunks/chunk.G466JWVF.js");
var _chunkL2RLCVJQJs = require("../../chunks/chunk.L2RLCVJQ.js");
var _chunkX3WLUTHFJs = require("../../chunks/chunk.X3WLUTHF.js");
var _chunkIHGPZX35Js = require("../../chunks/chunk.IHGPZX35.js");

},{"../../chunks/chunk.OBQZMEYB.js":"5qMh5","../../chunks/chunk.67NH344L.js":"bdUuq","../../chunks/chunk.HR6PXJB3.js":"8ByF8","../../chunks/chunk.FGIYSBZ6.js":"9ssGp","../../chunks/chunk.S6TJZ6NJ.js":"edUe8","../../chunks/chunk.OTFHC4CH.js":"9rcDi","../../chunks/chunk.ARRH633M.js":"fAQVY","../../chunks/chunk.BD26TKS4.js":"ipINT","../../chunks/chunk.I4TE3TJV.js":"9KUzU","../../chunks/chunk.SJSINRNQ.js":"iJHEq","../../chunks/chunk.YTV73MAM.js":"7mkG7","../../chunks/chunk.JTSEMIY7.js":"aWFCQ","../../chunks/chunk.2JQPDYNA.js":"9nuKG","../../chunks/chunk.G466JWVF.js":"ewNFt","../../chunks/chunk.L2RLCVJQ.js":"iaOsv","../../chunks/chunk.X3WLUTHF.js":"1Nmoi","../../chunks/chunk.IHGPZX35.js":"4lKzp","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"ba30O":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>_chunkYZGFC45BJs.progress_bar_default
);
var _chunkYZGFC45BJs = require("../../chunks/chunk.YZGFC45B.js");
var _chunkLYXFR7WNJs = require("../../chunks/chunk.LYXFR7WN.js");
var _chunkSJSINRNQJs = require("../../chunks/chunk.SJSINRNQ.js");
var _chunkJTSEMIY7Js = require("../../chunks/chunk.JTSEMIY7.js");
var _chunk2JQPDYNAJs = require("../../chunks/chunk.2JQPDYNA.js");
var _chunkG466JWVFJs = require("../../chunks/chunk.G466JWVF.js");
var _chunkL2RLCVJQJs = require("../../chunks/chunk.L2RLCVJQ.js");
var _chunkX3WLUTHFJs = require("../../chunks/chunk.X3WLUTHF.js");
var _chunkIHGPZX35Js = require("../../chunks/chunk.IHGPZX35.js");

},{"../../chunks/chunk.YZGFC45B.js":"z5meJ","../../chunks/chunk.LYXFR7WN.js":"edv5R","../../chunks/chunk.SJSINRNQ.js":"iJHEq","../../chunks/chunk.JTSEMIY7.js":"aWFCQ","../../chunks/chunk.2JQPDYNA.js":"9nuKG","../../chunks/chunk.G466JWVF.js":"ewNFt","../../chunks/chunk.L2RLCVJQ.js":"iaOsv","../../chunks/chunk.X3WLUTHF.js":"1Nmoi","../../chunks/chunk.IHGPZX35.js":"4lKzp","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"z5meJ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "progress_bar_default", ()=>progress_bar_default
);
var _chunkLYXFR7WNJs = require("./chunk.LYXFR7WN.js");
var _chunkSJSINRNQJs = require("./chunk.SJSINRNQ.js");
var _chunkJTSEMIY7Js = require("./chunk.JTSEMIY7.js");
var _chunkG466JWVFJs = require("./chunk.G466JWVF.js");
var _chunkL2RLCVJQJs = require("./chunk.L2RLCVJQ.js");
var _chunkX3WLUTHFJs = require("./chunk.X3WLUTHF.js");
var _chunkIHGPZX35Js = require("./chunk.IHGPZX35.js");
// src/components/progress-bar/progress-bar.styles.ts
var progress_bar_styles_default = _chunkX3WLUTHFJs.r`
  ${_chunkG466JWVFJs.component_styles_default}

  :host {
    --height: 1rem;
    --track-color: rgb(var(--sl-color-neutral-500) / 20%);
    --indicator-color: rgb(var(--sl-color-primary-600));
    --label-color: rgb(var(--sl-color-neutral-0));

    display: block;
  }

  .progress-bar {
    position: relative;
    background-color: var(--track-color);
    height: var(--height);
    border-radius: var(--sl-border-radius-pill);
    box-shadow: inset var(--sl-shadow-small);
    overflow: hidden;
  }

  .progress-bar__indicator {
    height: 100%;
    font-family: var(--sl-font-sans);
    font-size: 12px;
    font-weight: var(--sl-font-weight-normal);
    background-color: var(--indicator-color);
    color: var(--label-color);
    text-align: center;
    line-height: var(--height);
    white-space: nowrap;
    overflow: hidden;
    transition: 400ms width, 400ms background-color;
    user-select: none;
  }

  /* Indeterminate */
  .progress-bar--indeterminate .progress-bar__indicator {
    position: absolute;
    animation: indeterminate 2.5s infinite cubic-bezier(0.37, 0, 0.63, 1);
  }

  @keyframes indeterminate {
    0% {
      left: -50%;
      width: 50%;
    }
    75%,
    100% {
      left: 100%;
      width: 50%;
    }
  }
`;
// src/components/progress-bar/progress-bar.ts
var SlProgressBar = class extends _chunkX3WLUTHFJs.n {
    constructor(){
        super(...arguments);
        this.value = 0;
        this.indeterminate = false;
        this.label = "Progress";
    }
    render() {
        return _chunkX3WLUTHFJs.y`
      <div
        part="base"
        class=${_chunkJTSEMIY7Js.o({
            "progress-bar": true,
            "progress-bar--indeterminate": this.indeterminate
        })}
        role="progressbar"
        title=${_chunkSJSINRNQJs.l(this.title)}
        aria-label=${_chunkSJSINRNQJs.l(this.label)}
        aria-valuemin="0"
        aria-valuemax="100"
        aria-valuenow=${this.indeterminate ? 0 : this.value}
      >
        <div part="indicator" class="progress-bar__indicator" style=${_chunkLYXFR7WNJs.i({
            width: this.value + "%"
        })}>
          ${!this.indeterminate ? _chunkX3WLUTHFJs.y`
                <span part="label" class="progress-bar__label">
                  <slot></slot>
                </span>
              ` : ""}
        </div>
      </div>
    `;
    }
};
SlProgressBar.styles = progress_bar_styles_default;
_chunkIHGPZX35Js.__decorateClass([
    _chunkL2RLCVJQJs.e({
        type: Number,
        reflect: true
    })
], SlProgressBar.prototype, "value", 2);
_chunkIHGPZX35Js.__decorateClass([
    _chunkL2RLCVJQJs.e({
        type: Boolean,
        reflect: true
    })
], SlProgressBar.prototype, "indeterminate", 2);
_chunkIHGPZX35Js.__decorateClass([
    _chunkL2RLCVJQJs.e()
], SlProgressBar.prototype, "label", 2);
SlProgressBar = _chunkIHGPZX35Js.__decorateClass([
    _chunkL2RLCVJQJs.n("sl-progress-bar")
], SlProgressBar);
var progress_bar_default = SlProgressBar;

},{"./chunk.LYXFR7WN.js":"edv5R","./chunk.SJSINRNQ.js":"iJHEq","./chunk.JTSEMIY7.js":"aWFCQ","./chunk.G466JWVF.js":"ewNFt","./chunk.L2RLCVJQ.js":"iaOsv","./chunk.X3WLUTHF.js":"1Nmoi","./chunk.IHGPZX35.js":"4lKzp","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"edv5R":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "i", ()=>i2
) /**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */ ;
var _chunk2JQPDYNAJs = require("./chunk.2JQPDYNA.js");
var _chunkX3WLUTHFJs = require("./chunk.X3WLUTHF.js");
// node_modules/lit-html/directives/style-map.js
var i2 = _chunk2JQPDYNAJs.e(class extends _chunk2JQPDYNAJs.i {
    constructor(t2){
        var e2;
        if (super(t2), t2.type !== _chunk2JQPDYNAJs.t.ATTRIBUTE || t2.name !== "style" || ((e2 = t2.strings) === null || e2 === void 0 ? void 0 : e2.length) > 2) throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.");
    }
    render(t2) {
        return Object.keys(t2).reduce((e2, r)=>{
            const s = t2[r];
            return s == null ? e2 : e2 + `${r = r.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g, "-$&").toLowerCase()}:${s};`;
        }, "");
    }
    update(e2, [r]) {
        const { style: s  } = e2.element;
        if (this.ut === void 0) {
            this.ut = new Set();
            for(const t2 in r)this.ut.add(t2);
            return this.render(r);
        }
        this.ut.forEach((t2)=>{
            r[t2] == null && (this.ut.delete(t2), t2.includes("-") ? s.removeProperty(t2) : s[t2] = "");
        });
        for(const t2 in r){
            const e3 = r[t2];
            e3 != null && (this.ut.add(t2), t2.includes("-") ? s.setProperty(t2, e3) : s[t2] = e3);
        }
        return _chunkX3WLUTHFJs.T;
    }
});

},{"./chunk.2JQPDYNA.js":"9nuKG","./chunk.X3WLUTHF.js":"1Nmoi","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"dMfIw":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getBasePath", ()=>_chunkS6TJZ6NJJs.getBasePath
);
parcelHelpers.export(exports, "setBasePath", ()=>_chunkS6TJZ6NJJs.setBasePath
);
var _chunkS6TJZ6NJJs = require("../chunks/chunk.S6TJZ6NJ.js");
var _chunkIHGPZX35Js = require("../chunks/chunk.IHGPZX35.js");

},{"../chunks/chunk.S6TJZ6NJ.js":"edUe8","../chunks/chunk.IHGPZX35.js":"4lKzp","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"jKkq4":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "CLASSES", ()=>CLASSES
);
parcelHelpers.export(exports, "CLASS_ACTIVE", ()=>CLASS_ACTIVE
);
parcelHelpers.export(exports, "CLASS_ARROW", ()=>CLASS_ARROW
);
parcelHelpers.export(exports, "CLASS_ARROWS", ()=>CLASS_ARROWS
);
parcelHelpers.export(exports, "CLASS_ARROW_NEXT", ()=>CLASS_ARROW_NEXT
);
parcelHelpers.export(exports, "CLASS_ARROW_PREV", ()=>CLASS_ARROW_PREV
);
parcelHelpers.export(exports, "CLASS_AUTOPLAY", ()=>CLASS_AUTOPLAY
);
parcelHelpers.export(exports, "CLASS_CLONE", ()=>CLASS_CLONE
);
parcelHelpers.export(exports, "CLASS_CONTAINER", ()=>CLASS_CONTAINER
);
parcelHelpers.export(exports, "CLASS_INITIALIZED", ()=>CLASS_INITIALIZED
);
parcelHelpers.export(exports, "CLASS_LIST", ()=>CLASS_LIST
);
parcelHelpers.export(exports, "CLASS_LOADING", ()=>CLASS_LOADING
);
parcelHelpers.export(exports, "CLASS_NEXT", ()=>CLASS_NEXT
);
parcelHelpers.export(exports, "CLASS_PAGINATION", ()=>CLASS_PAGINATION
);
parcelHelpers.export(exports, "CLASS_PAGINATION_PAGE", ()=>CLASS_PAGINATION_PAGE
);
parcelHelpers.export(exports, "CLASS_PAUSE", ()=>CLASS_PAUSE
);
parcelHelpers.export(exports, "CLASS_PLAY", ()=>CLASS_PLAY
);
parcelHelpers.export(exports, "CLASS_PREV", ()=>CLASS_PREV
);
parcelHelpers.export(exports, "CLASS_PROGRESS", ()=>CLASS_PROGRESS
);
parcelHelpers.export(exports, "CLASS_PROGRESS_BAR", ()=>CLASS_PROGRESS_BAR
);
parcelHelpers.export(exports, "CLASS_ROOT", ()=>CLASS_ROOT
);
parcelHelpers.export(exports, "CLASS_SLIDE", ()=>CLASS_SLIDE
);
parcelHelpers.export(exports, "CLASS_SLIDER", ()=>CLASS_SLIDER
);
parcelHelpers.export(exports, "CLASS_SPINNER", ()=>CLASS_SPINNER
);
parcelHelpers.export(exports, "CLASS_TRACK", ()=>CLASS_TRACK
);
parcelHelpers.export(exports, "CLASS_VISIBLE", ()=>CLASS_VISIBLE
);
parcelHelpers.export(exports, "EVENT_ACTIVE", ()=>EVENT_ACTIVE
);
parcelHelpers.export(exports, "EVENT_ARROWS_MOUNTED", ()=>EVENT_ARROWS_MOUNTED
);
parcelHelpers.export(exports, "EVENT_ARROWS_UPDATED", ()=>EVENT_ARROWS_UPDATED
);
parcelHelpers.export(exports, "EVENT_AUTOPLAY_PAUSE", ()=>EVENT_AUTOPLAY_PAUSE
);
parcelHelpers.export(exports, "EVENT_AUTOPLAY_PLAY", ()=>EVENT_AUTOPLAY_PLAY
);
parcelHelpers.export(exports, "EVENT_AUTOPLAY_PLAYING", ()=>EVENT_AUTOPLAY_PLAYING
);
parcelHelpers.export(exports, "EVENT_CLICK", ()=>EVENT_CLICK
);
parcelHelpers.export(exports, "EVENT_DESTROY", ()=>EVENT_DESTROY
);
parcelHelpers.export(exports, "EVENT_DRAG", ()=>EVENT_DRAG
);
parcelHelpers.export(exports, "EVENT_DRAGGED", ()=>EVENT_DRAGGED
);
parcelHelpers.export(exports, "EVENT_DRAGGING", ()=>EVENT_DRAGGING
);
parcelHelpers.export(exports, "EVENT_HIDDEN", ()=>EVENT_HIDDEN
);
parcelHelpers.export(exports, "EVENT_INACTIVE", ()=>EVENT_INACTIVE
);
parcelHelpers.export(exports, "EVENT_LAZYLOAD_LOADED", ()=>EVENT_LAZYLOAD_LOADED
);
parcelHelpers.export(exports, "EVENT_MOUNTED", ()=>EVENT_MOUNTED
);
parcelHelpers.export(exports, "EVENT_MOVE", ()=>EVENT_MOVE
);
parcelHelpers.export(exports, "EVENT_MOVED", ()=>EVENT_MOVED
);
parcelHelpers.export(exports, "EVENT_NAVIGATION_MOUNTED", ()=>EVENT_NAVIGATION_MOUNTED
);
parcelHelpers.export(exports, "EVENT_PAGINATION_MOUNTED", ()=>EVENT_PAGINATION_MOUNTED
);
parcelHelpers.export(exports, "EVENT_PAGINATION_UPDATED", ()=>EVENT_PAGINATION_UPDATED
);
parcelHelpers.export(exports, "EVENT_READY", ()=>EVENT_READY
);
parcelHelpers.export(exports, "EVENT_REFRESH", ()=>EVENT_REFRESH
);
parcelHelpers.export(exports, "EVENT_REPOSITIONED", ()=>EVENT_REPOSITIONED
);
parcelHelpers.export(exports, "EVENT_RESIZE", ()=>EVENT_RESIZE
);
parcelHelpers.export(exports, "EVENT_RESIZED", ()=>EVENT_RESIZED
);
parcelHelpers.export(exports, "EVENT_SCROLL", ()=>EVENT_SCROLL
);
parcelHelpers.export(exports, "EVENT_SCROLLED", ()=>EVENT_SCROLLED
);
parcelHelpers.export(exports, "EVENT_SLIDE_KEYDOWN", ()=>EVENT_SLIDE_KEYDOWN
);
parcelHelpers.export(exports, "EVENT_UPDATED", ()=>EVENT_UPDATED
);
parcelHelpers.export(exports, "EVENT_VISIBLE", ()=>EVENT_VISIBLE
);
parcelHelpers.export(exports, "EventBus", ()=>EventBus
);
parcelHelpers.export(exports, "EventInterface", ()=>EventInterface
);
parcelHelpers.export(exports, "RequestInterval", ()=>RequestInterval
);
parcelHelpers.export(exports, "STATUS_CLASSES", ()=>STATUS_CLASSES
);
parcelHelpers.export(exports, "Splide", ()=>Splide
);
parcelHelpers.export(exports, "SplideRenderer", ()=>SplideRenderer
);
parcelHelpers.export(exports, "State", ()=>State
);
parcelHelpers.export(exports, "Throttle", ()=>Throttle
);
parcelHelpers.export(exports, "default", ()=>Splide
);
/*!
 * Splide.js
 * Version  : 3.2.1
 * License  : MIT
 * Copyright: 2021 Naotoshi Fujita
 */ const PROJECT_CODE = "splide";
const DATA_ATTRIBUTE = `data-${PROJECT_CODE}`;
const CREATED = 1;
const MOUNTED = 2;
const IDLE = 3;
const MOVING = 4;
const DESTROYED = 5;
const STATES = {
    CREATED,
    MOUNTED,
    IDLE,
    MOVING,
    DESTROYED
};
const DEFAULT_EVENT_PRIORITY = 10;
const DEFAULT_USER_EVENT_PRIORITY = 20;
function empty(array) {
    array.length = 0;
}
function isObject(subject) {
    return !isNull(subject) && typeof subject === "object";
}
function isArray(subject) {
    return Array.isArray(subject);
}
function isFunction(subject) {
    return typeof subject === "function";
}
function isString(subject) {
    return typeof subject === "string";
}
function isUndefined(subject) {
    return typeof subject === "undefined";
}
function isNull(subject) {
    return subject === null;
}
function isHTMLElement(subject) {
    return subject instanceof HTMLElement;
}
function toArray(value) {
    return isArray(value) ? value : [
        value
    ];
}
function forEach(values, iteratee) {
    toArray(values).forEach(iteratee);
}
function includes(array, value) {
    return array.indexOf(value) > -1;
}
function push(array, items) {
    array.push(...toArray(items));
    return array;
}
const arrayProto = Array.prototype;
function slice(arrayLike, start, end) {
    return arrayProto.slice.call(arrayLike, start, end);
}
function find(arrayLike, predicate) {
    return slice(arrayLike).filter(predicate)[0];
}
function toggleClass(elm, classes, add) {
    if (elm) forEach(classes, (name)=>{
        if (name) elm.classList[add ? "add" : "remove"](name);
    });
}
function addClass(elm, classes) {
    toggleClass(elm, isString(classes) ? classes.split(" ") : classes, true);
}
function append(parent, children) {
    forEach(children, parent.appendChild.bind(parent));
}
function before(nodes, ref) {
    forEach(nodes, (node)=>{
        const parent = ref.parentNode;
        if (parent) parent.insertBefore(node, ref);
    });
}
function matches(elm, selector) {
    return (elm["msMatchesSelector"] || elm.matches).call(elm, selector);
}
function children(parent, selector) {
    return parent ? slice(parent.children).filter((child)=>matches(child, selector)
    ) : [];
}
function child(parent, selector) {
    return selector ? children(parent, selector)[0] : parent.firstElementChild;
}
function forOwn(object, iteratee, right) {
    if (object) {
        let keys = Object.keys(object);
        keys = right ? keys.reverse() : keys;
        for(let i = 0; i < keys.length; i++){
            const key = keys[i];
            if (key !== "__proto__") {
                if (iteratee(object[key], key) === false) break;
            }
        }
    }
    return object;
}
function assign(object) {
    slice(arguments, 1).forEach((source)=>{
        forOwn(source, (value, key)=>{
            object[key] = source[key];
        });
    });
    return object;
}
function merge(object, source) {
    forOwn(source, (value, key)=>{
        if (isArray(value)) object[key] = value.slice();
        else if (isObject(value)) object[key] = merge(isObject(object[key]) ? object[key] : {
        }, value);
        else object[key] = value;
    });
    return object;
}
function removeAttribute(elm, attrs) {
    if (elm) forEach(attrs, (attr)=>{
        elm.removeAttribute(attr);
    });
}
function setAttribute(elm, attrs, value) {
    if (isObject(attrs)) forOwn(attrs, (value2, name)=>{
        setAttribute(elm, name, value2);
    });
    else isNull(value) ? removeAttribute(elm, attrs) : elm.setAttribute(attrs, String(value));
}
function create(tag, attrs, parent) {
    const elm = document.createElement(tag);
    if (attrs) isString(attrs) ? addClass(elm, attrs) : setAttribute(elm, attrs);
    parent && append(parent, elm);
    return elm;
}
function style(elm, prop, value) {
    if (isUndefined(value)) return getComputedStyle(elm)[prop];
    if (!isNull(value)) {
        const { style: style2  } = elm;
        value = `${value}`;
        if (style2[prop] !== value) style2[prop] = value;
    }
}
function display(elm, display2) {
    style(elm, "display", display2);
}
function focus(elm) {
    elm["setActive"] && elm["setActive"]() || elm.focus({
        preventScroll: true
    });
}
function getAttribute(elm, attr) {
    return elm.getAttribute(attr);
}
function hasClass(elm, className) {
    return elm && elm.classList.contains(className);
}
function rect(target) {
    return target.getBoundingClientRect();
}
function remove(nodes) {
    forEach(nodes, (node)=>{
        if (node && node.parentNode) node.parentNode.removeChild(node);
    });
}
function measure(parent, value) {
    if (isString(value)) {
        const div = create("div", {
            style: `width: ${value}; position: absolute;`
        }, parent);
        value = rect(div).width;
        remove(div);
    }
    return value;
}
function parseHtml(html) {
    return child(new DOMParser().parseFromString(html, "text/html").body);
}
function prevent(e, stopPropagation) {
    e.preventDefault();
    if (stopPropagation) {
        e.stopPropagation();
        e.stopImmediatePropagation();
    }
}
function query(parent, selector) {
    return parent && parent.querySelector(selector);
}
function queryAll(parent, selector) {
    return slice(parent.querySelectorAll(selector));
}
function removeClass(elm, classes) {
    toggleClass(elm, classes, false);
}
function unit(value) {
    return isString(value) ? value : value ? `${value}px` : "";
}
function assert(condition, message = "") {
    if (!condition) throw new Error(`[${PROJECT_CODE}] ${message}`);
}
function nextTick(callback) {
    setTimeout(callback);
}
const noop = ()=>{
};
function raf(func) {
    return requestAnimationFrame(func);
}
const { min , max , floor , ceil , abs  } = Math;
function approximatelyEqual(x, y, epsilon) {
    return abs(x - y) < epsilon;
}
function between(number, minOrMax, maxOrMin, exclusive) {
    const minimum = min(minOrMax, maxOrMin);
    const maximum = max(minOrMax, maxOrMin);
    return exclusive ? minimum < number && number < maximum : minimum <= number && number <= maximum;
}
function clamp(number, x, y) {
    const minimum = min(x, y);
    const maximum = max(x, y);
    return min(max(minimum, number), maximum);
}
function sign(x) {
    return +(x > 0) - +(x < 0);
}
function camelToKebab(string) {
    return string.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
}
function format(string, replacements) {
    forEach(replacements, (replacement)=>{
        string = string.replace("%s", `${replacement}`);
    });
    return string;
}
function pad(number) {
    return number < 10 ? `0${number}` : `${number}`;
}
const ids = {
};
function uniqueId(prefix) {
    return `${prefix}${pad(ids[prefix] = (ids[prefix] || 0) + 1)}`;
}
function EventBus() {
    let handlers = {
    };
    function on(events, callback, key, priority = DEFAULT_EVENT_PRIORITY) {
        forEachEvent(events, (event, namespace)=>{
            handlers[event] = handlers[event] || [];
            push(handlers[event], {
                _event: event,
                _callback: callback,
                _namespace: namespace,
                _priority: priority,
                _key: key
            }).sort((handler1, handler2)=>handler1._priority - handler2._priority
            );
        });
    }
    function off(events, key) {
        forEachEvent(events, (event, namespace)=>{
            const eventHandlers = handlers[event];
            handlers[event] = eventHandlers && eventHandlers.filter((handler)=>{
                return handler._key ? handler._key !== key : key || handler._namespace !== namespace;
            });
        });
    }
    function offBy(key) {
        forOwn(handlers, (eventHandlers, event)=>{
            off(event, key);
        });
    }
    function emit(event) {
        (handlers[event] || []).forEach((handler)=>{
            handler._callback.apply(handler, slice(arguments, 1));
        });
    }
    function destroy() {
        handlers = {
        };
    }
    function forEachEvent(events, iteratee) {
        toArray(events).join(" ").split(" ").forEach((eventNS)=>{
            const fragments = eventNS.split(".");
            iteratee(fragments[0], fragments[1]);
        });
    }
    return {
        on,
        off,
        offBy,
        emit,
        destroy
    };
}
const EVENT_MOUNTED = "mounted";
const EVENT_READY = "ready";
const EVENT_MOVE = "move";
const EVENT_MOVED = "moved";
const EVENT_CLICK = "click";
const EVENT_ACTIVE = "active";
const EVENT_INACTIVE = "inactive";
const EVENT_VISIBLE = "visible";
const EVENT_HIDDEN = "hidden";
const EVENT_SLIDE_KEYDOWN = "slide:keydown";
const EVENT_REFRESH = "refresh";
const EVENT_UPDATED = "updated";
const EVENT_RESIZE = "resize";
const EVENT_RESIZED = "resized";
const EVENT_REPOSITIONED = "repositioned";
const EVENT_DRAG = "drag";
const EVENT_DRAGGING = "dragging";
const EVENT_DRAGGED = "dragged";
const EVENT_SCROLL = "scroll";
const EVENT_SCROLLED = "scrolled";
const EVENT_DESTROY = "destroy";
const EVENT_ARROWS_MOUNTED = "arrows:mounted";
const EVENT_ARROWS_UPDATED = "arrows:updated";
const EVENT_PAGINATION_MOUNTED = "pagination:mounted";
const EVENT_PAGINATION_UPDATED = "pagination:updated";
const EVENT_NAVIGATION_MOUNTED = "navigation:mounted";
const EVENT_AUTOPLAY_PLAY = "autoplay:play";
const EVENT_AUTOPLAY_PLAYING = "autoplay:playing";
const EVENT_AUTOPLAY_PAUSE = "autoplay:pause";
const EVENT_LAZYLOAD_LOADED = "lazyload:loaded";
function EventInterface(Splide2) {
    const { event  } = Splide2;
    const key = {
    };
    let listeners = [];
    function on(events, callback, priority) {
        event.on(events, callback, key, priority);
    }
    function off(events) {
        event.off(events, key);
    }
    function bind(targets, events, callback, options) {
        forEachEvent(targets, events, (target, event2)=>{
            listeners.push([
                target,
                event2,
                callback,
                options
            ]);
            target.addEventListener(event2, callback, options);
        });
    }
    function unbind(targets, events, callback) {
        forEachEvent(targets, events, (target, event2)=>{
            listeners = listeners.filter((listener)=>{
                if (listener[0] === target && listener[1] === event2 && (!callback || listener[2] === callback)) {
                    target.removeEventListener(event2, listener[2], listener[3]);
                    return false;
                }
                return true;
            });
        });
    }
    function forEachEvent(targets, events, iteratee) {
        forEach(targets, (target)=>{
            if (target) events.split(" ").forEach(iteratee.bind(null, target));
        });
    }
    function destroy() {
        listeners = listeners.filter((data)=>unbind(data[0], data[1])
        );
        event.offBy(key);
    }
    event.on(EVENT_DESTROY, destroy, key);
    return {
        on,
        off,
        emit: event.emit,
        bind,
        unbind,
        destroy
    };
}
function RequestInterval(interval, onInterval, onUpdate, limit) {
    const { now  } = Date;
    let startTime;
    let rate = 0;
    let id;
    let paused = true;
    let count = 0;
    function update() {
        if (!paused) {
            const elapsed = now() - startTime;
            if (elapsed >= interval) {
                rate = 1;
                startTime = now();
            } else rate = elapsed / interval;
            if (onUpdate) onUpdate(rate);
            if (rate === 1) {
                onInterval();
                if (limit && ++count >= limit) return pause();
            }
            raf(update);
        }
    }
    function start(resume) {
        !resume && cancel();
        startTime = now() - (resume ? rate * interval : 0);
        paused = false;
        raf(update);
    }
    function pause() {
        paused = true;
    }
    function rewind() {
        startTime = now();
        rate = 0;
        if (onUpdate) onUpdate(rate);
    }
    function cancel() {
        cancelAnimationFrame(id);
        rate = 0;
        id = 0;
        paused = true;
    }
    function isPaused() {
        return paused;
    }
    return {
        start,
        rewind,
        pause,
        cancel,
        isPaused
    };
}
function State(initialState) {
    let state = initialState;
    function set(value) {
        state = value;
    }
    function is(states) {
        return includes(toArray(states), state);
    }
    return {
        set,
        is
    };
}
function Throttle(func, duration) {
    let interval;
    function throttled() {
        if (!interval) {
            interval = RequestInterval(duration || 0, ()=>{
                func.apply(this, arguments);
                interval = null;
            }, null, 1);
            interval.start();
        }
    }
    return throttled;
}
function Options(Splide2, Components2, options) {
    const throttledObserve = Throttle(observe);
    let initialOptions;
    let points;
    let currPoint;
    function setup() {
        try {
            merge(options, JSON.parse(getAttribute(Splide2.root, DATA_ATTRIBUTE)));
        } catch (e) {
            assert(false, e.message);
        }
        initialOptions = merge({
        }, options);
        const { breakpoints  } = options;
        if (breakpoints) {
            const isMin = options.mediaQuery === "min";
            points = Object.keys(breakpoints).sort((n, m)=>isMin ? +m - +n : +n - +m
            ).map((point)=>[
                    point,
                    matchMedia(`(${isMin ? "min" : "max"}-width:${point}px)`)
                ]
            );
            observe();
        }
    }
    function mount() {
        if (points) addEventListener("resize", throttledObserve);
    }
    function destroy(completely) {
        if (completely) removeEventListener("resize", throttledObserve);
    }
    function observe() {
        const item = find(points, (item2)=>item2[1].matches
        ) || [];
        if (item[0] !== currPoint) onMatch(currPoint = item[0]);
    }
    function onMatch(point) {
        const newOptions = options.breakpoints[point] || initialOptions;
        if (newOptions.destroy) {
            Splide2.options = initialOptions;
            Splide2.destroy(newOptions.destroy === "completely");
        } else {
            if (Splide2.state.is(DESTROYED)) {
                destroy(true);
                Splide2.mount();
            }
            Splide2.options = newOptions;
        }
    }
    return {
        setup,
        mount,
        destroy
    };
}
const RTL = "rtl";
const TTB = "ttb";
const ORIENTATION_MAP = {
    marginRight: [
        "marginBottom",
        "marginLeft"
    ],
    autoWidth: [
        "autoHeight"
    ],
    fixedWidth: [
        "fixedHeight"
    ],
    paddingLeft: [
        "paddingTop",
        "paddingRight"
    ],
    paddingRight: [
        "paddingBottom",
        "paddingLeft"
    ],
    width: [
        "height"
    ],
    left: [
        "top",
        "right"
    ],
    right: [
        "bottom",
        "left"
    ],
    x: [
        "y"
    ],
    X: [
        "Y"
    ],
    Y: [
        "X"
    ],
    ArrowLeft: [
        "ArrowUp",
        "ArrowRight"
    ],
    ArrowRight: [
        "ArrowDown",
        "ArrowLeft"
    ]
};
function Direction(Splide2, Components2, options) {
    function resolve(prop, axisOnly) {
        const { direction  } = options;
        const index = direction === RTL && !axisOnly ? 1 : direction === TTB ? 0 : -1;
        return ORIENTATION_MAP[prop][index] || prop;
    }
    function orient(value) {
        return value * (options.direction === RTL ? 1 : -1);
    }
    return {
        resolve,
        orient
    };
}
const CLASS_ROOT = PROJECT_CODE;
const CLASS_SLIDER = `${PROJECT_CODE}__slider`;
const CLASS_TRACK = `${PROJECT_CODE}__track`;
const CLASS_LIST = `${PROJECT_CODE}__list`;
const CLASS_SLIDE = `${PROJECT_CODE}__slide`;
const CLASS_CLONE = `${CLASS_SLIDE}--clone`;
const CLASS_CONTAINER = `${CLASS_SLIDE}__container`;
const CLASS_ARROWS = `${PROJECT_CODE}__arrows`;
const CLASS_ARROW = `${PROJECT_CODE}__arrow`;
const CLASS_ARROW_PREV = `${CLASS_ARROW}--prev`;
const CLASS_ARROW_NEXT = `${CLASS_ARROW}--next`;
const CLASS_PAGINATION = `${PROJECT_CODE}__pagination`;
const CLASS_PAGINATION_PAGE = `${CLASS_PAGINATION}__page`;
const CLASS_PROGRESS = `${PROJECT_CODE}__progress`;
const CLASS_PROGRESS_BAR = `${CLASS_PROGRESS}__bar`;
const CLASS_AUTOPLAY = `${PROJECT_CODE}__autoplay`;
const CLASS_PLAY = `${PROJECT_CODE}__play`;
const CLASS_PAUSE = `${PROJECT_CODE}__pause`;
const CLASS_SPINNER = `${PROJECT_CODE}__spinner`;
const CLASS_INITIALIZED = "is-initialized";
const CLASS_ACTIVE = "is-active";
const CLASS_PREV = "is-prev";
const CLASS_NEXT = "is-next";
const CLASS_VISIBLE = "is-visible";
const CLASS_LOADING = "is-loading";
const STATUS_CLASSES = [
    CLASS_ACTIVE,
    CLASS_VISIBLE,
    CLASS_PREV,
    CLASS_NEXT,
    CLASS_LOADING
];
const CLASSES = {
    slide: CLASS_SLIDE,
    clone: CLASS_CLONE,
    arrows: CLASS_ARROWS,
    arrow: CLASS_ARROW,
    prev: CLASS_ARROW_PREV,
    next: CLASS_ARROW_NEXT,
    pagination: CLASS_PAGINATION,
    page: CLASS_PAGINATION_PAGE,
    spinner: CLASS_SPINNER
};
function Elements(Splide2, Components2, options) {
    const { on  } = EventInterface(Splide2);
    const { root  } = Splide2;
    const elements = {
    };
    const slides = [];
    let classes;
    let slider;
    let track;
    let list;
    function setup() {
        collect();
        identify();
        addClass(root, classes = getClasses());
    }
    function mount() {
        on(EVENT_REFRESH, refresh, DEFAULT_EVENT_PRIORITY - 2);
        on(EVENT_UPDATED, update);
    }
    function destroy() {
        [
            root,
            track,
            list
        ].forEach((elm)=>{
            removeAttribute(elm, "style");
        });
        empty(slides);
        removeClass(root, classes);
    }
    function refresh() {
        destroy();
        setup();
    }
    function update() {
        removeClass(root, classes);
        addClass(root, classes = getClasses());
    }
    function collect() {
        slider = child(root, `.${CLASS_SLIDER}`);
        track = query(root, `.${CLASS_TRACK}`);
        list = child(track, `.${CLASS_LIST}`);
        assert(track && list, "A track/list element is missing.");
        push(slides, children(list, `.${CLASS_SLIDE}:not(.${CLASS_CLONE})`));
        const autoplay = find(`.${CLASS_AUTOPLAY}`);
        const arrows = find(`.${CLASS_ARROWS}`);
        assign(elements, {
            root,
            slider,
            track,
            list,
            slides,
            arrows,
            autoplay,
            prev: query(arrows, `.${CLASS_ARROW_PREV}`),
            next: query(arrows, `.${CLASS_ARROW_NEXT}`),
            bar: query(find(`.${CLASS_PROGRESS}`), `.${CLASS_PROGRESS_BAR}`),
            play: query(autoplay, `.${CLASS_PLAY}`),
            pause: query(autoplay, `.${CLASS_PAUSE}`)
        });
    }
    function identify() {
        const id = root.id || uniqueId(PROJECT_CODE);
        root.id = id;
        track.id = track.id || `${id}-track`;
        list.id = list.id || `${id}-list`;
    }
    function find(selector) {
        return child(root, selector) || child(slider, selector);
    }
    function getClasses() {
        return [
            `${CLASS_ROOT}--${options.type}`,
            `${CLASS_ROOT}--${options.direction}`,
            options.drag && `${CLASS_ROOT}--draggable`,
            options.isNavigation && `${CLASS_ROOT}--nav`,
            CLASS_ACTIVE
        ];
    }
    return assign(elements, {
        setup,
        mount,
        destroy
    });
}
const ROLE = "role";
const ARIA_CONTROLS = "aria-controls";
const ARIA_CURRENT = "aria-current";
const ARIA_LABEL = "aria-label";
const ARIA_HIDDEN = "aria-hidden";
const TAB_INDEX = "tabindex";
const DISABLED = "disabled";
const ARIA_ORIENTATION = "aria-orientation";
const ALL_ATTRIBUTES = [
    ROLE,
    ARIA_CONTROLS,
    ARIA_CURRENT,
    ARIA_LABEL,
    ARIA_HIDDEN,
    ARIA_ORIENTATION,
    TAB_INDEX,
    DISABLED
];
const SLIDE = "slide";
const LOOP = "loop";
const FADE = "fade";
function Slide$1(Splide2, index, slideIndex, slide) {
    const { on , emit , bind , destroy: destroyEvents  } = EventInterface(Splide2);
    const { Components , root , options  } = Splide2;
    const { isNavigation , updateOnMove  } = options;
    const { resolve  } = Components.Direction;
    const styles = getAttribute(slide, "style");
    const isClone = slideIndex > -1;
    const container = child(slide, `.${CLASS_CONTAINER}`);
    const focusableNodes = options.focusableNodes && queryAll(slide, options.focusableNodes);
    let destroyed;
    function mount() {
        init();
        bind(slide, "click keydown", (e)=>{
            emit(e.type === "click" ? EVENT_CLICK : EVENT_SLIDE_KEYDOWN, this, e);
        });
        on([
            EVENT_REFRESH,
            EVENT_REPOSITIONED,
            EVENT_MOVED,
            EVENT_SCROLLED
        ], update.bind(this));
        if (updateOnMove) on(EVENT_MOVE, onMove.bind(this));
    }
    function init() {
        if (!isClone) slide.id = `${root.id}-slide${pad(index + 1)}`;
        if (isNavigation) {
            const idx = isClone ? slideIndex : index;
            const label = format(options.i18n.slideX, idx + 1);
            const controls = Splide2.splides.map((splide)=>splide.root.id
            ).join(" ");
            setAttribute(slide, ARIA_LABEL, label);
            setAttribute(slide, ARIA_CONTROLS, controls);
            setAttribute(slide, ROLE, "menuitem");
        }
    }
    function destroy() {
        destroyed = true;
        destroyEvents();
        removeClass(slide, STATUS_CLASSES);
        removeAttribute(slide, ALL_ATTRIBUTES);
        setAttribute(slide, "style", styles);
    }
    function onMove(next, prev, dest) {
        if (!destroyed) {
            update.call(this);
            if (dest === index) updateActivity.call(this, true);
        }
    }
    function update() {
        if (!destroyed) {
            const { index: currIndex  } = Splide2;
            updateActivity.call(this, isActive());
            updateVisibility.call(this, isVisible());
            toggleClass(slide, CLASS_PREV, index === currIndex - 1);
            toggleClass(slide, CLASS_NEXT, index === currIndex + 1);
        }
    }
    function updateActivity(active) {
        if (active !== hasClass(slide, CLASS_ACTIVE)) {
            toggleClass(slide, CLASS_ACTIVE, active);
            if (isNavigation) setAttribute(slide, ARIA_CURRENT, active || null);
            emit(active ? EVENT_ACTIVE : EVENT_INACTIVE, this);
        }
    }
    function updateVisibility(visible) {
        const ariaHidden = !visible && !isActive();
        setAttribute(slide, ARIA_HIDDEN, ariaHidden || null);
        setAttribute(slide, TAB_INDEX, !ariaHidden && options.slideFocus ? 0 : null);
        if (focusableNodes) focusableNodes.forEach((node)=>{
            setAttribute(node, TAB_INDEX, ariaHidden ? -1 : null);
        });
        if (visible !== hasClass(slide, CLASS_VISIBLE)) {
            toggleClass(slide, CLASS_VISIBLE, visible);
            emit(visible ? EVENT_VISIBLE : EVENT_HIDDEN, this);
        }
    }
    function style$1(prop, value, useContainer) {
        style(useContainer && container || slide, prop, value);
    }
    function isActive() {
        return Splide2.index === index;
    }
    function isVisible() {
        if (Splide2.is(FADE)) return isActive();
        const trackRect = rect(Components.Elements.track);
        const slideRect = rect(slide);
        const left = resolve("left");
        const right = resolve("right");
        return floor(trackRect[left]) <= ceil(slideRect[left]) && floor(slideRect[right]) <= ceil(trackRect[right]);
    }
    function isWithin(from, distance) {
        let diff = abs(from - index);
        if (!isClone && (options.rewind || Splide2.is(LOOP))) diff = min(diff, Splide2.length - diff);
        return diff <= distance;
    }
    return {
        index,
        slideIndex,
        slide,
        container,
        isClone,
        mount,
        destroy,
        style: style$1,
        isWithin
    };
}
function Slides(Splide2, Components2, options) {
    const { on , emit , bind  } = EventInterface(Splide2);
    const { slides , list  } = Components2.Elements;
    const Slides2 = [];
    function mount() {
        init();
        on(EVENT_REFRESH, refresh);
        on([
            EVENT_MOUNTED,
            EVENT_REFRESH
        ], ()=>{
            Slides2.sort((Slide1, Slide2)=>Slide1.index - Slide2.index
            );
        });
    }
    function init() {
        slides.forEach((slide, index)=>{
            register(slide, index, -1);
        });
    }
    function destroy() {
        forEach$1((Slide2)=>{
            Slide2.destroy();
        });
        empty(Slides2);
    }
    function refresh() {
        destroy();
        init();
    }
    function register(slide, index, slideIndex) {
        const object = Slide$1(Splide2, index, slideIndex, slide);
        object.mount();
        Slides2.push(object);
    }
    function get(excludeClones) {
        return excludeClones ? filter((Slide2)=>!Slide2.isClone
        ) : Slides2;
    }
    function getIn(page) {
        const { Controller  } = Components2;
        const index = Controller.toIndex(page);
        const max = Controller.hasFocus() ? 1 : options.perPage;
        return filter((Slide2)=>between(Slide2.index, index, index + max - 1)
        );
    }
    function getAt(index) {
        return filter(index)[0];
    }
    function add(items, index) {
        forEach(items, (slide)=>{
            if (isString(slide)) slide = parseHtml(slide);
            if (isHTMLElement(slide)) {
                const ref = slides[index];
                ref ? before(slide, ref) : append(list, slide);
                addClass(slide, options.classes.slide);
                observeImages(slide, emit.bind(null, EVENT_RESIZE));
            }
        });
        emit(EVENT_REFRESH);
    }
    function remove$1(matcher) {
        remove(filter(matcher).map((Slide2)=>Slide2.slide
        ));
        emit(EVENT_REFRESH);
    }
    function forEach$1(iteratee, excludeClones) {
        get(excludeClones).forEach(iteratee);
    }
    function filter(matcher) {
        return Slides2.filter(isFunction(matcher) ? matcher : (Slide2)=>isString(matcher) ? matches(Slide2.slide, matcher) : includes(toArray(matcher), Slide2.index)
        );
    }
    function style(prop, value, useContainer) {
        forEach$1((Slide2)=>{
            Slide2.style(prop, value, useContainer);
        });
    }
    function observeImages(elm, callback) {
        const images = queryAll(elm, "img");
        let { length  } = images;
        if (length) images.forEach((img)=>{
            bind(img, "load error", ()=>{
                if (!--length) callback();
            });
        });
        else callback();
    }
    function getLength(excludeClones) {
        return excludeClones ? slides.length : Slides2.length;
    }
    function isEnough() {
        return Slides2.length > options.perPage;
    }
    return {
        mount,
        destroy,
        register,
        get,
        getIn,
        getAt,
        add,
        remove: remove$1,
        forEach: forEach$1,
        filter,
        style,
        getLength,
        isEnough
    };
}
function Layout(Splide2, Components2, options) {
    const { on , bind , emit  } = EventInterface(Splide2);
    const { Slides  } = Components2;
    const { resolve  } = Components2.Direction;
    const { track , list  } = Components2.Elements;
    const { getAt  } = Slides;
    let vertical;
    function mount() {
        init();
        bind(window, "resize load", Throttle(emit.bind(this, EVENT_RESIZE)));
        on([
            EVENT_UPDATED,
            EVENT_REFRESH
        ], init);
        on(EVENT_RESIZE, resize);
    }
    function init() {
        vertical = options.direction === TTB;
        style(Splide2.root, "maxWidth", unit(options.width));
        style(track, resolve("paddingLeft"), cssPadding(false));
        style(track, resolve("paddingRight"), cssPadding(true));
        resize();
    }
    function resize() {
        style(track, "height", cssTrackHeight());
        Slides.style(resolve("marginRight"), unit(options.gap));
        Slides.style("width", cssSlideWidth() || null);
        setSlidesHeight();
        emit(EVENT_RESIZED);
    }
    function setSlidesHeight() {
        Slides.style("height", cssSlideHeight() || null, true);
    }
    function cssPadding(right) {
        const { padding  } = options;
        const prop = resolve(right ? "right" : "left", true);
        return padding && unit(padding[prop] || (isObject(padding) ? 0 : padding)) || "0px";
    }
    function cssTrackHeight() {
        let height = "";
        if (vertical) {
            height = cssHeight();
            assert(height, "height or heightRatio is missing.");
            height = `calc(${height} - ${cssPadding(false)} - ${cssPadding(true)})`;
        }
        return height;
    }
    function cssHeight() {
        return unit(options.height || rect(list).width * options.heightRatio);
    }
    function cssSlideWidth() {
        return options.autoWidth ? "" : unit(options.fixedWidth) || (vertical ? "" : cssSlideSize());
    }
    function cssSlideHeight() {
        return unit(options.fixedHeight) || (vertical ? options.autoHeight ? "" : cssSlideSize() : cssHeight());
    }
    function cssSlideSize() {
        const gap = unit(options.gap);
        return `calc((100%${gap && ` + ${gap}`})/${options.perPage || 1}${gap && ` - ${gap}`})`;
    }
    function listSize() {
        return rect(list)[resolve("width")];
    }
    function slideSize(index, withoutGap) {
        const Slide = getAt(index || 0);
        return Slide ? rect(Slide.slide)[resolve("width")] + (withoutGap ? 0 : getGap()) : 0;
    }
    function totalSize(index, withoutGap) {
        const Slide = getAt(index);
        if (Slide) {
            const right = rect(Slide.slide)[resolve("right")];
            const left = rect(list)[resolve("left")];
            return abs(right - left) + (withoutGap ? 0 : getGap());
        }
        return 0;
    }
    function sliderSize() {
        return totalSize(Splide2.length - 1, true) - totalSize(-1, true);
    }
    function getGap() {
        const Slide = getAt(0);
        return Slide && parseFloat(style(Slide.slide, resolve("marginRight"))) || 0;
    }
    function getPadding(right) {
        return parseFloat(style(track, resolve(`padding${right ? "Right" : "Left"}`, true))) || 0;
    }
    return {
        mount,
        listSize,
        slideSize,
        sliderSize,
        totalSize,
        getPadding
    };
}
function Clones(Splide2, Components2, options) {
    const { on , emit  } = EventInterface(Splide2);
    const { Elements , Slides  } = Components2;
    const { resolve  } = Components2.Direction;
    const clones = [];
    let cloneCount;
    function mount() {
        init();
        on(EVENT_REFRESH, refresh);
        on([
            EVENT_UPDATED,
            EVENT_RESIZE
        ], observe);
    }
    function init() {
        if (cloneCount = computeCloneCount()) {
            generate(cloneCount);
            emit(EVENT_RESIZE);
        }
    }
    function destroy() {
        remove(clones);
        empty(clones);
    }
    function refresh() {
        destroy();
        init();
    }
    function observe() {
        if (cloneCount < computeCloneCount()) emit(EVENT_REFRESH);
    }
    function generate(count) {
        const slides = Slides.get().slice();
        const { length  } = slides;
        if (length) {
            while(slides.length < count)push(slides, slides);
            push(slides.slice(-count), slides.slice(0, count)).forEach((Slide, index)=>{
                const isHead = index < count;
                const clone = cloneDeep(Slide.slide, index);
                isHead ? before(clone, slides[0].slide) : append(Elements.list, clone);
                push(clones, clone);
                Slides.register(clone, index - count + (isHead ? 0 : length), Slide.index);
            });
        }
    }
    function cloneDeep(elm, index) {
        const clone = elm.cloneNode(true);
        addClass(clone, options.classes.clone);
        clone.id = `${Splide2.root.id}-clone${pad(index + 1)}`;
        return clone;
    }
    function computeCloneCount() {
        let { clones: clones2  } = options;
        if (!Splide2.is(LOOP)) clones2 = 0;
        else if (!clones2) {
            const fixedSize = measure(Elements.list, options[resolve("fixedWidth")]);
            const fixedCount = fixedSize && ceil(rect(Elements.track)[resolve("width")] / fixedSize);
            const baseCount = fixedCount || options[resolve("autoWidth")] && Splide2.length || options.perPage;
            clones2 = baseCount * (options.drag ? (options.flickMaxPages || 1) + 1 : 2);
        }
        return clones2;
    }
    return {
        mount,
        destroy
    };
}
function Move(Splide2, Components2, options) {
    const { on , emit  } = EventInterface(Splide2);
    const { slideSize , getPadding , totalSize , listSize , sliderSize  } = Components2.Layout;
    const { resolve , orient  } = Components2.Direction;
    const { list , track  } = Components2.Elements;
    let waiting;
    function mount() {
        on([
            EVENT_MOUNTED,
            EVENT_RESIZED,
            EVENT_UPDATED,
            EVENT_REFRESH
        ], reposition);
    }
    function destroy() {
        removeAttribute(list, "style");
    }
    function reposition() {
        if (!isBusy() && !Components2.Drag.isDragging()) {
            Components2.Scroll.cancel();
            jump(Splide2.index);
            emit(EVENT_REPOSITIONED);
        }
    }
    function move(dest, index, prev, callback) {
        if (!isBusy()) {
            const { set  } = Splide2.state;
            const position = getPosition();
            const looping = dest !== index;
            waiting = looping || options.waitForTransition;
            set(MOVING);
            emit(EVENT_MOVE, index, prev, dest);
            Components2.Transition.start(dest, ()=>{
                looping && jump(index);
                waiting = false;
                set(IDLE);
                emit(EVENT_MOVED, index, prev, dest);
                if (options.trimSpace === "move" && dest !== prev && position === getPosition()) Components2.Controller.go(dest > prev ? ">" : "<", false, callback);
                else callback && callback();
            });
        }
    }
    function jump(index) {
        translate(toPosition(index, true));
    }
    function translate(position, preventLoop) {
        if (!Splide2.is(FADE)) list.style.transform = `translate${resolve("X")}(${preventLoop ? position : loop(position)}px)`;
    }
    function loop(position) {
        if (!waiting && Splide2.is(LOOP)) {
            const diff = orient(position - getPosition());
            const exceededMin = exceededLimit(false, position) && diff < 0;
            const exceededMax = exceededLimit(true, position) && diff > 0;
            if (exceededMin || exceededMax) position = shift(position, exceededMax);
        }
        return position;
    }
    function shift(position, backwards) {
        const excess = position - getLimit(backwards);
        const size = sliderSize();
        position -= sign(excess) * size * ceil(abs(excess) / size);
        return position;
    }
    function cancel() {
        waiting = false;
        translate(getPosition());
        Components2.Transition.cancel();
    }
    function toIndex(position) {
        const Slides = Components2.Slides.get();
        let index = 0;
        let minDistance = Infinity;
        for(let i = 0; i < Slides.length; i++){
            const slideIndex = Slides[i].index;
            const distance = abs(toPosition(slideIndex, true) - position);
            if (distance <= minDistance) {
                minDistance = distance;
                index = slideIndex;
            } else break;
        }
        return index;
    }
    function toPosition(index, trimming) {
        const position = orient(totalSize(index - 1) - offset(index));
        return trimming ? trim(position) : position;
    }
    function getPosition() {
        const left = resolve("left");
        return rect(list)[left] - rect(track)[left] + orient(getPadding(false));
    }
    function trim(position) {
        if (options.trimSpace && Splide2.is(SLIDE)) position = clamp(position, 0, orient(sliderSize() - listSize()));
        return position;
    }
    function offset(index) {
        const { focus  } = options;
        return focus === "center" ? (listSize() - slideSize(index, true)) / 2 : +focus * slideSize(index) || 0;
    }
    function getLimit(max) {
        return toPosition(max ? Components2.Controller.getEnd() : 0, !!options.trimSpace);
    }
    function isBusy() {
        return !!waiting;
    }
    function exceededLimit(max, position) {
        position = isUndefined(position) ? getPosition() : position;
        const exceededMin = max !== true && orient(position) < orient(getLimit(false));
        const exceededMax = max !== false && orient(position) > orient(getLimit(true));
        return exceededMin || exceededMax;
    }
    return {
        mount,
        destroy,
        move,
        jump,
        translate,
        shift,
        cancel,
        toIndex,
        toPosition,
        getPosition,
        getLimit,
        isBusy,
        exceededLimit
    };
}
function Controller(Splide2, Components2, options) {
    const { on  } = EventInterface(Splide2);
    const { Move  } = Components2;
    const { getPosition , getLimit  } = Move;
    const { isEnough , getLength  } = Components2.Slides;
    const isLoop = Splide2.is(LOOP);
    const isSlide = Splide2.is(SLIDE);
    let currIndex = options.start || 0;
    let prevIndex = currIndex;
    let slideCount;
    let perMove;
    let perPage;
    function mount() {
        init();
        on([
            EVENT_UPDATED,
            EVENT_REFRESH
        ], init, DEFAULT_EVENT_PRIORITY - 1);
    }
    function init() {
        slideCount = getLength(true);
        perMove = options.perMove;
        perPage = options.perPage;
        currIndex = clamp(currIndex, 0, slideCount - 1);
    }
    function go(control, allowSameIndex, callback) {
        const dest = parse(control);
        if (options.useScroll) scroll(dest, true, true, options.speed, callback);
        else {
            const index = loop(dest);
            if (index > -1 && !Move.isBusy() && (allowSameIndex || index !== currIndex)) {
                setIndex(index);
                Move.move(dest, index, prevIndex, callback);
            }
        }
    }
    function scroll(destination, useIndex, snap, duration, callback) {
        const dest = useIndex ? destination : toDest(destination);
        Components2.Scroll.scroll(useIndex || snap ? Move.toPosition(dest, true) : destination, duration, ()=>{
            setIndex(Move.toIndex(Move.getPosition()));
            callback && callback();
        });
    }
    function parse(control) {
        let index = currIndex;
        if (isString(control)) {
            const [, indicator, number] = control.match(/([+\-<>])(\d+)?/) || [];
            if (indicator === "+" || indicator === "-") index = computeDestIndex(currIndex + +`${indicator}${+number || 1}`, currIndex, true);
            else if (indicator === ">") index = number ? toIndex(+number) : getNext(true);
            else if (indicator === "<") index = getPrev(true);
        } else if (isLoop) index = clamp(control, -perPage, slideCount + perPage - 1);
        else index = clamp(control, 0, getEnd());
        return index;
    }
    function getNext(destination) {
        return getAdjacent(false, destination);
    }
    function getPrev(destination) {
        return getAdjacent(true, destination);
    }
    function getAdjacent(prev, destination) {
        const number = perMove || (hasFocus() ? 1 : perPage);
        const dest = computeDestIndex(currIndex + number * (prev ? -1 : 1), currIndex);
        if (dest === -1 && isSlide) {
            if (!approximatelyEqual(getPosition(), getLimit(!prev), 1)) return prev ? 0 : getEnd();
        }
        return destination ? dest : loop(dest);
    }
    function computeDestIndex(dest, from, incremental) {
        if (isEnough()) {
            const end = getEnd();
            if (dest < 0 || dest > end) {
                if (between(0, dest, from, true) || between(end, from, dest, true)) dest = toIndex(toPage(dest));
                else {
                    if (isLoop) dest = perMove ? dest : dest < 0 ? -(slideCount % perPage || perPage) : slideCount;
                    else if (options.rewind) dest = dest < 0 ? end : 0;
                    else dest = -1;
                }
            } else if (!isLoop && !incremental && dest !== from) dest = perMove ? dest : toIndex(toPage(from) + (dest < from ? -1 : 1));
        } else dest = -1;
        return dest;
    }
    function getEnd() {
        let end = slideCount - perPage;
        if (hasFocus() || isLoop && perMove) end = slideCount - 1;
        return max(end, 0);
    }
    function loop(index) {
        if (isLoop) return isEnough() ? index % slideCount + (index < 0 ? slideCount : 0) : -1;
        return index;
    }
    function toIndex(page) {
        return clamp(hasFocus() ? page : perPage * page, 0, getEnd());
    }
    function toPage(index) {
        if (!hasFocus()) {
            index = between(index, slideCount - perPage, slideCount - 1) ? slideCount - 1 : index;
            index = floor(index / perPage);
        }
        return index;
    }
    function toDest(destination) {
        const closest = Move.toIndex(destination);
        return isSlide ? clamp(closest, 0, getEnd()) : closest;
    }
    function setIndex(index) {
        if (index !== currIndex) {
            prevIndex = currIndex;
            currIndex = index;
        }
    }
    function getIndex(prev) {
        return prev ? prevIndex : currIndex;
    }
    function hasFocus() {
        return !isUndefined(options.focus) || options.isNavigation;
    }
    return {
        mount,
        go,
        scroll,
        getNext,
        getPrev,
        getEnd,
        setIndex,
        getIndex,
        toIndex,
        toPage,
        toDest,
        hasFocus
    };
}
const XML_NAME_SPACE = "http://www.w3.org/2000/svg";
const PATH = "m15.5 0.932-4.3 4.38 14.5 14.6-14.5 14.5 4.3 4.4 14.6-14.6 4.4-4.3-4.4-4.4-14.6-14.6z";
const SIZE = 40;
function Arrows(Splide2, Components2, options) {
    const { on , bind , emit  } = EventInterface(Splide2);
    const { classes , i18n  } = options;
    const { Elements , Controller  } = Components2;
    let wrapper = Elements.arrows;
    let prev = Elements.prev;
    let next = Elements.next;
    let created;
    const arrows = {
    };
    function mount() {
        init();
        on(EVENT_UPDATED, init);
    }
    function init() {
        if (options.arrows) {
            if (!prev || !next) createArrows();
        }
        if (prev && next) {
            if (!arrows.prev) {
                const { id  } = Elements.track;
                setAttribute(prev, ARIA_CONTROLS, id);
                setAttribute(next, ARIA_CONTROLS, id);
                arrows.prev = prev;
                arrows.next = next;
                listen();
                emit(EVENT_ARROWS_MOUNTED, prev, next);
            } else display(wrapper, options.arrows === false ? "none" : "");
        }
    }
    function destroy() {
        if (created) remove(wrapper);
        else {
            removeAttribute(prev, ALL_ATTRIBUTES);
            removeAttribute(next, ALL_ATTRIBUTES);
        }
    }
    function listen() {
        const { go  } = Controller;
        on([
            EVENT_MOUNTED,
            EVENT_MOVED,
            EVENT_UPDATED,
            EVENT_REFRESH,
            EVENT_SCROLLED
        ], update);
        bind(next, "click", ()=>{
            go(">", true);
        });
        bind(prev, "click", ()=>{
            go("<", true);
        });
    }
    function createArrows() {
        wrapper = create("div", classes.arrows);
        prev = createArrow(true);
        next = createArrow(false);
        created = true;
        append(wrapper, [
            prev,
            next
        ]);
        before(wrapper, child(options.arrows === "slider" && Elements.slider || Splide2.root));
    }
    function createArrow(prev2) {
        const arrow = `<button class="${classes.arrow} ${prev2 ? classes.prev : classes.next}" type="button"><svg xmlns="${XML_NAME_SPACE}" viewBox="0 0 ${SIZE} ${SIZE}" width="${SIZE}" height="${SIZE}"><path d="${options.arrowPath || PATH}" />`;
        return parseHtml(arrow);
    }
    function update() {
        const index = Splide2.index;
        const prevIndex = Controller.getPrev();
        const nextIndex = Controller.getNext();
        const prevLabel = prevIndex > -1 && index < prevIndex ? i18n.last : i18n.prev;
        const nextLabel = nextIndex > -1 && index > nextIndex ? i18n.first : i18n.next;
        prev.disabled = prevIndex < 0;
        next.disabled = nextIndex < 0;
        setAttribute(prev, ARIA_LABEL, prevLabel);
        setAttribute(next, ARIA_LABEL, nextLabel);
        emit(EVENT_ARROWS_UPDATED, prev, next, prevIndex, nextIndex);
    }
    return {
        arrows,
        mount,
        destroy
    };
}
function Autoplay(Splide2, Components2, options) {
    const { on , bind , emit  } = EventInterface(Splide2);
    const { Elements  } = Components2;
    const interval = RequestInterval(options.interval, Splide2.go.bind(Splide2, ">"), update);
    const { isPaused  } = interval;
    let hovered;
    let focused;
    let paused;
    function mount() {
        const { autoplay  } = options;
        if (autoplay) {
            initButton(true);
            initButton(false);
            listen();
            if (autoplay !== "pause") play();
        }
    }
    function initButton(forPause) {
        const prop = forPause ? "pause" : "play";
        const button = Elements[prop];
        if (button) {
            setAttribute(button, ARIA_CONTROLS, Elements.track.id);
            setAttribute(button, ARIA_LABEL, options.i18n[prop]);
            bind(button, "click", forPause ? pause : play);
        }
    }
    function listen() {
        const { root  } = Elements;
        if (options.pauseOnHover) bind(root, "mouseenter mouseleave", (e)=>{
            hovered = e.type === "mouseenter";
            autoToggle();
        });
        if (options.pauseOnFocus) bind(root, "focusin focusout", (e)=>{
            focused = e.type === "focusin";
            autoToggle();
        });
        on([
            EVENT_MOVE,
            EVENT_SCROLL,
            EVENT_REFRESH
        ], interval.rewind);
    }
    function play() {
        if (isPaused() && Components2.Slides.isEnough()) {
            interval.start(!options.resetProgress);
            focused = hovered = paused = false;
            emit(EVENT_AUTOPLAY_PLAY);
        }
    }
    function pause(manual = true) {
        if (!isPaused()) {
            interval.pause();
            emit(EVENT_AUTOPLAY_PAUSE);
        }
        paused = manual;
    }
    function autoToggle() {
        if (!paused) {
            if (!hovered && !focused) play();
            else pause(false);
        }
    }
    function update(rate) {
        const { bar  } = Elements;
        if (bar) style(bar, "width", `${rate * 100}%`);
        emit(EVENT_AUTOPLAY_PLAYING, rate);
    }
    return {
        mount,
        destroy: interval.cancel,
        play,
        pause,
        isPaused
    };
}
function Cover(Splide2, Components2, options) {
    const { on  } = EventInterface(Splide2);
    function mount() {
        if (options.cover) {
            on(EVENT_LAZYLOAD_LOADED, (img, Slide)=>{
                toggle(true, img, Slide);
            });
            on([
                EVENT_MOUNTED,
                EVENT_UPDATED,
                EVENT_REFRESH
            ], apply.bind(null, true));
        }
    }
    function destroy() {
        apply(false);
    }
    function apply(cover) {
        Components2.Slides.forEach((Slide)=>{
            const img = child(Slide.container || Slide.slide, "img");
            if (img && img.src) toggle(cover, img, Slide);
        });
    }
    function toggle(cover, img, Slide) {
        Slide.style("background", cover ? `center/cover no-repeat url("${img.src}")` : "", true);
        display(img, cover ? "none" : "");
    }
    return {
        mount,
        destroy
    };
}
const BOUNCE_DIFF_THRESHOLD = 10;
const BOUNCE_DURATION = 600;
const FRICTION_FACTOR = 0.6;
const BASE_VELOCITY = 1.5;
const MIN_DURATION = 800;
function Scroll(Splide2, Components2, options) {
    const { on , emit  } = EventInterface(Splide2);
    const { Move  } = Components2;
    const { getPosition , getLimit , exceededLimit  } = Move;
    let interval;
    let scrollCallback;
    function mount() {
        on(EVENT_MOVE, clear);
        on([
            EVENT_UPDATED,
            EVENT_REFRESH
        ], cancel);
    }
    function scroll(destination, duration, callback, suppressConstraint) {
        const start = getPosition();
        let friction = 1;
        duration = duration || computeDuration(abs(destination - start));
        scrollCallback = callback;
        clear();
        interval = RequestInterval(duration, onScrolled, (rate)=>{
            const position = getPosition();
            const target = start + (destination - start) * easing(rate);
            const diff = (target - getPosition()) * friction;
            Move.translate(position + diff);
            if (Splide2.is(SLIDE) && !suppressConstraint && exceededLimit()) {
                friction *= FRICTION_FACTOR;
                if (abs(diff) < BOUNCE_DIFF_THRESHOLD) bounce(exceededLimit(false));
            }
        }, 1);
        emit(EVENT_SCROLL);
        interval.start();
    }
    function bounce(backwards) {
        scroll(getLimit(!backwards), BOUNCE_DURATION, null, true);
    }
    function onScrolled() {
        const position = getPosition();
        const index = Move.toIndex(position);
        if (!between(index, 0, Splide2.length - 1)) Move.translate(Move.shift(position, index > 0), true);
        scrollCallback && scrollCallback();
        emit(EVENT_SCROLLED);
    }
    function computeDuration(distance) {
        return max(distance / BASE_VELOCITY, MIN_DURATION);
    }
    function clear() {
        if (interval) interval.cancel();
    }
    function cancel() {
        if (interval && !interval.isPaused()) {
            clear();
            onScrolled();
        }
    }
    function easing(t) {
        const { easingFunc  } = options;
        return easingFunc ? easingFunc(t) : 1 - Math.pow(1 - t, 4);
    }
    return {
        mount,
        destroy: clear,
        scroll,
        cancel
    };
}
const FRICTION = 5;
const LOG_INTERVAL = 200;
const POINTER_DOWN_EVENTS = "touchstart mousedown";
const POINTER_MOVE_EVENTS = "touchmove mousemove";
const POINTER_UP_EVENTS = "touchend touchcancel mouseup";
function Drag(Splide2, Components2, options) {
    const { on , emit , bind , unbind  } = EventInterface(Splide2);
    const { Move , Scroll , Controller  } = Components2;
    const { track  } = Components2.Elements;
    const { resolve , orient  } = Components2.Direction;
    const { getPosition , exceededLimit  } = Move;
    const listenerOptions = {
        passive: false,
        capture: true
    };
    let basePosition;
    let baseEvent;
    let prevBaseEvent;
    let lastEvent;
    let isFree;
    let dragging;
    let hasExceeded = false;
    let clickPrevented;
    let disabled;
    let target;
    function mount() {
        bind(track, POINTER_MOVE_EVENTS, noop, listenerOptions);
        bind(track, POINTER_UP_EVENTS, noop, listenerOptions);
        bind(track, POINTER_DOWN_EVENTS, onPointerDown, listenerOptions);
        bind(track, "click", onClick, {
            capture: true
        });
        bind(track, "dragstart", prevent);
        on([
            EVENT_MOUNTED,
            EVENT_UPDATED
        ], init);
    }
    function init() {
        const { drag  } = options;
        disable(!drag);
        isFree = drag === "free";
    }
    function onPointerDown(e) {
        if (!disabled) {
            const isTouch = isTouchEvent(e);
            if (isTouch || !e.button) {
                if (!Move.isBusy()) {
                    target = isTouch ? track : window;
                    prevBaseEvent = null;
                    lastEvent = null;
                    clickPrevented = false;
                    bind(target, POINTER_MOVE_EVENTS, onPointerMove, listenerOptions);
                    bind(target, POINTER_UP_EVENTS, onPointerUp, listenerOptions);
                    Move.cancel();
                    Scroll.cancel();
                    save(e);
                } else prevent(e, true);
            }
        }
    }
    function onPointerMove(e) {
        if (!lastEvent) emit(EVENT_DRAG);
        lastEvent = e;
        if (e.cancelable) {
            if (dragging) {
                const expired = timeOf(e) - timeOf(baseEvent) > LOG_INTERVAL;
                const exceeded = hasExceeded !== (hasExceeded = exceededLimit());
                if (expired || exceeded) save(e);
                Move.translate(basePosition + constrain(coordOf(e) - coordOf(baseEvent)));
                emit(EVENT_DRAGGING);
                clickPrevented = true;
                prevent(e);
            } else {
                const diff = abs(coordOf(e) - coordOf(baseEvent));
                let { dragMinThreshold: thresholds  } = options;
                thresholds = isObject(thresholds) ? thresholds : {
                    mouse: 0,
                    touch: +thresholds || 10
                };
                dragging = diff > (isTouchEvent(e) ? thresholds.touch : thresholds.mouse);
                if (isSliderDirection()) prevent(e);
            }
        }
    }
    function onPointerUp(e) {
        unbind(target, POINTER_MOVE_EVENTS, onPointerMove);
        unbind(target, POINTER_UP_EVENTS, onPointerUp);
        if (lastEvent) {
            if (dragging || e.cancelable && isSliderDirection()) {
                const velocity = computeVelocity(e);
                const destination = computeDestination(velocity);
                if (isFree) Controller.scroll(destination);
                else if (Splide2.is(FADE)) Controller.go(Splide2.index + orient(sign(velocity)));
                else Controller.go(Controller.toDest(destination), true);
                prevent(e);
            }
            emit(EVENT_DRAGGED);
        }
        dragging = false;
    }
    function save(e) {
        prevBaseEvent = baseEvent;
        baseEvent = e;
        basePosition = getPosition();
    }
    function onClick(e) {
        if (!disabled && clickPrevented) prevent(e, true);
    }
    function isSliderDirection() {
        const diffX = abs(coordOf(lastEvent) - coordOf(baseEvent));
        const diffY = abs(coordOf(lastEvent, true) - coordOf(baseEvent, true));
        return diffX > diffY;
    }
    function computeVelocity(e) {
        if (Splide2.is(LOOP) || !hasExceeded) {
            const base = baseEvent === lastEvent && prevBaseEvent || baseEvent;
            const diffCoord = coordOf(lastEvent) - coordOf(base);
            const diffTime = timeOf(e) - timeOf(base);
            const isFlick = timeOf(e) - timeOf(lastEvent) < LOG_INTERVAL;
            if (diffTime && isFlick) return diffCoord / diffTime;
        }
        return 0;
    }
    function computeDestination(velocity) {
        return getPosition() + sign(velocity) * min(abs(velocity) * (options.flickPower || 600), isFree ? Infinity : Components2.Layout.listSize() * (options.flickMaxPages || 1));
    }
    function coordOf(e, orthogonal) {
        return (isTouchEvent(e) ? e.touches[0] : e)[`page${resolve(orthogonal ? "Y" : "X")}`];
    }
    function timeOf(e) {
        return e.timeStamp;
    }
    function constrain(diff) {
        return diff / (hasExceeded && Splide2.is(SLIDE) ? FRICTION : 1);
    }
    function isTouchEvent(e) {
        return typeof TouchEvent !== "undefined" && e instanceof TouchEvent;
    }
    function isDragging() {
        return dragging;
    }
    function disable(value) {
        disabled = value;
    }
    return {
        mount,
        disable,
        isDragging
    };
}
const IE_ARROW_KEYS = [
    "Left",
    "Right",
    "Up",
    "Down"
];
function Keyboard(Splide2, Components2, options) {
    const { on , bind , unbind  } = EventInterface(Splide2);
    const { root  } = Components2.Elements;
    const { resolve  } = Components2.Direction;
    let target;
    function mount() {
        init();
        on(EVENT_UPDATED, ()=>{
            destroy();
            init();
        });
    }
    function init() {
        const { keyboard ="global"  } = options;
        if (keyboard) {
            if (keyboard === "focused") {
                target = root;
                setAttribute(root, TAB_INDEX, 0);
            } else target = window;
            bind(target, "keydown", onKeydown);
        }
    }
    function destroy() {
        unbind(target, "keydown");
        if (isHTMLElement(target)) removeAttribute(target, TAB_INDEX);
    }
    function onKeydown(e) {
        const { key  } = e;
        const normalizedKey = includes(IE_ARROW_KEYS, key) ? `Arrow${key}` : key;
        if (normalizedKey === resolve("ArrowLeft")) Splide2.go("<");
        else if (normalizedKey === resolve("ArrowRight")) Splide2.go(">");
    }
    return {
        mount,
        destroy
    };
}
const SRC_DATA_ATTRIBUTE = `${DATA_ATTRIBUTE}-lazy`;
const SRCSET_DATA_ATTRIBUTE = `${SRC_DATA_ATTRIBUTE}-srcset`;
const IMAGE_SELECTOR = `[${SRC_DATA_ATTRIBUTE}], [${SRCSET_DATA_ATTRIBUTE}]`;
function LazyLoad(Splide2, Components2, options) {
    const { on , off , bind , emit  } = EventInterface(Splide2);
    const isSequential = options.lazyLoad === "sequential";
    let images = [];
    let index = 0;
    function mount() {
        if (options.lazyLoad) {
            on([
                EVENT_MOUNTED,
                EVENT_REFRESH
            ], ()=>{
                destroy();
                init();
            });
            if (!isSequential) on([
                EVENT_MOUNTED,
                EVENT_REFRESH,
                EVENT_MOVED
            ], observe);
        }
    }
    function init() {
        Components2.Slides.forEach((_Slide)=>{
            queryAll(_Slide.slide, IMAGE_SELECTOR).forEach((_img)=>{
                const src = getAttribute(_img, SRC_DATA_ATTRIBUTE);
                const srcset = getAttribute(_img, SRCSET_DATA_ATTRIBUTE);
                if (src !== _img.src || srcset !== _img.srcset) {
                    const _spinner = create("span", options.classes.spinner, _img.parentElement);
                    setAttribute(_spinner, ROLE, "presentation");
                    images.push({
                        _img,
                        _Slide,
                        src,
                        srcset,
                        _spinner
                    });
                    !_img.src && display(_img, "none");
                }
            });
        });
        if (isSequential) loadNext();
    }
    function destroy() {
        index = 0;
        images = [];
    }
    function observe() {
        images = images.filter((data)=>{
            const distance = options.perPage * ((options.preloadPages || 1) + 1) - 1;
            if (data._Slide.isWithin(Splide2.index, distance)) return load(data);
            return true;
        });
        if (!images.length) off(EVENT_MOVED);
    }
    function load(data) {
        const { _img  } = data;
        addClass(data._Slide.slide, CLASS_LOADING);
        bind(_img, "load error", (e)=>{
            onLoad(data, e.type === "error");
        });
        [
            "src",
            "srcset"
        ].forEach((name)=>{
            if (data[name]) {
                setAttribute(_img, name, data[name]);
                removeAttribute(_img, name === "src" ? SRC_DATA_ATTRIBUTE : SRCSET_DATA_ATTRIBUTE);
            }
        });
    }
    function onLoad(data, error) {
        const { _Slide  } = data;
        removeClass(_Slide.slide, CLASS_LOADING);
        if (!error) {
            remove(data._spinner);
            display(data._img, "");
            emit(EVENT_LAZYLOAD_LOADED, data._img, _Slide);
            emit(EVENT_RESIZE);
        }
        if (isSequential) loadNext();
    }
    function loadNext() {
        if (index < images.length) load(images[index++]);
    }
    return {
        mount,
        destroy
    };
}
function Pagination(Splide2, Components2, options) {
    const { on , emit , bind , unbind  } = EventInterface(Splide2);
    const { Slides , Elements , Controller  } = Components2;
    const { hasFocus , getIndex  } = Controller;
    const items = [];
    let list;
    function mount() {
        init();
        on([
            EVENT_UPDATED,
            EVENT_REFRESH
        ], init);
        on([
            EVENT_MOVE,
            EVENT_SCROLLED
        ], update);
    }
    function init() {
        destroy();
        if (options.pagination && Slides.isEnough()) {
            createPagination();
            emit(EVENT_PAGINATION_MOUNTED, {
                list,
                items
            }, getAt(Splide2.index));
            update();
        }
    }
    function destroy() {
        if (list) {
            remove(list);
            items.forEach((item)=>{
                unbind(item.button, "click");
            });
            empty(items);
            list = null;
        }
    }
    function createPagination() {
        const { length  } = Splide2;
        const { classes , i18n , perPage  } = options;
        const parent = options.pagination === "slider" && Elements.slider || Elements.root;
        const max = hasFocus() ? length : ceil(length / perPage);
        list = create("ul", classes.pagination, parent);
        for(let i = 0; i < max; i++){
            const li = create("li", null, list);
            const button = create("button", {
                class: classes.page,
                type: "button"
            }, li);
            const controls = Slides.getIn(i).map((Slide)=>Slide.slide.id
            );
            const text = !hasFocus() && perPage > 1 ? i18n.pageX : i18n.slideX;
            bind(button, "click", onClick.bind(null, i));
            setAttribute(button, ARIA_CONTROLS, controls.join(" "));
            setAttribute(button, ARIA_LABEL, format(text, i + 1));
            items.push({
                li,
                button,
                page: i
            });
        }
    }
    function onClick(page) {
        Controller.go(`>${page}`, true, ()=>{
            const Slide = Slides.getAt(Controller.toIndex(page));
            Slide && focus(Slide.slide);
        });
    }
    function getAt(index) {
        return items[Controller.toPage(index)];
    }
    function update() {
        const prev = getAt(getIndex(true));
        const curr = getAt(getIndex());
        if (prev) {
            removeClass(prev.button, CLASS_ACTIVE);
            removeAttribute(prev.button, ARIA_CURRENT);
        }
        if (curr) {
            addClass(curr.button, CLASS_ACTIVE);
            setAttribute(curr.button, ARIA_CURRENT, true);
        }
        emit(EVENT_PAGINATION_UPDATED, {
            list,
            items
        }, prev, curr);
    }
    return {
        items,
        mount,
        destroy,
        getAt
    };
}
const TRIGGER_KEYS = [
    " ",
    "Enter",
    "Spacebar"
];
function Sync(Splide2, Components2, options) {
    const { splides  } = Splide2;
    const { list  } = Components2.Elements;
    function mount() {
        if (options.isNavigation) navigate();
        else sync();
    }
    function destroy() {
        removeAttribute(list, ALL_ATTRIBUTES);
    }
    function sync() {
        const processed = [];
        splides.concat(Splide2).forEach((splide, index, instances)=>{
            EventInterface(splide).on(EVENT_MOVE, (index2, prev, dest)=>{
                instances.forEach((instance)=>{
                    if (instance !== splide && !includes(processed, splide)) {
                        processed.push(instance);
                        instance.go(instance.is(LOOP) ? dest : index2);
                    }
                });
                empty(processed);
            });
        });
    }
    function navigate() {
        const { on , emit  } = EventInterface(Splide2);
        on(EVENT_CLICK, onClick);
        on(EVENT_SLIDE_KEYDOWN, onKeydown);
        on([
            EVENT_MOUNTED,
            EVENT_UPDATED
        ], update);
        setAttribute(list, ROLE, "menu");
        emit(EVENT_NAVIGATION_MOUNTED, Splide2.splides);
    }
    function update() {
        setAttribute(list, ARIA_ORIENTATION, options.direction !== TTB ? "horizontal" : null);
    }
    function onClick(Slide) {
        Splide2.go(Slide.index);
    }
    function onKeydown(Slide, e) {
        if (includes(TRIGGER_KEYS, e.key)) {
            onClick(Slide);
            prevent(e);
        }
    }
    return {
        mount,
        destroy
    };
}
function Wheel(Splide2, Components2, options) {
    const { bind  } = EventInterface(Splide2);
    function mount() {
        if (options.wheel) bind(Components2.Elements.track, "wheel", onWheel, {
            passive: false,
            capture: true
        });
    }
    function onWheel(e) {
        const { deltaY  } = e;
        if (deltaY) {
            Splide2.go(deltaY < 0 ? "<" : ">");
            prevent(e);
        }
    }
    return {
        mount
    };
}
var ComponentConstructors = /*#__PURE__*/ Object.freeze({
    __proto__: null,
    Options: Options,
    Direction: Direction,
    Elements: Elements,
    Slides: Slides,
    Layout: Layout,
    Clones: Clones,
    Move: Move,
    Controller: Controller,
    Arrows: Arrows,
    Autoplay: Autoplay,
    Cover: Cover,
    Scroll: Scroll,
    Drag: Drag,
    Keyboard: Keyboard,
    LazyLoad: LazyLoad,
    Pagination: Pagination,
    Sync: Sync,
    Wheel: Wheel
});
const I18N = {
    prev: "Previous slide",
    next: "Next slide",
    first: "Go to first slide",
    last: "Go to last slide",
    slideX: "Go to slide %s",
    pageX: "Go to page %s",
    play: "Start autoplay",
    pause: "Pause autoplay"
};
const DEFAULTS = {
    type: "slide",
    speed: 400,
    waitForTransition: true,
    perPage: 1,
    arrows: true,
    pagination: true,
    interval: 5000,
    pauseOnHover: true,
    pauseOnFocus: true,
    resetProgress: true,
    easing: "cubic-bezier(0.25, 1, 0.5, 1)",
    drag: true,
    direction: "ltr",
    slideFocus: true,
    trimSpace: true,
    focusableNodes: "a, button, textarea, input, select, iframe",
    classes: CLASSES,
    i18n: I18N
};
function Fade(Splide2, Components2, options) {
    const { on  } = EventInterface(Splide2);
    function mount() {
        on([
            EVENT_MOUNTED,
            EVENT_REFRESH
        ], ()=>{
            nextTick(()=>{
                Components2.Slides.style("transition", `opacity ${options.speed}ms ${options.easing}`);
            });
        });
    }
    function start(index, done) {
        const { track  } = Components2.Elements;
        style(track, "height", unit(rect(track).height));
        nextTick(()=>{
            done();
            style(track, "height", "");
        });
    }
    return {
        mount,
        start,
        cancel: noop
    };
}
function Slide(Splide2, Components2, options) {
    const { bind  } = EventInterface(Splide2);
    const { Move , Controller  } = Components2;
    const { list  } = Components2.Elements;
    let endCallback;
    function mount() {
        bind(list, "transitionend", (e)=>{
            if (e.target === list && endCallback) {
                cancel();
                endCallback();
            }
        });
    }
    function start(index, done) {
        const destination = Move.toPosition(index, true);
        const position = Move.getPosition();
        const speed = getSpeed(index);
        if (abs(destination - position) >= 1 && speed >= 1) {
            apply(`transform ${speed}ms ${options.easing}`);
            Move.translate(destination, true);
            endCallback = done;
        } else {
            Move.jump(index);
            done();
        }
    }
    function cancel() {
        apply("");
    }
    function getSpeed(index) {
        const { rewindSpeed  } = options;
        if (Splide2.is(SLIDE) && rewindSpeed) {
            const prev = Controller.getIndex(true);
            const end = Controller.getEnd();
            if (prev === 0 && index >= end || prev >= end && index === 0) return rewindSpeed;
        }
        return options.speed;
    }
    function apply(transition) {
        style(list, "transition", transition);
    }
    return {
        mount,
        start,
        cancel
    };
}
const _Splide = class {
    constructor(target, options){
        this.event = EventBus();
        this.Components = {
        };
        this.state = State(CREATED);
        this.splides = [];
        this._options = {
        };
        this._Extensions = {
        };
        const root = isString(target) ? query(document, target) : target;
        assert(root, `${root} is invalid.`);
        this.root = root;
        merge(DEFAULTS, _Splide.defaults);
        merge(merge(this._options, DEFAULTS), options || {
        });
    }
    mount(Extensions, Transition) {
        const { state , Components: Components2  } = this;
        assert(state.is([
            CREATED,
            DESTROYED
        ]), "Already mounted!");
        state.set(CREATED);
        this._Components = Components2;
        this._Transition = Transition || this._Transition || (this.is(FADE) ? Fade : Slide);
        this._Extensions = Extensions || this._Extensions;
        const Constructors = assign({
        }, ComponentConstructors, this._Extensions, {
            Transition: this._Transition
        });
        forOwn(Constructors, (Component, key)=>{
            const component = Component(this, Components2, this._options);
            Components2[key] = component;
            component.setup && component.setup();
        });
        forOwn(Components2, (component)=>{
            component.mount && component.mount();
        });
        this.emit(EVENT_MOUNTED);
        addClass(this.root, CLASS_INITIALIZED);
        state.set(IDLE);
        this.emit(EVENT_READY);
        return this;
    }
    sync(splide) {
        this.splides.push(splide);
        splide.splides.push(this);
        return this;
    }
    go(control) {
        this._Components.Controller.go(control);
        return this;
    }
    on(events, callback) {
        this.event.on(events, callback, null, DEFAULT_USER_EVENT_PRIORITY);
        return this;
    }
    off(events) {
        this.event.off(events);
        return this;
    }
    emit(event) {
        this.event.emit(event, ...slice(arguments, 1));
        return this;
    }
    add(slides, index) {
        this._Components.Slides.add(slides, index);
        return this;
    }
    remove(matcher) {
        this._Components.Slides.remove(matcher);
        return this;
    }
    is(type) {
        return this._options.type === type;
    }
    refresh() {
        this.emit(EVENT_REFRESH);
        return this;
    }
    destroy(completely = true) {
        const { event , state  } = this;
        if (state.is(CREATED)) event.on(EVENT_READY, this.destroy.bind(this, completely), this);
        else {
            forOwn(this._Components, (component)=>{
                component.destroy && component.destroy(completely);
            }, true);
            event.emit(EVENT_DESTROY);
            event.destroy();
            completely && empty(this.splides);
            state.set(DESTROYED);
        }
        return this;
    }
    get options() {
        return this._options;
    }
    set options(options) {
        const { _options  } = this;
        merge(_options, options);
        if (!this.state.is(CREATED)) this.emit(EVENT_UPDATED, _options);
    }
    get length() {
        return this._Components.Slides.getLength(true);
    }
    get index() {
        return this._Components.Controller.getIndex();
    }
};
let Splide = _Splide;
Splide.defaults = {
};
Splide.STATES = STATES;
const CLASS_RENDERED = "is-rendered";
const RENDERER_DEFAULT_CONFIG = {
    listTag: "ul",
    slideTag: "li"
};
class Style {
    constructor(id, options){
        this.styles = {
        };
        this.id = id;
        this.options = options;
    }
    rule(selector, prop, value, breakpoint) {
        breakpoint = breakpoint || "default";
        const selectors = this.styles[breakpoint] = this.styles[breakpoint] || {
        };
        const styles = selectors[selector] = selectors[selector] || {
        };
        styles[prop] = value;
    }
    build() {
        let css = "";
        if (this.styles.default) css += this.buildSelectors(this.styles.default);
        Object.keys(this.styles).sort((n, m)=>this.options.mediaQuery === "min" ? +n - +m : +m - +n
        ).forEach((breakpoint)=>{
            if (breakpoint !== "default") {
                css += `@media screen and (max-width: ${breakpoint}px) {`;
                css += this.buildSelectors(this.styles[breakpoint]);
                css += `}`;
            }
        });
        return css;
    }
    buildSelectors(selectors) {
        let css = "";
        forOwn(selectors, (styles, selector)=>{
            css += `#${this.id} ${selector} {`;
            forOwn(styles, (value, prop)=>{
                if (value || value === 0) css += `${prop}: ${value};`;
            });
            css += "}";
        });
        return css;
    }
}
class SplideRenderer {
    constructor(contents, options, config, defaults){
        this.slides = [];
        this.options = {
        };
        this.breakpoints = [];
        merge(DEFAULTS, defaults || {
        });
        merge(merge(this.options, DEFAULTS), options || {
        });
        this.contents = contents;
        this.config = assign({
        }, RENDERER_DEFAULT_CONFIG, config || {
        });
        this.id = this.config.id || uniqueId("splide");
        this.Style = new Style(this.id, this.options);
        this.Direction = Direction(null, null, this.options);
        assert(this.contents.length, "Provide at least 1 content.");
        this.init();
    }
    static clean(splide) {
        const { on  } = EventInterface(splide);
        const { root  } = splide;
        const clones = queryAll(root, `.${CLASS_CLONE}`);
        on(EVENT_MOUNTED, ()=>{
            remove(child(root, "style"));
        });
        remove(clones);
    }
    init() {
        this.parseBreakpoints();
        this.initSlides();
        this.registerRootStyles();
        this.registerTrackStyles();
        this.registerSlideStyles();
        this.registerListStyles();
    }
    initSlides() {
        push(this.slides, this.contents.map((content, index)=>{
            content = isString(content) ? {
                html: content
            } : content;
            content.styles = content.styles || {
            };
            content.attrs = content.attrs || {
            };
            this.cover(content);
            const classes = `${this.options.classes.slide} ${index === 0 ? CLASS_ACTIVE : ""}`;
            assign(content.attrs, {
                class: `${classes} ${content.attrs.class || ""}`.trim(),
                style: this.buildStyles(content.styles)
            });
            return content;
        }));
        if (this.isLoop()) this.generateClones(this.slides);
    }
    registerRootStyles() {
        this.breakpoints.forEach(([width, options])=>{
            this.Style.rule(" ", "max-width", unit(options.width), width);
        });
    }
    registerTrackStyles() {
        const { Style: Style2  } = this;
        const selector = `.${CLASS_TRACK}`;
        this.breakpoints.forEach(([width, options])=>{
            Style2.rule(selector, this.resolve("paddingLeft"), this.cssPadding(options, false), width);
            Style2.rule(selector, this.resolve("paddingRight"), this.cssPadding(options, true), width);
            Style2.rule(selector, "height", this.cssTrackHeight(options), width);
        });
    }
    registerListStyles() {
        const { Style: Style2  } = this;
        const selector = `.${CLASS_LIST}`;
        this.breakpoints.forEach(([width, options])=>{
            Style2.rule(selector, "transform", this.buildTranslate(options), width);
        });
    }
    registerSlideStyles() {
        const { Style: Style2  } = this;
        const selector = `.${CLASS_SLIDE}`;
        this.breakpoints.forEach(([width, options])=>{
            Style2.rule(selector, "width", this.cssSlideWidth(options), width);
            Style2.rule(selector, this.resolve("marginRight"), unit(options.gap) || "0px", width);
            const height = this.cssSlideHeight(options);
            if (height) Style2.rule(selector, "height", height, width);
            else Style2.rule(selector, "padding-top", this.cssSlidePadding(options), width);
            Style2.rule(`${selector} > img`, "display", options.cover ? "none" : "inline", width);
        });
    }
    buildTranslate(options) {
        const { resolve , orient  } = this.Direction;
        const values = [];
        values.push(this.cssOffsetClones(options));
        values.push(this.cssOffsetGaps(options));
        if (this.isCenter(options)) {
            values.push(this.buildCssValue(orient(-50), "%"));
            values.push(...this.cssOffsetCenter(options));
        }
        return values.filter(Boolean).map((value)=>`translate${resolve("X")}(${value})`
        ).join(" ");
    }
    cssOffsetClones(options) {
        const { resolve , orient  } = this.Direction;
        const cloneCount = this.getCloneCount();
        if (this.isFixedWidth(options)) {
            const { value , unit: unit2  } = this.parseCssValue(options[resolve("fixedWidth")]);
            return this.buildCssValue(orient(value) * cloneCount, unit2);
        }
        const percent = 100 * cloneCount / options.perPage;
        return `${orient(percent)}%`;
    }
    cssOffsetCenter(options) {
        const { resolve , orient  } = this.Direction;
        if (this.isFixedWidth(options)) {
            const { value , unit: unit2  } = this.parseCssValue(options[resolve("fixedWidth")]);
            return [
                this.buildCssValue(orient(value / 2), unit2)
            ];
        }
        const values = [];
        const { perPage , gap  } = options;
        values.push(`${orient(50 / perPage)}%`);
        if (gap) {
            const { value , unit: unit2  } = this.parseCssValue(gap);
            const gapOffset = (value / perPage - value) / 2;
            values.push(this.buildCssValue(orient(gapOffset), unit2));
        }
        return values;
    }
    cssOffsetGaps(options) {
        const cloneCount = this.getCloneCount();
        if (cloneCount && options.gap) {
            const { orient  } = this.Direction;
            const { value , unit: unit2  } = this.parseCssValue(options.gap);
            if (this.isFixedWidth(options)) return this.buildCssValue(orient(value * cloneCount), unit2);
            const { perPage  } = options;
            const gaps = cloneCount / perPage;
            return this.buildCssValue(orient(gaps * value), unit2);
        }
        return "";
    }
    resolve(prop) {
        return camelToKebab(this.Direction.resolve(prop));
    }
    cssPadding(options, right) {
        const { padding  } = options;
        const prop = this.Direction.resolve(right ? "right" : "left", true);
        return padding && unit(padding[prop] || (isObject(padding) ? 0 : padding)) || "0px";
    }
    cssTrackHeight(options) {
        let height = "";
        if (this.isVertical()) {
            height = this.cssHeight(options);
            assert(height, '"height" is missing.');
            height = `calc(${height} - ${this.cssPadding(options, false)} - ${this.cssPadding(options, true)})`;
        }
        return height;
    }
    cssHeight(options) {
        return unit(options.height);
    }
    cssSlideWidth(options) {
        return options.autoWidth ? "" : unit(options.fixedWidth) || (this.isVertical() ? "" : this.cssSlideSize(options));
    }
    cssSlideHeight(options) {
        return unit(options.fixedHeight) || (this.isVertical() ? options.autoHeight ? "" : this.cssSlideSize(options) : this.cssHeight(options));
    }
    cssSlideSize(options) {
        const gap = unit(options.gap);
        return `calc((100%${gap && ` + ${gap}`})/${options.perPage || 1}${gap && ` - ${gap}`})`;
    }
    cssSlidePadding(options) {
        const { heightRatio  } = options;
        return heightRatio ? `${heightRatio * 100}%` : "";
    }
    buildCssValue(value, unit2) {
        return `${value}${unit2}`;
    }
    parseCssValue(value) {
        if (isString(value)) {
            const number = parseFloat(value) || 0;
            const unit2 = value.replace(/\d*(\.\d*)?/, "") || "px";
            return {
                value: number,
                unit: unit2
            };
        }
        return {
            value,
            unit: "px"
        };
    }
    parseBreakpoints() {
        const { breakpoints  } = this.options;
        this.breakpoints.push([
            "default",
            this.options
        ]);
        if (breakpoints) forOwn(breakpoints, (options, width)=>{
            this.breakpoints.push([
                width,
                merge(merge({
                }, this.options), options)
            ]);
        });
    }
    isFixedWidth(options) {
        return !!options[this.Direction.resolve("fixedWidth")];
    }
    isLoop() {
        return this.options.type === LOOP;
    }
    isCenter(options) {
        if (options.focus === "center") {
            if (this.isLoop()) return true;
            if (this.options.type === SLIDE) return !this.options.trimSpace;
        }
        return false;
    }
    isVertical() {
        return this.options.direction === TTB;
    }
    buildClasses() {
        const { options  } = this;
        return [
            CLASS_ROOT,
            `${CLASS_ROOT}--${options.type}`,
            `${CLASS_ROOT}--${options.direction}`,
            options.drag && `${CLASS_ROOT}--draggable`,
            options.isNavigation && `${CLASS_ROOT}--nav`,
            CLASS_ACTIVE,
            !this.config.hidden && CLASS_RENDERED
        ].filter(Boolean).join(" ");
    }
    buildAttrs(attrs) {
        let attr = "";
        forOwn(attrs, (value, key)=>{
            attr += value ? ` ${camelToKebab(key)}="${value}"` : "";
        });
        return attr.trim();
    }
    buildStyles(styles) {
        let style = "";
        forOwn(styles, (value, key)=>{
            style += ` ${camelToKebab(key)}:${value};`;
        });
        return style.trim();
    }
    renderSlides() {
        const { slideTag: tag  } = this.config;
        return this.slides.map((content)=>{
            return `<${tag} ${this.buildAttrs(content.attrs)}>${content.html || ""}</${tag}>`;
        }).join("");
    }
    cover(content) {
        const { styles , html =""  } = content;
        if (this.options.cover && !this.options.lazyLoad) {
            const src = html.match(/<img.*?src\s*=\s*(['"])(.+?)\1.*?>/);
            if (src && src[2]) styles.background = `center/cover no-repeat url('${src[2]}')`;
        }
    }
    generateClones(contents) {
        const { classes  } = this.options;
        const count = this.getCloneCount();
        const slides = contents.slice();
        while(slides.length < count)push(slides, slides);
        push(slides.slice(-count).reverse(), slides.slice(0, count)).forEach((content, index)=>{
            const attrs = assign({
            }, content.attrs, {
                class: `${content.attrs.class} ${classes.clone}`
            });
            const clone = assign({
            }, content, {
                attrs
            });
            index < count ? contents.unshift(clone) : contents.push(clone);
        });
    }
    getCloneCount() {
        if (this.isLoop()) {
            const { options  } = this;
            if (options.clones) return options.clones;
            const perPage = max(...this.breakpoints.map(([, options2])=>options2.perPage
            ));
            return perPage * ((options.flickMaxPages || 1) + 1);
        }
        return 0;
    }
    renderArrows() {
        let html = "";
        html += `<div class="${this.options.classes.arrows}">`;
        html += this.renderArrow(true);
        html += this.renderArrow(false);
        html += `</div>`;
        return html;
    }
    renderArrow(prev) {
        const { classes , i18n  } = this.options;
        const attrs = {
            class: `${classes.arrow} ${prev ? classes.prev : classes.next}`,
            type: "button",
            ariaLabel: prev ? i18n.prev : i18n.next
        };
        return `<button ${this.buildAttrs(attrs)}><svg xmlns="${XML_NAME_SPACE}" viewBox="0 0 ${SIZE} ${SIZE}" width="${SIZE}" height="${SIZE}"><path d="${this.options.arrowPath || PATH}" /></svg></button>`;
    }
    html() {
        const { rootClass , listTag , arrows , beforeTrack , afterTrack , slider , beforeSlider , afterSlider  } = this.config;
        let html = "";
        html += `<div id="${this.id}" class="${this.buildClasses()} ${rootClass || ""}">`;
        html += `<style>${this.Style.build()}</style>`;
        if (slider) {
            html += beforeSlider || "";
            html += `<div class="splide__slider">`;
        }
        html += beforeTrack || "";
        if (arrows) html += this.renderArrows();
        html += `<div class="splide__track">`;
        html += `<${listTag} class="splide__list">`;
        html += this.renderSlides();
        html += `</${listTag}>`;
        html += `</div>`;
        html += afterTrack || "";
        if (slider) {
            html += `</div>`;
            html += afterSlider || "";
        }
        html += `</div>`;
        return html;
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}]},["cgLB2","iJDgK"], "iJDgK", "parcelRequire6566")

//# sourceMappingURL=index.8eb82e9b.js.map
