const options = ['rock', 'paper', 'scissors']

const computerPlay = () => {
  return options[Math.floor(Math.random() * 3)]
}

const playRound = (playerSelection, computerSelection) => {
  const player = options.indexOf(playerSelection)
  const computer = options.indexOf(computerSelection)
  if (player === 0 && computer === 1) {
    return 'You lost the round! Paper beats Rock'
  } else if (player === 0 && computer === 2) {
    return 'You won the round! Rock beats Scissors'
  } else if (player === 1 && computer === 0) {
    return 'You won the round! Paper beats Rock'
  } else if (player === 1 && computer === 2) {
    return 'You lost the round! Scissors beats Paper'
  } else if (player === 2 && computer === 0) {
    return 'You lost the round! Rock beats Scissors'
  } else if (player === 2 && computer === 1) {
    return 'You won the round! Scissors beats Paper'
  } else {
    return 'Tie! No one wins'
  }
}
