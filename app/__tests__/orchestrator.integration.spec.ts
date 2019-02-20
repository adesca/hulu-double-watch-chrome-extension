import {BrowserFake} from "./doubles/browser.double";
import * as fs from 'fs';
import * as path from 'path';
import {ContentOrchestrator} from "../content/content-orchestrator";


describe('create sidebar', function () {
    let orchestrator: ContentOrchestrator;
    let browser: BrowserFake;

    beforeEach(() => {
        document.body.innerHTML = fs.readFileSync(path.join(__dirname, 'doubles', 'WebpageDummy.html')).toString();
        browser = new BrowserFake();
        orchestrator = new ContentOrchestrator(browser);
    });

    it('should setup the sidebar when the background script connects to the content script orchestrator', function () {
        expect(document.querySelector('div.body-content')).not.toBeNull();
        expect(document.querySelector('#body-container div.body-content')).toBeNull();
        browser.tabs.connect();

        // expect(document.querySelector('div.body-content')).toBeNull();
        expect(document.querySelector('#body-container div.body-content')).not.toBeNull();
        expect(document.querySelector('#sidebar')).not.toBeNull();
        expect(document.body.style.display).toEqual('flex');
    });

    it('should remove the sidebar when the background script disconnects and reset the body styling', function () {
        browser.tabs.connect();
        console.log(document.body.innerHTML);
        expect(document.querySelector('#sidebar')).toBeTruthy();

        browser.portFake.disconnect();
        expect(document.querySelector('#sidebar')).toBeNull();
    });
});