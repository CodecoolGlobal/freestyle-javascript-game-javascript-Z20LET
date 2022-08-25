function initPage() {

    Splitting();
    goBack()

}

function goBack() {
    const urlParts = window.location.pathname.split('/');
    const backBtn = document.querySelector('a');
    backBtn.href = "/?username="+urlParts[2];

}

initPage()