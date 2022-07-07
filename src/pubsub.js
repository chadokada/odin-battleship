const pubSub = {
  subscribers: {},
  publish(eventName, data) {
    if (!Array.isArray(this.subscribers[eventName])) {
      return;
    }
    this.subscribers[eventName].forEach((callback) => {
      callback(data);
    });
  },
  subscribe(eventName, callback) {
    if (!Array.isArray(this.subscribers[eventName])) {
      this.subscribers[eventName] = [];
    }
    this.subscribers[eventName].push(callback);
  },
  unsubscribe(eventName) {
    const { length } = this.subscribers[eventName];
    if (this.subscribers[eventName].length > 1) {
      pubSub.subscribers[eventName].splice(1, length);
    }
  },
};

export default pubSub;
