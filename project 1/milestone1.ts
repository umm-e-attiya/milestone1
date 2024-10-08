const toggleButton= document.getElementById("toggle-button") as HTMLButtonElement;
const skillsSection= document.getElementById("skills") as HTMLElement
if (toggleButton && skillsSection) {
    

 toggleButton.addEventListener('click' , ()=> {
    if(skillsSection.style.display === 'none'){
        skillsSection.style.display = 'block';
        toggleButton.textContent = "Hide Skills";
    } else {
        skillsSection.style.display = 'none';
        toggleButton.textContent = "Show Skills";
    }
 });
}

 else{
    console.log("Required element not found in the DOM");
    
 }
