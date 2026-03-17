let windowBox = document.querySelector('.window')
let buttonForm = document.querySelector('.button-form')
let buttonCircle = document.querySelector('.button-circle')
let buttonCalc = 0
document.addEventListener('mousemove',function(e){
    let dx = e.pageX - window.innerWidth / 2
    let dy = e.pageY - window.innerHeight / 2
    let resultX = 30 * dx / window.innerWidth / 2
    let resultY = 30 * dy / window.innerHeight / 2
    windowBox.style.transform = `rotateX(${resultX}deg) rotateY(${resultY}deg)`
})

buttonForm.addEventListener('click',function(){
    if (buttonCalc === 0){
        anime({
            targets: '.button-circle',
            duration: 2000,
            direction:'alternate',
            transform: translateX('20px')
        })
        buttonForm.style.backgroundColor = 'black'
        buttonCircle.style.color = 'black'
        buttonCalc += 1
    }

})
