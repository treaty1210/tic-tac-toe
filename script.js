let displayMsg = document.querySelector(".displayMsg");


//module for gameBoard
let gameBoard = (() => {

    //Create a board array
    let board = [];
    for (i = 0; i < 9; i++) {
        board.push("");
    }

    //query selector for board
    let gridBox = document.querySelector(".gridBox")

    board.forEach((item, index) => {
        const box = document.createElement("div");
        box.className = "box";
        gridBox.appendChild(box);
    })
    
    Array.from(gridBox.children).forEach((box, index) => {
        box.addEventListener("click", () => {

            //uses current player's marker
            box.textContent = gameController.currentPlayer.marker
            //updates the array value to match marker
            board[index] = gameController.currentPlayer.marker;

            //prevent overriding of clicks
            box.style.pointerEvents = "none";

            //after every click, a spot should close
            gameController.openSpots -= 1;

            //check for winner
            gameController.winCheck();
            if (gameController.win == false) {
                if (gameController.openSpots > 0) {
                    gameController.switchPlayer();
                } else if (gameBoard.openSpots == 0) {
                    console.log("tie")
                }
            }
        })
    })
    return {board};
})();

//factory for players
let createPlayer = (playerName, marker) => {
    return {playerName, marker};
};




// module for gameController
let gameController = (() => {
    
    const player1 = createPlayer("player 1", "X");
    const player2 = createPlayer("player 2", "O");

    //Switch player turn
    let currentPlayer = player1;

    function switchPlayer() {
        if (this.currentPlayer === player1) {
            this.currentPlayer = player2;
        } else {
            this.currentPlayer = player1;
        }
    }

    let openSpots = 9;
    let win = false;
    //Win condition
    const winCondition = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    //win check
    function winCheck() {
        winCondition.forEach((item, index) => {
            if (gameBoard.board[item[0]] === this.currentPlayer.marker && gameBoard.board[item[1]] === this.currentPlayer.marker && gameBoard.board[item[2]] === this.currentPlayer.marker) {
                this.win = true
                console.log(`${this.currentPlayer.name} winner`)
                displayMsg.textContent = `${this.currentPlayer.name} is the winner!`;
            }
        })
    }
        return {
            win,
            currentPlayer,
            switchPlayer,
            openSpots,
            winCheck,
        }
})();



    


