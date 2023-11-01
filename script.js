//your JS code here. If required.
function updateDateTime() {
  const dateTimeElement = document.getElementById("datetime");

  // Create a Date object to get the current date and time
  const currentDateTime = new Date();

  // Update the content of the element with the current date and time
  dateTimeElement.textContent = currentDateTime;
}

// Call the function to display the date and time initially
updateDateTime();

// Update the date and time every second (1000 milliseconds)
setInterval(updateDateTime, 1000);
