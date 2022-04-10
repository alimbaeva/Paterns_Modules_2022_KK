function EventObserver() {
    this.observers = [];
}

EventObserver.prototype = {
    subscribe: function (fn) {
        this.observers.push(fn);
        console.log(`Subscribed to: ${fn.name}`)
    },

    unsubscribe: function (fn) {
        this.observers = this.observers.filter(item => {
            if (item !== fn) {
                return item;
            }
        });

        console.log(`Unsubscribed from ${fn.name}`)
    },

    fire: function () {
        this.observers.forEach((item) => {
            item.call();
        });
    },
};

const click = new EventObserver();
document.querySelector('.sub-ms').addEventListener('click', () => {
    click.subscribe(getCurrentMilliseconds);
});

const getCurrentMilliseconds = function () {
    console.log(`Current ms: ${new Date().getMilliseconds()}`)
};

document.querySelector('.unsub-ms').addEventListener('click', () => {
    click.unsubscribe(getCurrentMilliseconds);
});
document.querySelector('.fire').addEventListener('click', () => {
    click.fire(getCurrentMilliseconds);
});