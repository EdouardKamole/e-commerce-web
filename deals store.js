// JavaScript for Deals Store Page

// Modal functionality
const modal = document.getElementById('productModal');
const modalContent = document.querySelector('.modal-content');
const modalClose = document.querySelector('.close');

// Get all "View Details" buttons
const viewDetailsButtons = document.querySelectorAll('.view-details-btn');

// Function to open modal and show product details
function openModal(productName, productDescription, productPrice) {
    document.getElementById('modalTitle').textContent = productName;
    document.getElementById('productDetails').innerHTML = `
        <p><strong>Description:</strong> ${productDescription}</p>
        <p><strong>Price:</strong> $${productPrice}</p>
    `;
    modal.style.display = 'block';
}

// Event listeners for each "View Details" button
viewDetailsButtons.forEach(button => {
    button.addEventListener('click', function() {
        const productId = button.getAttribute('data-product-id');
        if (productId === '1') {
            openModal('Product Name 1', 'Product description goes here. Lorem ipsum dolor sit amet, consectetur adipisicing elit.', '99.99');
        } else if (productId === '2') {
            openModal('Product Name 2', 'Another product description. Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', '149.99');
        }
        // Add more product details as needed
    });
});

// Close modal when clicking on close button
modalClose.addEventListener('click', function() {
    modal.style.display = 'none';
});

// Close modal when clicking outside the modal content
window.addEventListener('click', function(event) {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});
