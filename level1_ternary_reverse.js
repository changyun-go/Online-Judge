function solution(n) {
    let answer = 0;
    let rev = n.toString(3).split('').reverse().join('');
    answer = parseInt(rev, 3);
      
    return answer;
}
