(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Observable_1 = require("../util/Observable");
var sidebar_1 = require("./sidebar");
var types_1 = require("../util/types");
exports.messageBus = new Observable_1.Observable();
var sidebar = new sidebar_1.Sidebar();
var ContentOrchestrator = /** @class */ (function (_super) {
    __extends(ContentOrchestrator, _super);
    function ContentOrchestrator(windowBrowser) {
        var _this = _super.call(this, windowBrowser) || this;
        _this.myPort = null;
        if (_this.browser.runtime) {
            _this.browser.runtime.onConnect.addListener(function (port) {
                _this.myPort = port;
                port.onDisconnect.addListener(function (myPort) {
                    sidebar.hideSidebar();
                });
                sidebar.showSidebar();
            });
        }
        return _this;
    }
    return ContentOrchestrator;
}(types_1.BrowserUser));
exports.ContentOrchestrator = ContentOrchestrator;

},{"../util/Observable":4,"../util/types":5,"./sidebar":3}],2:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var content_orchestrator_1 = require("./content-orchestrator");
var orchestrator = new content_orchestrator_1.ContentOrchestrator(browser);

},{"./content-orchestrator":1}],3:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Sidebar = /** @class */ (function () {
    function Sidebar() {
        var _this = this;
        this.showSidebar = function () {
            _this.moveBodyToAnotherDivRoot();
            _this.addSidebar();
            _this.styleBody();
        };
        this.hideSidebar = function () {
            _this.removeSidebar();
            _this.resetBodyStyle();
        };
        this.removeSidebar = function () {
            if (_this.sideBarContainer) {
                document.body.removeChild(_this.sideBarContainer);
            }
        };
        this.sideBarContainer = null;
        this.addSidebar = function () {
            _this.sideBarContainer = document.createElement('div');
            _this.sideBarContainer.id = 'sidebarContainer';
            var sidebarEl = document.createElement('div');
            sidebarEl.id = 'sidebar';
            _this.sideBarContainer.appendChild(sidebarEl);
            document.body.appendChild(_this.sideBarContainer);
        };
        this.moveBodyToAnotherDivRoot = function () {
            var div = document.createElement("div");
            div.id = "body-container";
            // Move the body's children into this wrapper
            while (document.body.firstChild) {
                div.appendChild(document.body.firstChild);
            }
            // Append the wrapper to the body
            document.body.appendChild(div);
        };
        this._originalBodyDisplay = '';
        this.styleBody = function () {
            _this._originalBodyDisplay = document.body.style.display;
            document.body.style.display = 'flex';
        };
        this.resetBodyStyle = function () {
            document.body.style.display = _this._originalBodyDisplay;
        };
    }
    return Sidebar;
}());
exports.Sidebar = Sidebar;

},{}],4:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Observable = /** @class */ (function () {
    function Observable() {
        var _this = this;
        this.fxnsToCallOnNext = [];
        this.fxnsToCallOnErr = [];
        this.fxnsToCallOnComplete = [];
        this.subscribe = function (onNext, onErr, onComplete) {
            if (onNext) {
                _this.fxnsToCallOnNext.push(onNext);
            }
        };
    }
    Observable.prototype.next = function (nextObjectToEmit) {
        this.fxnsToCallOnNext.forEach(function (fxn) {
            fxn.apply(null, [nextObjectToEmit]);
        });
    };
    return Observable;
}());
exports.Observable = Observable;

},{}],5:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var BrowserUser = /** @class */ (function () {
    function BrowserUser(globalBrowser) {
        this.browser = globalBrowser;
    }
    return BrowserUser;
}());
exports.BrowserUser = BrowserUser;

},{}]},{},[2]);
