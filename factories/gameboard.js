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

	getGameboard() {
		return this.gameboard;
	}

	validateShipPosition(column, row, direction, ship) {
		let positionValid;
		for (let i = 0; i < ship.length; i++) {
			if (direction === 'vertical') {
				if (row + ship.length > 10) {
					positionValid = false;
					break;
				} else if (this.gameboard[column][i].ship !== null) {
					positionValid = false;
					break;
				} else {
					positionValid = true;
				}
			}

			if (direction === 'horizontal') {
				if (column + ship.length > 10) {
					positionValid = false;
					break;
				} else if (this.gameboard[column][i].ship !== null) {
					positionValid = false;
					break;
				} else {
					positionValid = true;
				}
			}
		}
		return positionValid;
	}

	placeShip(column, row, direction, ship) {
		const placementValidation = this.validateShipPosition(
			column,
			row,
			direction,
			ship
		);

		if (placementValidation === true) {
			if (direction === 'vertical') {
				for (let i = 0; i < ship.length; i++) {
					this.gameboard[column][i].ship = ship;
				}
			}
			if (direction === 'horizontal') {
				for (let i = 0; i < ship.length; i++) {
					this.gameboard[i][row].ship = ship;
				}
			}
		}
		return placementValidation;
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
