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