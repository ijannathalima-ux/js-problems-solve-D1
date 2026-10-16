//Validate an Email Address

function isValidEmail(email) {

    let pattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9-]+\.[a-zA-Z]{2,}$/;

    return pattern.test(email);
}

console.log(isValidEmail("user@example.com"))
