//your JS code here. If required.
let slide = document.querySelectorAll(".slide")
let upBtn = document.querySelector(".up-button")
let downBtn = document.querySelector(".down-button")

let currentSlide = 0
function swipe(index){

	slide.forEach(slides =>{
		slides.classList.remove("active")
	})

	slide[index].classList.add("active")
	currentSlide = index
}

upBtn.addEventListener("click", () => {

	let prev = currentSlide - 1;

	if(prev < 0){
		prev = slide.length - 1;
	}

	swipe(prev)
})

downBtn.addEventListener("click", () => {
            let nextSlide = currentSlide + 1;

            if (nextSlide >= slide.length) {
                nextSlide = 0;
            }

            swipe(nextSlide);
});