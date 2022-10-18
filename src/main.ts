import './style.css'

function setupTeam(id: string)
{
  const playerNameInput = document.querySelector(`.${id} input`) as HTMLInputElement;
  const playerNameDisplay = document.querySelector(`.${id} h2`) as HTMLInputElement;
  

  function updateParagraph(event: Event) 
  {
    const elementChanged = event.target
    if (elementChanged instanceof HTMLInputElement && 
        playerNameDisplay instanceof HTMLHeadingElement) 
      {
        const currentInputValue = elementChanged.value
        playerNameDisplay.innerText = currentInputValue
      // if (elementChanged)
      // {
      //   playerNameDisplay.innerText = currentInputValue
      // }
      // if (elementChanged)
      // {
      //   const currentInputValue = elementChanged.value
      //   team2Name.innerText = currentInputValue
      // }
      }
  };

  // playerNameInput.forEach((element) => 
  // element.addEventListener('input', updateParagraph));

setupTeam('team1')
setupTeam('team2')

}

