import { Ship } from './ship.js';

describe('Ship', () => {
	let testShip;
	beforeEach(() => {
		testShip = new Ship('test', 1);
	});

	test('Shit is made with given name', () => {
		expect(testShip.getName()).toBe('test');
	});

	test('Ship is made with given length', () => {
		expect(testShip.getLength()).toBe(1);
	});

	test('Ship receives hits', () => {
		testShip.hit(1);
		expect(testShip.getHits()).toBe(1);
	});

	test('Ship is sunk', () => {
		testShip.hit(1);
		expect(testShip.getSunk()).toBe(true);
	});
});
