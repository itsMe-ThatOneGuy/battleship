import { Ship } from './ship.js';

describe('Ship', () => {
	let testShip;
	beforeAll(() => {
		testShip = new Ship(1);
		return testShip;
	});

	test('Ship Method test returns hello world', () => {
		expect(testShip.test()).toBe('hello world');
	});

	test('Ship receives hits', () => {
		testShip.hit(1);
		expect(testShip.getHits()).toBe(1);
	});

	test('Ship is sunk', () => {
		expect(testShip.isSunk()).toBeTruthy();
	});
});
