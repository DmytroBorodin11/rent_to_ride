'use strict'

let custSelectBtn = document.querySelector('.icon-arrow_21');
let custList = document.querySelector('.cutomer-list');
console.log(custList)
let mainCustItem = document.querySelector('#main-cust-item');
let custItemsArr = [...custList.querySelectorAll('.customer-item')];
console.log(custItemsArr);
console.log(mainCustItem);

custSelectBtn.addEventListener('click', () => {
	custList.classList.add('select-cust');
});
custItemsArr.forEach(item => {
	item.addEventListener('click', () => {
		mainCustItem.value = item.innerText;
		custList.classList.remove('select-cust');
	})
})


let locSelectBtn = document.querySelector('#loc-btn');
let locList = document.querySelector('.location-list');
let mainLocItem = document.querySelector('#location');
console.log(mainLocItem);
let locItemsArr = [...locList.querySelectorAll('.location-item')];

locSelectBtn.addEventListener('click', () => {
	locList.classList.add('select-loc');
});
locItemsArr.forEach(item => {
	item.addEventListener('click', () => {
		mainLocItem.value = item.innerText;
		locList.classList.remove('select-loc');
	})
})


let monthBnsnArr = [...document.querySelectorAll('.month-btn')];
let daysBntsArr = [...document.querySelectorAll('.day-btn')];
let startTimeBlock = document.querySelector('.start-time-block');
let endTimeBlock = document.querySelector('.end-time-block');

let removeClass = (arr, className) => {
	arr.forEach(item => {
		item.classList.remove(className);
	})
}

let addClass = (item, className) => {
	item.classList.add(className);
}
let setStartTime = (data, className) => {
	let elem = startTimeBlock.querySelector(className);
	elem.innerText = data;
}
let setEndTime = (data, className) => {
	let elem = endTimeBlock.querySelector(className);
	elem.innerText = data;
}

let setStarBlock = () => {
	slider.addEventListener('mouseup', () => {
		let hourTime = document.querySelector('.hour-time');
		let minuteTime = document.querySelector('.minute-time');
		let dayPeriod = document.querySelector('.day-period');
		let minutes = document.getElementById('minutes');
		let hours = document.getElementById('hours');
		hourTime.innerText = hours.innerText;
		minuteTime.innerText = minutes.innerText;
		addClass(startTimeBlock, 'active');
	})
}
let setEndBlock = () => {
	slider.addEventListener('mouseup', () => {
		let hourTime = document.querySelector('.end-hour');
		let minuteTime = document.querySelector('.end-minute');
		let dayPeriod = document.querySelector('.day-period');
		let minutes = document.getElementById('minutes');
		let hours = document.getElementById('hours');
		hourTime.innerText = hours.innerText;
		minuteTime.innerText = minutes.innerText;
		addClass(endTimeBlock, 'active');
	})
}

monthBnsnArr.forEach(btn => {
	btn.addEventListener('click', () => {
		removeClass(monthBnsnArr, 'active');
		addClass(btn, 'active');
		let monthName = btn.innerText;
		let className = '.month';
		if (btn.classList.contains('start-time')) {
			setStartTime(monthName, className);
		}
		if (btn.classList.contains('end-time')) {
			setEndTime(monthName, className);
		}
	});
});
daysBntsArr.forEach(btn => {
	btn.addEventListener('click', () => {
		removeClass(daysBntsArr, 'active');
		addClass(btn, 'active');
		let dayName = btn.querySelector('.day-name').innerText;
		let dayDate = btn.querySelector('.day-date').innerText;
		let classNameF = '.day';
		let classNameS = '.date';
		if (btn.classList.contains('start-time')) {
			setStartTime(dayName, classNameF);
			setStartTime(dayDate, classNameS);
		}
		if (btn.classList.contains('end-time')) {
			setEndTime(dayName, classNameF);
			setEndTime(dayDate, classNameS);
		}
	});
});



/*TimeLine*/
 let slider = document.getElementById('slider');
 let selector = document.querySelector('#selector');
 let progressBar = document.getElementById('progress-bar');
 let selectBtn = document.querySelector('.selectBtn');
 let timeLineItemsArr = [...document.querySelectorAll('.main-span'), ...document.querySelectorAll('.submain-span')];


 slider.oninput = function () {
 	selector.style.left = this.value/48 + '%';
 	progressBar.style.width = this.value/48 + '%';
 	let hours = document.getElementById('hours');
 	let hoursVal = 24*this.value/4800;
 	hours.innerText = Math.round(hoursVal);
 	if ((Math.round(hoursVal) - hoursVal) > 0.00001) {
 		hours.innerText = Math.floor(hoursVal);
 	}
 	if (hoursVal < 10) {
 		hours.innerText = '0' + hours.innerText;
 	}
 	let minutes = document.getElementById('minutes');
 	minutes.innerText = Math.round(60*this.value/200);
 	if (minutes.innerText >= 60*Math.floor(hoursVal) && 60*Math.floor(hoursVal) != 0) {
 		minutes.innerText = minutes.innerText - 60*Math.floor(hoursVal);
 	}
 	if (minutes.innerText < 10) {
 		minutes.innerText = '0' + minutes.innerText;
 	}
 	timeLineItemsArr.forEach(item => {
 		if (item.getBoundingClientRect().x < selectBtn.getBoundingClientRect().x) {
 			item.style.background = 'rgb(213, 213, 213)';
 		}
 	});
 	if (startTimeBlock.classList.contains('active')) {
 		let hourTime = document.querySelector('.end-hour');
		let minuteTime = document.querySelector('.end-minute');
		let dayPeriod = document.querySelector('.end-day-period');
		let minutes = document.getElementById('minutes');
		let hours = document.getElementById('hours');
		hourTime.innerText = hours.innerText;
		if (hourTime.innerText<12 && hourTime.innerText>6) {
			dayPeriod.innerText = 'morning';
		}else if(hourTime.innerText>=12 && hourTime.innerText<18) {
			dayPeriod.innerText = 'day';
		}else if(hourTime.innerText>=18 && hourTime.innerText<=24) {
			dayPeriod.innerText = 'evening';
		}else if(hourTime.innerText>=0 && hourTime.innerText<=6) {
			dayPeriod.innerText = 'night';
		}
		minuteTime.innerText = minutes.innerText;
		addClass(endTimeBlock, 'active');
 	}else {
		let hourTime = document.querySelector('.hour-time');
		let minuteTime = document.querySelector('.minute-time');
		let dayPeriod = document.querySelector('.day-period');
		let minutes = document.getElementById('minutes');
		let hours = document.getElementById('hours');
		hourTime.innerText = hours.innerText;
		if (hourTime.innerText<12 && hourTime.innerText>6) {
			dayPeriod.innerText = 'morning';
		}else if(hourTime.innerText>=12 && hourTime.innerText<18) {
			dayPeriod.innerText = 'day';
		}else if(hourTime.innerText>=18 && hourTime.innerText<=24) {
			dayPeriod.innerText = 'evening';
		}else if(hourTime.innerText>=0 && hourTime.innerText<=6) {
			dayPeriod.innerText = 'night';
		}
		minuteTime.innerText = minutes.innerText;
 		addClass(startTimeBlock, 'active');
 	}
 };



let listBtnArr = [...document.querySelectorAll('.list-btn')];
listBtnArr.forEach(btn => {
	btn.addEventListener('click', () => {
		listBtnArr.forEach(item => {
			item.classList.remove('active');
			btn.classList.add('active');
		})
	})
});

let addCustBtn = document.querySelector('#add-cust');
let cancelBtn = document.querySelector('#cancel');
let saveBtn = document.querySelector('#save');
let addCustPopup = document.querySelector('.add-customer-popup');
let closePopupBtn = addCustPopup.querySelector('.close-btn');
let bodyPopup = document.querySelector('body');


addCustBtn.addEventListener('click', () => {
	addCustPopup.classList.add('active');
	bodyPopup.classList.add('locked');
});

closePopupBtn.addEventListener('click', () => {
	addCustPopup.classList.add('active');
	bodyPopup.classList.add('locked');
});
closePopupBtn.addEventListener('click', () => {
	addCustPopup.classList.remove('active');
	bodyPopup.classList.remove('locked');
});

cancelBtn.addEventListener('click', () => {
	addCustPopup.classList.remove('active');
	bodyPopup.classList.remove('locked');
});
saveBtn.addEventListener('click', () => {
	addCustPopup.classList.remove('active');
	bodyPopup.classList.remove('locked');
});