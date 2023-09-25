document.addEventListener("DOMContentLoaded", () => {
    const searchInput = document.getElementById("searchInput");

    searchInput.addEventListener("keyup", (event) => {
        if (event.key === "Enter") {
            performSearch(searchInput.value);
        }
    });
});

async function performSearch(query) {
    try {
        // Make a GET request to your /browse route with the search query as a query parameter
        window.location.href = `/browse?query=${query}`;
    } catch (error) {
        console.error("Error during search:", error);
    }
}
