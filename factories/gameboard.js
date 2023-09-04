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

	placeShip(column, row, direction, ship) {
		if (direction === 'vertical') {
			if (row + ship.length > 10) {
				return false;
			} else {
				for (let i = 0; i < ship.length; i++) {
					this.gameboard[column][i].ship = ship;
				}
				return true;
			}
		}

		if (direction === 'horizontal') {
			if (column + ship.length > 10) {
				return false;
			} else {
				for (let i = 0; i < ship.length; i++) {
					this.gameboard[i][row].ship = ship;
				}
				return true;
			}
		}
	}

	receiveAttack(column, row) {
		const space = this.gameboard[column][row];
		if (space.ship !== null) {
			space.hit = true;
			space.ship.hit();
		} else {
			space.miss = true;
		}
		return true;
	}

	getHits(column, row) {
		const space = this.gameboard[column][row];
		return space.hit;
	}

	getMisses(column, row) {
		const space = this.gameboard[column][row];
		return space.miss;
	}

	isShipSunk(ship) {
		return ship.getSunk();
	}
}
export default Gameboard;
