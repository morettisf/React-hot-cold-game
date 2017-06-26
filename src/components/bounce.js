const bounce = function(character) {

  const fire = document.querySelector('#fire-wrapper');
  const ice = document.querySelector('#ice-wrapper');
  const message = document.querySelector('#message');

  message.classList.add('shake');

  setTimeout(() => {
    message.classList.remove('shake');
  }, 200)

  if (character === 'fire') {
    fire.classList.add('bounce-right');

    setTimeout(() => {
      fire.classList.remove('bounce-right');
    }, 1000)
  }

  else if (character === 'ice') {
    ice.classList.add('bounce-left');

    setTimeout(() => {
      ice.classList.remove('bounce-left');
    }, 1000)
  }

  else if (character === 'both') {
    fire.classList.add('bounce-happy-right');

    setTimeout(() => {
      ice.classList.add('bounce-happy-left');
    }, 500)
  }

  else {
    fire.classList.remove('bounce-happy-right');
    ice.classList.remove('bounce-happy-left');
  }

}

export default bounce;