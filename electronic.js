// Sample data for products (replace with your actual data)
const products = [
    {
        name: "Smartphone X",
        image: "images/smartphone-x.jpg",
        price: 699
    },
    {
        name: "Laptop Y",
        image: "images/laptop-y.jpg",
        price: 1299
    },
    {
        name: "Smartwatch Z",
        image: "images/smartwatch-z.jpg",
        price: 299
    },
    {
        name: "Headphones A",
        image: "images/headphones-a.jpg",
        price: 149
    },
    {
        name: "Camera B",
        image: "images/camera-b.jpg",
        price: 799
    },
    {
        name: "Tablet C",
        image: "images/tablet-c.jpg",
        price: 399
    },
    {
        name: "Bluetooth Speaker D",
        image: "images/speaker-d.jpg",
        price: 79
    },
    {
        name: "Gaming Laptop E",
        image: "images/gaming-laptop-e.jpg",
        price: 1999
    }
];

// Function to generate product cards
function renderProducts() {
    const productGrid = document.getElementById('productGrid');

    products.forEach(product => {
        const card = document.createElement('div');
        card.classList.add('product-card');

        const image = document.createElement('img');
        image.src = product.image;
        image.alt = product.name;

        const productName = document.createElement('h3');
        productName.textContent = product.name;

        const price = document.createElement('p');
        price.classList.add('price');
        price.textContent = `$${product.price}`;

        card.appendChild(image);
        card.appendChild(productName);
        card.appendChild(price);

        productGrid.appendChild(card);
    });
}

// Render products when the page loads
document.addEventListener('DOMContentLoaded', () => {
    renderProducts();
});
