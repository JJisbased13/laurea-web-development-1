
document.addEventListener("DOMContentLoaded", function () {

    const quoteContainer = document.getElementById("Quotes");

    const uri = "https://dummyjson.com/quotes";

    // Request quotes from the API
    fetch(uri)
        .then(response => {
            if (!response.ok) {
                throw new Error("Failed to fetch quotes");
            }
            return response.json();
        })
        .then(data => {
            quoteContainer.textContent = "";

            // Loop through the quotes
            for (let i = 0; i < data.quotes.length; i++) {

                const author = data.quotes[i].author;
                const quote = data.quotes[i].quote;

                // Create HTML elements
                const quoteElement = document.createElement("div");
                const heading = document.createElement("h2");
                const paragraph = document.createElement("p");

                heading.textContent = quote;
                paragraph.textContent = author;

                quoteElement.appendChild(heading);
                quoteElement.appendChild(paragraph);
                quoteElement.appendChild(document.createElement("hr"));

                quoteContainer.appendChild(quoteElement);
            }
        })
        .catch(error => {
            console.error("Error fetching quotes:", error);
            quoteContainer.textContent = "Unable to load quotes.";
        });
});
