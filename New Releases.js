// JavaScript for interactive features

// Function to update price display on range input change
function updatePriceRange() {
    let priceRange = document.getElementById('priceRange');
    let priceDisplay = document.getElementById('priceDisplay');
    priceDisplay.textContent = `$0 - $${priceRange.value}`;
}

// Event listener for range input change
document.addEventListener('DOMContentLoaded', function() {
    let priceRange = document.getElementById('priceRange');
    priceRange.addEventListener('input', updatePriceRange);
});
