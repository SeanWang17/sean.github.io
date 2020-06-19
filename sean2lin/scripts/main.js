let myImage = document.querySelector('img');

myImage.onclick = function() {
	let mySrc = myImage.getAttribute('src');
	if(mySrc === 'images/mirror.jpg') {
		myImage.setAttribute('src', 'images/origin.jpg');
	} else {
		myImage.setAttribute('src', 'images/mirror.jpg');
	}
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
  let myName = prompt('Please enter your name.');
  if(!myName) {
	  setUserName();
  } else {
	  localStorage.setItem('name', myName);
	  myHeading.textContent = myName + '爱你哟';
  }
}

myButton.onclick = function() {
  setUserName();
}