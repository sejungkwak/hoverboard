const container = document.querySelector('.container');
const colours = ['f94144', 'f3722c', 'f8961e', 'f9c74f', '90be6d', '43aa8b', '577590', 'ffa69e', 'faf3dd', 'b8f2e6', '54478c', '2c699a'];

// make boxes
for ( let i = 0 ; i <= 625 ; i++ ) {
  let div = document.createElement('div');
  div.className = 'box'

  container.appendChild(div);
}

// event listener
document.querySelectorAll('.box').forEach(box => {
  box.addEventListener('mouseover', paintBox);
  box.addEventListener('mouseout', resetBox);
})

function paintBox(evt) {
  evt.target.style.backgroundColor = `#${colours[Math.floor(Math.random() * colours.length)]}`
}

function resetBox(evt) {
  setTimeout(() => {
    evt.target.classList.add('fadeOut')
    evt.target.style.backgroundColor = '';
  }, 1000)
  setTimeout(() => {
    evt.target.classList.remove('fadeOut');
  }, 1500)
}