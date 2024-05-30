function validateEmail(form) {
    let email1 = form.email.value;
    let email2 = form.confirm.value;

    if (email1 === email2) {
        alert("Great Job!");
    } else {
        alert("Try again!");
    }
}