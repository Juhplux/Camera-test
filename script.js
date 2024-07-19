
const subscribers = document.querySelector(".subscribers");


    let numSubs = Math.floor(Math.random() * 1000000);
    const subDisplay = document.createElement("h1");
    subDisplay.textContent = "subs: " + numSubs;
    subDisplay.classList.add("subDisplay");
    subscribers.appendChild(subDisplay);


// Load the image model and setup the webcam
    document.addEventListener("DOMContentLoaded", () => {
        let but = document.getElementById("but");
        let video = document.getElementById("vid");
        let mediaDevices = navigator.mediaDevices;
        vid.muted = true;
        but.addEventListener("click", () => {

            // Accessing the user camera and video.
            mediaDevices
                .getUserMedia({
                    video: true,
                    audio: true,
                })
                .then((stream) => {
                    // Changing the source of video to current stream.
                    video.srcObject = stream;
                    video.addEventListener("loadedmetadata", () => {
                        video.play();
                    });
                })
                .catch(alert);
        });
    });


