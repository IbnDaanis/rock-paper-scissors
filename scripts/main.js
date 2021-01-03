const roundDisplay = document.querySelector('#roundDisplay')
const playerScoreDisplay = document.querySelector('#playerScoreDisplay')
const computerScoreDisplay = document.querySelector('#computerScoreDisplay')
const resultDisplay = document.querySelector('#resultDisplay')
const optionDisplay = document.querySelector('#optionDisplay')
const choices = [...document.querySelectorAll('.choices #choice')]
const resetButton = document.querySelector('#reset')

const disableChoices = trueOrFalse => {
  choices.forEach(button => {
    button.disabled = trueOrFalse
    button.classList.toggle('disabled')
  })
}

choices.forEach(button =>
  button.addEventListener('click', e => {
    const playerSelection = e.target.dataset.choice
    game(playerSelection)
  })
)

const resetGame = () => {
  roundDisplay.innerHTML = 'Round <span>1</span>'
  optionDisplay.textContent = 'Pick your option'
  playerScore = 0
  computerScore = 0
  round = 0
  resultDisplay.textContent = 'Start the game!'
  resultDisplay.classList.remove('winner', 'loser')
  disableChoices(false)

  playerScoreDisplay.textContent = playerScore
  computerScoreDisplay.textContent = computerScore

  resetButton.style.visibility = 'hidden'
  resetButton.style.opacity = 0
}

resetButton.addEventListener('click', () => {
  resetGame()
})
