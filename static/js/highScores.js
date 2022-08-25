function initPage() {

    Splitting();
    changeScoresPage();

}

function changeScoresPage() {
    let params = new URLSearchParams(document.location.search);
    if (params.get('username')) {
        const buttons = document.querySelector('.container.btns');
        const myScoresDiv = document.querySelector('#link2');
        const myScoresLink = document.querySelector('#myScoresLink');
        const goBackLink = document.querySelector('#backLink');
        buttons.classList.remove('nouser');
        myScoresDiv.classList.remove('inactive');
        goBackLink.href = "/index?username="+params.get('username');
        myScoresLink.href = "/scores/"+params.get('username')
    }
}

initPage()