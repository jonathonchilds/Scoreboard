import './style.css'

function setupTeam(id: string)
{
  const playerNameInput = document.querySelector(`.${id} input`) as HTMLInputElement;
  const playerNameDisplay = document.querySelector(`.${id} h2`) as HTMLInputElement;
  
  function updatePlayerName(event: Event) 
  {
    const changeName = event.target as HTMLInputElement  
    playerNameDisplay.innerText = changeName.value
  };

  playerNameInput.addEventListener('input', updatePlayerName)

}

setupTeam('team1')
setupTeam('team2')



