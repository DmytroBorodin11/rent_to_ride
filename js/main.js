'use strict'

let popup = document.querySelector('.menu-popup');
let closeBlock =document.querySelector('.close-block');
let burgerBtn = document.querySelector('.menu-icon');
let closeBtn = document.querySelector('.close-btn');
let body = document.querySelector('body');

burgerBtn.addEventListener('click', () => {
	popup.classList.add('active');
	body.classList.add('locked');
});

closeBlock.addEventListener('click', () => {
	popup.classList.remove('active');
	body.classList.remove('locked');
});

closeBtn.addEventListener('click', () => {
	popup.classList.remove('active');
	body.classList.remove('locked');
});
burgerBtn.addEventListener('touchend', () => {
	popup.classList.add('active');
	body.classList.add('locked');
});

closeBlock.addEventListener('touchend', () => {
	popup.classList.remove('active');
	body.classList.remove('locked');
});

closeBtn.addEventListener('touchend', () => {
	popup.classList.remove('active');
	body.classList.remove('locked');
});