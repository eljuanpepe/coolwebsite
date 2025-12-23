const image = document.querySelector("img")

var yspeed = 2
var xspeed = 2
const randomModifier = 1

var xpos = 0
var ypos = 0

var curXSpeed = xspeed
var curYSpeed = yspeed
function step() {
    ypos += curYSpeed
    xpos += curXSpeed

    image.style.top = `${ypos}px`
    image.style.left = `${xpos}px`

    const rec = image.getBoundingClientRect()

    if (rec.bottom >= window.innerHeight) {
        yspeed = -yspeed
        curYSpeed = yspeed - Math.random() * randomModifier
    } else if (rec.top <= 0) {
        yspeed = Math.abs(yspeed)
        curYSpeed = yspeed + Math.random() * randomModifier
    }

    if (rec.left <= 0) {
        xspeed = Math.abs(xspeed)
        curXSpeed = xspeed + Math.random() * randomModifier
    } else if(rec.right >= window.innerWidth) {
        xspeed = -xspeed
        curXSpeed = xspeed - Math.random() * randomModifier
    }

    requestAnimationFrame(step)
}

requestAnimationFrame(step)
