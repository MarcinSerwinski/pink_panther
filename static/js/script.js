const buttonOne = document.getElementById("button-pink-panther")
const pinkPanther = document.querySelector('.pink-panther')
const buttonTwo = document.getElementById('button-two')

buttonOne.addEventListener('click', function (e) {
    if (buttonOne.value === 'Zatrzymaj animację!') {
        pinkPanther.style.display = 'none'
        buttonOne.value = 'Pokaż animację'
    } else {
        pinkPanther.style.display = 'block'
        buttonOne.value = 'Zatrzymaj animację!'
    }
})

let clicks = 0
let pantherVoice = [
    "Hi. My name is pink. Meow can I help you?",
    "You can't stop me! Well... actually you can.",
    "I love to move all over the places. Hope you noticed.",
    "How about you?",
    "Can't wait for a weekend bottle of milk!",
    "Ok buddy, gotta keep on spinning. See you next time.",
]
let synth = window.speechSynthesis
    buttonTwo.addEventListener('click',function (e){
        let utterThis = new SpeechSynthesisUtterance(pantherVoice[clicks])
        synth.speak(utterThis)
        clicks++

    })


