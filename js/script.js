"use strict";
const langEl = document.querySelector(".langWrap");
const link = document.querySelectorAll("a");

const aboutN = document.querySelector(".about");
const homeN = document.querySelector(".home");

link.forEach(el => {
	el.addEventListener("click", () => {
		const attr = el.getAttribute("language");

		homeN.textContent = data[attr].home;
		aboutN.textContent = data[attr].about;
	});
});

var data = {
	"armenian": {
		"home": "Գլխավոր",
		"about": "Մեր մասին",

	},
	"russian": {
		"home": "Дом",
		"about": "о нас",

	},
	"english": {
		"home": "Home",
		"about": "About us",
	}
}