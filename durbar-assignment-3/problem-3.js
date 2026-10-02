function isPalindrome(str) {

    const cleaned = str.toLowerCase()
        .replace(/[^a-zA-Z0-9]/g, "")

    const reversed = cleaned.split("").reverse().join("")

    return cleaned === reversed;

}
console.log(isPalindrome("madam"))
console.log(isPalindrome("A man, a plan, a canal: Panama"))
console.log(isPalindrome("Hello"))