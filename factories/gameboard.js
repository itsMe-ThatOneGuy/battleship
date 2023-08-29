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
				return 'Ship too long';
			} else {
				for (let i = 0; i < ship.length; i++) {
					this.gameboard[column][i].ship = ship;
				}
			}
		}

		if (direction === 'horizontal') {
			if (column + ship.length > 10) {
				return 'Ship too long';
			} else {
				for (let i = 0; i < ship.length; i++) {
					this.gameboard[i][row].ship = ship;
				}
			}
		}
	}
}
export default Gameboard;
