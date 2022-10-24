function broofa() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = Math.random()*16|0, v = c == 'x' ? r : (r&0x3|0x8);
        return v.toString(16);
    });
}

const stars = []

function AddStar(name, repo, x, y){
    const uuid = broofa()

    const html = `
        <div class="star" style="   bottom: ${y}rem; right: ${x}rem;" id="${uuid}">
            <img src="../global/images/star.svg" alt="" class="icon">
            <img src="../global/images/line.svg" alt="" class="line">
            <p class="name">${name.toUpperCase().substring(0, 10)}</p>
            <p class="subname">CLICK ME</p>
        </div>
    `

    document.getElementById("stars").insertAdjacentHTML("beforeend", html.trim())
    stars.push([uuid, repo])
}

function UpdateStars(){
    for (var star of stars){
        const element = document.getElementById(star[0])
        const local = star

        element.addEventListener("click", () => {
            window.location.assign(local[1])
        })
    }
}

function HighlightStar(index) {
    const element = document.getElementById(stars[index][0])
    if (!element) return

    for (var star of stars){
        const element = document.getElementById(star[0])
        element.classList.remove("active")
    }

    element.classList.add("active")
}


const positions = [
    [0, -7],
    [20, -3],
    [13, 15],
    [20, 10],
    [-2, 17],
]

async function FetchGithubRepos(url){
    const response = await fetch(url)

    const json = await response.json()

    const sorted = json.sort((a,b) => {
        return b.stargazers_count-a.stargazers_count
    }).splice(0, positions.length)

    console.log(sorted)

    var index = 0
    for (var repo of sorted){
        AddStar(repo.name, repo.html_url, positions[index][0], positions[index][1])
        index += 1
    }
}

async function init() {
    await FetchGithubRepos("https://api.github.com/users/PowerKuu/repos")
    UpdateStars()

    var index = 0

    const update = () => {
        HighlightStar(index)

        index += 1
        if (index > (positions.length-1)) index = 0
    }

    update()
    setInterval(update, 5000)
}

init()

document.getElementById("learnmore").onclick = () => {
    window.location.href = "#me"
}


// Parallax effect
const contentElement = document.getElementById("parallax")
const starsElement = document.getElementById("stars")

const offset = (element, dev) => {
    const offest = document.documentElement.scrollTop / dev
    element.style.transform = `translateY(${offest}rem)`
}

offset(contentElement, 60)
offset(starsElement, -1000)

window.onscroll = () => {
    offset(contentElement, 60)
    offset(starsElement, -1000)
}
