window.addEventListener("load", () => {
	const preload = document.querySelector(".preload");
	preload.classList.add("preload-finish");
  });
  const videos = document.querySelectorAll(".video");
  const buttons = document.querySelectorAll(".play-btn");

  buttons.forEach((button, index) => {
    button.addEventListener("click", () => {
      if (videos[index].paused) {
        videos[index].play();
        button.textContent = "Pause";
      } else {
        videos[index].pause();
        button.textContent = "Play";
      }
    });
  });
  
  
 const namespan = document.getElementById("name");

const savedname = localStorage.getItem("username");
if(savedname){
	namespan.textContent = savedname;
}
namespan.addEventListener("input",()=>{
	localStorage.setItem("username" , namespan.textContent);
});