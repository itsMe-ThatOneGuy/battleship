import { Ship } from './ship.js';

describe('Ship', () => {
	test('Ship Method test returns hello world', () => {
		const testShip = new Ship();
		expect(testShip.test()).toBe('hello world');
	});
});
