const acheivementModal = document.getElementById("acheivementModal");
const viewBtn = document.getElementById("view-all");
const acheivementCross = document.getElementById("acheivementCross");

viewBtn.addEventListener("click", () => {
    acheivementModal.style.display = "block";
});

acheivementCross.addEventListener("click", () => {
    acheivementModal.style.display = "none";
});
 
{
    /* <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>; */
}

const badges = document.querySelectorAll('.badge');
const badgePopup = document.querySelector('#badgePopup');

badges.forEach(badge=>{
    console.log(badge);
    badge.addEventListener('mouseover',(e)=>{
        console.log(e.clientY)
        // badgePopup.classList.add('show')
        let top = e.clientY + 'px';
        let left = e.clientX + 'px';
        badgePopup.style.top = top;
        badgePopup.style.left = left;
        badgePopup.style.display = 'block';

    })
    badge.addEventListener('mouseleave',(e)=>{
        // console.log(e.target.classList.add('show'))
        // badgePopup.classList.remove('show')
        badgePopup.style.display = 'none';

        // badgePopup.style.top
    })
})
