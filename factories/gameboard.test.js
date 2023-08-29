import Gameboard from './gameboard';

describe('gameboard', () => {
	let testGameboard;
	beforeAll(() => {
		testGameboard = new Gameboard();
		return testGameboard;
	});

	test('Gameboard is created as a 10x10 grid', () => {
		expect(testGameboard.gameboard.length).toBe(10);
	});

	test('Ship should be placed a provided space', () => {});

	test('Board receives attacks', () => {});

	test('Board keeps track of missed shots', () => {});

	test('Board reports if ship has sunk', () => {});
});
