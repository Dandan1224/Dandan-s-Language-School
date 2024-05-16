function enrollNow() {
    alert("Enroll Now button clicked!");
    // Add your enrollment logic here
}

function bookTrial() {
    alert("Book a Trial Class button clicked!");
    // Add your trial class booking logic here
}

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Message sent successfully!');
    // Add your form submission logic here
});

document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Login successful!');
    // Add your login logic here
});
