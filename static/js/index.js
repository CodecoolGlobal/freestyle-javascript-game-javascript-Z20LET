function initPage() {

    Splitting();
    inputName();
    loadIndexForUser();
    changeIndexBack();
}

function inputName() {
    const inputField = document.querySelector('#name');
    inputField?.addEventListener('keydown', changeIndex)
}

const changeIndex = (event) => {
    if (event.key === 'Enter') {
        pageIfUserExists(event.currentTarget.value);
    }
}

function loadIndexForUser() {
    let params = new URLSearchParams(document.location.search);
        if (params.get('username')) {
            pageIfUserExists(params.get('username'));
        }
}

function pageIfUserExists (userName) {
    document.querySelector('#inputDiv').classList.add('inactive');
    const pDiv = document.querySelector('#pDiv');
    const btnDiv = document.querySelector('#btnDiv');
    const scoreLink = document.querySelector('a');
    const hiddenInput = document.querySelector('[type=hidden]')
    pDiv.classList.remove('inactive');
    btnDiv.classList.remove('inactive');
    document.querySelector('p').innerText = userName;
    scoreLink.href = "/scores?username="+userName
    hiddenInput.setAttribute('value', userName)
}

function changeIndexBack() {
    const pDiv = document.querySelector('#pDiv');
    pDiv.addEventListener('click', newUser)
}

function newUser() {
    document.querySelector('#inputDiv').classList.remove('inactive');
    const pDiv = document.querySelector('#pDiv');
    const btnDiv = document.querySelector('#btnDiv');
    const scoreLink = document.querySelector('a');
    const hiddenInput = document.querySelector('[type=hidden]');
    pDiv.classList.add('inactive');
    btnDiv.classList.add('inactive');
    document.querySelector('p').innerText = '';
    scoreLink.href = "/scores";
    hiddenInput.setAttribute('value', '')
}

initPage()