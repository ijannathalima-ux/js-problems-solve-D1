function isAnagram(s1, s2) {
    s1 = s1.toLowerCase();
    s2 = s2.toLowerCase();

    let clean1 = "";
    let clean2 = "";

    for (let char of s1) {
        if (/[a-z]/.test(char)) {
            clean1 += char;
        }
    }

    for (let char of s2) {
        if (/[a-z]/.test(char)) {
            clean2 += char;
        }
    }

    if (clean1.length !== clean2.length) {
        return false;
    }

    let count1 = {};
    let count2 = {};

    for (let char of clean1) {
        if (count1[char]) {
            count1[char]++;
        } else {
            count1[char] = 1;
        }
    }

    for (let char of clean2) {
        if (count2[char]) {
            count2[char]++;
        } else {
            count2[char] = 1;
        }
    }

    for (let char in count1) {
        if (count1[char] !== count2[char]) {
            return false;
        }
    }

    return true;
}

console.log(isAnagram("listen", "silent"))