import {Observable} from "../util/Observable";
import Port = browser.runtime.Port;
import {Sidebar} from "./sidebar";
import {BrowserUser, Types} from "../util/types";
import PartialBrowser = Types.PartialBrowser;

export const messageBus: Observable<any> = new Observable();
let sidebar: Sidebar;


export class ContentOrchestrator extends BrowserUser {
    myPort: Port | null = null;

    constructor(windowBrowser: PartialBrowser) {
        super(windowBrowser);
        sidebar = new Sidebar();
        console.log('initing');

        this.myPort = this.browser.runtime.connect();

        this.myPort.onMessage.addListener(message => {
            console.log('orchestrator received a message ', message);
            sidebar.updateView();
        });

        this.myPort.onDisconnect.addListener(port => {
            console.log('orchestrator disconnecting');
            sidebar.hideSidebar();
        })

    }
}