var toggleButton = document.getElementById("toggle-button");
var skillsSection = document.getElementById("skills");
if (toggleButton && skillsSection) {
    toggleButton.addEventListener('click', function () {
        if (skillsSection.style.display === 'none') {
            skillsSection.style.display = 'block';
            toggleButton.textContent = "Hide Skills";
        }
        else {
            skillsSection.style.display = 'none';
            toggleButton.textContent = "Show Skills";
        }
    });
}
else {
    console.log("Required element not found in the DOM");
}
