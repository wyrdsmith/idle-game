class Observer {
	constructor(task) {
		this.createdTick = gameclock.getTick();
		this.currTick = gameclock.getTick();
		this.lastTick = gameclock.getTick();
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
		this.currTick = gameclock.getTick();
		if (this.lastTick != this.currTick && gameclock.running) {
			this.lastTick = this.currTick;
			this.task();
		}
	}
}
