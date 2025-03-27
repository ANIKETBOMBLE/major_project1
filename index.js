


//auto text you can see on the ui 
const text = [
	"You matter.",
	"You're awesome!",
	"You did great today!",
	"I believe in you!",
	"You are loved!",
	"You are worthy",
	"Keep going!",
	"I love you!",
	"Make it happen.",
	"Be a light.",
	"Know your worth.",
	"Things will get better",
	"Be good. Do good.",
	"Follow your heart.",
	"Stay hopeful!",
	"You are strong!",
	"Protect your peace.",
	"Be still.",
	"You are beautiful!",
	"Keep on fighting!",
  ];
  let count = 0;
  let  index = 0;
  let currentText = "";
  let letter = "";
  function type(){
  	if(count === text.length){
  		count = 0;
  	}
  	currentText = text[count];
  	letter = currentText.slice(0, ++index);
  	document.querySelector(".typing").textContent = letter;
  	if(letter.length === currentText.length){
  		count++;
  		index = 0;
  	}
  	setTimeout(type, 500);
  }
  type();
  
//accoad func for ui 
const icons = document.querySelectorAll(".accord img");
const allPara = document.querySelectorAll(".accord p");

icons.forEach((icon) => {
  icon.addEventListener("click", () => {
    const para = icon.parentElement.nextElementSibling;

    if (para.classList.contains("active")) {
      para.classList.remove("active");
    } else {
      allPara.forEach((para) => {
        if (para.classList.contains("active")) {
          para.classList.remove("active");
          return;
        }
      });
      para.classList.add("active");
      icon.classList.remove("icons");
      icon.classList.add("icons");
    }
  });
});

//click on see more to watch

const modalBtn = document.querySelector(".modal-btn"); // Use the correct selector for the button that opens the modal
const modalBg = document.querySelector(".modal-bg");
const close = document.querySelector(".close-btn");

modalBtn.addEventListener("click", function (e) {
	e.preventDefault();
  modalBg.classList.add("modal-active");
});

close.addEventListener("click", (e) => {
	e.preventDefault();
  const newLocal = "modal-active";
  modalBg.classList.remove(newLocal);
});

//QR code you can scan and watch

const websiteURL = "https://major-project1-phi.vercel.app/index.html"; // Change this to your target website

// Generate QR Code
new QRCode(document.getElementById("qrcode"), {
	text: websiteURL,
	width: 80,
	height: 80
});

const greating = document.querySelector("#greeting");

function setgreet(){
	let tody = new Date(),
	hour = tody.getHours();
	if(hour < 12){
		greating.textContent = "Good morning";
	}else if(hour <18){
		greating.textContent = "Good afternoon";
	}else{
		greating.textContent ="Good night";
	}
}
setgreet();

//write name and store them in LS,, 
const namespan = document.getElementById("name");

const savedname = localStorage.getItem("username");
if(savedname){
	namespan.textContent = savedname;
}
namespan.addEventListener("input",()=>{
	localStorage.setItem("username" , namespan.textContent);
});