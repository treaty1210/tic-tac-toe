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

let render = (() => {
    const gridBoxes = document.querySelectorAll(".gridBox");
    for (i = 0; i < 9; i++) {
        gridBoxes[i].textContent = Gameboard.board;
    }
    return {};
})()