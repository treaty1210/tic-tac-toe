//module for Gameboard
let Gameboard = (() => {
    let board = ["X"];
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
                    gridBox.textContent = Gameboard.board[Gameboard.board.length - 1];
                    console.log(place.dataset.linkedButton)
                    console.log(gridBox.dataset.linkedButton)
                } 
                index++
            })
        }
        index++
    })
})();

//factory for players
let createPlayer = (playerName, marker) => {
    return {playerName, marker};
};



function box() {
    placeMarker.addEventListener("click", function() {
        alert("is this working")
    })
}