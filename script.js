// function Gameboard() {
//     const rows = 2;
//     const columns = 7;
//     const board = [];
    
//     for (i = 0; i < rows; i++) {
//         board[i] = [];
//         for (j = 0; j < columns; i++) {
//             board[i].push(Cell());
//         }
//     }
//     const getBoard = () => board;
// }

//module for Gameboard
let Gameboard = (() => {
    let board = ["X"];
    return {board};
})();

//module for Gamecontroller
// let Gamecontroller = (() => {
// })();

//factory for players
let createPlayer = (playerName, marker) => {
    return {playerName, marker};
};

let player1 = createPlayer("Player 1", "X");