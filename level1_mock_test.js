function solution(answers) {
    const students = [[1, 2, 3, 4, 5],[2, 1, 2, 3, 2, 4, 2, 5],[3, 3, 1, 1, 2, 2, 4, 4, 5, 5]];
    let student = [];
    const result = [];
    const answer = [];
    let correct = 0;
    let count = 0;
    
    for(let x = 0; x < students.length; x++){
        student = students[x];
        if(answers.length > student.length){
            for(let y = 0; y < Math.floor(answers.length / student.length); y++){
                for(let i = 0; i < student.length; i++){
                    student[i] === answers[count] ? correct++ : null;
                    count++;
                }
            }
            for(let z = 0; z < answers.length % student.length; z++){
                    student[z] === answers[count] ? correct++ : null;
                    count++;
            }
        }
        else{
            for(let i = 0; i < student.length; i++){
                student[i] === answers[count] ? correct++ : null;
                count++;
            }
        }
        result[x] = correct;
        count = 0;
        correct = 0;
    }
    
    let max = result.reduce((a,b) => a > b ? a : b);
    
    let idx = result.indexOf(max);
    while (idx !== -1) {
        answer.push(idx + 1);
        idx = result.indexOf(max, idx + 1);
    }
    
    return answer;
}
