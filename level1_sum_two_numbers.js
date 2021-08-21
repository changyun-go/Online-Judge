function solution(numbers) {
    let answer = [];
    let sum = [];  
    let count = 0;
    
    for(let i = 0; i < numbers.length; i++){
        for(let j = i+1; j < numbers.length; j++){
            sum[count] = numbers[i] + numbers[j]
            count++;
        }
    }

    answer = sum.filter((element, index) => {
        return sum.indexOf(element) === index;
    });
    answer.sort((a, b) => a - b);
    return answer;
}
