const slidePage=document.querySelector(".slide-page")
const firstNextBtn=document.querySelector(".firstNext")
const prevBtnSec=document.querySelector(".prev-1")
const secNextBtn=document.querySelector(".next-1")
const prevBtnThird=document.querySelector(".prev-2")
const thirdNextBtn=document.querySelector(".next-2")
const prevBtnForth=document.querySelector(".prev-3")
const submitBtn=document.querySelector(".submit")
const progressText =document.querySelectorAll(".steps p")
const progressCheck =document.querySelectorAll(".steps .check")
const bullets =document.querySelectorAll(".steps .bullets")
let max =4;
let current =1;



firstNextBtn.addEventListener("click" , function(){
    slidePage.style.marginLeft="-25%" ;
    bullets[current-1].classList.add("active");
    progressCheck[current-1].classList.add("active");
    progressText[current-1].classList.add("active");
    current += 1 ;

   
}) ;
secNextBtn.addEventListener("click" , function(){
    slidePage.style.marginLeft="-50%" ;
    bullets[current-1].classList.add("active");
    progressCheck[current-1].classList.add("active");
    progressText[current-1].classList.add("active");
    current += 1 ;
   
}) ;
thirdNextBtn.addEventListener("click" , function(){
    slidePage.style.marginLeft="-75%" ;
    bullets[current-1].classList.add("active");
    progressCheck[current-1].classList.add("active");
    progressText[current-1].classList.add("active");
    current += 1 ;
   
}) ;
submitBtn.addEventListener("click" , function(){
    bullets[current-1].classList.add("active");
    progressCheck[current-1].classList.add("active");
    progressText[current-1].classList.add("active");
    current += 1 ;
    setTimeout(function(){
        alert("You have Successfully Signed In!");
    }, 800) ;
   
}) ;
prevBtnSec.addEventListener("click" , function(){
    slidePage.style.marginLeft="0%" ;
    bullets[current-2].classList.remove("active");
    progressCheck[current-2].classList.remove("active");
    progressText[current-2].classList.remove("active");
    current -= 1 ;
   
}) ;
prevBtnThird.addEventListener("click" , function(){
    slidePage.style.marginLeft="-25%" ;
    bullets[current-2].classList.remove("active");
    progressCheck[current-2].classList.remove("active");
    progressText[current-2].classList.remove("active");
    current -= 1 ;
   
}) ;
prevBtnForth.addEventListener("click" , function(){
    slidePage.style.marginLeft="-50%" ;
    bullets[current-2].classList.remove("active");
    progressCheck[current-2].classList.remove("active");
    progressText[current-2].classList.remove("active");
    current -= 1 ;
}) ;
