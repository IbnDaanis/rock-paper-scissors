const options = ['rock', 'paper', 'scissors']

const computerPlay = () => {
  return options[Math.floor(Math.random() * 3)]
}

const playRound = (playerSelection, computerSelection) => {
  const player = options.indexOf(playerSelection)
  const computer = options.indexOf(computerSelection)
  if (player === 0 && computer === 1) {
    return 'You lost! Paper beats Rock'
  } else if (player === 0 && computer === 2) {
    return 'You won! Rock beats Scissors'
  } else if (player === 1 && computer === 0) {
    return 'You won! Paper beats Rock'
  } else if (player === 1 && computer === 2) {
    return 'You lost! Scissors beats Paper'
  } else if (player === 2 && computer === 0) {
    return 'You lost! Rock beats Scissors'
  } else if (player === 2 && computer === 1) {
    return 'You won! Scissors beats Paper'
  } else {
    return 'Tie! No one wins'
  }
}
