import {Observable} from "../util/Observable";

it('should call on next function when the observable emits', function (done) {
    const subject = new Observable();

    subject.subscribe((incomingData) => {
        expect(incomingData).toEqual({some: 'data'});
        done();
    });

    subject.next({some: 'data'});
});