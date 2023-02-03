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
