const playerScoreDisplay = document.querySelector('.player span')
const computerScoreDisplay = document.querySelector('.computer span')
const resultDisplay = document.querySelector('#resultDisplay')

let playerScore = 0
let computerScore = 0

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
}

const buttons = [...document.querySelectorAll('button')]
buttons.forEach(button =>
  button.addEventListener('click', e => {
    const playerSelection = e.target.dataset.choice
    game(playerSelection)
  })
)

setTimeout(() => {
  document.querySelector('.lol').style.transform = 'translateX(200%)'
}, 10000)
