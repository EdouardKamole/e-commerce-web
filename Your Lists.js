function addItem() {
    const input = document.getElementById('item-input');
    const itemText = input.value.trim();
    
    if (itemText === "") {
        alert("Please enter an item.");
        return;
    }
    
    const ul = document.getElementById('item-list');
    const li = document.createElement('li');
    li.innerHTML = `${itemText} <button onclick="removeItem(this)">Remove</button>`;
    ul.appendChild(li);
    
    input.value = "";
}

function removeItem(button) {
    const li = button.parentNode;
    li.remove();
}
