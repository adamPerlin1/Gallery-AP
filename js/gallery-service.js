'use strict';
//'img/portfolio/01-pacman.jpg'
// `<button onclick ="window.open(${proj.url})`

var gProjs = [
    {
        id: 'pacman',
        name: 'Pacman',
        title: 'Better run away',
        desc: 'lorem ipsum',
        url: 'projs/pacman',
        imgUrl: 'portfolio/01-pacman.png',
        publishedAt: 'January 2022',
        labels: ['Matrixes', 'keyboard events', 'Ghosts'],
    },
    {
        id: 'space-invaders',
        name: 'Space Invaders',
        title: 'Take cover!',
        desc: 'lorem ipsum',
        url: 'projs/space-invaders',
        imgUrl: 'portfolio/02-space-invaders.png',
        publishedAt: 'January 2022',
        labels: ['Matrixes', 'keyboard events', 'end of humanity']
    },
    {
        id: 'sokoban',
        name: 'Sokoban',
        title: 'Better push those boxes',
        desc: 'lorem ipsum',
        url: 'projs/sokoban',
        imgUrl: 'portfolio/03-sokoban.jpg',
        publishedAt: 'November 2021',
        labels: ['Matrixes', 'keyboard events', 'Boxes']
    }
];

function getProjById(projId) {
    return gProjs.find(proj => proj.id === projId);
}

function getProjs() {
    return gProjs;
}

