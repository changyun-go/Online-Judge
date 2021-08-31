function solution(dartResult) {
    let answer = 0;
    let result = [];
    let number = 0;
    let count = 0;
    
    for(let i = 0; i <= 6; i++){
        if(isFinite(dartResult[i])){
            number = dartResult[i];
            i++;
            if(isFinite(dartResult[i])){
               number = 10;
               i++;
             } 
            if(dartResult[i] === "S"){
                number = number * 1;
                i++;
                if(dartResult[i] === "*"){
                    number = number * 2;
                    result[count - 1] = result[count - 1] * 2;
                }
                else if(dartResult[i] === "#"){
                    number = number * -1;
                }
                else{
                    i--;
                }
            }
            else if(dartResult[i] === "D"){
                number = Math.pow(number, 2);
                i++;
                if(dartResult[i] === "*"){
                    number = number * 2;
                    result[count - 1] = result[count - 1] * 2;
                }
                else if(dartResult[i] === "#"){
                    number = number * -1;
                }
                else{
                    i--;
                }
            }
            else if(dartResult[i] === "T"){
                number = Math.pow(number, 3);
                i++;
                if(dartResult[i] === "*"){
                    number = number * 2;
                    result[count - 1] = result[count - 1] * 2;
                }
                else if(dartResult[i] === "#"){
                    number = number * -1;
                }
                else{
                    i--;
                }
            }
        
        }
        result.push(number);
        count++;
        number = 0;
    }
    
    for(let j = 0; j < result.length; j++){
        answer = answer + result[j]; 
    }
        
    return answer;
}
