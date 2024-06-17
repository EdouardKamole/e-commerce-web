// Initialize and add the map
function initMap() {
    // The location of Silicon Valley
    const siliconValley = { lat: 37.3875, lng: -122.0575 };

    // The map, centered at Silicon Valley
    const map = L.map('map').setView([siliconValley.lat, siliconValley.lng], 13);

    // Add OpenStreetMap tile layer
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    // Marker for Silicon Valley
    L.marker([siliconValley.lat, siliconValley.lng]).addTo(map)
        .bindPopup('Salmah Headquarters')
        .openPopup();
}

// Run the map initialization function
initMap();

// Submit form handler (dummy function for example)
document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Thank you for your message! We will get back to you soon."); // Replace with actual form submission code
});
