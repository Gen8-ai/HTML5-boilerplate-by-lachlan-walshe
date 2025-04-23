document.getElementById("ctaReturnHome").addEventListener("click", function returnHome() {
    const home = "../index.html";
    window.open(home, "_self");
    window.focus();
    return false;
});