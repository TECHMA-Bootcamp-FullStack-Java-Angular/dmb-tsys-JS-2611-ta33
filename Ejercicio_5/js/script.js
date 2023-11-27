import { images } from "../img/images.js";

const thumbnails = document.querySelector(".mini-pictures");

Object.values(images).forEach(({ src, alt }) => {
	const img = document.createElement("img");
	img.src = src;
	img.alt = alt;

	thumbnails.appendChild(img);
});

// Function to add listener to all images
document.querySelectorAll(".mini-pictures img").forEach((image) => {
	image.addEventListener("click", () => {
		imgMain.src = image.src;
		imgMain.atl = image.alt;
	});
});
