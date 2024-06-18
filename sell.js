// scripts.js
document.addEventListener('DOMContentLoaded', () => {
    const addProductBtn = document.getElementById('addProductBtn');
    const productList = document.getElementById('productList');
    const orderList = document.getElementById('orderList');

    addProductBtn.addEventListener('click', () => {
        const productName = prompt('Enter product name:');
        if (productName) {
            const productItem = document.createElement('div');
            productItem.textContent = productName;
            productItem.classList.add('product-item');
            productList.appendChild(productItem);
        }
    });

    // Example order data
    const orders = [
        { id: 1, product: 'Product 1', quantity: 2, status: 'Shipped' },
        { id: 2, product: 'Product 2', quantity: 1, status: 'Processing' },
    ];

    orders.forEach(order => {
        const orderItem = document.createElement('div');
        orderItem.textContent = `Order #${order.id} - ${order.product} - Quantity: ${order.quantity} - Status: ${order.status}`;
        orderItem.classList.add('order-item');
        orderList.appendChild(orderItem);
    });
});
