document.getElementById("contact-form").onsubmit = () => {

    // reset error messages and validation
    clearErrorMessages();
    var isValid = true;

    let fname = document.getElementById("fname").value.trim();
    if (fname === "") {                                                 // fname validation
        document.getElementById("err-fname").style.display = "block";   // if fail: display error message
        isValid = false;                                                // mark entire form as invalid until next submit
    }
    let lname = document.getElementById("lname").value.trim();
    if (lname === "") {                                                 // lname validation
        document.getElementById("err-lname").style.display = "block";   // if fail: display error message
        isValid = false;                                                // mark entire form as invalid until next submit
    }
    let email = document.getElementById("email").value.trim();          // email validation
    const validEmail = /@.+\./;                                         // define regex for email validation:
                                                                        // contains @ -> 1 or more other characters -> .
    if (document.getElementById("mailing-list").checked && email === "") {// if mailing list is checked and email is empty
        document.getElementById("err-email-1").style.display = "block"; // display error message
        isValid = false;                                                // mark entire form as invalid until next submit
    } else if (email !== "" && !validEmail.test(email)) {               // if email is not empty and does not match regex
        document.getElementById("err-email-2").style.display = "block"; // display error message
        isValid = false;                                                // mark entire form as invalid until next submit
    }

    let linkedIn = document.getElementById("linked").value.trim();
    const validLinkedIn = /^https:\/\/linkedin\.com\/in\/(?=.*)/;       // define regex for linkedin validation:
                                                                        // composed of https://linkedin.com/in/ followed by any characters
    if (!(linkedIn === "" || validLinkedIn.test(linkedIn))) {           // if linkedin is not empty and does not match regex
        document.getElementById("err-linkedin").style.display = "block";// display error message
        isValid = false;                                                // mark entire form as invalid until next submit
    }

    let size = document.getElementById("meet").value;
    if (size == "none") {                                               // check if a valid option was selected
        document.getElementById("err-meeting").style.display = "block"; // if fail: display error message
        isValid = false;                                                // mark entire form as invalid until next submit
    }
    
    return isValid;                                                     // submit only if data was valid
};

function clearErrorMessages() {
    let errors = document.getElementsByClassName("err");    // select all error messages
    for (let i = 0; i < errors.length; i++) {               // for each message
        errors[i].style.display = "none";                   // set as invisible
    }
}