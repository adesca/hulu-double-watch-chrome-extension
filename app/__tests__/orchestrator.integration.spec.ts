import {BrowserFake} from "./doubles/browser.double";
import * as fs from 'fs';
import * as path from 'path';
import {ContentOrchestrator} from "../content/content-orchestrator";
``

describe('create sidebar', function () {
    let orchestrator: ContentOrchestrator;
    let browser: BrowserFake;

    beforeEach(() => {
        document.body.innerHTML = fs.readFileSync(path.join(__dirname, 'doubles', 'WebpageDummy.html')).toString();
        browser = new BrowserFake();
        orchestrator = new ContentOrchestrator(browser);
    });

    afterEach(() => {
        browser.cleanup();
    });

    it('should move body to another div, and setup the sidebar when the background script connects to the content script orchestrator', function () {
        expect(document.querySelector('div.body-content')).not.toBeNull();
        expect(document.querySelector('#body-container div.body-content')).toBeNull();

        initializeSidebar(browser);
        // expect(document.querySelector('div.body-content')).toBeNull();
        expect(document.querySelector('#body-container div.body-content')).not.toBeNull();
        expect(document.querySelector('#sidebar')).not.toBeNull();
        expect(document.body.style.display).toEqual('flex');
    });

    it('should remove the sidebar when the background script disconnects and reset the body styling', function () {
        initializeSidebar(browser);
        expect(document.querySelector('#sidebar')).toBeTruthy();

        browser.portFake.disconnect();
        console.log('disconnecting');
        expect(document.querySelector('#sidebar')).toBeNull();
    });

    const initializeSidebar = (browser: BrowserFake) => {
        const port = browser.tabs.connect();
        port.postMessage('start');
    }
});