const songs = {
    nature: [
        { name: "Birds Chirping", src: "audios/birds.mp3", img: "music-imgs/1.jpeg" },
        { name: "Forest Winds", src: "audios/forest_winds.mp3", img: "music-imgs/2.jpeg" },
        { name: "Rainforest Melody", src: "audios/rainforest.mp3", img: "music-imgs/3.jpeg" },
		{ name: "Birds Chirping", src: "audios/birds.mp3", img: "music-imgs/1.jpeg" },
        { name: "Forest Winds", src: "audios/forest_winds.mp3", img: "music-imgs/2.jpeg" },
        { name: "Rainforest Melody", src: "audios/rainforest.mp3", img: "music-imgs/3.jpeg" }
    ],
    silent: [
        { name: "Calm Piano", src: "audios/forest_winds.mp3", img: "music-imgs/4.webp" },
        { name: "Meditation Bell", src: "audios/meditation_bell.mp3", img: "music-imgs/5.webp" },
        { name: "Soft Strings", src: "audios/soft_strings.mp3", img: "music-imgs/6.jpeg" },
		{ name: "Calm Piano", src: "audios/forest_winds.mp3", img: "music-imgs/4.webp" },
        { name: "Meditation Bell", src: "audios/meditation_bell.mp3", img: "music-imgs/5.webp" },
        { name: "Soft Strings", src: "audios/soft_strings.mp3", img: "music-imgs/6.jpeg" }
    ],
    mountain: [
        { name: "Echoing Peaks", src: "audios/echoing_peaks.mp3", img: "music-imgs/7.jpeg" },
        { name: "Mountain Breeze", src: "audios/mountain_breeze.mp3", img: "music-imgs/8.webp" },
        { name: "Cave Ambience", src: "audios/cave_ambience.mp3", img: "music-imgs/9.webp" },
		{ name: "Echoing Peaks", src: "audios/echoing_peaks.mp3", img: "music-imgs/7.jpeg" },
        { name: "Cave Ambience", src: "audios/cave_ambience.mp3", img: "music-imgs/9.webp" }
    ],
    water: [
        { name: "Ocean Waves", src: "audios/ocean_waves.mp3", img: "music-imgs/1.jpeg" },
        { name: "Rain Droplets", src: "audios/rain_droplets.mp3", img: "music-imgs/2.jpeg" },
        { name: "Waterfall Flow", src: "audios/waterfall.mp3", img: "music-imgs/3.jpeg" }
    ]
};

// Background images for each category
const categoryBackgrounds = {
    nature: "music-imgs/4.webp",
    silent: "music-imgs/5.webp",
    mountain: "music-imgs/6.jpeg",
    water: "music-imgs/7.jpeg"
};

// Get elements
const musicCategory = document.getElementById("musicCategory");
const songContainer = document.querySelector(".try");
const mainDivContainer = document.querySelector(".main-div-container");

// Function to update song list with images and audio player
function updateSongs(category) {
    songContainer.innerHTML = ""; // Clear previous songs

 

    if (songs[category]) {
        songs[category].forEach(song => {
            let songDiv = document.createElement("div");
            songDiv.classList.add("song-item");

            // Create image element (Thumbnail)
            let songImg = document.createElement("img");
            songImg.src = song.img;
            songImg.alt = song.name;
            songImg.classList.add("song-thumbnail");

            // Create song title
            let songTitle = document.createElement("span");
            songTitle.textContent = song.name;

            // Create audio element
            let audio = document.createElement("audio");
            audio.src = song.src;
            audio.controls = true; // Show play button

            // Append elements
            songDiv.appendChild(songImg);
            songDiv.appendChild(songTitle);
            songDiv.appendChild(audio);
            songContainer.appendChild(songDiv);
			
		
        });
		// audio.forEach(player =>{
		// 	player.addEventListener('play' ,()=>{
		// 		audio.forEach(otherplayer =>{
		// 			if(otherplayer !== player){
		// 				otherplayer.pasue();
		// 			}
		// 		})
		// 	})
		// })
    }
}


// Event listener for dropdown change
musicCategory.addEventListener("change", function () {
    updateSongs(this.value);
});

// Initially show nature songs
updateSongs("nature");



// 
       //.
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

