function solution(n, old_lost, old_reserve) {
    let answer = 0;
    let lost = old_lost.filter(x => !old_reserve.includes(x));
    let reserve = old_reserve.filter(x => !old_lost.includes(x));
    
    lost.sort((a, b) => a - b);
    reserve.sort((a, b) => a - b);
    
    for(let i = 0; i < lost.length; i++){
        for(let j = 0; j < reserve.length; j++){
            if(lost[i] + 1 === reserve[j] || lost[i] - 1 === reserve[j]){
                lost.splice(i, 1);
                reserve.splice(j, 1); 
                i--;
                j--;
            }
        }
    }
    answer = n - lost.length;
    return answer;
}
