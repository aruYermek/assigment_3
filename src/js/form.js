function validateForm(mess) {
    
    const emailInput = document.getElementById("adress");
    const commentsInput = document.getElementById("floatingTextarea2");

    
    const email = emailInput.value.trim();
    const comments = commentsInput.value.trim();

    
    if (email === "" || comments === "") {
       
        alert("Please fill in both email and comments fields.");
        mess.preventDefault(); 
    }
}

const form = document.querySelector("form");
form.addEventListener("submit", validateForm);