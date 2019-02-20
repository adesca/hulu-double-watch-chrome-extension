import {BrowserUser, Types} from "../util/types";
import PartialBrowser = Types.PartialBrowser;
import Port = browser.runtime.Port;

const BLUE_ICON_URL = browser.runtime.getURL('icons/d-blue.png');
const GREEN_ICON_URL = browser.runtime.getURL('icons/d-green.png');

export class Background extends BrowserUser {
    ports: { [id: number]: browser.runtime.Port | undefined } = {};

    constructor(globalBrowser: PartialBrowser) {
        super(globalBrowser);

        if (this.browser.runtime) {
            console.log('setting up connection listener');
            this.browser.runtime.onConnect.addListener((port: Port) => {
                if (port.sender && port.sender.tab && port.sender.tab.id) {
                    const senderTabId = port.sender.tab.id;
                    this.ports[senderTabId] = port;

                    port.onDisconnect.addListener(port => {
                        this.ports[senderTabId] = undefined;
                    })

                    console.log('A new tab has connected');
                } else {
                    console.error("Received a connection request without a sender field, ", port);
                }
            })

        }


            if (this.browser.pageAction.onClicked) {
                console.log('can click ', this.browser.pageAction);


                // (<any> this.browser.pageAction.onClicked).dispatch({});
                this.browser.pageAction.onClicked.addListener(tab => {

                    console.log('clicked ', tab);
                    // this.port existing should imply whether or not a connection is open
                    if (tab.id) {
                        browser.pageAction.setIcon({
                            tabId: tab.id,
                            path: 'icons/d-green-38.png'
                        });

                        const potentialCurrentPort = this.ports[tab.id];
                        if (potentialCurrentPort) {
                            potentialCurrentPort.postMessage({
                                act: 'clicked'}
                                );

                            // potentialCurrentPort.disconnect();
                            // browser.pageAction.setIcon({
                            //     tabId: tab.id,
                            //     path: GREEN_ICON_URL
                            // })
                            // this.ports[tab.id] = undefined;
                        } else {
                           console.error(`A click was attempted for tab ${tab.id} before the tab connected`, tab);
                        }
                    }
                })
            }
        }
}