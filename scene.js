
        document.querySelectorAll(".item").forEach(item => {
            const video = item.querySelector("video");
            const playIcon = item.querySelector(".play-icon");

            item.addEventListener("click", (e) => {
              e.preventDefault();
                if (video.requestFullscreen) {
                    video.requestFullscreen();
                } else if (video.webkitRequestFullscreen) { // Safari
                    video.webkitRequestFullscreen();
                } else if (video.msRequestFullscreen) { // IE11
                    video.msRequestFullscreen();
                }

                video.play(); // Auto-play when in fullscreen
                playIcon.style.display = "none"; // Hide play icon when playing
            });

            video.addEventListener("pause", () => {
                playIcon.style.display = "block"; // Show play icon when paused
            });

            video.addEventListener("play", () => {
                playIcon.style.display = "none"; // Hide play icon when playing
            });
        });
   
