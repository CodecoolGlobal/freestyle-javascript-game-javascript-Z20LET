function initGame() {

    Splitting();
    inputName();

}

const changeField = (event) => {
    if (event.key === 'Enter') {
        const userName = event.currentTarget.value;
        console.log(userName);
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
}

function inputName() {
    const inputField = document.querySelector('#name');
    inputField.addEventListener('keydown', changeField)
}



initGame();

