
// Side Menu Logic
let sidemenu = document.getElementById('sidemenu');

function openmenu() {
    sidemenu.style.right = "0";
}

function closemenu() {
    sidemenu.style.right = "-200px";
}

// --- NEW ACCORDION LOGIC ---
function toggleAccordion(header) {
    const item = header.parentElement;
    const isActive = item.classList.contains('active');

    // Close all other accordion items for a clean look
    document.querySelectorAll('.accordion-item').forEach(i => {
        i.classList.remove('active');
    });

    // If the clicked item wasn't active, open it
    if (!isActive) {
        item.classList.add('active');
    }
}


// Optional: Fix for hamburger button if you have one with ID 'hamburger'
let hamburger = document.getElementById('hamburger');
if (hamburger) {
    hamburger.addEventListener('click', function () {
        if (sidemenu.style.right === "0px") {
            closemenu();
        } else {
            openmenu();
        }
    });
}