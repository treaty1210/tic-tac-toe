//module for Gameboard
let Gameboard = (() => {
    let board = [];
    return {board};
})();

// module for Gamecontroller
let Gamecontroller = (() => {
    //add marks to board
    const placeMarker = document.querySelectorAll(".gameBtn");

    let index = 0;
    placeMarker.forEach(place => {
        place.dataset.linkedButton = index;
        place.addEventListener("click", render);

        //moved render function here and changed it to loop through each node
        function render() {
            const gridBoxes = document.querySelectorAll(".gridBox");

            let index = 0;
            gridBoxes.forEach(gridBox => {
                gridBox.dataset.linkedButton = index;

                if (gridBox.getAttribute("data-linked-button") == place.getAttribute("data-linked-button")) {

                    //adding turn switching between player1 and player 2
                    if (player1.turn === true) {
                    gridBox.textContent = player1.marker;
                    player1.turn = false;
                    player2.turn = true;
                    } else if (player2.turn === true) {
                        gridBox.textContent = player2.marker;
                        player1.turn = true;
                        player2.turn = false;
                    } else {
                        return;
                    }
                } 
                index++
            })
        }
        index++
    })
})();

//factory for players
let createPlayer = (playerName, marker, turn) => {
    return {playerName, marker, turn};
};

const player1 = createPlayer("player 1", "X", true);
const player2 = createPlayer("player 2", "O", false);