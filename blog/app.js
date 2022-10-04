const closedFace = document.querySelector('.closed')
const openFace = document.querySelector('.open')

// Add event Listener

openFace.addEventListener('click', () => {
  if (closedFace.classList.contains('closed')) {
    closedFace.classList.add('active')
    openFace.classList.remove('active')
  }
})

closedFace.addEventListener('click', () => {
  if (openFace.classList.contains('open')) {
    openFace.classList.add('active')
    closedFace.classList.remove('active')
  }
})

let brainShut = document.querySelector('.shut')
let brainOpen = document.querySelector('.light')

brainOpen.addEventListener('click', () => {
  if (brainShut.classList.contains('shut')) {
    brainShut.classList.add('on')
    brainOpen.classList.remove('on')
  }
})

brainShut.addEventListener('click', () => {
  if (brainOpen.classList.contains('light')) {
    brainOpen.classList.add('on')
    brainShut.classList.remove('on')
  }
})
