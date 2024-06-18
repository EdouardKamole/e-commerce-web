document.getElementById('registry-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const firstName = document.getElementById('first-name').value;
    const lastName = document.getElementById('last-name').value;
    const email = document.getElementById('email').value;
    const eventDate = document.getElementById('event-date').value;

    console.log(`Registry Created:
        Name: ${firstName} ${lastName}
        Email: ${email}
        Event Date: ${eventDate}`);

    alert('Registry created successfully!');
});
