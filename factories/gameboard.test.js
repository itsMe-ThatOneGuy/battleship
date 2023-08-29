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

	test('Ship should be placed a provided space', () => {});

	test('Board receives attacks', () => {});

	test('Board keeps track of missed shots', () => {});

	test('Board reports if ship has sunk', () => {});
});
