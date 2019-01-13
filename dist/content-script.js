(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fetchResource_1 = require("../util/fetchResource");
var Chat = /** @class */ (function () {
    function Chat(sidebarEl) {
        this.sidebarEl = sidebarEl;
        this.createChat(sidebarEl);
    }
    Chat.prototype.createChat = function (sidebarEl) {
        var _this = this;
        fetchResource_1.fetchResourceAsString('chat-area.html').then(function (chatHtml) {
            _this.sidebarEl.innerHTML = chatHtml;
        });
        // sidebarEl.innerHTML = chatHtml;
        // const styleNode = document.createElement('style');
        //
        // var styleText = document.createTextNode(chatStyle);
        // styleNode.appendChild(styleText);
        // document.getElementsByTagName('head')[0].appendChild(styleNode);
    };
    return Chat;
}());
exports.Chat = Chat;

},{"../util/fetchResource":6}],2:[function(require,module,exports){
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
        _this.myPort = _this.browser.runtime.connect();
        _this.myPort.onMessage.addListener(function (message) {
            console.log('Received a message ', message);
            sidebar.showSidebar();
        });
        return _this;
    }
    return ContentOrchestrator;
}(types_1.BrowserUser));
exports.ContentOrchestrator = ContentOrchestrator;

},{"../util/Observable":5,"../util/types":7,"./sidebar":4}],3:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var content_orchestrator_1 = require("./content-orchestrator");
var orchestrator = new content_orchestrator_1.ContentOrchestrator(browser);

},{"./content-orchestrator":2}],4:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var chat_1 = require("./chat");
var Sidebar = /** @class */ (function () {
    function Sidebar() {
        var _this = this;
        this.showSidebar = function () {
            _this.moveBodyToAnotherDivRoot();
            _this.shrinkBodyVideoContainersForSidebar();
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
            // this.sideBarContainer.style.width = '25%';
            _this.sideBarContainer.id = 'sidebarContainer';
            _this.sideBarContainer.style.zIndex = '3001';
            var sidebarEl = document.createElement('div');
            sidebarEl.id = 'sidebar';
            sidebarEl.textContent = 'some sidebar content';
            _this.chat = new chat_1.Chat(sidebarEl);
            _this.sideBarContainer.appendChild(sidebarEl);
            document.body.appendChild(_this.sideBarContainer);
        };
        this.moveBodyToAnotherDivRoot = function () {
            var div = document.createElement("div");
            div.id = "body-container";
            div.style.width = '75%';
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
    Sidebar.prototype.shrinkBodyVideoContainersForSidebar = function () {
        var containerEl = document.querySelector('.Player__container');
        if (containerEl) {
            containerEl.style.width = '70%';
        }
        else {
            console.error("Could not find player container");
        }
    };
    return Sidebar;
}());
exports.Sidebar = Sidebar;

},{"./chat":1}],5:[function(require,module,exports){
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

},{}],6:[function(require,module,exports){
"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchResourceAsString = function (resourceName) { return __awaiter(_this, void 0, void 0, function () {
    var url, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                url = browser.runtime.getURL("static/" + resourceName);
                return [4 /*yield*/, fetch(url)];
            case 1:
                response = _a.sent();
                if (response.ok) {
                    return [2 /*return*/, response.text()];
                }
                else {
                    throw new Error("Could not find resource: " + resourceName);
                }
                return [2 /*return*/];
        }
    });
}); };

},{}],7:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var BrowserUser = /** @class */ (function () {
    function BrowserUser(globalBrowser) {
        this.browser = globalBrowser;
    }
    return BrowserUser;
}());
exports.BrowserUser = BrowserUser;

},{}]},{},[3]);
