const roundDisplay = document.querySelector('#roundDisplay')
const playerScoreDisplay = document.querySelector('#playerScoreDisplay')
const computerScoreDisplay = document.querySelector('#computerScoreDisplay')
const resultDisplay = document.querySelector('#resultDisplay')
const buttons = [...document.querySelectorAll('.choices button')]
const resetButton = document.querySelector('#reset')

const disableButtons = trueOrFalse => {
  buttons.forEach(button => {
    button.disabled = trueOrFalse
    button.classList.toggle('disabled')
  })
}

buttons.forEach(button =>
  button.addEventListener('click', e => {
    const playerSelection = e.target.dataset.choice
    game(playerSelection)
  })
)

const resetGame = () => {
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
  resetGame()
})
