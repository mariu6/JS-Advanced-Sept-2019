function ticTacToe(arr) {
    let currentPlay = 'X';
    let winner = false;
    let playerWin = '';
    let tic =
        [
            [false, false, false],
            [false, false, false],
            [false, false, false]
        ]
 
    for (let i = 0; i < arr.length; i++) {
        let [x, y] = arr[i].split(' ');
 
        currentPlay = playXO(x, y, currentPlay);
        if (isWon() || isFull()) {
            break;
        };
    }
 
    winner
        ? console.log(`Player ${playerWin} wins!`)
        : console.log("The game ended! Nobody wins :(")
    tic.forEach(el => {
        console.log(el.join('\t'));
    })
 
 
    function playXO(x, y, z) {
        if (tic[x][y] === false) {
            tic[x][y] = z
            if (z === 'X') {
                return 'O';
            } else {
                return 'X';
            }
        } else {
            console.log("This place is already taken. Please choose another!");
            return z;
        }
 
    }
 
    function isWon() {
        for (let i = 0; i < 3; i++) {
            let row = tic[i][0] === tic[i][1] && tic[i][1] === tic[i][2];
            let column = tic[0][i] === tic[1][i] && tic[1][i] === tic[2][i];
 
            if (row && tic[i][0] !== false) {
                winner = true;
                tic[i][0] === 'X' ? playerWin = 'X' : playerWin = 'O';
                return true;
            }
 
            if (column && tic[0][i] !== false) {
                winner = true;
                tic[0][i] === 'X' ? playerWin = 'X' : playerWin = 'O';
                return true;
            }
        }
        let diagonal1 = tic[0][0] === tic[1][1] && tic[1][1] === tic[2][2];
        let diagonal2 = tic[0][2] === tic[1][1] && tic[1][1] === tic[2][0];
 
        if ((diagonal1 || diagonal2) && tic[1][1] !== false) {
            winner = true;
            tic[1][1] === 'X' ? playerWin = 'X' : playerWin = 'O';
            return true;
        }
 
        return false;
    }
 
    function isFull() {
        let copy = tic;
        copy = copy.flat(1)
        if (copy.includes(false)) {
            return false;
        }
        return true;
    }
}
ticTacToe(["0 1", "0 0", "0 2",  "2 0", "1 1", "1 0", "1 2", "2 2", "2 1", "0 0"]);