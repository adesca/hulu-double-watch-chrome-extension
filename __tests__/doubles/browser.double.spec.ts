import {BrowserFake} from "./browser.double";
import Port = browser.runtime.Port;

const browserFake = new BrowserFake();

describe('browser contract test', function () {
    describe('Port messaging', function () {
        it('should return a port when onConnect receives a listener', function (done) {
            browserFake.runtime.onConnect.addListener((port: Port) => {
                expect(port).not.toBeNull();
                done();
            });

            const returnedPort = browserFake.tabs.connect();
            expect(returnedPort).toBeTruthy();
        });

        it('should call onDisconnect listeners when portFake calls disconnect', function (done) {
            browserFake.portFake.onDisconnect.addListener((port: Port) => {
                expect(port).not.toBeNull();
                done();
            });

            browserFake.portFake.disconnect();
        });
    });

    describe('Page action', function () {
        it('should notify onClick listeners when page action onclicked event is fired', function (done) {
            browserFake.pageAction.onClicked.addListener(() => {
                done();
            });

            browserFake.pageAction.onClicked.dispatchEvent({} as browser.tabs.Tab);
        });
    });
});

