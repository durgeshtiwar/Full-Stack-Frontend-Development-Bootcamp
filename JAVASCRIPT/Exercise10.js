const body = document.querySelector('body');
const btn = document.querySelectorAll('.button');
for (let index = 0; index < btn.length; index++) {
    btn[index].addEventListener('click', function () {
    body.style.backgroundColor = `${btn[index].id}`;
    });
}