class GameboardSpace {
	constructor(ship = null) {
		this.ship = ship;
		this.hit = null;
		this.miss = null;
	}
}

class Gameboard {
	constructor() {
		this.gameboard = this.createGameboard();
	}

	createGameboard() {
		return new Array(10)
			.fill(new GameboardSpace())
			.map((_) => new Array(10).fill(new GameboardSpace()));
	}
}

export default Gameboard;
