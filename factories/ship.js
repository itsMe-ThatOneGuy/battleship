export class Ship {
	constructor(name, length) {
		this.name = name;
		this.length = length;
		this.hits = 0;
		this.sunk = false;
	}

	getName() {
		return this.name;
	}

	getLength() {
		return this.length;
	}

	hit() {
		this.hits++;
		this.isSunk();
	}

	getHits() {
		return this.hits;
	}

	isSunk() {
		return this.hits === this.length ? (this.sunk = true) : false;
	}

	getSunk() {
		return this.sunk;
	}
}
