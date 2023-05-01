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


const submitBtn = document.getElementById('submit-btn');
submitBtn.addEventListener('click', (event) => {
  event.preventDefault(); // prevent form submission
  
  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const subjectInput = document.getElementById('subject');
  const messageInput = document.getElementById('message');
  
  if (!nameInput.value || !emailInput.value || !subjectInput.value || !messageInput.value) {
    alert('Please fill in all fields.'); // display error message
    return;
  }
  
  fetch('/submit-form', {
    method: 'POST',
    body: new FormData(document.getElementById('contact-form'))
  })
  .then((response) => {
    if (response.ok) {
      alert('Form submitted successfully.');
    } else if (response.status === 405) {
      alert('Something Went wrong. Please try again later.');
    } else {
      alert('An error occured. Please try again later.');
    }
  })
  .catch((error) => {
    console.error(error);
    alert('An error occurred. Please try again later.');
  });
});





// const submitBtn = document.getElementById('submit-btn');
// submitBtn.addEventListener('click', (event) => {
//   const nameInput = document.getElementById('name');
//   const emailInput = document.getElementById('email');
//   const subjectInput = document.getElementById('subject');
//   const messageInput = document.getElementById('message');
  
//   if (!nameInput.value || !emailInput.value || !subjectInput.value || !messageInput.value) {
//     event.preventDefault(); // prevent form submission
//     alert('Please fill in all fields.'); // display error message
//   }
//   else {
//     alert('Something went wrong...')
//   }
// });



















// const form = document.querySelector('#contact-form');
// const submitButton = document.querySelector('#submit-btn');
    
// form.addEventListener('submit', (event) => {
//     event.preventDefault(); // Prevent form submission
    
//     // Get form data
//     const name = document.querySelector('#name').value;
//     const email = document.querySelector('#email').value;
//     const subject = document.querySelector('#subject').value;
//     const message = document.querySelector('#message').value;
    
//     // Send form data using fetch API //(url of actual server side script)
//     fetch('server.js', {
//     method: 'POST',
//     headers: {
//         'Content-Type': 'application/json'
//     },
//     body: JSON.stringify({ name, email, subject, message })
//     })
//     .then(response => response.json())
//     .then(data => {
//     if (data.success) {
//         alert('Your message has been sent successfully!');
//         form.reset();
//     } else {
//         alert('Something went wrong. Please try again later.');
//     }
//     })
//     .catch(error => {
//     console.error(error);
//     alert('Something went wrong. Please try again later.');
//     })
//     .finally(() => {
//     submitButton.disabled = false; // Enable submit button
//     });
    
//     submitButton.disabled = true; // Disable submit button to prevent multiple submissions
// });