// Subject.js
class Subject {
    constructor() {
        this.observers = [];
    }

    attach(observer) {
        this.observers.push(observer);
    }

    notify(bookingInfo) {
        this.observers.forEach(observer => observer.update(bookingInfo));
    }
}

module.exports = Subject;
