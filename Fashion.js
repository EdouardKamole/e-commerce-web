// JavaScript for interactive elements

// Example: Handle click on product for details
const products = document.querySelectorAll('.product');

products.forEach(product => {
    product.addEventListener('click', () => {
        const productId = product.getAttribute('data-product-id');
        alert(`Product ID ${productId} clicked!`);
        // Replace alert with logic to show product details or navigate to product page
    });
});
