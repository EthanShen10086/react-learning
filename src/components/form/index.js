let firstName = 'Jane';
let lastName = 'Jacobs';
let isEditing = false;

function handleFormSubmit(e) {
	e.preventDefault();
	setIsEditing(!isEditing);
}

function handleFirstNameChange(e) {
	setFirstName(e.target.value);
}

function handleLastNameChange(e) {
	setLastName(e.target.value);
}

function setFirstName(value) {
	firstName = value;
	updateDOM('first', firstName);
}

function setLastName(value) {
	lastName = value;
	updateDOM('last', lastName);
}

function setIsEditing(value) {
	isEditing = value;
	updateDOM('end');
}

function updateDOM(type, data) {
	if (isEditing) {
		editButton.textContent = 'Save Profile';
		if (type === 'first') {
			hide(firstNameText);
			show(firstNameInput);
			firstNameInput.value = data;
			firstNameText.value = data;
		}
		if (type === 'last') {
			hide(lastNameText);
			show(lastNameInput);
			lastNameInput.value = data;
			lastNameText.value = data;
		}
		// TODO: show inputs, hide content
	} else {
		editButton.textContent = 'Edit Profile';
		// TODO: hide inputs, show content
		if (type === 'end') {
			firstNameInput.value = '';
			lastNameInput.value = '';
			hide(firstNameInput);
			hide(lastNameInput);
			show(firstNameText);
			show(lastNameText);
		}
	}
	// TODO: update text labels
	// 官网答案
	if (isEditing) {
		editButton.textContent = 'Save Profile';
		hide(firstNameText);
		hide(lastNameText);
		show(firstNameInput);
		show(lastNameInput);
	} else {
		editButton.textContent = 'Edit Profile';
		hide(firstNameInput);
		hide(lastNameInput);
		show(firstNameText);
		show(lastNameText);
	}
	firstNameText.textContent = firstName;
	lastNameText.textContent = lastName;
	helloText.textContent = 'Hello ' + firstName + ' ' + lastName + '!';
}

function hide(el) {
	el.style.display = 'none';
}

function show(el) {
	el.style.display = '';
}

let form = document.getElementById('form');
let editButton = document.getElementById('editButton');
let firstNameInput = document.getElementById('firstNameInput');
let firstNameText = document.getElementById('firstNameText');
let lastNameInput = document.getElementById('lastNameInput');
let lastNameText = document.getElementById('lastNameText');
let helloText = document.getElementById('helloText');
form.onsubmit = handleFormSubmit;
firstNameInput.oninput = handleFirstNameChange;
lastNameInput.oninput = handleLastNameChange;
