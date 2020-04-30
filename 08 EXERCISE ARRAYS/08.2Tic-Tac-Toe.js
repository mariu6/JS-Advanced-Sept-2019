function engine(movesArray) {
    const board = [...Array(3)].map(x => Array(3).fill(false));
    const magicSquare = [4, 9, 2, 3, 5, 7, 8, 1, 6];
    const p1Symbol = "X";
    const p2Symbol = "O";

    let winner = null;
    let turnCounter = 0;
    let isP1Turn = true;
    while ((winner = checkForWinner(board)) === null && areThereEmptySpacesOnBoard() === true) {
        let [yCoord, xCoord] = movesArray[turnCounter].split(" ").map(x => Number.parseInt(x));
        turnCounter++;
        if (board[yCoord][xCoord] !== false) {
            console.log("This place is already taken. Please choose another!");
            continue;
        }
        
        let playerSymbol = isP1Turn ? p1Symbol : p2Symbol;
        isP1Turn = !isP1Turn;
        board[yCoord][xCoord] = playerSymbol;
    }

    winner !== null ? console.log(`Player ${winner} wins!`) : console.log("The game ended! Nobody wins :(");
    printBoard(board);

    function checkForWinner() {
        return hasPlayerWon(p1Symbol) ? p1Symbol : hasPlayerWon(p2Symbol) ? p2Symbol : null;
    }

    function areThereEmptySpacesOnBoard() {
        return board.reduce((flat, next) => flat.concat(next), []).some(x => x === false)
    }

    function hasPlayerWon(player) {
        // Costly operation, but we only work with 3x3 matrices.
        let flattened = board.flat();
        for (let i = 0; i < flattened.length; i++)
            for (let j = 0; j < flattened.length; j++)
                for (let k = 0; k < flattened.length; k++)
                    if (i != j && i != k && j != k)
                        if (flattened[i] == player && flattened[j] == player && flattened[k] == player)
                            if (magicSquare[i] + magicSquare[j] + magicSquare[k] == 15)
                                return true;
        return false;
    }

    function printBoard() {
        board.forEach(x => console.log(x.join("\t")))
    };
}
engine(["0 1", "0 0", "0 2",  "2 0", "1 1", "1 0", "1 2", "2 2", "2 1", "0 0"]);