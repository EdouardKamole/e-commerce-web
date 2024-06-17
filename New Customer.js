function showModal(step) {
    let modal = document.getElementById("modal");
    let modalText = document.getElementById("modal-text");

    switch(step) {
        case 'step1':
            modalText.innerText = "Create your account and set up your profile.";
            break;
        case 'step2':
            modalText.innerText = "Explore our services and find what suits you best.";
            break;
        case 'step3':
            modalText.innerText = "Start using our services and enjoy the benefits!";
            break;
    }

    modal.style.display = "block";
}

function closeModal() {
    let modal = document.getElementById("modal");
    modal.style.display = "none";
}

window.onclick = function(event) {
    let modal = document.getElementById("modal");
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
