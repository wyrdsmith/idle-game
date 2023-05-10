class Clock {
	constructor() {
		this.tick = 0; // current tick the clock is on
		this.inc = 1; // how many ticks get incremented to with each tock
		this.rate = 1000; // the number of milliseconds per tick
		this.running = false;
	}

	reset(full = false) {
		this.stop();
		this.setTime(0);
		if (full) {
			this.setInc(1);
			this.setRate(1000);
		}
		this.start();
	}

	setTick(time) {
		this.tick = time;
	}
	getTick() {
		return this.tick;
	}

	setInc(amount) {
		this.inc = amount;
	}
	getInc() {
		return this.inc;
	}

	setRate(rate) {
		this.rate = rate;
	}
	getRate() {
		return this.rate;
	}

	start() {
		this.running = setTimeout(() => this.tock(), this.rate);
	}
	stop() {
		clearTimeout(this.running);
		this.running = false;
	}
	tock() {
		this.setTick(this.tick + this.inc);
		this.running = setTimeout(() => this.tock(), this.rate);
	}
}
