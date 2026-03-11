
function validateForm() {
    var name = document.forms["contactForm"]["name"].value;
    var email = document.forms["contactForm"]["email"].value;
    var telephone = document.forms["contactForm"]["telephone"].value;
    var errorElement = document.getElementById("error");
    let int = parseInt(telephone);
    form.addEventListener("submit", (event) => {
        let messages = [];
    if (telephone.value != int){
        messages.push("Please enter a valid telephone number.");
    }
    if (name.value.length <= 12) {
        messages.push("Name cannot be less than 12 characters.");
    }
    if (name.value.length >= 50) {
        messages.push("Name cannot be more than 50 characters.");
    }
    if (messages.length > 0) {
        event.preventDefault();
        errorElement.innerText = messages.join(", ");
    }
});
}   


