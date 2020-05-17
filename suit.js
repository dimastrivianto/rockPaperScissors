let computerPlay = () => {
    let result = Math.round(Math.random()*2)
    if(result == 0) return 'paper'
    if(result == 1) return 'rock'
    if(result == 2) return 'scissors'
}

let playRound = (playerSelection, computerSelection) => {
    if(computerSelection == playerSelection) return 'draw'
    if(computerSelection == 'paper') return (playerSelection == 'rock') ? 'you lose! paper beat rock' : 'you win! scissors beat paper'
    if(computerSelection == 'rock') return (playerSelection == 'scissors') ? 'you lose! rock beat scissors' : 'you win! paper beat rock'
    if(computerSelection == 'scissors') return (playerSelection == 'paper') ? 'you lose! scissors beat paper' : 'you win! rock beat scissors'
}
let game = () => {
    let playerWin = 0;
    let computerWin = 0;
    //coba pakai do while
    for(let i=0; i<5; i++) {
        const playerSelection = prompt('Please input your selection:').toLowerCase()
        const computerSelection = computerPlay()
        let patt = /lose!/g
        let result = playRound(playerSelection, computerSelection)
        if(patt.test(result)){
            console.log(result)
            computerWin++
        }else if(result == 'draw'){
            console.log("it's a draw")
        }else{
            playerWin++
            console.log('you win')
        }
    }
    if(computerWin > playerWin) return console.log(`you lose against computer, score: ${playerWin} vs ${computerWin}`)
    if(playerWin > computerWin) return console.log(`you win against computer, score: ${playerWin} vs ${computerWin}`)
    return console.log(`it's a draw, score: ${playerWin} vs ${computerWin}`)
}
game()