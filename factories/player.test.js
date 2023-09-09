import Player from './player';

describe('player', () => {
	let player;
	beforeEach(() => {
		player = new Player();
	});

	it('Player is created with a gameboard', () => {
		expect(typeof player.gameboard).toBe('object');
	});

	it('Player can call the gameboard placeShip method', () => {
		expect(
			player.gameboard.placeShip(0, 0, 'horizontal', player.ships[0])
		).toBe(true);
		console.log(player.gameboard.getGameboard()[0][0]);
	});
});
