(() => {
	//this is a self invoking function
	console.log('My JS issa workin!');

	let textContainer = document.querySelector(".text-container"),
		textButton = document.querySelector("button");
		bioButtons = document.querySelectorAll(".bio-buttons button");
		alecButton = document.querySelector("#bio-buttons-alec");
		danaButton = document.querySelector("#bio-buttons-dana");


	const dataContainer = ["Welcome to Marin-Riddick Enterprises! "];
	const newContainer = ["EXAMPLE"];
	const danaAndAlec = ["Dana's Bio", "Alec R Bio"];
	const bgImage = ["url(images/dana_bio.jpg)", "url(images/alec_bio.jpg)"] // not cheating here

	function showBioInfo() {
		arrayIndex = this.dataset.arrayref;

		textContainer.textContent = danaAndAlec[arrayIndex];
	}

	function changeImage() {
		document.getElementById('danaImg').style.backgroundImage = bgImage[arrayIndex];
	}


	function changeContentA() { // CHEATING STARTS HERE
		document.getElementById('bioAlec').style.display = "block";
		document.getElementById('bioDana').style.display = "none";

		console.log("Now Viewing: Alec");
	}

	function changeContentD() {
		document.getElementById('bioAlec').style.display = "none";
		document.getElementById('bioDana').style.display = "block";

		console.log("Now Viewing: Dana");
	}



	function joinArray() {
		textContainer.textContent = newContainer.join(" ");
	}

	// for as long as the number in dataContainer is greater than 0, add one to the index (i=index)
	dataContainer.forEach((word, index) => {
		textContainer.textContent += word;
	})

	// the exact same as above, just a newer version
	for (let i=0; i<dataContainer.length; i++) {
		console.log(i, dataContainer[i]);

		// append (add) the array contents to the paragraph tag
		textContainer.textContent = dataContainer[i];
	}

	textContainer.textContent += "Click the buttons below to see more people!"; // attribute: textContent
	textButton.addEventListener("click", joinArray); //joinArray means take every element and put them all into one
																									 //piece of text then adds a space that we told it to (brackets)
	bioButtons.forEach(button => button.addEventListener("click", showBioInfo));
	bioButtons.forEach(button => button.addEventListener("click", changeImage));
	bioButtons.forEach(button => alecButton.addEventListener("click", changeContentA)); // technically cheating
	bioButtons.forEach(button => danaButton.addEventListener("click", changeContentD));
})();
