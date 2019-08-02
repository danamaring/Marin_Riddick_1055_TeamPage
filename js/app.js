(() => {
	console.log('workin hard or hardly workin');


	let textContainer = document.querySelector(".text-container"),
  		bioButtons = document.querySelectorAll('.bio-controls'),
  		textButton = document.querySelector("button"),
  		danaBio = document.querySelector('.bioDana');
  		// alecBio = document.querySelector('.bioAlec');

	const dataContainer = ["This is some text", "This is the second set of text"];
	const newContainer = ["This", "is", "a", "join"	, "method", "result!"];
 	const marinriddick = ["DANA", "ALEC"];


 	function changeBioInfo() {
		arrayIndex = this.dataset.arrayref;

		textContainer.textContent = marinriddick[arrayIndex];

		let bgImage = `./images/bio${this.dataset.ref}.jpg`;

		// set the background image style on the page	
		puzzleBoard.style.backgroundImage = `url(${bgImage})`;
 	}


 	function joinArray() {
		textContainer.textContent = newContainer.join("Blah Blah");
	}


	dataContainer.forEach((word, index) => {
		textContainer.textContent += word;
		console.log(index); //where are we in our loop?
	})

	for (let i=0; i<dataContainer.length; i++) {
		console.log(i, dataContainer[i]);

		// append (add) the array contents to the paragraph tag
		textContainer.textContent += dataContainer[i];
	}

	textContainer.textContent = "Meet the team of Marin-Riddick Enterprise by clicking the buttons below!";

	textButton.addEventListener("click", joinArray);

	bioButtons.forEach(button => button.addEventListener("click", changeBioInfo));
})();