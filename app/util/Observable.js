"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Observable = /** @class */ (function () {
    function Observable() {
        var _this = this;
        this.fxnsToCallOnNext = [];
        this.fxnsToCallOnErr = [];
        this.fxnsToCallOnComplete = [];
        this.subscribe = function (onNext, onErr, onComplete) {
            if (onNext) {
                _this.fxnsToCallOnNext.push(onNext);
            }
        };
    }
    Observable.prototype.next = function (nextObjectToEmit) {
        this.fxnsToCallOnNext.forEach(function (fxn) {
            fxn.apply(null, [nextObjectToEmit]);
        });
    };
    return Observable;
}());
exports.Observable = Observable;
