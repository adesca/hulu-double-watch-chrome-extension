import Port = browser.runtime.Port;

export class BrowserFake {
    private onConnectListeners = new EvListenerDouble<Function, Port>();
    private onPageActionClickListeners = new EvListenerDouble<Function, browser.tabs.Tab>();
    portFake = new PortFake();

    runtime = {
        onConnect: this.onConnectListeners
    };
    tabs = {
        connect: () => {
            this.onConnectListeners.dispatchEvent(this.portFake);
            return this.portFake;
        }
    };

    pageAction = {
        onClicked: this.onPageActionClickListeners
    }
}

class PortFake implements Port {
    disconnect = () => {
        this.onDisconnect.dispatchEvent(this);
    };

    onDisconnect = new EvListenerDouble<Function, Port>();

    name =  '';

    error = () => {};
    onMessage = new EvListenerDouble();
    postMessage = () => {};
}

class EvListenerDouble<T extends Function, EventType> {

    listeners: T[] = [];

    addListener = (cb: T) => {this.listeners.push(cb)};
    removeListener: (listener: T) => void = () => {};
    hasListener: (listener: T) => boolean = () => false;

    dispatchEvent(event: EventType) {
        this.listeners.forEach(cb => {
            cb(event);
        })
    }
}