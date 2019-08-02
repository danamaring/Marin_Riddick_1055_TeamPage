(() => {
	//this is a self invoking function
	console.log('My JS issa workin!');

	let textContainer = document.querySelector(".text-container"),
			textButton = document.querySelector("button");
			bioButtons = document.querySelectorAll(".bio-buttons button")

	const dataContainer = ["This ", "is ", "some ", "text! "];
	const newContainer = ["This", "is", "a", "join"	, "method", "result!"];
	const billandTed = ["Dana's Bio", "Alec R"]
	//arrays above refer to 0^ and 1 (Ted). Replace with Bio information

	// I am Bill S Preston, Esq; And I am Ted Theodore Logan. Party on dude!


	function showBioInfo() {
		arrayIndex = this.dataset.arrayref;

		textContainer.textContent = billandTed[arrayIndex];
	}

	function joinArray() {
		textContainer.textContent = newContainer.join(" ");
	}

	// for as long as the number in dataContainer is greater than 0, add one to the index (i=index)
	dataContainer.forEach((word, index) => {
		textContainer.textContent += word;
		console.log(index); //where are we in our loop?
	})

	// the exact same as above, just a newer version
	for (let i=0; i<dataContainer.length; i++) {
		console.log(i, dataContainer[i]);

		// append (add) the array contents to the paragraph tag
		textContainer.textContent += dataContainer[i];
	}

	textContainer.textContent += "I just added this with script!"; // attribute: textContent
	textButton.addEventListener("click", joinArray); //joinArray means take every element and put them all into one
																									 //piece of text then adds a space that we told it to (brackets)
	bioButtons.forEach(button => button.addEventListener("click", showBioInfo));
})();
