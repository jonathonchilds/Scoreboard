import './style.css'
//                                  ||||||
// reads from section.team only    \/\/\/
const team1Input = document.querySelector('input' && 'section.team1') 
console.log(team1Input)

const team2input = document.querySelector('input' && 'section.team2')
console.log(team2input)

const team2Name: any = document.querySelector('section.team2' && 'h2')
console.log(team2Name)

function updateParagraph(event: Event) {
  const elementChanged = event.target
  if (elementChanged instanceof HTMLInputElement) 
  {
    const currentInputValue = elementChanged.value
    team2Name.innerText = currentInputValue
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
}


team1Input?.addEventListener('input', updateParagraph)

team2input?.addEventListener('input', updateParagraph)

