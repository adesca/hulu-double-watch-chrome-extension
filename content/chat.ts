import {chatStyle} from "./static/html-css-static-conent";
import {fetchResourceAsString} from "../util/fetchResource";

export class Chat {
    constructor(private sidebarEl: HTMLDivElement) {
        this.createChat(sidebarEl);
    }


    private createChat(sidebarEl: HTMLDivElement) {
        fetchResourceAsString('chat-area.html').then(chatHtml => {
            this.sidebarEl.innerHTML = chatHtml;
        })

        // sidebarEl.innerHTML = chatHtml;

        // const styleNode = document.createElement('style');
        //
        // var styleText = document.createTextNode(chatStyle);
        // styleNode.appendChild(styleText);
        // document.getElementsByTagName('head')[0].appendChild(styleNode);
    }
}
