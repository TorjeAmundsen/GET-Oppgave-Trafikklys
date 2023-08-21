const LIGHTS = [
    document.getElementById("red-light"),
    document.getElementById("yellow-light"),
    document.getElementById("green-light")
];

let currentLight = 0;

const allOff = () => {
    LIGHTS.forEach((e) => {
        e.classList.remove("on");
    });
};

const allOn = () => {
    LIGHTS.forEach((e) => {
        e.classList.add("on");
    });
};

const randomNum = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
};

// Positive direction = Red -> Green
const setLight = (direction) => {
    for (let i = 0; i < 2; i++) {
        LIGHTS[currentLight].classList.toggle("on");
        currentLight += direction;
        LIGHTS[currentLight].classList.toggle("on");
    };
};

const specificLight = (index) => {
    allOff();
    LIGHTS[index].classList.add("on");
};