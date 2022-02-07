'use strict';
//'img/portfolio/01-pacman.jpg'
// `<button onclick ="window.open(${proj.url})`

var gProjs = [
    {
        id: 'pacman',
        name: 'Pacman',
        title: 'Better run away',
        desc: 'lorem ipsum',
        url: 'https://adamperlin1.github.io/pacmen/',
        imgUrl: 'portfolio/01-pacman.png',
        publishedAt: 'January 2022',
        labels: ['Matrixes', 'keyboard events', 'Ghosts'],
    },
    {
        id: 'space-invaders',
        name: 'Space Invaders',
        title: 'Take cover!',
        desc: 'lorem ipsum',
        url: 'https://adamperlin1.github.io/spaceInvaders/',
        imgUrl: 'portfolio/02-space-invaders.png',
        publishedAt: 'January 2022',
        labels: ['Matrixes', 'keyboard events', 'end of humanity']
    },
    {
        id: 'sokoban',
        name: 'Sokoban',
        title: 'Better push those boxes',
        desc: 'lorem ipsum',
        url: 'https://adamperlin1.github.io/Sokoban-AP/',
        imgUrl: 'portfolio/03-sokoban.jpg',
        publishedAt: 'November 2021',
        labels: ['Matrixes', 'keyboard events', 'Boxes']
    },
    {
        id: 'touch-nums',
        name: 'Touch The Nums',
        title: 'How fast can you do it?!',
        desc: 'lorem ipsum',
        url: 'https://adamperlin1.github.io/touchNums/',
        imgUrl: 'portfolio/04-touch-nums.jpg',
        publishedAt: 'January 2022',
        labels: ['Numbers', 'Count']
    },
    {
        id: 'ball-board',
        name: 'Ball Board',
        title: 'collect them all!',
        desc: 'lorem ipsum',
        url: 'https://adamperlin1.github.io/ball-board-AP/',
        imgUrl: 'portfolio/05-ball-board.png',
        publishedAt: 'January 2022',
        labels: ['Balls', 'Matrix', 'keyboard events']
    },
];

function getProjById(projId) {
    return gProjs.find(proj => proj.id === projId);
}

function getProjs() {
    return gProjs;
}

