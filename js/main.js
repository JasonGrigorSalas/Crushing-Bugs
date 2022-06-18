// Always start with a module to encapsulate the code. This is called IIFE (Immediately-Invoked Function Expression).

(() => {
	// Set up the puzzle pieces and boards.
	// Collect the buttons at the bottom of the page. Collect ALL of the elements that we want the user to interact with. JS holds these in memory so that it can access them later (these are elements in the HTML).
	let theThumbnails = document.querySelectorAll('#buttonHolder img'),
		gameBoard = document.querySelector('.puzzle-board'),
		pzlPieces = document.querySelectorAll('.puzzle-pieces img'),
		dropZones = document.querySelectorAll('.drop-zone');

	function changeBgImg() {
		// The "this" keyword refers to the element that triggers this function (the nav button we click with the custom data attribute of bgref).
		gameBoard.style.backgroundImage = `url(images/backGround${this.dataset.bgref}.jpg)`
		// debugger;
	}

	function allowDrag() {
		console.log('Started dragging me');

		// Create a reference to the element we're dragging so we can retrieve it later.
		event.dataTransfer.setData('draggedEl', this.id);
	}

	function allowDragOver(event) {
		// Override default behaviour on certain elements when an event happens.
		event.preventDefault();
		console.log('Started dragging over me');
	}

	function allowDrop(event) {
		event.preventDefault();
		console.log('Dropped on me');
		let droppedElId = event.dataTransfer.getData('draggedEl');

		// Retrieve the dragged el by its ID and then put it inside the current drop zone.
		this.appendChild(document.querySelector(`#${droppedElId}`));

		if (document.querySelector.droppedElId) { return }
	}

	// Add event handling here -> loop through theThumbnails array and add event handling to each image. How do we want the user to interact with the elements that we collected earlier? Events are things like clicks, drags, double-clicks, keypresses, etc. all the ways that a user can interact with a mouse, a keyboard, etc.
	theThumbnails.forEach(image => image.addEventListener('click', changeBgImg));
	pzlPieces.forEach(piece => piece.addEventListener('dragstart', allowDrag));

	// Set up the drop zone event handling.
	dropZones.forEach(zone => {
		zone.addEventListener('dragover', allowDragOver);
		zone.addEventListener('drop', allowDrop);
	});
})();
