class Observer {
  constructor(clock, task) {
    this.createdTick = clock.getTick();
    this.currTick = clock.getTick();
    this.lastTick = clock.getTick();
    this.task = task;
    this.watching = false;
    this.start();
  }

  start() {
    this.task();
    this.watching = setInterval(() => this.step(), 20);
  }

  stop() {
    clearInterval(this.watching);
    this.watching = false;
  }

  async step() {
    this.currTick = clock.getTick();
    if (this.lastTick != this.currTick && clock.running) {
      this.lastTick = this.currTick;
      this.task();
    }
  }
}
