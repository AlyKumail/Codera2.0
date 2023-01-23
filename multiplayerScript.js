const friendView = document.querySelectorAll('.friend-view');
const userModal = document.querySelector('.userModal');
const userModalBg = document.querySelector('.userModalBg');
console.log(friendView);
let isUserOpen = false;

friendView.forEach(item=>{
    item.addEventListener('click',()=>{
        if(!isUserOpen){
            userModal.classList.add('displayUserModal');
        }
    })
})
userModalBg.addEventListener('click',()=>{
    if(!isUserOpen){
        userModal.classList.remove('displayUserModal');
    }
})
