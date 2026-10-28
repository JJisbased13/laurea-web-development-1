
 // WS05 - Animal Forms and Local Storage
// Web Development 1
// Exercises 1, 2, 3 and 4

// ==========================================
// EXERCISE 1 & 3 - FORM VALIDATION AND SAVING
// ==========================================

const animalForm = document.getElementById("animalForm");
const animalName = document.getElementById("animalName");
const animalSpecies = document.getElementById("animalSpecies");
const careNote = document.getElementById("careNote");

const nameError = document.getElementById("nameError");
const speciesError = document.getElementById("speciesError");
const noteError = document.getElementById("noteError");
const formResult = document.getElementById("formResult");

animalForm.addEventListener("submit", function (event) {
    event.preventDefault();

    // Clear previous error messages
    nameError.textContent = "";
    speciesError.textContent = "";
    noteError.textContent = "";
    formResult.textContent = "";

    // Remove previous invalid styles
    animalName.classList.remove("invalid");
    animalSpecies.classList.remove("invalid");
    careNote.classList.remove("invalid");

    // Read and trim input values
    const name = animalName.value.trim();
    const species = animalSpecies.value.trim();
    const note = careNote.value.trim();

    let isValid = true;

    // Validate animal name
    if (name === "") {
        nameError.textContent = "Animal name is required.";
        animalName.classList.add("invalid");
        isValid = false;
    }

    // Validate species
    if (species === "") {
        speciesError.textContent = "Species is required.";
        animalSpecies.classList.add("invalid");
        isValid = false;
    }

    // Validate care note (1-150 characters)
    if (note.length < 1 || note.length > 150) {
        noteError.textContent =
            "Care note must contain 1-150 characters.";
        careNote.classList.add("invalid");
        isValid = false;
    }

    // If all fields are valid
    if (isValid) {

        // Display result
        formResult.textContent =
            `Animal added: ${name} (${species}) - ${note}`;

        // Create animal object
        const animal = {
            name: name,
            species: species,
            note: note
        };

        // Save animal using JSON and localStorage
        localStorage.setItem(
            "ws05Animal",
            JSON.stringify(animal)
        );

        console.log("Animal saved:", animal);

        // Update saved animal display
        loadAnimal();
    }
});


// ==========================================
// EXERCISE 2 - SPONSORSHIP CALCULATOR
// ==========================================

const sponsorForm = document.getElementById("sponsorForm");
const animalType = document.getElementById("animalType");
const yearsInput = document.getElementById("years");
const cost = document.getElementById("cost");
const discountMessage = document.getElementById("discountMessage");

sponsorForm.addEventListener("submit", function (event) {
    event.preventDefault();

    // Convert input values to numbers
    const annualFee = Number(animalType.value);
    const years = Number(yearsInput.value);

    // Validate positive whole years
    if (!Number.isInteger(years) || years <= 0) {
        cost.textContent =
            "Please enter a positive whole number of years.";

        discountMessage.textContent = "";
        return;
    }

    // Calculate original total
    let total = annualFee * years;

    let discountText = "No discount applied.";

    // More than 2 years: 20% discount
    if (years > 2) {
        total = total * 0.80;
        discountText = "20% discount applied!";
    }

    // 5 years or more: additional 5 euros off
    if (years >= 5) {
        total = total - 5;
        discountText =
            "20% discount and additional €5 discount applied!";
    }

    // Display final total with two decimal places
    cost.textContent = `Total: €${total.toFixed(2)}`;

    // Display discount message
    discountMessage.textContent = discountText;
});


// ==========================================
// EXERCISE 4 - LOAD AND CLEAR SAVED ANIMAL
// ==========================================

const loadButton = document.getElementById("loadAnimal");
const clearButton = document.getElementById("clearAnimal");
const savedAnimal = document.getElementById("savedAnimal");

// Function to load saved animal
function loadAnimal() {

    // Read data from localStorage
    const storedAnimal = localStorage.getItem("ws05Animal");

    // Check if saved data exists
    if (storedAnimal === null) {
        savedAnimal.textContent = "No saved animal yet";
        return;
    }

    try {
        // Convert JSON text back into an object
        const animal = JSON.parse(storedAnimal);

        // Display animal information
        savedAnimal.textContent =
            `Name: ${animal.name} | Species: ${animal.species} | Care note: ${animal.note}`;

    } catch (error) {
        savedAnimal.textContent =
            "Error loading saved animal.";

        console.error("Invalid JSON data:", error);
    }
}

// Load button
loadButton.addEventListener("click", loadAnimal);

// Clear button
clearButton.addEventListener("click", function () {

    // Remove only the saved animal
    localStorage.removeItem("ws05Animal");

    // Update display
    savedAnimal.textContent = "No saved animal yet";

    console.log("Saved animal removed.");
});

// Automatically load saved data when page opens
loadAnimal();
