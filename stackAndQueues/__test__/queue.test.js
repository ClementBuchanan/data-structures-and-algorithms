'use strict';


const Queue = require('../queues/queues.js');

describe('queue test', () => {
    it('should enqueue into a queue', () => {
        const setup = new Queue;
        setup.enqueue(25);
        expect(setup.storage.length).toEqual(1);
    });

    it('should enqueue multiple items into a queue', () => {
        const setup = new Queue;
        setup.enqueue(25);
        setup.enqueue(32);
        expect(setup.storage.length).toEqual(2);
    });

    it('should enqueue multiple items into a queue', () => {
        const setup = new Queue;
        setup.enqueue(25);
        setup.enqueue(32);
        expect(setup.storage.length).toEqual(2);
    });

});


