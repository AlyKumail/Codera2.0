const friendView = document.querySelectorAll('.friend-view');
const userModal = document.querySelector('.userModal');
console.log(friendView);
let isUserOpen = false;

friendView.forEach(item=>{
    item.addEventListener('click',()=>{
        if(!isUserOpen){
            userModal.classList.add('displayUserModal');
        }
    })
})
userModal.addEventListener('click',()=>{
    if(!isUserOpen){
        userModal.classList.remove('displayUserModal');
    }
})
