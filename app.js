(function () {
    [...document.querySelectorAll(".control")].forEach(button => {
        button.addEventListener("click", function() {
            document.querySelector(".active-btn").classList.remove("active-btn");
            this.classList.add("active-btn");
            document.querySelector(".active").classList.remove("active");
            document.getElementById(button.dataset.id).classList.add("active");
        })
    });
    document.querySelector(".theme-btn").addEventListener("click", () => {
        document.body.classList.toggle("light-mode");
    })
})();


const backArrow = document.getElementById('back-arrow');

// Add an event listener to the window object to detect when the user navigates to a new page
window.addEventListener('popstate', (event) => {
// If there is a previous history state, navigate back to that page
if (event.state) {
    location.href = event.state.pageUrl;
}
});

backArrow.addEventListener('click', () => {
// Go back to the previous history state
history.back();
});










const form = document.querySelector('#contact-form');
const submitButton = document.querySelector('#submit-btn');
    
form.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent form submission
    
    // Get form data
    const name = document.querySelector('#name').value;
    const email = document.querySelector('#email').value;
    const subject = document.querySelector('#subject').value;
    const message = document.querySelector('#message').value;
    
    // Send form data using fetch API //(url of actual server side script)
    fetch('server.js', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({ name, email, subject, message })
    })
    .then(response => response.json())
    .then(data => {
    if (data.success) {
        alert('Your message has been sent successfully!');
        form.reset();
    } else {
        alert('Something went wrong. Please try again later.');
    }
    })
    .catch(error => {
    console.error(error);
    alert('Something went wrong. Please try again later.');
    })
    .finally(() => {
    submitButton.disabled = false; // Enable submit button
    });
    
    submitButton.disabled = true; // Disable submit button to prevent multiple submissions
});