const horses = document.getElementsByClassName("horse")
const start = document.querySelector("button")
const audio = document.querySelector("audio")

document.addEventListener("keypress", (e) => {
    if (e.code === "Enter") {
        start.click()
    }
})


start.onclick = () => {
    start.disabled = true;
    audio.play()
    var horseWon = false;
    var horsesThatFinished = []

    const speedInterval = setInterval(() => {
        const horse = horses[Math.floor(Math.random() * horses.length)]
        const animations = horse.getAnimations();
        if (animations.length > 0) {
            const randomSpeed = (Math.random() * 1) + 0.7;
            const currentSpeed = animations[0].playbackRate;
            const step = (randomSpeed - currentSpeed) / 100;
            
            const interval = setInterval(() => {
                const diff = randomSpeed - animations[0].playbackRate;
                
                if (Math.abs(diff) < Math.abs(step)) {
                    animations[0].playbackRate = randomSpeed;
                    clearInterval(interval);
                } else {
                    animations[0].playbackRate += step;
                }
            }, 5);
        }
    }, 500)

    for (const horse of horses) {
        horse.classList.add("racing")
        horse.addEventListener("animationend", () => {
            horse.classList.remove("racing")
            horsesThatFinished.push(horse)

            if (!horseWon) {
                alert(horse.alt + " won")
                horseWon = true
            }

            if (horsesThatFinished.length === horses.length) {
                clearInterval(speedInterval)
                audio.pause()
                start.disabled = false;
            }
        })
    }
}
