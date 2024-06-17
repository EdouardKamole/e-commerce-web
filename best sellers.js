// Simulated product data for each category
const electronicsProducts = [
    { name: "Smartphone", image: "images/electronic1.jpg", price: "$499" },
    { name: "Laptop", image: "images/electronic 2.jpg", price: "$899" },
    { name: "Tablet", image: "images/electronic 3.jpg", price: "$399" },
    { name: "Tablet", image: "images/electronic4.jpg", price: "$399" },
    { name: "Tablet", image: "images/electronic5.jpg", price: "$399" }
    // Add more products as needed
];

const booksProducts = [
    { name: "ERUPTION ", image: "images/book1.jpg", price: "$29" },
    { name: "LEATHER AND LARK", image: "images/book3.jpg", price: "$24" },
    { name: " CAMINO GHOST", image: "images/book2.jpg", price: "$32" },
    { name: " THE WOMEN", image: "images/book4.jpg", price: "$32" },
    { name: " A COURT OF THORNS AND ROSES", image: "images/book5.jpg", price: "$32" },
    // Add more products as needed
];

const homeKitchenProducts = [
    { name: "Cookware Set", image: "images/kitchen1.jpg", price: "$149" },
    { name: "Robot Vacuum", image: "images/kitchen5.jpg", price: "$299" },
    { name: "Coffee Maker", image: "images/kitchen4.jpg", price: "$79" },
    { name: "Coffee Maker", image: "images/kitchen3.jpg", price: "$79" },
    { name: "Coffee Maker", image: "images/kitchen2.jpg", price: "$79"},
    // Add more products as needed
];

const clothingProducts = [
    { name: "Men's Jacket", image: "images/menjacket1.jpg", price: "$99" },
    { name: "Women's Dress", image: "images/womandress2.jpg", price: "$69" },
    { name: "Kids' Shoes", image: "images/kids shoes.jpg", price: "$39" },
    { name: "Men' suits", image: "images/suit2.jpg", price: "$39" },
    { name: "Running GiRL Sports Bra for' Women ", image: "images/girl1.jpg", price: "$39" },
    // Add more products as needed
];

const sportsProducts = [
    { name: "Running Shoes", image: "images/Running Shoes1.jpg", price: "$89" },
    { name: "Yoga Mat", image: "images/Yoga Mat1.jpg", price: "$29" },
    { name: "Basketball", image: "images/Basketball1.jpg", price: "$19" },
    { name: "Golf Supersoft", image: "images/golf1.jpg", price: "$19" },
    { name: "Workout Dumbbell Hand Weight", image: "images/Dumbbell1.jpg", price: "$19" },
    // Add more products as needed
];

const healthHouseholdProducts = [
    { name: "Air Purifier", image: "images/air1.jpg", price: "$149" },
    { name: "Blender", image: "images/Blender1.jpg", price: "$59" },
    { name: "Electric Toothbrush", image: "images/Electric Toothbrush1.jpg", price: "$49" },
    { name: "Toilet Tissue", image: "images/toilet tissue.jpg", price: "$49" },
    { name: "Liquid Laundry", image: "images/liqui1.jpg", price: "$49" },
    // Add more products as needed
];

// Function to generate product cards for a given category
function generateProductCards(categoryId, products) {
    const categorySection = document.getElementById(categoryId);
    const productGrid = categorySection.querySelector(".product-grid");

    products.forEach(product => {
        const productCard = document.createElement("div");
        productCard.classList.add("product-card");

        const productImg = document.createElement("img");
        productImg.src = product.image;
        productImg.alt = product.name;
        productCard.appendChild(productImg);

        const productName = document.createElement("h4");
        productName.textContent = product.name;
        productCard.appendChild(productName);

        const productPrice = document.createElement("p");
        productPrice.textContent = `Price: ${product.price}`;
        productCard.appendChild(productPrice);

        productGrid.appendChild(productCard);
    });
}

// Generate product cards for each category
generateProductCards("electronics", electronicsProducts);
generateProductCards("books", booksProducts);
generateProductCards("home-kitchen", homeKitchenProducts);
generateProductCards("clothing-shoes-jewelry", clothingProducts);
generateProductCards("sports-outdoors", sportsProducts);
generateProductCards("health-household", healthHouseholdProducts);
