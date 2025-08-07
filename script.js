const texts = document.getElementsByTagName("main")[0].children

const sleep = (ms) => new Promise(res => setTimeout(res, ms));

async function play() {
    for (let i = 0; i < texts.length; i++) {
        const element = texts[i];
        element.classList.add("fade")
        await sleep(3500)
        element.style.opacity = "100%"
    }
}

play()
