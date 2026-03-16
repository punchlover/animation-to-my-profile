let windowBox = document.querySelector('.window')

document.addEventListener('mousemove',function(e){
    let dx = e.pageX - window.innerWidth / 2
    let dy = e.pageY - window.innerHeight / 2
    let resultX = 30 * dx / window.innerWidth / 2
    let resultY = 30 * dy / window.innerHeight / 2
    windowBox.style.transform = `rotateX(${resultX}deg) rotateY(${resultY}deg)`
})
