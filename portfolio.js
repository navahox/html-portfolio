// Function to open the navigation menu
function openNav() {
    // Make overlay part visible
    document.getElementById("info").style.width= "100%";
    // Add an event listener for the Escape key when the menu is opened
    document.addEventListener("keydown", handleEscapeKey);
    // Create a snackbar notification
    const snackbar = document.createElement("div");
    snackbar.textContent = "Press ESC to close the menu.";
    snackbar.style.position = "fixed";
    snackbar.style.bottom = "30%";
    snackbar.style.left = "50%";
    snackbar.style.transform = "translateX(-50%)";
    snackbar.style.backgroundColor = "#333";
    snackbar.style.color = "#fff";
    snackbar.style.padding = "10px 20px";
    snackbar.style.borderRadius = "5px";
    snackbar.style.fontSize = "1.5em";
    snackbar.style.zIndex = "1000";
    snackbar.id = "snackbar";
    snackbar.setAttribute("aria-live", "polite");

    document.body.appendChild(snackbar);

    // Remove the snackbar after 3 seconds
      setTimeout(() => {
        snackbar.remove();
      }, 3000);
}
// Function to close the navigation menu
function closeNav() {
    // Close the overlay part
    document.getElementById("info").style.width= "0%";
    // Remove the event listener for the Escape key when the menu is closed
    document.removeEventListener("keydown", handleEscapeKey);
}
// Function to handle the Escape key press
function handleEscapeKey(event) {
    if (event.key === "Escape") { // Check if the pressed key is "Escape"
    closeNav();  // Call the closeNav function to hide the menu
   }
}