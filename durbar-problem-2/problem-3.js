function findFirstUniqueChar(s) {

    let count = {};

    for (let i = 0; i < s.length; i++) {
        if (count[s[i]]) {
            count[s[i]]++;
        }
        else {
            count[s[i]] = 1;
        }
    }

    for (let i = 0; i < s.length; i++) {
        if (count[s[i]] === 1) {
            return s[i]
        }
    }
    return -1;
}
console.log(findFirstUniqueChar("aabbcdeff"))
console.log(findFirstUniqueChar("aabb"))