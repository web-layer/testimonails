let sliderimage = Array.from(document.querySelectorAll('.slider_image img'));
let slidercount = sliderimage.length;
let currentSlider = 1 ;
let nextbtn = document.getElementById('next');
let previbtn = document.getElementById('previous');





let Pagiantionscreateul = document.getElementById('Pagiantions-ul')    
function Pagiantionsul(){
    for(let i = 1; i <= slidercount; i++) {
        Pagiantionscreateul.innerHTML += '<li class="active"></li>'
    
    }
    document.getElementById('Pagiantions').appendChild(Pagiantionscreateul)
 }

 Pagiantionsul();


let Pagiantionsbullts = Array.from(document.querySelectorAll('#Pagiantions-ul li'));



thechecker();

function thechecker(e) {
    removeitem();
    removeimage();

    sliderimage[currentSlider - 1].classList.add('active')

    Pagiantionscreateul.children[currentSlider - 1].classList.add('active');

    conditionNextandprev();

}

function removeitem() {
 Pagiantionsbullts.forEach(function (li) {
    li.classList.remove('active');
 });
};

function removeimage() {
    sliderimage.forEach(function (e) {
      e.classList.remove('active');
      
    });
};


function conditionNextandprev() {
    if(currentSlider == 1) {
        previbtn.classList.add('disable');
    }else{
        previbtn.classList.remove('disable');
    }

    if(currentSlider === slidercount) {
        nextbtn.classList.add('disable');
    }else{
        nextbtn.classList.remove('disable');

        
    }
}



 nextbtn.onclick = function () {
    if(nextbtn.classList.contains("disable")) {
        return false
    }else{
        currentSlider++
        thechecker()
    }
}


previbtn.onclick = function () {

    if(previbtn.classList.contains('disable')) {
        return false
    }else{
        currentSlider--
        thechecker()
    }
} 



 




