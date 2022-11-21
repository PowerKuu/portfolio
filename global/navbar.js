const NavbarName = document.getElementById("name")

NavbarName.onclick = () => window.location.href = "/home#home"

function ChangeNavbarName(x) {
    if (x.matches) {
        NavbarName.innerText = "HK"
    } else {
        NavbarName.innerText = "Håkon Kleven"
    }
}

var x = window.matchMedia("(max-width: 477px)")
ChangeNavbarName(x)
x.addEventListener("change", ChangeNavbarName)