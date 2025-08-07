const h1 = document.getElementsByTagName("h1")[0]
const h2 = document.getElementsByTagName("h2")[0]
const h3 = document.getElementsByTagName("h3")[0]

const sleep = (ms) => new Promise(res => setTimeout(res, ms));

async function play() {
    h2.style.opacity = "0%"
    h3.style.opacity = "0%"
    h1.classList.add("fade")
    await sleep(3500)
    h2.classList.add("fade")
    h2.style.opacity = "100%"
    await sleep(3500)
    h3.classList.add("fade")
    h3.style.opacity = "100%"
}

play()
