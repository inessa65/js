const box = document.getElementById('box');
const contextMenu = document.querySelector('.context-menu');

box.addEventListener('contextmenu', function(event) {
    event.preventDefault();
    contextMenu.style.left = `${event.clientX}px`;
    contextMenu.style.top = `${event.clientY}px`;

    contextMenu.classList.add('active');

    let contextMenuWidth = contextMenu.offsetWidth;
    let contextMenuHeight = contextMenu.offsetHeight;

    let windowWidth = window.innerWidth;
    let windowHeight = window.innerHeight;

    if ((windowWidth - event.clientX) < contextMenuWidth) {
        contextMenu.style.left = windowWidth - (contextMenuWidth + 20) + 'px';
    } else {
        contextMenu.style.left = event.clientX + 'px';
    }

    if ((windowHeight - event.clientY) < contextMenuHeight) {
        contextMenu.style.top = windowHeight - (contextMenuHeight + 20) + 'px';
    } else {
        contextMenu.style.top = event.clientY + 'px';
    }
});

box.addEventListener('click', function(event) {
    if (event.target.className != '.menu-box') {
        contextMenu.classList.remove('active');
    }
}, true);