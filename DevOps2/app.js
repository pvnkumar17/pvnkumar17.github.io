var takeMeOut;
function request(url) {
	var xhr = new XMLHttpRequest();
	xhr.onreadystatechange = function(){
		if (xhr.readyState === 4 && xhr.status === 200) {
			takeMeOut = JSON.parse(xhr.responseText);
		}
	};
	xhr.open('GET',  url);
	xhr.send();	
}

request('technologyQuestions.json');

const quesButton = document.getElementById('button');
quesButton.addEventListener("click", handleButton);
let msg = document.getElementById('message');

function handleButton() {
	// let randomCat = Math.floor(Math.random()*4 + 1);
	let catX = "cat1";
	let questionsLength = takeMeOut[catX].questions.length; // generate random cat
	msg.innerText= "";
	let randomQues = Math.floor(Math.random()*questionsLength);
	if (questionsLength) {
		getQuestions(catX, randomQues);
		quesButton.removeEventListener("click", handleButton);	
	} else {
		msg.innerText= "There is no more questions. Please refresh the page to load questions again";
		quesButton.removeEventListener("click", handleButton);
	}
	console.log(questionsLength);
}

function getQuestions(catX, n) {
	let question = takeMeOut[catX].questions[n];
	let domQues = document.getElementById('ques');
	domQues.innerText = question.ques;
	let options = document.getElementById('options');
	let	optionsContent = "<ul>";
	for (var i = 0; i < question.answers.length; i++) {
		optionsContent += "<li>"+ question.answers[i] +"</li>";
	}
	optionsContent += "</ul>";
	options.innerHTML = optionsContent;
	options.addEventListener("click", compare);
	function compare(e) {		
	console.log(e);
		if (e.target.localName == "li") {
			e.target.className = "clicked";
			// Remove event listener here from options
			userAnswered = e.target.innerText;
			if(question.ans == userAnswered) {
				e.target.className += " green";
				options.removeEventListener("click", compare);
				msg.innerText= "Correct Answer!";
			} else {
				e.target.className += " red";
				options.removeEventListener("click", compare);
				msg.innerText= "Your answer is incorrect!";
				let answersList = options.querySelectorAll("ul li");
				setTimeout(function() {
					for (var i = 0; i < answersList.length; i++) {
						if (answersList[i].innerText == question.ans) {
							answersList[i].className += " green";
						}
					}
				}, 1000);
			}
			quesButton.addEventListener("click", handleButton);
			quesButton.innerText = "Load Next Question"; 
		}
	}
	//Now deleting this question from list
	takeMeOut[catX].questions.splice(n,1);
}
