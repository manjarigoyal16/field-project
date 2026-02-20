let tablinks = document.getElementsByClassName('tab-links');
let tabcontents = document.getElementsByClassName('tab-contents');
function openTab(tabName) {
    for (tablink of tablinks) {
        tablink.classList.remove("active-link");
    }
    for (tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link")
    document.getElementById(tabName).classList.add("active-tab")

}
let sidemenu = document.getElementById('sidemenu');
function openmenu() {
    sidemenu.style.right = "0";

}
function openmenu() {
    sidemenu.style.right = "-200px";

}
document.getElementById('hamburger').addEventListener('click', function () {
    let nav = document.getElementById('navbar');
    nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
});
