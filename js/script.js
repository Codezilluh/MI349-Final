addEventListener("DOMContentLoaded", () => {
	const button = document.querySelector("#toggle");
	const quickInfo = document.querySelector(".quickinfo");

	button.addEventListener("click", () => {
		button.classList.toggle("active");
		quickInfo.classList.toggle("mobile-hidden");
	});
});
