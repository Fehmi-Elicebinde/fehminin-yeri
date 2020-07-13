function setup() {
	// Get the screen's width & height
	const width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
	const height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
	
	const footer = select(".footer");
	footer.position(0, 0.8*height);
	console.log("da");
}
