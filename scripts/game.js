const options = ['rock', 'paper', 'scissors']

let playerScore = 0
let computerScore = 0
let round = 1

const computerPlay = () => {
  return options[Math.floor(Math.random() * 3)]
}

const playRound = (playerSelection, computerSelection) => {
  const player = options.indexOf(playerSelection)
  const computer = options.indexOf(computerSelection)
  round++
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

const encouragementPhrases = [
  'Go on!',
  'You can do this',
  'Beat the AI already!',
  'You better not lose to a computer',
  'Okay, this game is random',
  'No skill required but yeah',
  "Let's go!",
]

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

  if (playerScore === 5) {
    roundDisplay.textContent = 'Game Over!'
    optionDisplay.textContent = 'Winner!'
    resultDisplay.textContent = 'You reached 5 points and won the game!'
    resultDisplay.classList.add('winner')
    disableChoices(true)
    resetButton.style.visibility = 'visible'
    resetButton.style.opacity = 1
  } else if (computerScore === 5) {
    roundDisplay.textContent = 'Game Over!'
    optionDisplay.textContent = 'Loser!'
    resultDisplay.textContent =
      'You lost, the computer reached 5 points and won the game!'
    resultDisplay.classList.add('loser')
    disableChoices(true)
    resetButton.style.visibility = 'visible'
    resetButton.style.opacity = 1
  } else if (playerScore < 5 && computerScore < 5) {
    setTimeout(() => {
      roundDisplay.querySelector('span').textContent = round
      resultDisplay.textContent =
        encouragementPhrases[
          Math.floor(Math.random() * encouragementPhrases.length)
        ]
      disableChoices(true)
    }, 1000)
    disableChoices(false)
  }
}
