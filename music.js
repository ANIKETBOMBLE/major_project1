const songs = {
	nature:  ["Birds Chirping", "Forest Winds", "Rainforest Melody" ,"Birds Chirping"],
	silent: ["Calm Piano", "Meditation Bell", "Soft Strings"],
	mountain: ["Echoing Peaks", "Mountain Breeze", "Cave Ambience"],
	water: ["Ocean Waves", "Rain Droplets", "Waterfall Flow"]
};

// Get elements
const musicCategory = document.getElementById("musicCategory");
const songContainer = document.querySelector(".try");

// Function to update song list
function updateSongs(category) {
	songContainer.innerHTML = ""; // Clear previous songs
	if (songs[category]) {
		songs[category].forEach(song => {
			let songDiv = document.createElement("div");
			songDiv.textContent = song;
			songDiv.classList.add("song-item");
			songContainer.appendChild(songDiv);
		});
	}
}

musicCategory.addEventListener("change", function () {
	updateSongs(this.value);
});

const namespan = document.getElementById("name");

const savedname = localStorage.getItem("username");
if(savedname){
	namespan.textContent = savedname;
}
namespan.addEventListener("input",()=>{
	localStorage.setItem("username" , namespan.textContent);
});

// const apikey = "cdk6w4OMejFvGpMnBcECshp39ENB-0nDlXZ3eVRi5Ds";
// const count = 10;
// imges = [];
// async function getphoto() {
// try{
// 	const response = await fetch(apikey);
// 	imges = await response.json();
// 	console.log(imges);
// }catch(error){
// 	console.log(error);	
// }
// }
// getphoto();

