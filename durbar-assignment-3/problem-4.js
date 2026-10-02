
function classifyPassword(password) {

    let hasUppercase = false;
    let hasLowercase = false;
    let hasDigit = false;
    let hasSpecial = false;

    for (let char of password) {

        if (char >= "A" && char <= "Z") {
            hasUppercase = true;
        }

        else if (char >= "a" && char <= "z") {
            hasLowercase = true;
        }

        else if (char >= "0" && char <= "9") {
            hasDigit = true;
        }

        else if ("!@#$%^&*".includes(char)) {
            hasSpecial = true;
        }
    }

    let count = 0;

    if (hasUppercase) {
        count++;
    }

    if (hasLowercase) {
        count++;
    }

    if (hasDigit) {
        count++;
    }

    if (hasSpecial) {
        count++;
    }

    if (password.length >= 8 && count === 4) {
        return "Strong";
    }

    else if (password.length >= 6 && count >= 2) {
        return "Medium";
    }

    else {
        return "Weak";
    }
}


console.log(classifyPassword("Password1!"));
// Strong

console.log(classifyPassword("pass123"));
// Medium

console.log(classifyPassword("hello"));
// Weak

