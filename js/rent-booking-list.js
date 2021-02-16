'use strict'

let actionBlokcksArr = [...document.querySelectorAll('.action-block')]
console.log(actionBlokcksArr);

actionBlokcksArr.forEach(block => {
	let checkBtn = block.querySelector('#checkout')
	let extensionBtn = block.querySelector('#extension');
		console.log(checkBtn, extensionBtn);	
	checkBtn.addEventListener('click', () => {
		if (!checkBtn.classList.contains('checkin')) {
			checkBtn.classList.add('checkin');
			extensionBtn.classList.add('checkin');
			checkBtn.innerHTML = 'Checkin';
		}else {
			checkBtn.classList.remove('checkin');
			extensionBtn.classList.remove('checkin');
			checkBtn.innerHTML = 'Checkout';
		}
	})
})