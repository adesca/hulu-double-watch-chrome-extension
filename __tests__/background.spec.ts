import {BrowserFake} from "./doubles/browser.double";
import {Background} from "../background/Background";

describe('background', function () {
    it('should initialize with a port connection to content scripts on page_action click', function () {
        const browser: BrowserFake = new BrowserFake();
        const connectSpy = jest.spyOn(browser.tabs, 'connect').mockReturnValue(browser.portFake);

        const subjectBackground = new Background(browser);

        browser.pageAction.onClicked.dispatchEvent({id: 1} as browser.tabs.Tab);
        expect(connectSpy).toHaveBeenCalled();
        expect(subjectBackground.ports[1]).toBeDefined();
    });

    it('should disconnect from port connection if page_action is clicked twice', function () {
        const browser: BrowserFake = new BrowserFake();
        jest.spyOn(browser.tabs, 'connect').mockReturnValue(browser.portFake);
        const portDisconnectSpy = jest.spyOn(browser.portFake, 'disconnect');

        const subjectBackground = new Background(browser);

        browser.pageAction.onClicked.dispatchEvent({id: 1} as browser.tabs.Tab);
        browser.pageAction.onClicked.dispatchEvent({id: 1} as browser.tabs.Tab);

        expect(portDisconnectSpy).toHaveBeenCalled();
    });

    it('should allow reopening of a port connection if page_action is clicked three times', function () {
        const browser: BrowserFake = new BrowserFake();
        jest.spyOn(browser.tabs, 'connect').mockReturnValue(browser.portFake);
        const portDisconnectSpy = jest.spyOn(browser.portFake, 'disconnect');

        const subjectBackground = new Background(browser);

        browser.pageAction.onClicked.dispatchEvent({id: 1} as browser.tabs.Tab);
        browser.pageAction.onClicked.dispatchEvent({id: 1} as browser.tabs.Tab);
        browser.pageAction.onClicked.dispatchEvent({id: 1} as browser.tabs.Tab);

        expect(subjectBackground.ports[1]).toBeDefined();
    });
});