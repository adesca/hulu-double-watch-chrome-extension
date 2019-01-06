import PartialBrowser = Types.PartialBrowser;


export module Types {
    export type RecursivePartial<T> = {
        [P in keyof T]?:
        T[P] extends (infer U)[] ? RecursivePartial<U>[] :
            T[P] extends object ? RecursivePartial<T[P]> :
                T[P];
    };

    export type PartialBrowser = {
        runtime: {onConnect: typeof browser.runtime.onConnect};
        pageAction: Partial<typeof browser.pageAction>;
        tabs:  Partial<typeof browser.tabs>
    }
}

export class BrowserUser {
    protected browser: PartialBrowser;

    constructor(globalBrowser: PartialBrowser) {
        this.browser = globalBrowser;

    }

}