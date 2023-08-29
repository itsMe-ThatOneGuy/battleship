import Gameboard from './gameboard';

describe('gameboard', () => {
	let testGameboard;
	beforeEach(() => {
		testGameboard = new Gameboard();
	});

	test('Gameboard is created with 10 columns', () => {
		expect(testGameboard.gameboard.length).toBe(10);
	});

	test('Gameboard is created with 10 rows', () => {
		expect(testGameboard.gameboard[0].length).toBe(10);
	});

	test('Ship is placed horizontally starting at provided space', () => {
		testGameboard.placeShip(0, 0, 'horizontal', {
			length: 2,
			name: 'testShip',
		});
		expect(
			testGameboard.gameboard[0][0].ship.name &&
				testGameboard.gameboard[1][0].ship.name
		).toBe('testShip');
	});

	test('Ship is placed vertically starting at provided space', () => {
		testGameboard.placeShip(0, 0, 'vertical', { length: 2, name: 'testShip' });
		expect(
			testGameboard.gameboard[0][0].ship.name &&
				testGameboard.gameboard[0][1].ship.name
		).toBe('testShip');
	});

	test('Ship is not placed horizontally if ship would be out of bounds', () => {
		expect(testGameboard.placeShip(9, 0, 'horizontal', { length: 2 })).toBe(
			'Ship too long'
		);
	});

	test('Ship is not placed vertically if ship would be out of bounds', () => {
		expect(testGameboard.placeShip(0, 9, 'vertical', { length: 2 })).toBe(
			'Ship too long'
		);
	});

	test('Board receives attacks', () => {
		testGameboard.placeShip(0, 0, 'horizontal', {
			length: 2,
		});
		expect(testGameboard.receiveAttack(0, 0)).toBe(true);
	});

	test('Board keeps track of missed shots', () => {
		testGameboard.receiveAttack(0, 0);
		expect(testGameboard.getMisses(0, 0)).toBe(true);
	});

	test('Board reports if ship has sunk', () => {});
});
