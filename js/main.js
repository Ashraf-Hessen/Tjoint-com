// Our Customers Slider
let ourCustomersSlider = document.getElementById("our-customers");

setInterval(sliderMove, 2000);

function sliderMove() {
    if((ourCustomersSlider.scrollLeft + ourCustomersSlider.clientWidth + 1) >= ourCustomersSlider.scrollWidth)
    ourCustomersSlider.scrollTo(0, 0);
    else
    ourCustomersSlider.scrollBy(ourCustomersSlider.firstElementChild.offsetWidth, 0);
}

// Programs Slider
let programsSlider = document.getElementById("our-programs"),
    programsSlides = Array.from(document.querySelectorAll(".our-programs .slider-item"));

setCurentSlide();
runSlider();

function runSlider () {
    setInterval(setActive, 6000);
}

function setActive() {

    setCurentSlide();

    clearActive();

    if( curentSlide == programsSlides.length)
    programsSlides[0].classList.add("active");
    else
    programsSlides[curentSlide].classList.add("active");

}

function setCurentSlide() {
    programsSlides.forEach(slide => {
        if(slide.classList.contains("active")) {
            curentSlide = programsSlides.indexOf(slide) + 1;
        }
    })
}

function clearActive() {
    programsSlides.forEach(slide => slide.classList.remove("active"));
}

function nextSlide() {

    clearActive();

    if( curentSlide == programsSlides.length)
    programsSlides[0].classList.add("active");
    else
    programsSlides[curentSlide].classList.add("active");

    setCurentSlide();
}

function prevSlide() {

    clearActive();

    if( curentSlide == 0)
    curentSlide = programsSlides.length - 1;
    else
    curentSlide--;

    programsSlides[curentSlide].classList.add("active");
}