function solution(absolutes, signs) {
    let answer = 0;
    const int = [];
    for(let i = 0; i < absolutes.length; i++){
        if(signs[i] === false){
            int.push(absolutes[i]*(-1));  
        }
        else{
            int.push(absolutes[i]);
        }
        answer += int[i];
    }
    return answer;
}
