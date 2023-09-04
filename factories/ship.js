export class Ship {
	constructor(name, length) {
		this.name = name;
		this.length = length;
		this.hits = 0;
	}

	getName() {
		return this.name;
	}

	getLength() {
		return this.length;
	}

	hit() {
		return this.hits++;
	}

	getHits() {
		return this.hits;
	}

	isSunk() {
		return this.hits === this.length ? true : false;
	}
}
