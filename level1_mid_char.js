function solution(s) {
    var average = (s.length-1)/2;
    if (average % 1 === 0){
        var answer = s.charAt(average);
        }
    else {
        var floor = s.charAt(Math.floor(average));
        var ceil = s.charAt(Math.ceil(average));
        var answer = floor + ceil;
        }
    return answer;
}
