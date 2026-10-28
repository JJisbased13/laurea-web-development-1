
const newsContainer = document.getElementById("newsdata");

// Create AJAX request
const xmlhttpNews = new XMLHttpRequest();

xmlhttpNews.open("GET", "./uutiset.xml", true);

// Handle response
xmlhttpNews.onload = function () {

    if (xmlhttpNews.status === 200) {

        const xmlDoc = xmlhttpNews.responseXML;

        if (!xmlDoc) {
            newsContainer.textContent = "Unable to read XML data.";
            return;
        }

        const articles = xmlDoc.querySelectorAll("item");

        // Create table
        const table = document.createElement("table");
        table.border = "1";

        const header = document.createElement("tr");
        header.innerHTML = "<th>News Article</th><th>Date</th>";
        table.appendChild(header);

        // Loop through news articles
        for (let i = 0; i < articles.length; i++) {

            const title = articles[i].querySelector("title")?.textContent || "";
            const date = articles[i].querySelector("pubDate")?.textContent || "";
            const link = articles[i].querySelector("link")?.textContent || "";

            const row = document.createElement("tr");

            const titleCell = document.createElement("td");
            const dateCell = document.createElement("td");

            const anchor = document.createElement("a");
            anchor.href = link;
            anchor.target = "_blank";
            anchor.rel = "noopener noreferrer";
            anchor.textContent = title;

            titleCell.appendChild(anchor);
            dateCell.textContent = date;

            row.appendChild(titleCell);
            row.appendChild(dateCell);

            table.appendChild(row);
        }

        newsContainer.replaceChildren(table);

    } else {
        newsContainer.textContent =
            "Failed to load news. Error: " + xmlhttpNews.status;
    }
};

// Handle network errors
xmlhttpNews.onerror = function () {
    newsContainer.textContent = "Network error while loading news.";
};

// Send request
xmlhttpNews.send();
