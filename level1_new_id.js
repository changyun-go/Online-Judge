function solution(new_id) {
    let answer = "";
    let fixedId = "";
    
    fixedId = new_id.toLowerCase().match(/[\w\-\.]/g).join("").replace(/\.{2,}/g, ".").split("");
    
    if(/^\./.test(fixedId)){
        fixedId.splice(0, 1);
    }
    if(/\.$/.test(fixedId)){
        fixedId.splice(fixedId.length - 1, 1)
    }
    if(fixedId.length === 0){
        fixedId.push("a");
    }
    if(fixedId.length >= 16){
        fixedId.splice(15, fixedId.length - 15);
    }
    if(/\.$/.test(fixedId)){
        fixedId.splice(fixedId.length - 1, 1)
    }
    if(fixedId.length <= 2){
        for(let i = 0; i <= 3 - fixedId.length; i++){
            fixedId.push(fixedId[fixedId.length - 1]);
        }
    }
    answer = fixedId.join("");
   
    return answer;
}
