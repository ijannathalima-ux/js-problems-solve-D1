function simulateTicketQueue(commands) {
    const queue = [];
    const served = [];

    for (const command of commands) {
        if (command === "serve") {
            if (queue.length > 0) {
                const person = queue.shift();
                served.push(person);
            }
        } 
        
        else if (command.startsWith("join ")) {
            const name = command.slice(5);

            if (!queue.includes(name)) {
                queue.push(name);
            }
        } 
        
        else if (command.startsWith("leave ")) {
            const name = command.slice(6);
            const index = queue.indexOf(name);

            if (index !== -1) {
                queue.splice(index, 1);
            }
        }
    }

    return {
        queue,
        served
    };
}

console.log(simulateTicketQueue(["join Rafi","join Sara","serve","join Alex","leave Sara","serve"]))