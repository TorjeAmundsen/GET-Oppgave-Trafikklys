const LIGHTS = [
    document.getElementById("red-light"),
    document.getElementById("yellow-light"),
    document.getElementById("green-light")
];

let currentLight = 0;
let velocity = 1;
let interval;

const delay = (delayInms) => {
    return new Promise(resolve => setTimeout(resolve, delayInms));
}

const allOff = () => {
    clearInterval(interval);
    LIGHTS.forEach((e) => {
        e.classList.remove("on");
    });
}

const allOn = () => {
    clearInterval(interval);
    LIGHTS.forEach((e) => {
        e.classList.add("on");
    });
}

const randomNum = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

const specificLight = (index) => {
    clearInterval(interval);
    LIGHTS[index].classList.add("on");
    currentLight = index;
}


function toggleAutoLights() {
    if (!running) {
        specificLight(0);
        velocity = 1;
        interval = setInterval(autoLights, 1500);
    } else {
        clearInterval(interval);
    }
}

function autoLights() {
    if (!(currentLight === 0 && velocity === 1)) LIGHTS[currentLight].classList.toggle("on");
    if (currentLight + velocity === 2) LIGHTS[0].classList.toggle("on");
    currentLight += velocity;
    LIGHTS[currentLight].classList.toggle("on");
    velocity = currentLight == 2 || currentLight == 0 ? velocity * -1 : velocity;
}