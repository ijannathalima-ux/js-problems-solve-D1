//Nested Folder File Counter

function countFilesInFolder(structure) {
    let count = 0;

    for (const item of structure) {
        if (item.type === "file") {
            count++;
        } else if (item.type === "folder") {
            count += countFilesInFolder(item.children);
        }
    }

    return count;
}

console.log(countFilesInFolder([{ "name": "document.txt", "type": "file" }, { "children": [{ "name": "photo1.jpg", "type": "file" }, { "name": "photo2.png", "type": "file" }], "name": "images", "type": "folder" }, { "name": "report.pdf", "type": "file" }]))