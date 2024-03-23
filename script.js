let trilho = document.getElementById('trilho')
let body = document.querySelector('body')
let icone = document.getElementById('icone');

trilho.addEventListener('click', () => {
    trilho.classList.toggle('dark')
    body.classList.toggle('dark')

    if (body.classList.contains('dark')) {
        icone.classList.remove('bi-brightness-high-fill');
        icone.classList.add('bi-moon-fill');
    } else {
        icone.classList.remove('bi-moon-fill');
        icone.classList.add('bi-brightness-high-fill');
    }

})