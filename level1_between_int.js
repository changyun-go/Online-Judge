function solution(a, b) {
    let answer = 0;
    let start;
    let end;
    if(a > b){
        start = b;
        end = a;
    }
    else{
        start = a;
        end = b;
    }
    for(let i = start; i <= end; i++){
        answer += i;
    }
    return answer;
}
