let toggle = document.querySelector('.toggle-profile');

let card = document.querySelector('.card-profile');
const miprofile = document.querySelector('.coding');
const btnProfile  = document.querySelector('.btn-close-profile');

toggle.onclick = function(){
    card.classList.toggle('active')
}

miprofile.addEventListener('click',()=>{
    card.classList.remove('close')
    btnProfile.addEventListener('click',()=>{

        card.classList.add('close')
    })
})