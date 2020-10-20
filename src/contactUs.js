let form = document.getElementById("contactUsSubmitForm");

function handleForm(event) {

    let firstName = document.getElementById("exampleFormControlInputFirstName");
    let lastName = document.getElementById("exampleFormControlInputLastName");
    let email = document.getElementById("exampleFormControlInputEmail");
    let comment = document.getElementById("exampleFormControlTextarea1");

    //error messages
    let errFirstName = document.querySelector('#errorInputFirstName');
    let errLastName = document.querySelector('#errorInputLastName');
    let errEmail = document.querySelector('#errorInputEmail');
    let errTextArea = document.querySelector('#errorInputTextArea');

    //First Name validation
    if (firstName.value == "") {
        errFirstName.innerHTML = "*Enter First Name please.";
        errFirstName.style.color = '#F2F2F2';
        firstName.focus();
        event.preventDefault();
    }

    //Last Name validation
    if (lastName.value == "") {
        errLastName.innerHTML = "*Enter Last Name please.";
        errLastName.style.color = '#F2F2F2';
        lastName.focus();
        event.preventDefault();
    }

    //Email validation
    if (email.value == "" || email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1) {
        errEmail.innerHTML = "*Enter valid Email please <br >example: name@example.com";
        errEmail.style.color = '#F2F2F2';
        email.focus();
        event.preventDefault();
    }

    //Last Name validation
    if (comment.value == "") {
        errTextArea.innerHTML = "*Enter Comment please.";
        errTextArea.style.color = '#F2F2F2';
        comment.focus();
        event.preventDefault();
    }
}

form.addEventListener('submit', handleForm);