import './style.css'
const inputElements = document.querySelectorAll('input')
const paragraphElement: any = document.querySelector('h2')
function updateParagraph(event: Event) {
  const elementChanged = event.target
  if (elementChanged instanceof HTMLInputElement) {
    const currentInputValue = elementChanged.value
    paragraphElement.innerText = currentInputValue
  }
}
// Attach event listeners to each one
inputElements.forEach((element) =>
  element.addEventListener('input', updateParagraph)
)
