const share = document.getElementById('share');
var shareClicked = document.querySelector('.shareClicked');
const body = document.querySelector('body');

share.addEventListener('click', () => {
    shareClicked.classList.remove('hide');
    share.classList.add('hide');
})