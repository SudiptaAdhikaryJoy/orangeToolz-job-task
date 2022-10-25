const logs = document.querySelectorAll(".log");
logs.forEach((log) => {
	log.addEventListener("click", () => {
		log.classList.toggle("active");
	});
});

document.querySelectorAll(".log").forEach((log) => {
    log.addEventListener("click", () => {
        log.classList.toggle("active");
    })
})