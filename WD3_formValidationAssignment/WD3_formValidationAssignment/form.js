//declaring and defineing variables
const contactForm = document.getElementsByTagName("form")[0];
const submitButton = document.getElementsByTagName("button")[0];
const addClass = document.createAttribute("class");

//add class disabled to button tag
addClass.value = "disabled";
submitButton.setAttributeNode(addClass);

//change h2 tag to "Contact Me"
document.getElementsByTagName("H2")[0].innerHTML = "<strong>Contact</strong> Me";

//Replace 1st paragraph tag to themed paragraph
const paragraph = "<p>Thank you for choosing Music & Supplies! We're glad you chose us to assist you on your musical voyage. We hope that we make your journey a musical wonderland. If you have any suggestions on how we can improve your experience or would like to contact us for any other reason, don't hesistate to submit the form below.</p>";

document.querySelector("p").innerHTML = paragraph;

//change verbaige for placeholder tests
document.getElementById("name").placeholder = "Your First Name and Last Name";
document.getElementById("email").placeholder = "Your Email Address";
document.getElementById("phone").placeholder = "About the rental program, the pro shop, or the repair shop.";
document.getElementById("message").placeholder = "How can we help you?";

//search for all input tags that contain class required and contain the info with a new variable
var fields = document.getElementsByClassName('required');

//iterate through loop
for (var i = 0; i < fields.length; i++) {

    //add an evenListner to each iterations
    fields[i].addEventListener('keyup', function () {
        //define variables to form's values
        let validName = contactForm["name"].value;
        let validEmail = contactForm["email"].value;
        let validDepartment = contactForm["phone"].value;

        //create conditionals for button submission
        if (validName === null || validName === "" || !isNaN(validName)) {
            nameError = "Please enter your name";
            document.getElementById("name").reset();
        }
        else {
             validName = fields[0].checkValidity();
            submitButton.disabled = false;
        }
        if (validEmail === null || validEmail === "") {
            //emailError = "Please enter your email";
            document.getElementById("email").reset();
        }
        else {
             validEmail = fields[1].checkValidity();
            submitButton.disabled = false;
        }
        if (validDepartment === null || validDepartment === "" || !isNaN(validDepartment)) {
            //departmentError = "Choose a Department";
            document.getElementById("phone").reset();
        }
        else {
             validDepartment = fields[2].checkValidity();
            submitButton.disabled = false;
        }

        if (submitButton.disabled === false) {
        submitButton.disabled = false;
            submitButton.removeAttributeNode(addClass);
    }
    });
} 

//add eventListner to submit form
submitButton.addEventListener('click', function (event) {
    //create text message to replace form with, after it submits
    var message = '<h2>Thank You</h2><p> From Music & Supplies, we thank you for being an Amazing customer!</p><br><br><p> Where words leave off, music begins - Heinrich Heine</p>';

    //submit form
    contactForm.innerHTML = message;
});
