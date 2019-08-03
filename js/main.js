(() => {
	//this is a self invoking function
	console.log('My JS issa workin!');

	let nameOfPerson = document.querySelector(".name"),
		subHead = document.querySelector(".birthplace");
		textContainer = document.querySelector(".bio-paragraph");
		textButton = document.querySelector("button");
		bioButtons = document.querySelectorAll(".bio-buttons button");


	const dataContainer = ["Welcome to Marin-Riddick Enterprises! "];
	const newContainer = ["EXAMPLE"];
	const headerName = ["Dana Marin Garcia", "Alec Riddick"];
	const birthPlace = ["Colima, Mexico", "Markdale, Ontario"];
	const danaAndAlecContent = ["I was born in Colima, Mexico which is a very small city where everyone knows each other. I studied a Bachelor’s Degree in Education and in the last semester I won a scholarship to study English in Toronto for two months. After I finished my English studies and went back to Colima, I decided that I wanted to study something different related to design and programming in Canada and I found the IDP3 program in Fanshawe and the rest is history. Some of my hobbies are traveling, biking, cooking and of course designing.", "I grew up in Luke Skywalker’s house, on a farm with two and a half horses, and in a town with a population number under the view count of most YouTube videos. I attended Humber College for Advertising and Graphic Design and really loved the web design class. They got cut short because of the strike that happened and my colleagues at tbk Creative told me about this program at Fanshawe for web design so I decided to attend that same program. My hobbies include all things design, working out, skiing, and sailing."];
	const bgImage = ["url(images/dana_bio_updated.jpg)", "url(images/alec_bio_updated.jpg)"];


	function changeContent() {
		arrayIndex = this.dataset.arrayref;

		nameOfPerson.textContent = headerName[arrayIndex];
		subHead.textContent = birthPlace[arrayIndex];
		textContainer.textContent = danaAndAlecContent[arrayIndex];
	}

	function changeImage() {
		document.getElementById('danaImg').style.backgroundImage = bgImage[arrayIndex];
	}

	function joinArray() {
		textContainer.textContent = newContainer.join(" ");
	}

	dataContainer.forEach((word, index) => {
		textContainer.textContent += word;
	})

	for (let i=0; i<dataContainer.length; i++) {
		console.log(i, dataContainer[i]);

		textContainer.textContent = dataContainer[i];
	}

	textContainer.textContent += "Click the buttons below to see more people!"; 
	textButton.addEventListener("click", joinArray); 


	bioButtons.forEach(button => button.addEventListener("click", changeContent));
	bioButtons.forEach(button => button.addEventListener("click", changeImage));
})();
