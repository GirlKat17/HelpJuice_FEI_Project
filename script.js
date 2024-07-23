// Get the elements by their IDs
let UserTextH = document.getElementById("UserTextHeading");
let textDisplay = document.getElementById("HeadingDisplay");
let UserTextP = document.getElementById("UserTextParag");
let normalText = document.getElementById("normalTextDisplay")
let keyword = document.getElementById("keyword")
let keywordText = document.getElementById("keywordText")
let selectBlock = document.getElementById("select-section")

UserTextH.classList.add("active")
// Hide certain elements initially
UserTextP.style.display = 'none'
selectBlock.style.display = 'none'
UserTextH.style.display = 'none'


// Add an event listener for keypress events on the document body
document.body.addEventListener('keypress', (event) => {
    if (event.key === "Enter") {

        // Check if the keywordText input value is "/1"
        if (keywordText.value == "/1") {
            keyword.textContent = keywordText.value.split('')[1];
            keyword.classList.add('keyword')


            // Show the selectBlock element
            selectBlock.style.display = 'block'
            keywordText.value = ''
            return
        }
        // Create a new heading element and set its text content
        const newHeading = document.createElement("h1");
        newHeading.textContent = UserTextH.value;
        textDisplay.appendChild(newHeading);
        // Update the display and classes for the heading and paragraph elements
        UserTextP.classList.add("active");
        UserTextH.classList.remove("active")

        // Check if the heading input value is not empty
        if (UserTextH.value != "") {
            UserTextH.style.display = 'none'
            UserTextP.style.display = 'block'
        }
        // Clear the heading input value
        UserTextH.value = "";

        const newParagraph2 = document.createElement("p");
        newParagraph2.textContent = UserTextP.value;
        normalText.appendChild(newParagraph2);

        // Hide the paragraph input if it has a value
        if (UserTextP.value != "") {
            UserTextP.style.display = 'none'
        }
        // Clear the paragraph input value
        UserTextH.value = "";
        UserTextP.value = "";

    }

}

);
// Function to hide certain elements and show the heading input
function check() {
    selectBlock.style.display = 'none'
    keywordText.style.display = 'none'
    UserTextHeading.style.display = 'block'

}
document.getElementById('H1').addEventListener("click", check);
