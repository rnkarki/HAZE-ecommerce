/*Side Nav Bar*/
const burger = document.getElementById('burger');
const close = document.getElementById('close');
const nav = document.getElementById('nav-bar');
//if click on burger/active/true
if(burger){
  burger.addEventListener('click', ()=>{
    nav.classList.add('active');
  })
}

//if close in pressed
if(close){
  close.addEventListener('click', ()=>{
    nav.classList.remove('active');
  })
}


/*.............................................................................*/
/*sproduct.html */

//change main image on clicking the small images
let mainImg = document.getElementById('mainImg');
let smallImg = document.getElementsByClassName('smallImg')// 4 small images

for(let i = 0; i < smallImg.length; i++){
  smallImg[i].addEventListener('click', function(){
    mainImg.src = smallImg[i].src;
  })
}





 
