
const subscribers = document.querySelector(".subscribers");


    let numSubs = Math.floor(Math.random() * 1000000);
    const subDisplay = document.createElement("h1");
    subDisplay.textContent = "subs: " + numSubs;
    subDisplay.classList.add("subDisplay");
    subscribers.appendChild(subDisplay);


let model, webcam;
let refresh = true;

// Load the image model and setup the webcam
async function init() {
    if (refresh) {
        refresh = false;
        const modelURL = URL + "model.json";
        const metadataURL = URL + "metadata.json";

        // load the model and metadata

        model = await tmImage.load(modelURL, metadataURL);
        maxPredictions = model.getTotalClasses();

        // Convenience function to setup a webcam
        const flip = true; // whether to flip the webcam
        webcam = new tmImage.Webcam(600, 400, flip); // width, height, flip
        await webcam.setup(); // request access to the webcam
        await webcam.play();
        // append elements to the DOM
        document.getElementById("webcam-container").appendChild(webcam.canvas);
        window.requestAnimationFrame(loop);
    }
    else {
        location.reload();
    }

}


async function loop() {
    webcam.update(); // update the webcam frame
    window.requestAnimationFrame(loop);

}
