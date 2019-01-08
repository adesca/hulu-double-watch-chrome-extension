(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var html_css_static_conent_1 = require("./static/html-css-static-conent");
var Chat = /** @class */ (function () {
    function Chat(sidebarEl) {
        this.sidebarEl = sidebarEl;
        this.createChat(sidebarEl);
    }
    Chat.prototype.createChat = function (sidebarEl) {
        sidebarEl.innerHTML = chatHtml;
        var styleNode = document.createElement('style');
        var styleText = document.createTextNode(html_css_static_conent_1.chatStyle);
        styleNode.appendChild(styleText);
        document.getElementsByTagName('head')[0].appendChild(styleNode);
    };
    return Chat;
}());
exports.Chat = Chat;
var chatHtml = '<ol class="chat">\n' +
    '    <div class="day">Today</div>\n' +
    '    <p class="notification">David joined the group <time>18:09</time></p>\n' +
    '    <li class="self">\n' +
    '        <div class="msg">\n' +
    '            <p>Heeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeellooooooooooooooooooooooooooooooo David <emoji class="smile"/></p>\n' +
    '            <time>18:09</time>\n' +
    '        </div>\n' +
    '    </li>\n' +
    '    <li class="other">\n' +
    '        <div class="msg">\n' +
    '            <div class="user">David</div>\n' +
    '            <p>What is that <emoji class="shit"></emoji> ?</p>\n' +
    '            <time>18:10</time>\n' +
    '        </div>\n' +
    '    </li>\n' +
    '    <p class="notification">David left the group <time>18:11</time></p>\n' +
    '</ol>\n' +
    '<div class="typezone">\n' +
    '    <form><textarea type="text" placeholder="Say something"></textarea><input type="submit" class="send" value=""/></form>\n' +
    '    <div class="emojis"></div>\n' +
    '</div>';

},{"./static/html-css-static-conent":5}],2:[function(require,module,exports){
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

},{"../util/Observable":6,"../util/types":7,"./sidebar":4}],3:[function(require,module,exports){
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
            _this.sideBarContainer.style.width = '30%';
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
exports.chatStyle = 'html, body {\n' +
    '    background: #252C33;\n' +
    '    font-family: \'Lato\', sans-serif;\n' +
    '    margin: 0px auto;\n' +
    '}\n' +
    '::selection{\n' +
    '    background: rgba(82,179,217,0.3);\n' +
    '    color: inherit;\n' +
    '}\n' +
    '\n' +
    '/* M E N U */\n' +
    '\n' +
    '.menu {\n' +
    '    position: fixed;\n' +
    '    top: 0px;\n' +
    '    left: 0px;\n' +
    '    right: 0px;\n' +
    '    width: 100%;\n' +
    '    height: 50px;\n' +
    '    background: rgba(27,35,42,0.9);\n' +
    '    z-index: 100;\n' +
    '    -webkit-touch-callout: none;\n' +
    '    -webkit-user-select: none;\n' +
    '    -moz-user-select: none;\n' +
    '    -ms-user-select: none;\n' +
    '}\n' +
    '\n' +
    '.back {\n' +
    '    position: absolute;\n' +
    '    width: 90px;\n' +
    '    height: 50px;\n' +
    '    top: 0px;\n' +
    '    left: 0px;\n' +
    '    color: rgba(255,255,255,0.5);\n' +
    '    line-height: 45px;\n' +
    '    font-size: 40px;\n' +
    '    padding-left: 10px;\n' +
    '    cursor: pointer;\n' +
    '    transition: .15s all;\n' +
    '}\n' +
    '.back img {\n' +
    '    position: absolute;\n' +
    '    top: 5px;\n' +
    '    left: 30px;\n' +
    '    width: 40px;\n' +
    '    height: 40px;\n' +
    '    background-color: rgba(255,255,255,0.1);\n' +
    '    border-radius: 100%;\n' +
    '    -webkit-border-radius: 100%;\n' +
    '    -moz-border-radius: 100%;\n' +
    '    -ms-border-radius: 100%;\n' +
    '    margin-left: 15px;\n' +
    '}\n' +
    '.back:active {\n' +
    '    background: rgba(0,0,0,0.15);\n' +
    '}\n' +
    '.name {\n' +
    '    position: absolute;\n' +
    '    top: 3px;\n' +
    '    left: 110px;\n' +
    '    font-family: \'Lato\';\n' +
    '    font-size: 25px;\n' +
    '    font-weight: 300;\n' +
    '    color: rgba(255,255,255,0.98);\n' +
    '    cursor: default;\n' +
    '}\n' +
    '.last {\n' +
    '    position: absolute;\n' +
    '    top: 30px;\n' +
    '    left: 115px;\n' +
    '    font-family: \'Lato\';\n' +
    '    font-size: 11px;\n' +
    '    font-weight: 400;\n' +
    '    color: rgba(255,255,255,0.6);\n' +
    '    cursor: default;\n' +
    '}\n' +
    '.members {\n' +
    '    position: absolute;\n' +
    '    top: 30px;\n' +
    '    left: 115px;\n' +
    '    font-family: \'Lato\';\n' +
    '    font-size: 11px;\n' +
    '    font-weight: 400;\n' +
    '    color: rgba(255,255,255,0.6);\n' +
    '    cursor: default;\n' +
    '    word-spacing: 2px;\n' +
    '}\n' +
    '\n' +
    '/* M E S S A G E S */\n' +
    '\n' +
    '.chat {\n' +
    '    list-style: none;\n' +
    '    background: none;\n' +
    '    margin: 0;\n' +
    '    padding: 0 0 50px 0;\n' +
    '    margin-top: 60px;\n' +
    '    margin-bottom: 15px;\n' +
    '}\n' +
    '.chat li {\n' +
    '    padding: 0.5rem;\n' +
    '    overflow: hidden;\n' +
    '    display: flex;\n' +
    '}\n' +
    '.chat .day {\n' +
    '    position: relative;\n' +
    '    display: block;\n' +
    '    text-align: center;\n' +
    '    color: rgba(255,255,255,0.3);\n' +
    '    height: 20px;\n' +
    '    text-shadow: 7px 0px 0px #252C33, 6px 0px 0px #252C33, 5px 0px 0px #252C33, 4px 0px 0px #252C33, 3px 0px 0px #252C33, 2px 0px 0px #252C33, 1px 0px 0px #252C33, 1px 0px 0px #252C33, 0px 0px 0px #252C33, -1px 0px 0px #252C33, -2px 0px 0px #252C33, -3px 0px 0px #252C33, -4px 0px 0px #252C33, -5px 0px 0px #252C33, -6px 0px 0px #252C33, -7px 0px 0px #252C33;\n' +
    '    box-shadow: inset 20px 0px 0px #252C33, inset -20px 0px 0px #252C33, inset 0px -2px 0px rgba(255,255,255,0.1);\n' +
    '    line-height: 38px;\n' +
    '    margin-top: 5px;\n' +
    '    margin-bottom: 20px;\n' +
    '    cursor: default;\n' +
    '    -webkit-touch-callout: none;\n' +
    '    -webkit-user-select: none;\n' +
    '    -moz-user-select: none;\n' +
    '    -ms-user-select: none;\n' +
    '}\n' +
    '.chat .notification {\n' +
    '    position: relative;\n' +
    '    display: inherit;\n' +
    '    text-align: center;\n' +
    '    font-size: 13px;\n' +
    '    color: rgba(255,255,255,0.15);\n' +
    '    background: rgba(234, 247, 255, 0.035);\n' +
    '    line-height: 30px;\n' +
    '    border-radius: 100px;\n' +
    '    margin: 7px 35%;\n' +
    '    height: 30px;\n' +
    '    width: 30%;\n' +
    '    box-shadow: 0px 1px 0px rgba(0,0,0,.05), 0px -1px 0px rgba(0,0,0,.05), inset 0px 1px 0px rgba(255,255,255,.02), inset 0px -1px 0px rgba(255,255,255,.02);\n' +
    '    text-shadow: 0px -1px 0px rgba(0,0,0,.1), 0px 1px 0px rgba(255,255,255,.05);\n' +
    '    cursor: default;\n' +
    '    -webkit-touch-callout: none;\n' +
    '    -webkit-user-select: none;\n' +
    '    -moz-user-select: none;\n' +
    '    -ms-user-select: none;\n' +
    '    transition: all .2s cubic-bezier(0.565, -0.260, 0.255, 1.410);\n' +
    '}\n' +
    '.chat .notification time {\n' +
    '    position: absolute;\n' +
    '    top: 7px;\n' +
    '    right: 7px;\n' +
    '    font-size: 11px;\n' +
    '    padding: 8px;\n' +
    '    border-radius: 100px;\n' +
    '    background: #252C33;\n' +
    '    box-shadow: 0px 0px 2px rgba(255,255,255,.02), inset 0px 0px 1px rgba(27,35,42,0.1);\n' +
    '    height: 1px;\n' +
    '    line-height: 0px;\n' +
    '    color: rgba(255,255,255,0.1);\n' +
    '    -webkit-touch-callout: none;\n' +
    '    -webkit-user-select: none;\n' +
    '    -moz-user-select: none;\n' +
    '    -ms-user-select: none;\n' +
    '    transition: all .2s cubic-bezier(0.565, -0.260, 0.255, 1.410);\n' +
    '}\n' +
    '\n' +
    '.other .msg {\n' +
    '    border-top-left-radius: 0px;\n' +
    '    box-shadow: -1px 2px 0px #c1cbcd;\n' +
    '}\n' +
    '.other:before {\n' +
    '    content: "";\n' +
    '    position: relative;\n' +
    '    top: 0px;\n' +
    '    right: 0px;\n' +
    '    left: 0px;\n' +
    '    width: 0px;\n' +
    '    height: 0px;\n' +
    '    border: 5px solid #eef8ff;\n' +
    '    border-left-color: transparent;\n' +
    '    border-bottom-color: transparent;\n' +
    '}\n' +
    '\n' +
    '.self {\n' +
    '    justify-content: flex-end;\n' +
    '    align-items: flex-end;\n' +
    '}\n' +
    '.self .msg {\n' +
    '    border-bottom-right-radius: 0px;\n' +
    '    box-shadow: 1px 2px 0px #c1cbcd;\n' +
    '}\n' +
    '.self:after {\n' +
    '    content: "";\n' +
    '    position: relative;\n' +
    '    display: inline-block;\n' +
    '    float: right;\n' +
    '    bottom: 0px;\n' +
    '    right: 0px;\n' +
    '    width: 0px;\n' +
    '    height: 0px;\n' +
    '    border: 5px solid #eef8ff;\n' +
    '    border-right-color: transparent;\n' +
    '    border-top-color: transparent;\n' +
    '    box-shadow: 0px 2px 0px #c1cbcd;\n' +
    '}\n' +
    '\n' +
    '.msg {\n' +
    '    background: #eef8ff;\n' +
    '    min-width: 50px;\n' +
    '    padding: 10px;\n' +
    '    border-radius: 2px;\n' +
    '    word-break: break-all;\n' +
    '}\n' +
    '.msg .user {\n' +
    '    font-size: 14px;\n' +
    '    margin: 0 0 2px 0;\n' +
    '    color: #666;\n' +
    '    font-weight: 700;\n' +
    '    margin-top: -2px;\n' +
    '    margin-bottom: 5px;\n' +
    '    transition: all .2s ease;\n' +
    '    -webkit-touch-callout: none;\n' +
    '    -webkit-user-select: none;\n' +
    '    -moz-user-select: none;\n' +
    '    -ms-user-select: none;\n' +
    '}\n' +
    '.msg .user .range.admin {\n' +
    '    display: inline-block;\n' +
    '    font-size: 10px;\n' +
    '    font-weight: 300;\n' +
    '    color: #6aea96;\n' +
    '    padding: 2px;\n' +
    '    border-radius: 3px;\n' +
    '    border: solid 1px #6aea96;\n' +
    '    background: rgba(255,255,255,0);\n' +
    '    margin-left: 5px;\n' +
    '}\n' +
    '.msg p {\n' +
    '    font-size: 13px;\n' +
    '    margin: 0 0 2px 0;\n' +
    '    color: #777;\n' +
    '    transition: all .2s ease;\n' +
    '}\n' +
    '.msg img {\n' +
    '    position: relative;\n' +
    '    display: block;\n' +
    '    width: 600px;\n' +
    '    border-radius: 5px;\n' +
    '    box-shadow: 0px 0px 3px #eee;\n' +
    '    transition: all .8s cubic-bezier(0.565, -0.260, 0.255, 1.410);\n' +
    '    cursor: default;\n' +
    '    -webkit-touch-callout: none;\n' +
    '    -webkit-user-select: none;\n' +
    '    -moz-user-select: none;\n' +
    '    -ms-user-select: none;\n' +
    '}\n' +
    '\n' +
    '.msg time {\n' +
    '    font-size: 0.7rem;\n' +
    '    color: rgba(0,0,0,.35);\n' +
    '    margin-top: 3px;\n' +
    '    float: right;\n' +
    '    cursor: default;\n' +
    '    -webkit-touch-callout: none;\n' +
    '    -webkit-user-select: none;\n' +
    '    -moz-user-select: none;\n' +
    '    -ms-user-select: none;\n' +
    '}\n' +
    '.msg time:before{\n' +
    '    content:"\\f017";\n' +
    '    color: #ddd;\n' +
    '    font-family: FontAwesome;\n' +
    '    display: inline-block;\n' +
    '    margin-right: 4px;\n' +
    '}\n' +
    '\n' +
    'emoji{\n' +
    '    display: inline-block;\n' +
    '    height: 18px;\n' +
    '    width: 18px;\n' +
    '    background-size: cover;\n' +
    '    background-repeat: no-repeat;\n' +
    '    margin-top: -7px;\n' +
    '    margin-left: 2px;\n' +
    '    margin-right: 2px;\n' +
    '    transform: translate3d(0px, 4px, 0px);\n' +
    '}\n' +
    'emoji.please{background-image: url(https://imgur.com/ftowh0s.png);}\n' +
    'emoji.lmao{background-image: url(https://i.imgur.com/MllSy5N.png);}\n' +
    'emoji.happy{background-image: url(https://imgur.com/5WUpcPZ.png);}\n' +
    'emoji.pizza{background-image: url(https://imgur.com/voEvJld.png);}\n' +
    'emoji.cryalot{background-image: url(https://i.imgur.com/UUrRRo6.png);}\n' +
    'emoji.books{background-image: url(https://i.imgur.com/UjZLf1R.png);}\n' +
    'emoji.moai{background-image: url(https://imgur.com/uSpaYy8.png);}\n' +
    'emoji.suffocated{background-image: url(https://i.imgur.com/jfTyB5F.png);}\n' +
    'emoji.scream{background-image: url(https://i.imgur.com/tOLNJgg.png);}\n' +
    'emoji.hearth_blue{background-image: url(https://i.imgur.com/gR9juts.png);}\n' +
    'emoji.funny{background-image: url(https://i.imgur.com/qKia58V.png);}\n' +
    'emoji.shit{background-image: url(https://i.imgur.com/H5Jba8r.png);}\n' +
    '\n' +
    '@-webikt-keyframes pulse {\n' +
    '    from { opacity: 0; }\n' +
    '    to { opacity: 0.5; }\n' +
    '}\n' +
    '\n' +
    '::-webkit-scrollbar {\n' +
    '    min-width: 12px;\n' +
    '    width: 12px;\n' +
    '    max-width: 12px;\n' +
    '    min-height: 12px;\n' +
    '    height: 12px;\n' +
    '    max-height: 12px;\n' +
    '    background: #252C33;\n' +
    '    box-shadow: inset 0px 50px 0px rgba(27,35,42,0.9), inset 0px -50px 0px #eee;\n' +
    '}\n' +
    '\n' +
    '::-webkit-scrollbar-thumb {\n' +
    '    background: rgba(255,255,255,0.2);\n' +
    '    border: none;\n' +
    '    border-radius: 100px;\n' +
    '    border: solid 3px #252C33;\n' +
    '}\n' +
    '\n' +
    '::-webkit-scrollbar-thumb:hover {\n' +
    '    background: rgba(255,255,255,0.1);\n' +
    '}\n' +
    '\n' +
    '::-webkit-scrollbar-thumb:active {\n' +
    '    background: rgba(255,255,255,0.1);\n' +
    '}\n' +
    '\n' +
    '::-webkit-scrollbar-button {\n' +
    '    display: block;\n' +
    '    height: 26px;\n' +
    '}\n' +
    '\n' +
    '/* T Y P E */\n' +
    '.typezone{\n' +
    '    position: fixed;\n' +
    '    bottom: 0px;\n' +
    '    left: 0px;\n' +
    '    right: 0px;\n' +
    '    width: 100%;\n' +
    '    height: 50px;\n' +
    '    z-index: 99;\n' +
    '    background: #eee;\n' +
    '    border: none;\n' +
    '    outline: none;\n' +
    '}\n' +
    'textarea, textarea:hover {\n' +
    '    position: absolute;\n' +
    '    bottom: 0px;\n' +
    '    left: 8%;\n' +
    '    right: 8%;\n' +
    '    width: 80%;\n' +
    '    height: 30px;\n' +
    '    z-index: 100;\n' +
    '    background: #fafafa;\n' +
    '    border: none;\n' +
    '    outline: none;\n' +
    '    padding-left: 2%;\n' +
    '    padding-right: 2%;\n' +
    '    padding-top: 2%;\n' +
    '    color: #666;\n' +
    '    font-weight: 400;\n' +
    '    border-top-right-radius: 10px;\n' +
    '    border-top-left-radius: 10px;\n' +
    '    overflow: hidden;\n' +
    '    resize: none;\n' +
    '    z-index: 200;\n' +
    '    box-shadow: 0px 0px 10px rgba(0,0,0,0.2);\n' +
    '    transition: all .4s cubic-bezier(0.565, -0.260, 0.255, 1.410);\n' +
    '}\n' +
    'textarea:focus {\n' +
    '    height: 300px;\n' +
    '    box-shadow: 0px 0px 20px rgba(0,0,0,0.3);\n' +
    '}\n' +
    '.emojis {\n' +
    '    position: fixed;\n' +
    '    display: block;\n' +
    '    bottom: 0px;\n' +
    '    left: 0px;\n' +
    '    width: 8%;\n' +
    '    height: 50px;\n' +
    '    background-image: url(https://i.imgur.com/VAn5Geq.png);\n' +
    '    background-repeat: no-repeat;\n' +
    '    background-size: 34px 34px;\n' +
    '    background-position: 45% 9px;\n' +
    '    z-index: 100;\n' +
    '    cursor: pointer;\n' +
    '}\n' +
    '.emojis:active {\n' +
    '    opacity: 0.9;\n' +
    '}\n' +
    '.send {\n' +
    '    position: fixed;\n' +
    '    display: block;\n' +
    '    bottom: 0px;\n' +
    '    right: 0px;\n' +
    '    width: 8%;\n' +
    '    height: 50px;\n' +
    '    border: none;\n' +
    '    outline: none;\n' +
    '    z-index: 100;\n' +
    '    cursor: pointer;\n' +
    '    background-image: url(https://i.imgur.com/VSQxJKL.png);\n' +
    '    background-repeat: no-repeat;\n' +
    '    background-size: 34px 34px;\n' +
    '    background-position: 45% 9px;\n' +
    '    background-color: rgba(255,255,255,0);\n' +
    '}\n' +
    '.send:active {\n' +
    '    opacity: 0.85;\n' +
    '}\n' +
    '\n' +
    '/* R E S P O N S I V E   C O N F I G U R A T I O N */\n' +
    '\n' +
    '@media screen and (max-width: 750px) {\n' +
    '    ::-webkit-scrollbar {\n' +
    '        display: none;\n' +
    '    }\n' +
    '    .chat{\n' +
    '        margin-bottom: 55px;\n' +
    '    }\n' +
    '    .msg p {\n' +
    '        font-size: 11px;\n' +
    '    }\n' +
    '    .msg .user {\n' +
    '        font-size: 13px;\n' +
    '    }\n' +
    '    .msg img {\n' +
    '        width: 300px;\n' +
    '    }\n' +
    '    .chat .notification {\n' +
    '        font-size: 12px;\n' +
    '        margin: 7px 30%;\n' +
    '        width: 40%;\n' +
    '    }\n' +
    '    .chat .day {\n' +
    '        font-size: 11px;\n' +
    '    }\n' +
    '    .emojis {\n' +
    '        width: 25%;\n' +
    '    }\n' +
    '    .send {\n' +
    '        width: 25%;\n' +
    '    }\n' +
    '    textarea {\n' +
    '        left: 0px;\n' +
    '        right: 0px;\n' +
    '        bottom: 50px;\n' +
    '        padding-left: 5%;\n' +
    '        padding-right: 5%;\n' +
    '        padding-top: 20px;\n' +
    '        width: 90%;\n' +
    '        border-radius: 0px;\n' +
    '        height: 28px;\n' +
    '        background: #fafafa;\n' +
    '        box-shadow: none;\n' +
    '        transition: all .4s cubic-bezier(0.2, -0.2, 0.2, 1.2);\n' +
    '    }\n' +
    '    textarea:focus {\n' +
    '        height: 30vh;\n' +
    '        margin-top: 30vh;\n' +
    '        box-shadow: 0px -20px 20px rgba(0,0,0,0.1);\n' +
    '    }\n' +
    '    form:focus ~ .typezone {\n' +
    '        bottom: 50vh;\n' +
    '    }\n' +
    '}\n' +
    '@media screen and (max-width: 550px) {\n' +
    '    .msg p {\n' +
    '        max-width: 250px;\n' +
    '    }\n' +
    '    .msg img {\n' +
    '        width: 200px;\n' +
    '    }\n' +
    '    .chat .notification {\n' +
    '        font-size: 12px;\n' +
    '        margin: 7px 0px;\n' +
    '        width: 100%;\n' +
    '        border-radius: 0px;\n' +
    '    }\n' +
    '    .chat .notification time {\n' +
    '        right: 10px;\n' +
    '    }\n' +
    '}';

},{}],6:[function(require,module,exports){
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
