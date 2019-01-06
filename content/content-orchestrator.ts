import {Observable} from "../util/Observable";
import Port = browser.runtime.Port;
import {Sidebar} from "./sidebar";
import {BrowserUser, Types} from "../util/types";
import PartialBrowser = Types.PartialBrowser;

export const messageBus: Observable<any> = new Observable();
const sidebar = new Sidebar();


export class ContentOrchestrator extends BrowserUser {
    myPort: Port | null = null;

    constructor(windowBrowser: PartialBrowser) {
        super(windowBrowser);

        if (this.browser.runtime) {
            this.browser.runtime.onConnect.addListener((port: Port) => {
                this.myPort = port;
                port.onDisconnect.addListener((myPort) => {
                    sidebar.hideSidebar();
                });
                sidebar.showSidebar();
            });
        }

    }
}