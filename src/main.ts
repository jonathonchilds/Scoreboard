import './style.css'
//                                  ||||||
// reads from section.team only    \/\/\/
const playerNameInput = document.querySelectorAll('input');
console.log(playerNameInput);

const playerNameDisplay: any = document.querySelector('h2');
console.log(updateParagraph);

function updateParagraph(event: Event) {
  const elementChanged = event.target
  if (elementChanged instanceof HTMLInputElement) 
  {
    const currentInputValue = elementChanged.value
    playerNameDisplay.innerText = currentInputValue
    // if (elementChanged instanceof team1Input)
    // {
    // const currentInputValue = elementChanged.value
    // team1Name.innerText = currentInputValue
    // }
    // else if (elementChanged instanceof team2input)
    // {
    //   const currentInputValue = elementChanged.value
    // team2Name.innerText = currentInputValue
    // }
  }
};


playerNameInput.forEach((element) => 
element.addEventListener('input', updateParagraph));


