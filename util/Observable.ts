
export class Observable <T> {
    private fxnsToCallOnNext: Function[] = [];
    private fxnsToCallOnErr: Function[] = [];
    private fxnsToCallOnComplete: Function[] = [];


    subscribe = (onNext: (arg: T) => void, onErr?: (arg: any) => void, onComplete?: () => void) => {
        if(onNext) {
            this.fxnsToCallOnNext.push(onNext);
        }
    };


    next(nextObjectToEmit: T) {
        this.fxnsToCallOnNext.forEach(fxn => {
            fxn.apply(null, [nextObjectToEmit]);
        })
    }
}