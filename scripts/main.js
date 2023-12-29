const myButton = document.querySelector("button");
const myHeading = document.querySelector("h1");

myHeading.onclick=() =>{
	alert("hello");
}

function setUserName(){
	const myName = prompt("Please enter your name: ");
	if (!myName){
		setUserName();
	}else{
		localStorage.setItem("name",myName);
		myHeading.textContent =`I love you, ${myName}`;
	}
}
myButton.onclick=()=>{
	setUserName();
}
if (!localStorage.getItem("name")){
	setUserName();
}else{
	const storedName = localStorage.getItem("name");
	myHeading.textContent =`I love you, ${storedName}`;
}

const myImage = document.querySelector("img");
myImage.onclick = () =>{
	const mySrc = myImage.getAttribute("src")
	if (mySrc === "images/geography.png"){
		myImage.setAttribute("src","images/global-search.png");
	}else{
		myImage.setAttribute("src","images/geography.png");
	}
};

