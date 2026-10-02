function swapKeysAndValues(obj) {
    const result = {};

    for (const key of Object.keys(obj)) {
        result[obj[key]] = key;
    }

    return result;
}

console.log(
    swapKeysAndValues({
        a: "x",
        b: "y"
    })
);