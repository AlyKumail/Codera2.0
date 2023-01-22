// Portal NAV
const hamburgerPortal = document.getElementById("hamburgerPortal");
const mobileNavPortal = document.getElementById("mobileNavPortal");
const navCrossPortal = document.getElementById("navCrossPortal");

hamburgerPortal.addEventListener("click", () => {
    mobileNavPortal.style.display = "flex";
    console.log("ham");
});
navCrossPortal.addEventListener("click", () => {
    mobileNavPortal.style.display = "none";
});