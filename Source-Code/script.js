var counter = 1;

setInterval(function(){
    document.getElementById('radio' + counter).checked = true;
    counter++
    if(counter>4){
        counter =1;
    }
},5000);



// sidebar
const menu = document.querySelector('.menu');
const sidebar = document.querySelector('.navmenu-mobile');
const close = document.querySelector('.close');



menu.addEventListener('click', () =>{
    sidebar.classList.add('display');
})


close.addEventListener('click', ()=>{
    sidebar.classList.remove('display');
})