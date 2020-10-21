 //using selectors inside the element
// traversing the dom

const questions = document.querySelectorAll(".question");
// console.log(questions);
questions.forEach(function (question) { 
	// console.log(question);
	const btn = question.querySelector(".question-btn");
	btn.addEventListener("click", function () {
		questions.forEach(function (item) {
			// if article doesn't match question that is being referred, remove the class
			if (item !== question) { 
				item.classList.remove("show-text");
			}
		})
		question.classList.toggle("show-text")
	})
})

// const btns = document.querySelectorAll(".question-btn");

// btns.forEach(function (btn) {
// 	btn.addEventListener("click", function (e) {
// 		const question  =e.currentTarget.parentElement.parentElement;
// 		question.classList.toggle("show-text");
// 	})
// })