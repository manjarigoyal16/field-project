let tablinks = document.getElementsByClassName('tab-links');
let tabcontents = document.getElementsByClassName('tab-contents');

// Function to handle switching between Skills, Experience, and Education tabs
function openTab(tabName) {
    for (let tablink of tablinks) {
        tablink.classList.remove("active-link");
    }
    for (let tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");
    }
    // event is passed automatically by the browser
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabName).classList.add("active-tab");
}

// Side Menu Logic for Mobile
let sidemenu = document.getElementById('sidemenu');

function openmenu() {
    sidemenu.style.right = "0";
}

function closemenu() {
    sidemenu.style.right = "-200px";
}

// Hamburger Toggle (Alternative logic for small screens)
document.getElementById('hamburger').addEventListener('click', function () {
    let navUl = document.querySelector('nav ul');
    // Simple toggle between showing and hiding the side menu
    if (sidemenu.style.right === "0px") {
        closemenu();
    } else {
        openmenu();
    }
});
