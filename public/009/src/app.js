const audioElement = document.querySelector('#audio');
const playerContainer = document.querySelector('.player');

const play = function(event) {
    audioElement.play();
}

const createControlEl = function(type, name, listener, parent) {
    const el = document.createElement(type);
    el.classList.add(name);
    
    el.addEventListener('click', listener, false);

    parent.appendChild(el);

    return el;
}

createControlEl('button', 'play-button', play, playerContainer);