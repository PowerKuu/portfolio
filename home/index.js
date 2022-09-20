function AddStar(name, repo, x, y){

    const html = `
        <div class="star" style="bottom: ${y}rem; right: ${x}rem;">
            <img src="./star.svg" alt="" class="icon">
            <img src="./line.svg" alt="" class="line">
            <p class="name">${name.toUpperCase()}</p>
            <p class="subname">CLICK ME</p>
        </div>
    `

    document.getElementById("stars").innerHTML += html.trim()
}



const positions = [
    0, -7,
    22, 2,
    20, -7,
    15, 15,
    10, -10,
    20, 10,
    0, 15
]

AddStar("esajsasuh", "asaasa", 0, -7)
AddStar("temnst", "asaasa", 20, -3)
AddStar("bbb", "asaasa", 13, 15)
AddStar("asas", "asaasa", 20, 10)
AddStar("vvvv", "asaasa", -2, 17)
