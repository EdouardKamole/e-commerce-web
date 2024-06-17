document.addEventListener('DOMContentLoaded', function() {
    // Slideshow for team members
    const teamMembers = document.querySelectorAll('.team-member');
    let currentMember = 0;

    function showMember(memberIndex) {
        teamMembers.forEach((member, index) => {
            if (index === memberIndex) {
                member.style.display = 'block';
            } else {
                member.style.display = 'none';
            }
        });
    }

    function nextMember() {
        currentMember++;
        if (currentMember >= teamMembers.length) {
            currentMember = 0;
        }
        showMember(currentMember);
    }

    // Initial display
    showMember(currentMember);

    // Automatic slideshow every 5 seconds
    setInterval(nextMember, 5000);

    // Display core values dynamically
    const coreValues = [
        'Integrity',
        'Innovation',
        'Customer-centricity',
        'Teamwork',
        'Continuous improvement'
    ];

    const valuesContainer = document.querySelector('.about-values ul');

    coreValues.forEach(value => {
        const li = document.createElement('li');
        li.textContent = value;
        valuesContainer.appendChild(li);
    });
});
