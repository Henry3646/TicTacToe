let winningCombos = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]]
let board = [null,null,null,null,null,null,null,null,null]
let playerTurn = 0
let currPlayer = 0
let winner = false
const grid1 = document.getElementById('grid1')
const grid2 = document.getElementById('grid2')
const grid3 = document.getElementById('grid3')
const grid4 = document.getElementById('grid4')
const grid5 = document.getElementById('grid5')
const grid6 = document.getElementById('grid6')
const grid7 = document.getElementById('grid7')
const grid8 = document.getElementById('grid8')
const grid9 = document.getElementById('grid9')
const info = document.getElementById('info')

grid1.onclick = () => fillBoard(0)
grid2.onclick = () => fillBoard(1)
grid3.onclick = () => fillBoard(2)
grid4.onclick = () => fillBoard(3)
grid5.onclick = () => fillBoard(4)
grid6.onclick = () => fillBoard(5)
grid7.onclick = () => fillBoard(6)
grid8.onclick = () => fillBoard(7)
grid9.onclick = () => fillBoard(8)

function fillBoard(i) {
    if (playerTurn % 2 == 0){
        board[i] = 'X'
    }
    else {board[i] = 'O'}
    playerTurn += 1
    currPlayer = (playerTurn % 2) + 1
    writeBoard(i,board[i])
    infoUpdate()
    
    
}

function writeBoard(i,s) {
    switch(i){
        case 0:
            grid1.textContent = s
            grid1.style.pointerEvents = 'none'
        break;
        case 1:
            grid2.textContent = s
            grid2.style.pointerEvents = 'none'
        break;
        case 2:
            grid3.textContent = s
            grid3.style.pointerEvents = 'none'
        break;
        case 3:
            grid4.textContent = s
            grid4.style.pointerEvents = 'none'
        break;
        case 4:
            grid5.textContent = s
            grid5.style.pointerEvents = 'none'
        break;
        case 5:
            grid6.textContent = s
            grid6.style.pointerEvents = 'none'
        break;
        case 6:
            grid7.textContent = s
            grid7.style.pointerEvents = 'none'
        break;
        case 7:
            grid8.textContent = s
            grid8.style.pointerEvents = 'none'
        break;
        case 8:
            grid9.textContent = s
            grid9.style.pointerEvents = 'none'
        break;
        default:
            console.log('error in switch')
    }

}

function infoUpdate() {
    if (checkWinner()){
        playerTurn += 1
        currPlayer = playerTurn % 2 + 1
        info.textContent = ("Player " + currPlayer + " won the game! Refresh to play again!")
    }
    else if (gameFull()) {
        info.textContent = ("It's a tie! Refresh to play again!")
    }
    else {
        info.textContent = ("It is Player " + currPlayer + "'s turn")
    }
}

function checkWinner() {
    for(let i = 0 ; i < winningCombos.length ; i++){
        if(board[winningCombos[i][0]] == board[winningCombos[i][1]] && board[winningCombos[i][0]] == board[winningCombos[i][2]] && board[winningCombos[i][0]] != null){
            lockAll()
            console.log('winner')
            return true
        }
    }
}

function gameFull() {
    for (let i = 0; i < board.length ; i++){
        if(board[i] == null){
            return false
        }
    }
    return true
}

function lockAll() {
    grid1.style.pointerEvents = 'none'
    grid2.style.pointerEvents = 'none'
    grid3.style.pointerEvents = 'none'
    grid4.style.pointerEvents = 'none'
    grid5.style.pointerEvents = 'none'
    grid6.style.pointerEvents = 'none'
    grid7.style.pointerEvents = 'none'
    grid8.style.pointerEvents = 'none'
    grid9.style.pointerEvents = 'none'

}