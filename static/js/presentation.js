const title = document.querySelector('#h1');
const names = document.querySelector('#names');
const workFlow = document.querySelector('#workflow');
const branchNumber = document.querySelector('#snippets');
const table = document.querySelector('.table');
const snippetOne = document.querySelector('#snippet1');
const snippetTwo = document.querySelector('#snippet2');
const startGame = document.querySelector('a')

title.addEventListener('click', (e) => {
     names.classList.add('inactive');
     workFlow.classList.remove('inactive')
});

workFlow.addEventListener('click', (e) => {
     branchNumber.classList.remove('inactive')
});

branchNumber.addEventListener('click', (e) => {
     title.classList.add('inactive');
     workFlow.classList.add('inactive');
     branchNumber.classList.add('inactive');
     table.classList.remove('inactive')
});

table.addEventListener('click', (e) => {
     table.classList.add('inactive');
     snippetOne.classList.remove('inactive')
});

snippetOne.addEventListener('click', (e) => {
     snippetOne.classList.add('inactive');
     snippetTwo.classList.remove('inactive')
});

snippetTwo.addEventListener('click', (e) => {
     snippetTwo.classList.add('inactive');
     startGame.classList.remove('inactive')
});
