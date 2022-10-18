import './style.css'
//                                  ||||||
// reads from section.team only    \/\/\/
const inputElements = document.querySelectorAll('input') 

//                             ||||||
// updates section.team1, h2    \/\/\/
const paragraphElement: any = document.querySelector('section.team1' && 'h2')


function updateParagraph(event: Event) {
  const elementChanged = event.target
  if (elementChanged instanceof HTMLInputElement) {
    const currentInputValue = elementChanged.value
    paragraphElement.innerText = currentInputValue
  }
}

inputElements.forEach((element) => element.addEventListener('input', updateParagraph))
