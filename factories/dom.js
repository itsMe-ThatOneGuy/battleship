const boardDiv = document.querySelector('#game-space');
const gameboards = document.createElement('div');

const createBoardDom = () => {
	const gameboard = document.createElement('div');
	gameboard.classList.add('board-container');

	for (let i = 0; i < 10; i++) {
		let row = document.createElement('div');
		for (let j = 0; j < 10; j++) {
			let column = document.createElement('div');
			column.classList.add('spaces');
			column.setAttribute('data-column', `${i}`);
			column.setAttribute('data-row', `${j}`);
			row.appendChild(column);
			column.addEventListener('click', (e) => {
				console.log(
					`column: ${e.target.dataset.column}`,
					`row: ${e.target.dataset.row}`
				);
			});
		}
		gameboard.appendChild(row);
	}
	return gameboard;

	// boardDiv.appendChild(gameboard);
};
boardDiv.appendChild(createBoardDom());
const testDiv = document.createElement('div');
