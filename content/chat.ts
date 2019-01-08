import {chatStyle} from "./static/html-css-static-conent";

export class Chat {
    constructor(private sidebarEl: HTMLDivElement) {
        this.createChat(sidebarEl);
    }


    private createChat(sidebarEl: HTMLDivElement) {
        sidebarEl.innerHTML = chatHtml;

        const styleNode = document.createElement('style');

        var styleText = document.createTextNode(chatStyle);
        styleNode.appendChild(styleText);
        document.getElementsByTagName('head')[0].appendChild(styleNode);
    }
}

const chatHtml = '<ol class="chat">\n' +
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