function solution(numbers, hand) {
    let answer = '';
    const keyPad = [[1, 2, 3], [4, 5, 6], [7, 8 ,9], ['*', 0, '#']];
    let left = [3, 0];
    let right = [3, 2];
    
    function findPosition(number){
        for(let j = 0; j < keyPad.length; j++){
            for(let k = 0; k < keyPad[j].length; k++){
                if(keyPad[j][k] === number){
                    return [j, k];
                }
            }   
        }
    }
    
    for(let i = 0; i < numbers.length; i++){
        const position = findPosition(numbers[i]);
        const leftDistance = Math.abs(left[0] - position[0]) + Math.abs(left[1] - position[1]);
        const rightDistance = Math.abs(right[0] - position[0]) + Math.abs(right[1] - position[1]);
        if(position[1] === 0){
            answer += "L";
            left = position;
        }
        else if(position[1] === 2){
            answer += "R";
            right = position;
        }
        else{
            if(leftDistance < rightDistance){
                answer += "L";
                left = position;
            }
            else if(leftDistance > rightDistance){
                answer += "R";
                right = position;
            }
            else if(hand === "left"){
                answer += "L";
                left = position;
            }
            else{
                answer += "R";
                right = position; 
            }
        } 
    }      
    return answer;
}
