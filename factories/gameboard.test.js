import Gameboard from './gameboard';

describe('gameboard', () => {
	let testGameboard;
	beforeAll(() => {
		testGameboard = new Gameboard();
		return testGameboard;
	});

	test('Gameboard is created with 10 columns', () => {
		expect(testGameboard.gameboard.length).toBe(10);
	});

	test('Gameboard is created with 10 rows', () => {
		expect(testGameboard.gameboard[0].length).toBe(10);
	});

	test('Ship is placed horizontally starting at provided space', () => {
		expect(testGameboard.placeShip(0, 0, 'horizontal', { length: 2 }));
	});

	test('Ship is placed vertically starting at provided space', () => {
		expect(testGameboard.placeShip(0, 0, 'vertical', { length: 2 }));
	});

	test('Ship is not placed horizontally if ship would be out of bounds', () => {
		expect(testGameboard.placeShip(9, 0, 'horizontal', { length: 2 }));
	});

	test('Ship is not placed vertically if ship would be out of bounds', () => {
		expect(testGameboard.placeShip(0, 9, 'horizontal', { length: 2 }));
	});

	test('Board receives attacks', () => {});

	test('Board keeps track of missed shots', () => {});

	test('Board reports if ship has sunk', () => {});
});
