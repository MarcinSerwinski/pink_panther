const button = document.getElementById("button-pink-panther")
const pinkPanther = document.querySelector('.pink-panther')


button.addEventListener('click', function (e) {
    if (button.value === 'Zatrzymaj animację!') {
        pinkPanther.style.display = 'none'
        button.value = 'Pokaż animację'
    } else {
        pinkPanther.style.display = 'block'
        button.value = 'Zatrzymaj animację!'
    }
})