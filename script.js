const LIGHTS = [
    document.getElementById("red-light"),
    document.getElementById("yellow-light"),
    document.getElementById("green-light")
];

let currentLight = 0;
let velocity = 1;
let interval = null;

const delay = (delayInms) => {
    return new Promise(resolve => setTimeout(resolve, delayInms));
}

const allOff = () => {
    clearInterval(interval);
    interval = null;
    LIGHTS.forEach((e) => {
        e.classList.remove("on");
    });
}

const allOn = () => {
    clearInterval(interval);
    interval = null;
    LIGHTS.forEach((e) => {
        e.classList.add("on");
    });
}

const randomNum = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

const specificLight = (index) => {
    clearInterval(interval);
    interval = null;
    allOff();
    LIGHTS[index].classList.add("on");
    currentLight = index;
}


function toggleAutoLights() {
    if (interval === null) {
        specificLight(0);
        velocity = 1;
        interval = setInterval(autoLights, 1500);
    } else {
        clearInterval(interval);
        interval = null;
    }
}

function autoLights() {
    if (!(currentLight === 0 && velocity === 1)) LIGHTS[currentLight].classList.toggle("on");
    if (currentLight + velocity === 2) LIGHTS[0].classList.toggle("on");
    currentLight += velocity;
    LIGHTS[currentLight].classList.toggle("on");
    velocity = currentLight == 2 || currentLight == 0 ? velocity * -1 : velocity;
}