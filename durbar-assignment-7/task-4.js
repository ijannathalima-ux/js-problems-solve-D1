//Student Ranking with Ties

function rankStudents(students) {

    const sortedStudents = [...students].sort((a, b) => b.score - a.score);

    let rank = 0;

    return sortedStudents.map((student, index) => {
        if (index === 0 || student.score !== sortedStudents[index - 1].score) {
            rank = index + 1;
        }

        return { ...student, rank };
    });
}

console.log(rankStudents([{ "name": "Alice", "score": 90 }, { "name": "Bob", "score": 95 }, { "name": "Charlie", "score": 90 }, { "name": "David", "score": 85 }]))