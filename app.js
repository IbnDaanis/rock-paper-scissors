const options = ['rock', 'paper', 'scissors']

const computerPlay = () => {
  return options[Math.floor(Math.random() * 3)]
}

const playRound = (playerSelection, computerSelection) => {
  const player = options.indexOf(playerSelection)
  const computer = options.indexOf(computerSelection)
  if (player === 0 && computer === 1) {
    return 'You lose! Paper beats Rock'
  } else if (player === 0 && computer === 2) {
    return 'You win! Rock beats Scissors'
  } else if (player === 1 && computer === 0) {
    return 'You win! Paper beats Rock'
  } else if (player === 1 && computer === 2) {
    return 'You lose! Scissors beats Paper'
  } else if (player === 2 && computer === 0) {
    return 'You lose! Rock beats Scissors'
  } else if (player === 2 && computer === 1) {
    return 'You win! Scissors beats Paper'
  } else {
    return 'Tie! No one wins'
  }
}

const game = () => {
  let playerScore = 0
  let computerScore = 0

  for (let i = 0; i < 5; i++) {
    const playerSelection = prompt('Rock, Paper, or Scissors?').toLowerCase()
    const result = playRound(playerSelection, computerPlay())
    if (result.includes('lose')) {
      computerScore++
    } else if (result.includes('won')) {
      playerScore++
    }

    console.log(
      `${result}, your score is ${playerScore}, the computer's score is ${computerScore}.`
    )
  }
}

// const buttons = document.querySelectorAll('button')
// buttons.forEach(button => {
//   button.onclick(() => console.log(button.dataset.choice))
// })

// console.log([...buttons].map(button => button.dataset.choice))
