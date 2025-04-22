// This file is part of the "HTML5" project.

document.getElementById("ctaRepository").addEventListener("click", function goToGit() {
    const url = "https://github.com";
    window.open(url, "_blank");
    window.focus();
    return false;
}),

document.getElementById("ctaDownload").addEventListener("click", function getProjectZip() {
    const url = "https://github.com/gen8-ai/html5-boilerplate-project/main.zip/";
    window.open(url, "_self");
    window.focus();
    return true;
});