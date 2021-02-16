'use strict'

let monthBnsnArr = [...document.querySelectorAll('.month-btn')];
let daysBntsArr = [...document.querySelectorAll('.day-btn')];
let rentBntsArr = [...document.querySelectorAll('.rent-time-btn')];
let footerBtnsArr = [...document.querySelectorAll('.footer-btn')];


let removeClass = (arr, className) => {
	arr.forEach(item => {
		item.classList.remove(className);
	})
}

let addClass = (item, className) => {
	item.classList.add(className);
}
monthBnsnArr.forEach(btn => {
	btn.addEventListener('click', () => {
		removeClass(monthBnsnArr, 'active');
		addClass(btn, 'active');
	});
});
daysBntsArr.forEach(btn => {
	btn.addEventListener('click', () => {
		removeClass(daysBntsArr, 'active');
		addClass(btn, 'active');
	});
});
rentBntsArr.forEach(btn => {
	btn.addEventListener('click', () => {
		removeClass(rentBntsArr, 'active');
		addClass(btn, 'active');
	});
});
footerBtnsArr.forEach(btn => {
	btn.addEventListener('click', () => {
		removeClass(footerBtnsArr, 'active');
		addClass(btn, 'active');
	});
});