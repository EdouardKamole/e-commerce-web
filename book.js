// Simulated data for categories and books
const categories = [
    { name: 'Fiction', imageUrl: 'images/fiction.jpg' },
    { name: 'Non-fiction', imageUrl: 'images/non-fiction.jpg' },
    { name: 'Science Fiction', imageUrl: 'images/science-fiction.jpg' },
    { name: 'Fantasy', imageUrl: 'images/fantasy.jpg' },
    { name: 'Mystery & Thriller', imageUrl: 'images/mystery-thriller.jpg' },
    { name: 'Romance', imageUrl: 'images/romance.jpg' }
];

const books = [
    { name: 'The Silent Patient', imageUrl: 'images/silent-patient.jpg', price: '$14.99', author: 'Alex Michaelides' },
    { name: 'Where the Crawdads Sing', imageUrl: 'images/crawdads.jpg', price: '$12.50', author: 'Delia Owens' },
    { name: 'The Night Circus', imageUrl: 'images/night-circus.jpg', price: '$10.75', author: 'Erin Morgenstern' },
    { name: 'The Great Gatsby', imageUrl: 'images/great-gatsby.jpg', price: '$9.99', author: 'F. Scott Fitzgerald' },
    { name: 'To Kill a Mockingbird', imageUrl: 'images/to-kill-a-mockingbird.jpg', price: '$11.25', author: 'Harper Lee' },
    { name: 'Educated: A Memoir', imageUrl: 'images/educated.jpg', price: '$15.00', author: 'Tara Westover' }
];

// Function to dynamically create category cards
function createCategoryCards() {
    const categoryGrid = document.getElementById('categoryGrid');
    categories.forEach(category => {
        const categoryCard = document.createElement('div');
        categoryCard.classList.add('category');
        categoryCard.innerHTML = `
            <img src="${category.imageUrl}" alt="${category.name}">
            <h3>${category.name}</h3>
        `;
        categoryGrid.appendChild(categoryCard);
    });
}

// Function to dynamically create book cards
function createBookCards() {
    const bookGrid = document.getElementById('bookGrid');
    books.forEach(book => {
        const bookCard = document.createElement('div');
        bookCard.classList.add('book-card');
        bookCard.innerHTML = `
            <img src="${book.imageUrl}" alt="${book.name}">
            <h3>${book.name}</h3>
            <p>by ${book.author}</p>
            <p class="price">${book.price}</p>
        `;
        bookGrid.appendChild(bookCard);
    });
}

// Call functions to populate content
createCategoryCards();
createBookCards();
