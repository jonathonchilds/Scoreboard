import './style.css'

function teamContent(id: string)
{

  let teamScoreCounter = 0;

  // INPUTS  |
  //         |
  //         V
  const teamNameInputBox = document.querySelector(`.${id} input`) as HTMLInputElement
  const incrementScoreButton = document.querySelector(`.${id} .add`) as HTMLElement
  const decreaseScoreButton = document.querySelector(`.${id} .subtract`) as HTMLElement

  // OUTPUTS  |
  //          |
  //          V
  const teamNameDisplay = document.querySelector(`.${id} h2`) as HTMLInputElement
  const teamScoreDisplay = document.querySelector(`.${id} h3`) as HTMLHeadingElement


  function updateTeamName(event: Event) 
  {
    teamNameDisplay.innerText = (event.target as HTMLInputElement).value
  };
  teamNameInputBox.addEventListener('input', updateTeamName)


  function incrementScore()
  {
    teamScoreCounter = teamScoreCounter + 1
    teamScoreDisplay.textContent = `${teamScoreCounter}`
  }
  incrementScoreButton.addEventListener('click', incrementScore)


  function decreaseScore()
  {
    teamScoreCounter = teamScoreCounter - 1
    teamScoreDisplay.textContent = `${teamScoreCounter}`
  }
  decreaseScoreButton.addEventListener('click', decreaseScore)

}
teamContent('team1')
teamContent('team2')



