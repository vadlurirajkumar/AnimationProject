

let mode = document.querySelector(".moon-bg");
let body = document.querySelector("body");
let logo = document.querySelector(".logo-change")
let logo_text = document.querySelector("b")
let circular_text = document.querySelector(".circle")
let hand = document.querySelector(".hand")
let heading = document.querySelector("h1")
let content = document.querySelector(".content")


mode.addEventListener("click", ()=> {
	body.classList.toggle("body-bg")
	logo_text.classList.toggle("logo-text")
	hand.classList.toggle("hand-poistion")
	heading.classList.toggle("text-effect")
	content.classList.toggle("col-white")
	

	if(body.classList == "body-bg") {
		logo.src = "images/apple_logo-grey.png";
		circular_text.src = "./images/circle_lig.svg";
		hand.src = "images/hand_apple_light.png"
		mode.src = "images/sun.png"
		
	}
	else {
		logo.src = "images/apple_logo.png";
		circular_text.src = "./images/circle.svg"
		hand.src = "images/My project-1 (5).png"
		mode.src = "./images/moon_bg.png"
	}



})


	gsap.from(".logo", {
		duration: 1,
		opacity: 0,
		y: -100
	})
	gsap.from("nav ul li", {
		duration: 1,
		opacity: 0,
		y: -100,
		stagger: .2
	})
	gsap.from(".content .text > *", {
		duration: 1,
		opacity: 0,
		y: 100,
		stagger: .6,
		delay: 1.6
	})
	gsap.from(".products .card", {
		duration: 1,
		opacity: 0,
		y: 100,
		stagger: .6,
		delay: 2
	})
	gsap.from(".products .card1", {
		duration: 1,
		opacity: 0,
		y: 100,
		stagger: .6,
		delay: 2
	})
	gsap.from(".products .card2", {
		duration: 1,
		opacity: 0,
		y: 100,
		stagger: .6,
		delay: 2
	})
	gsap.from(".content .img-banner", {
		duration: 3,
		opacity: 0,
		x: 300,
		stagger: .6,
		delay: 3
	})