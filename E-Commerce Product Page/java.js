const header = document.querySelector("header");

window.addEventListener ("scroll", function(){
    header.classlist.toggle ("sticky", this.window.scrollY > 0);
    
})

let menu = document.querySelector('#menu-icon');
let navmenu = document.querySelector('.navmenu');

menu.onclick = () =>{
    menu.classlist.toggle('bx-x');
    navmenu.classList.toggle('open');

}