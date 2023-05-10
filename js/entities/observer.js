export default class Observer {
  constructor(clock, task) {
    this.clock = clock;
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
    this.currTick = this.clock.getTick();
    if (this.lastTick != this.currTick && this.clock.running) {
      this.lastTick = this.currTick;
      this.task();
    }
  }
}
