function toggleMenu() {
    const sideMenu = document.getElementById("side-menu");
    if (sideMenu.style.width === "300px") {
        sideMenu.style.width = "0";
    } else {
        sideMenu.style.width = "300px";
    }
}