const playerScoreDisplay = document.querySelector('.player span')
const computerScoreDisplay = document.querySelector('.computer span')
const resultDisplay = document.querySelector('#resultDisplay')

const options = ['rock', 'paper', 'scissors']
let playerScore = 0
let computerScore = 0

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

const game = playerSelection => {
  const result = playRound(playerSelection, computerPlay())
  if (result.includes('lost')) {
    computerScore++
  } else if (result.includes('won')) {
    playerScore++
  }

  playerScoreDisplay.textContent = playerScore
  computerScoreDisplay.textContent = computerScore
  resultDisplay.textContent = result

  console.log(
    `${result}, your score is ${playerScore}, the computer's score is ${computerScore}.`
  )
}

const buttons = [...document.querySelectorAll('button')]
buttons.forEach(button =>
  button.addEventListener('click', e => {
    const playerSelection = e.target.dataset.choice
    game(playerSelection)
  })
)
