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