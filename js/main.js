(() => {
	// Set up the puzzle pieces and boards.
	// Collect the buttons at the bottom of the page.
	let theThumbnails = document.querySelectorAll("#buttonHolder img"),
		gameBoard = document.querySelector(".puzzle-board");

	function changeBgImg() {
		// The "this" keyword refers to the element that triggers this function (the nav button we click with the custom data attribute of bgref).
		gameBoard.style.backgroundImage = `url(images/backGround${this.dataset.bgref}.jpg)`
		// debugger;
	}

	// Add event handling here -> loop through theThumbnails array and add event handling to each image.
	theThumbnails.forEach(item => item.addEventListener("click", changeBgImg));
	
})();
