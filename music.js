// Function to handle search button click
function handleSearch() {
    const searchInput = document.querySelector('.search input[type="text"]').value;
    alert(`Search functionality for "${searchInput}" will be implemented.`);
}

// Add event listener to search button
document.querySelector('.search button').addEventListener('click', handleSearch);

// Function to handle view details button click for artists
function handleViewDetails(event) {
    const artistName = event.target.closest('.artist-card').querySelector('h3').textContent;
    alert(`View details for ${artistName} will be implemented.`);
}

// Add event listeners to view details buttons
document.querySelectorAll('.artist-card .view-details-btn').forEach(button => {
    button.addEventListener('click', handleViewDetails);
});

// Function to handle explore button click for genres
function handleExplore(event) {
    const genreName = event.target.closest('.genre-card').querySelector('h3').textContent;
    alert(`Explore ${genreName} will be implemented.`);
}

// Add event listeners to explore buttons
document.querySelectorAll('.genre-card .explore-btn').forEach(button => {
    button.addEventListener('click', handleExplore);
});
