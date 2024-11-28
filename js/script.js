addEventListener("DOMContentLoaded", () => {
	const button = document.querySelector("#toggle");
	const random = document.querySelector("#random");
	const quickInfo = document.querySelector(".quickinfo");
	const options = ["/index.html", "/most_viewed.html", "/most_edited.html"];

	// Set the link href to a random article
	random.href = options[Math.round(Math.random())];

	button.addEventListener("click", () => {
		button.classList.toggle("active");
		quickInfo.classList.toggle("mobile-hidden");
	});
});
