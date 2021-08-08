function solution(n) {
    const string = "수박".repeat(n/2+1) 
    const answer = string.slice(0,n);
    return answer;
}
