function solution(seoul) {
    for(var i = 1; i < seoul.length; i++){
        if(seoul[i] === "Kim"){
            var answer = "김서방은 "+i+"에 있다";
            return answer;
        }
    }
}
