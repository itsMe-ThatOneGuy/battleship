export class Ship {
    constructor(length) {
        this.length = length;
        this.hits = 0;
    }

    test() {
        return 'hello world';
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
