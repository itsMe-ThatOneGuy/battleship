import { Ship } from './ship.js';
import Gameboard from './gameboard';

class Player {
	constructor() {
		this.ships = [
			new Ship('a', 2),
			new Ship('b', 3),
			new Ship('c', 3),
			new Ship('d', 4),
			new Ship('e', 5),
		];
		this.gameboard = new Gameboard();
	}
}

export default Player;
