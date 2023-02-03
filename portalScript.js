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

const avatarStats = document.getElementById("avatarStats");
const avatarItems = document.getElementById("avatarItems");

const avatarStatsButton = document.getElementById("avatarStatsButton");
const avatarItemsButton = document.getElementById("avatarItemsButton");
console.log(avatarItems);

avatarItemsButton.addEventListener('click',()=>{
    console.log("stats");
    if(!avatarItems.classList.contains('avatarShow')){
        avatarItems.classList.add('avatarShow');
        avatarItemsButton.classList.add('avatar-info-current');
        avatarStatsButton.classList.remove('avatar-info-current');
        avatarStats.classList.remove('avatarShow');
    }
})

avatarStatsButton.addEventListener('click',()=>{
    console.log("items");

    if(!avatarStats.classList.contains('avatarShow')){
        avatarStats.classList.add('avatarShow');
        avatarStatsButton.classList.add('avatar-info-current');
        avatarItemsButton.classList.remove('avatar-info-current');
        avatarItems.classList.remove('avatarShow');
    }
})





