function activateBox(name) {

    console.log(`activateBox ${name}`);
    for (element of document.querySelectorAll('.app-content-box'))
        if (name == element.id) element.style.display = 'inline';
        else element.style.display = 'none';

}

function initPage() {

    removeEventListener('DOMContentLoaded', initPage);
    activateBox('mainMenu');

}

addEventListener('DOMContentLoaded', initPage);