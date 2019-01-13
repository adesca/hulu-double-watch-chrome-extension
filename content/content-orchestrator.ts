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

        this.myPort = this.browser.runtime.connect();
        this.myPort.onMessage.addListener(message => {
            console.log('Received a message ', message);
            sidebar.updateView();

        });


    }
}