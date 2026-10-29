//Connected Friends

function countConnectedFriends(friendships, startPerson) {

    const friends = new Map();

    for (const [person1, person2] of friendships) {

        if (!friends.has(person1)) {
            friends.set(person1, []);
        }

        if (!friends.has(person2)) {
            friends.set(person2, []);
        }

        friends.get(person1).push(person2);
        friends.get(person2).push(person1);
    }

    const visited = new Set([startPerson]);
    const queue = [startPerson];

    for (let i = 0; i < queue.length; i++) {
        const person = queue[i];

        for (const friend of friends.get(person) ?? []) {
            if (!visited.has(friend)) {
                visited.add(friend);
                queue.push(friend);
            }
        }
    }

    return visited.size;
}

console.log(countConnectedFriends(
    [["Alice", "Bob"], ["Charlie", "David"]],
    "Eve"
))