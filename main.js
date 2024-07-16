// Get the element with the class "scroller"
let element = document.querySelector(".scroller");

// Calculate the difference between scrollHeight and clientHeight to find the total scrollable height
let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;

// Log the scrollHeight value to the console
console.log(`scrollHeight => ${document.documentElement.scrollHeight}`);

// Log the clientHeight value to the console
console.log(`clientHeight => ${document.documentElement.clientHeight}`);

// Log the calculated height value to the console
console.log(`height => ${height}`);


// Add an event listener for the scroll event on the window
window.addEventListener("scroll", () => {
    // Get the scrollTop value, which is the vertical scroll amount
    let scrollTop = document.documentElement.scrollTop;

    // Calculate the scroll percentage and set it as the width of the "scroller" element
    element.style.width = `${(scrollTop / height) * 100}%`;
});
