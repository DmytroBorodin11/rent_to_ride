'use-strict'

/*Customer's popup*/

let custPopup = document.querySelector('.customers-popup');
let closeBlockCust = custPopup.querySelector('.close-block');
let closeBtnCust = custPopup.querySelector('.close-btn');
let custBlock = document.querySelector('#cust-name');
let bodyPopup = document.querySelector('body');
let selectBtnsCustArr = [...custPopup.querySelectorAll('.select-btn')];
let custNamesArr = [...custPopup.querySelectorAll('.user-name')];
let custName =  document.querySelector('#name');

custBlock.addEventListener('click', () => {
	custPopup.classList.add('active');
	bodyPopup.classList.add('locked');
});
closeBlockCust.addEventListener('click', () => {
	custPopup.classList.remove('active');
	bodyPopup.classList.remove('locked');
})

closeBtnCust.addEventListener('click', () => {
	custPopup.classList.add('active');
	bodyPopup.classList.add('locked');
});
closeBtnCust.addEventListener('click', () => {
	custPopup.classList.remove('active');
	bodyPopup.classList.remove('locked');
});
selectBtnsCustArr.forEach(btn => {
	btn.addEventListener('click', () => {
		let index = selectBtnsCustArr.indexOf(btn);
		let userName = custNamesArr[index].innerHTML;
		custName.innerHTML = userName;
		custPopup.classList.remove('active');
		bodyPopup.classList.remove('locked');
	})
})


/*Edit numbers popup*/

let editNumbersPopup = document.querySelector('.edit-numbers-popup');
let closeBtnEdit = editNumbersPopup.querySelector('.close-btn-block');
let saveNumbersBtn = document.getElementById('save-btn');
let editNumbersPopupOpenBtn = document.getElementById('editNumbers-popup-open-btn');


let numbersBlock = document.querySelector('.numbers');
let customerNumbersArr = [...numbersBlock.querySelectorAll('.main-text')];
let editNumbersPopupInputs = [...editNumbersPopup.querySelectorAll('input')];


let setInputsVal = (valArr, inputsArr) => {
	for (let i = 0; i < valArr.length; i++) {
		let value = valArr[i].innerText;
		inputsArr[i].setAttribute('value', value);
	}
}

let setNumbersVal = (inputsArr, valArr) => {
	for (let i = 0; i < inputsArr.length; i++) {
		let value = inputsArr[i].value;
		valArr[i].innerText = value;
	}
}


editNumbersPopupOpenBtn.addEventListener('click', () => {
	setInputsVal(customerNumbersArr, editNumbersPopupInputs);
	editNumbersPopup.classList.add('active');
	bodyPopup.classList.add('locked');
});

closeBtnEdit.addEventListener('click', () => {
	editNumbersPopup.classList.remove('active');
	bodyPopup.classList.remove('locked');
});

saveNumbersBtn.addEventListener('click', () => {
	editNumbersPopup.classList.remove('active');
	bodyPopup.classList.remove('locked');
	setNumbersVal(editNumbersPopupInputs, customerNumbersArr);
});

/*Password popup*/

let passwordPopup = document.querySelector('.password-popup');
let closeBtnPass = passwordPopup.querySelector('.close-btn-block');
let printBtnPass = passwordPopup.querySelector('#print-btn');
let openBtnPass = document.querySelector('#main');

openBtnPass.addEventListener('click', () => {
	passwordPopup.classList.add('active');
	bodyPopup.classList.add('locked');
});

closeBtnPass.addEventListener('click', () => {
	passwordPopup.classList.remove('active');
	bodyPopup.classList.remove('locked');
});

printBtnPass.addEventListener('click', () => {
	passwordPopup.classList.remove('active');
	bodyPopup.classList.remove('locked');
});


