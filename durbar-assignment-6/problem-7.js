//Validate Bangladeshi Mobile Number

function isValidBdMobileNumber(phoneNumber) {
    
    let pattern = /^(?:01[3-9]\d{8}|\+8801[3-9]\d{8}|8801[3-9]\d{8})$/;

    return pattern.test(phoneNumber);
}
console.log(isValidBdMobileNumber("01712345678"))
console.log(isValidBdMobileNumber("0171234567--"))