// MUOKATAAN OTSIKKOA KUN NAPPIA PAINETAAN
// MUOKATAAN OTSIKKOA KUN NAPPIA PAINETAAN

const changeHeadingButton = document.querySelector("#changeHeadingButton");
const taskOneHeading = document.querySelector("#taskOneHeading");

changeHeadingButton.addEventListener("click", function () {
    taskOneHeading.textContent = "Updated heading!";
});

// -------------------------------------------------- EXAMPLE 1 ANIMAL TABLE
// -------------------------------------------------- EXAMPLE 1 ANIMAL TABLE

const animalButton = document.querySelector("#animalButton");
const animalTable = document.querySelector("#animalTable");

animalButton.addEventListener("click", function () {
    animalTable.hidden = !animalTable.hidden;
    console.log("nappia painettu!");

});

// -------------------------------------------------- EXAMPLE 3 LISTEN DROPDOWN SELECT
// -------------------------------------------------- EXAMPLE 3 LISTEN DROPDOWN SELECT

// -------------------------------------------------- TASK 3 SELECTING AN ANIMAL
// -------------------------------------------------- TASK 3 SELECTING AN ANIMAL

const animalSelect = document.querySelector("#animalSelect");
const animalName = document.querySelector("#animalName");
const animalImage = document.querySelector("#animalImage");
const animalDescription = document.querySelector("#animalDescription");

// Listen for a change in the drop-down menu
animalSelect.addEventListener("change", function () {
    const selectedAnimal = animalSelect.value;

    console.log("Selected animal:", selectedAnimal);

    if (selectedAnimal === "elephant") {
        animalName.textContent = "Elephant";
        animalImage.src = "images/elephant.png";
        animalImage.alt = "Elephant";
        animalDescription.textContent =
            "Elephants are the world's largest land animals.";
    }

    else if (selectedAnimal === "tiger") {
        animalName.textContent = "Tiger";
        animalImage.src = "images/tiger.png";
        animalImage.alt = "Tiger";
        animalDescription.textContent =
            "Tigers are large wild cats known for their orange fur and black stripes.";
    }

    else if (selectedAnimal === "penguin") {
        animalName.textContent = "Penguin";
        animalImage.src = "images/penguin.png";
        animalImage.alt = "Penguin";
        animalDescription.textContent =
            "Penguins are flightless birds that are excellent swimmers.";
    }

    else if (selectedAnimal === "panda") {
        animalName.textContent = "Panda";
        animalImage.src = "images/panda.png";
        animalImage.alt = "Panda";
        animalDescription.textContent =
            "Pandas are bears native to China and are famous for eating bamboo.";
    }
});

// Highlight the image when the mouse enters it
animalImage.addEventListener("mouseenter", function () {
    animalImage.classList.add("image-highlight");
});

// Remove the highlight when the mouse leaves
animalImage.addEventListener("mouseleave", function () {
    animalImage.classList.remove("image-highlight");
});

// listener for the select element from the drop down list.
// function to update the DOM based on the selected animal

// -------------------------------------------------- EXAMPLE 4 CSS
// -------------------------------------------------- EXAMPLE 4 CSS

const heading = document.querySelector("#taskOneHeading");
const changeStyleButton = document.querySelector("#changeStyleButton");

changeStyleButton.addEventListener("click", function () {
    heading.classList.toggle("highlight");
});

// -------------------------------------------------- TASK 1 CHANGE ANIMAL TEXT
// -------------------------------------------------- TASK 1 CHANGE ANIMAL TEXT

const changeTextButton = document.querySelector("#changeTextButton");
const animalText = document.querySelector("#animalText");

changeTextButton.addEventListener("click", function () {
    animalText.textContent = "Elephants can communicate using very low-frequency sounds.";
});

// -------------------------------------------------- TASK 2 CREATE ELEMENTS
// -------------------------------------------------- TASK 2 CREATE ELEMENTS

// Select the animalContent div
const animalContent = document.querySelector("#animalContent");

// Create the heading
const animalHeading = document.createElement("h3");
animalHeading.textContent = "Animal of the Day";
animalHeading.classList.add("animal-heading");

// Create the paragraph
const animalParagraph = document.createElement("p");
animalParagraph.textContent = "Pandas are bears native to China and are famous for eating bamboo.";

// Create the image
const taskTwoImage = document.createElement("img");
taskTwoImage.src = "images/panda.png";
taskTwoImage.alt = "Panda";

// Add the new elements to animalContent
animalContent.append(animalHeading, animalParagraph, taskTwoImage);

// Select the hide and show buttons
const hideAnimalButton = document.querySelector("#hideAnimalButton");
const showAnimalButton = document.querySelector("#showAnimalButton");

// Hide the animal content
hideAnimalButton.addEventListener("click", function () {
    animalContent.hidden = true;
});

// Show the animal content
showAnimalButton.addEventListener("click", function () {
    animalContent.hidden = false;
});

// -------------------------------------------------- TASK 4 ADDING ANIMAL OBSERVATIONS
// -------------------------------------------------- TASK 4 ADDING ANIMAL OBSERVATIONS

// Select the form, input fields, and table body
const animalForm = document.querySelector("#animalForm");
const observationAnimal = document.querySelector("#observationAnimal");
const observationLocation = document.querySelector("#observationLocation");
const observationDate = document.querySelector("#observationDate");
const observationTableBody = document.querySelector("#observationTableBody");

// Listen for the form to be submitted
animalForm.addEventListener("submit", function (event) {

    // Stop the page from refreshing
    event.preventDefault();

    // Get the values entered by the user
    const animalValue = observationAnimal.value;
    const locationValue = observationLocation.value;
    const dateValue = observationDate.value;

    // Check that none of the fields are empty
    if (animalValue === "" || locationValue === "" || dateValue === "") {
        alert("Please fill in all fields.");
        return;
    }

    // Create a new table row
    const newRow = document.createElement("tr");

    // Create a table cell for each value
    const animalCell = document.createElement("td");
    const locationCell = document.createElement("td");
    const dateCell = document.createElement("td");

    // Add the form values to the cells
    animalCell.textContent = animalValue;
    locationCell.textContent = locationValue;
    dateCell.textContent = dateValue;

    // Add the cells to the new row
    newRow.append(animalCell, locationCell, dateCell);

    // Add the new row to the table
    observationTableBody.append(newRow);

    // Clear the form after adding the observation
    animalForm.reset();
});

// -------------------------------------------------- BONUS TASKS
// -------------------------------------------------- BONUS TASKS

const moveImageButton = document.querySelector("#moveImageButton");
const animateImageButton = document.querySelector("#animateImageButton");
const fadeImageButton = document.querySelector("#fadeImageButton");
const removeImageButton = document.querySelector("#removeImageButton");

// Move the animal image
moveImageButton.addEventListener("click", function () {
    animalImage.classList.toggle("move-image");
});

// Animate the animal image
animateImageButton.addEventListener("click", function () {
    animalImage.classList.toggle("animate-image");
});

// Fade the animal image
fadeImageButton.addEventListener("click", function () {
    animalImage.classList.toggle("fade-image");
});

// Remove the animal image from the DOM
removeImageButton.addEventListener("click", function () {
    animalImage.remove();
});

// Select all li elements
const listItems = document.querySelectorAll("li");

// Loop through all li elements
listItems.forEach(function (item) {
    console.log(item.textContent);
});