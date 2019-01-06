import {BrowserUser, Types} from "../util/types";
import PartialBrowser = Types.PartialBrowser;

export class Background extends BrowserUser {
    ports: { [id: number]: browser.runtime.Port | undefined } = {};

    constructor(globalBrowser: PartialBrowser) {
        super(globalBrowser);

        if (globalBrowser.pageAction.onClicked) {
            globalBrowser.pageAction.onClicked.addListener(tab => {
                // this.port existing should imply whether or not a connection is open
                if (tab.id) {
                    const potentialCurrentPort = this.ports[tab.id];
                    if (potentialCurrentPort) {
                        potentialCurrentPort.disconnect();
                    } else {
                        if (this.browser.tabs.connect) {
                            this.ports[tab.id] = this.browser.tabs.connect(tab.id);
                            console.log("A new tab has connected: ",  tab);
                        } else {
                            console.error("Tab is malformed or the browser is missing tabs", tab, this.browser);
                        }
                    }
                }
            })
        }
    }

}