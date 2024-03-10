// Define a function named toggleMenu
function toggleMenu() {
    // Select the HTML element with the class "menu-links" and store it in the variable menu
    const menu = document.querySelector(".menu-links");

    // Select the HTML element with the class "hamburger-icon" and store it in the variable icon
    const icon = document.querySelector(".hamburger-icon");

    // Toggle the presence of the class "open" on the menu element, adding it if it's not present, and removing it if it is
    menu.classList.toggle("open");

    // Toggle the presence of the class "open" on the icon element, adding it if it's not present, and removing it if it is
    icon.classList.toggle("open");
}
