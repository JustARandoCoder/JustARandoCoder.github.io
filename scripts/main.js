let myImage = document.querySelector('img'); // This selects the image elemet on the html page

myImage.onclick = function() { // this defines what to happen when we click on the page
    let mySrc = myImage.getAttribute('src'); //here we are getting the src atribute which is the file path and name
    if(mySrc === 'images/seaofthieves.png') { // if our normal image is there then run the if statement 
      myImage.setAttribute('src','images/sot2.png');
    } else {
      myImage.setAttribute('src','images/seaofthieves.png'); //if sot 2 is present and we right click then change to this
    }
}
//personalised welcome message
let myButton = document.querySelector('button'); // creates a variable called button and stores the button on the page in it
let myHeading = document.querySelector('h1'); // stores the heading in it

function setUserName() {
  let myName = prompt('Please enter your name.');  // Promp asks user for a name and stores it in a variable. This is literally JOptionPane.showInputDialog(); 
  if(!myName){ //this is to ensure it's not null
	  setUserName(); 
  }else{ localStorage.setItem('name', myName);
  myHeading.textContent = 'I am cool, ' + myName;
	}
}
if(!localStorage.getItem('name')) {
  setUserName(); // Runs in order to create name
} else {
  let storedName = localStorage.getItem('name'); // we retrieve the stored item name by using get item
  myHeading.textContent = 'Mozilla is cool, ' + storedName; // we net the heading tp what is esentially name
}
myButton.onclick = function() { // when clicked this function will happen
 setUserName(); // it will run set user name which is the one that asks for a prommpt
}