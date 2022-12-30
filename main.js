function menuButton() {
    var button = document.getElementById("menu");
    button.classList.toggle("menu");
}

/*document.getElementById("home").addEventListener("click", Home);
document.getElementById("about").addEventListener("click", About);
document.getElementById("contact").addEventListener("click", Contact);
document.getElementById("services").addEventListener("click", Services);*/



function Home() {
    document.getElementById("Home").classList.remove("hidden");
    document.querySelectorAll("#About, #Contact, #Services").forEach(el => el.classList.add("hidden"));

}

function About() {
    document.getElementById("About").classList.remove("hidden")
    document.querySelectorAll("#Home, #Contact, #Services").forEach(el => el.classList.add("hidden"));
}

function Contact() {
    document.getElementById("Contact").classList.remove("hidden")
    document.querySelectorAll("#About, #Home, #Services").forEach(el => el.classList.add("hidden"));
}

function Services() {
    document.getElementById("Services").classList.remove("hidden")
    document.querySelectorAll("#About, #Contact, #Home").forEach(el => el.classList.add("hidden"));
}