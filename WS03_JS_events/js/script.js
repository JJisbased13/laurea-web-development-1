// Exercise 1

function showTable() {

    const animal = "Orca";
    const habitat = "Ocean";
    const diet = "Carnivore";

    const animalTable = `
        <table>
            <tr>
                <th>Animal</th>
                <th>Habitat</th>
                <th>Diet</th>
            </tr>
            <tr>
                <td>${animal}</td>
                <td>${habitat}</td>
                <td>${diet}</td>
            </tr>
        </table>
    `;

    const tableContainer = document.querySelector("#tableContainer");
    tableContainer.innerHTML = animalTable;
}


// Exercise 2

const exercise2 = document.querySelector("#exercise2");

exercise2.addEventListener("mouseover", function () {
    console.log("Stepped over me with a mouse!");
});

const exercise1 = document.querySelector("#exercise1");

exercise1.addEventListener("click", function () {
    exercise1.style.color = "red";
    exercise1.innerHTML = "Bye bye mouse!";
});

// Exercise 3

const feedback = document.querySelector("#feedback");
const status = document.querySelector("#status");
const charcount = document.querySelector("#charcount");
const preview = document.querySelector("#preview");

feedback.addEventListener("focus", function () {
    status.innerHTML = "Start typing your feedback!";
    feedback.style.backgroundColor = "lightyellow";
});

feedback.addEventListener("blur", function () {
    status.innerHTML = "";
    feedback.style.backgroundColor = "";
});

feedback.addEventListener("input", function () {

    const length = feedback.value.length;

    charcount.innerHTML = `${length}/200`;

    preview.innerHTML = feedback.value;
});

// Exercise 4

const feedbackForm = document.querySelector("#feedbackForm");

feedbackForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const length = feedback.value.length;

    if (length < 10 || length > 200) {
        status.innerHTML = "Feedback must be between 10 and 200 characters.";
    } else {
        feedback.value = "";
        status.innerHTML = "Thank you for your feedback!";
    }

});

// Exercise 5

const keybox = document.querySelector("#keybox");
const keyinfo = document.querySelector("#keyinfo");

let keyPressCount = 0;

document.addEventListener("keydown", function (event) {

    console.log(event);
    keyPressCount++;

    keyinfo.innerHTML = `
    Key: ${event.key} |
    Code: ${event.code} |
    Key presses: ${keyPressCount} |
    Shift: ${event.shiftKey} |
    Ctrl: ${event.ctrlKey} |
    Alt: ${event.altKey}
`;
    keybox.innerHTML = event.key;
keybox.style.fontSize = "3em";
if (event.key.toLowerCase() === "r") {
    keybox.style.backgroundColor = "red";
} else if (event.key.toLowerCase() === "g") {
    keybox.style.backgroundColor = "green";
} else if (event.key.toLowerCase() === "b") {
    keybox.style.backgroundColor = "blue";
} else {
    keybox.style.backgroundColor = "lightgray";
}


});

// Bonus Exercise - Geolocation

const locationBtn = document.querySelector("#locationBtn");
const locationStatus = document.querySelector("#locationStatus");

locationBtn.addEventListener("click", function () {

    locationStatus.innerHTML = "Getting your location...";

    navigator.geolocation.getCurrentPosition(
        function (position) {

            const lat = position.coords.latitude;
            const lon = position.coords.longitude;

            locationStatus.innerHTML =
                `Latitude: ${lat} | Longitude: ${lon}`;
                const url = `https://www.google.com/maps?q=${lat},${lon}`;

window.open(url, "_blank");

        },
        function (error) {

            locationStatus.innerHTML =
                `Could not get your location: ${error.message}`;

        }
    );

});


navigator.geolocation.getCurrentPosition()



