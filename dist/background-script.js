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
var types_1 = require("../app/util/types");
var BLUE_ICON_URL = browser.runtime.getURL('icons/d-blue.png');
var GREEN_ICON_URL = browser.runtime.getURL('icons/d-green.png');
var Background = /** @class */ (function (_super) {
    __extends(Background, _super);
    function Background(globalBrowser) {
        var _this = _super.call(this, globalBrowser) || this;
        _this.ports = {};
        if (_this.browser.runtime) {
            console.log('setting up connection listener');
            _this.browser.runtime.onConnect.addListener(function (port) {
                if (port.sender && port.sender.tab && port.sender.tab.id) {
                    var senderTabId_1 = port.sender.tab.id;
                    _this.ports[senderTabId_1] = port;
                    port.onDisconnect.addListener(function (port) {
                        _this.ports[senderTabId_1] = undefined;
                    });
                    console.log('A new tab has connected');
                }
                else {
                    console.error("Received a connection request without a sender field, ", port);
                }
            });
        }
        if (_this.browser.pageAction.onClicked) {
            console.log('can click ', _this.browser.pageAction);
            // (<any> this.browser.pageAction.onClicked).dispatch({});
            _this.browser.pageAction.onClicked.addListener(function (tab) {
                console.log('clicked ', tab);
                // this.port existing should imply whether or not a connection is open
                if (tab.id) {
                    browser.pageAction.setIcon({
                        tabId: tab.id,
                        path: 'icons/d-green-38.png'
                    });
                    var potentialCurrentPort = _this.ports[tab.id];
                    if (potentialCurrentPort) {
                        potentialCurrentPort.postMessage({
                            act: 'clicked'
                        });
                        // potentialCurrentPort.disconnect();
                        // browser.pageAction.setIcon({
                        //     tabId: tab.id,
                        //     path: GREEN_ICON_URL
                        // })
                        // this.ports[tab.id] = undefined;
                    }
                    else {
                        console.error("A click was attempted for tab " + tab.id + " before the tab connected", tab);
                    }
                }
            });
        }
        return _this;
    }
    return Background;
}(types_1.BrowserUser));
exports.Background = Background;

},{"../util/types":3}],2:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Background_1 = require("./Background");
exports.background = new Background_1.Background(browser);

},{"./Background":1}],3:[function(require,module,exports){
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
