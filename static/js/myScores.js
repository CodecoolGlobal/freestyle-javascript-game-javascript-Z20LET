function initPage() {

    Splitting();
    goBack()

}

function goBack() {
    const urlParts = window.location.pathname.split('/');
    const playBtn = document.querySelector('#playLink');
    const scoreLink = document.querySelector('#scoresLink');
    console.log(playBtn, scoreLink);
    playBtn.href = "/game?username="+urlParts[2];
    scoreLink.href = "/scores?username="+urlParts[2]
}

initPage()