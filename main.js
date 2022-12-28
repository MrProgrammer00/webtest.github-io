function menuButton () {
    var button = document.getElementById("menu");
    button.classList.toggle("menu");
}

document.getElementById("home").addEventListener("click", Home);
document.getElementById("about").addEventListener("click", About);
document.getElementById("contact").addEventListener("click", Contact);
document.getElementById("services").addEventListener("click", Services)

function Home() {
    document.getElementById("Home").classList.add("hidden")
}

