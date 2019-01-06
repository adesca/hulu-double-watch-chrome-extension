import {BrowserUser, Types} from "../util/types";
import PartialBrowser = Types.PartialBrowser;

export class Background extends BrowserUser {
    port: browser.runtime.Port | undefined;

    constructor(globalBrowser: PartialBrowser) {
        super(globalBrowser);

        if (globalBrowser.pageAction.onClicked) {
            globalBrowser.pageAction.onClicked.addListener(tab => {
                // this.port existing should imply whether or not a connection is open
                if (this.port) {
                    this.port.disconnect();
                } else {
                    if (tab.id && this.browser.tabs.connect) {
                        this.port = this.browser.tabs.connect(tab.id);
                    } else {
                        console.error("Tab is malformed or the browser is missing tabs", tab, this.browser);
                    }
                }


            })
        }
    }

}