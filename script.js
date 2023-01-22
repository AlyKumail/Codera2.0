const crossbar = document.getElementById("crossbar");
const crossbarLogin = document.getElementById("crossbarLogin");
const joinNow = document.getElementById("joinNow");
const loginBtn = document.getElementById("loginBtn");

const joinNowM = document.getElementById("joinNowM");
const loginBtnM = document.getElementById("loginBtnM");

const loginModal = document.getElementById("loginModal");
const joinModal = document.getElementById("joinModal");

crossbar.addEventListener("click", () => {
    // if (crossbar.classList.contains("displayNav")) {

    joinModal.classList.remove("displayNav");
    document.body.style.overflow = "auto";

    console.log("crossbar");

    // }
});
crossbarLogin.addEventListener("click", () => {
    // if (crossbar.classList.contains("displayNav")) {

    loginModal.classList.remove("displayNav");
    document.body.style.overflow = "auto";

    console.log("crossbar");

    // }
});

joinNow.addEventListener("click", () => {
    // if (loginModal.classList.contains("displayNav")) {
    joinModal.classList.add("displayNav");
    document.body.style.overflow = "hidden";
    // }
    console.log("joinnow");
});
loginBtn.addEventListener("click", () => {
    // if (loginModal.classList.contains("displayNav")) {
    loginModal.classList.add("displayNav");
    document.body.style.overflow = "hidden";
    // }
    console.log("joinnow");
});

joinNowM.addEventListener("click", () => {
    // if (loginModal.classList.contains("displayNav")) {
    joinModal.classList.add("displayNav");
    document.body.style.overflow = "hidden";
    // }
    console.log("joinnow");
});
loginBtnM.addEventListener("click", () => {
    // if (loginModal.classList.contains("displayNav")) {
    loginModal.classList.add("displayNav");
    document.body.style.overflow = "hidden";
    // }
    console.log("joinnow");
});

const hamburger = document.getElementById("hamburger");
const mobileNav = document.getElementById("mobileNav");
const navCross = document.getElementById("navCross");

hamburger.addEventListener("click", () => {
    mobileNav.style.display = "flex";
    console.log("ham");
});
navCross.addEventListener("click", () => {
    mobileNav.style.display = "none";
});




// FAQ
const FAQs = document.querySelectorAll('.faq-item');

FAQs.forEach(faq=>{
    faq.addEventListener('click',()=>{
        console.log(faq.children[0])
        if(faq.children[1].classList.contains('faq-inactive')){
            faq.children[1].classList.remove('faq-inactive')
            faq.children[0].children[1].classList.remove('faq-rotateArrow')
        }else{
            faq.children[1].classList.add('faq-inactive')
            faq.children[0].children[1].classList.add('faq-rotateArrow')
        }
    })
})