const playerScoreDisplay = document.querySelector('.player span')
const computerScoreDisplay = document.querySelector('.computer span')
const resultDisplay = document.querySelector('#resultDisplay')
const buttons = [...document.querySelectorAll('.choices button')]
const resetButton = document.querySelector('#reset')

let playerScore = 0
let computerScore = 0

const disableButtons = trueOrFalse => {
  buttons.forEach(button => {
    button.disabled = trueOrFalse
    button.classList.toggle('disabled')
  })
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

  if (playerScore === 5) {
    resultDisplay.textContent = 'You reached 5 points and won the game!'
    resultDisplay.classList.add('winner')
    disableButtons(true)
    resetButton.style.visibility = 'visible'
    resetButton.style.opacity = 1
  } else if (computerScore === 5) {
    resultDisplay.textContent =
      'You lost, the computer reached 5 points and won the game!'
    resultDisplay.classList.add('loser')
    disableButtons(true)
    resetButton.style.visibility = 'visible'
    resetButton.style.opacity = 1
  }
}

buttons.forEach(button =>
  button.addEventListener('click', e => {
    const playerSelection = e.target.dataset.choice
    game(playerSelection)
  })
)

const reset = () => {
  playerScore = 0
  computerScore = 0
  resultDisplay.textContent = 'Start the game!'
  resultDisplay.classList.remove('winner', 'loser')
  disableButtons(false)

  playerScoreDisplay.textContent = playerScore
  computerScoreDisplay.textContent = computerScore

  resetButton.style.visibility = 'hidden'
  resetButton.style.opacity = 0
}
resetButton.addEventListener('click', () => {
  reset()
})
