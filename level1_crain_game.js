function solution(board, moves) {
    let answer = 0;
    let basket = [];
    
    for(var i = 0; i < moves.length; i++){
        for(var j = 0; j < board.length; j++){
            if(board[j][moves[i]-1] !== 0){
                basket.push(board[j][moves[i]-1]);
                board[j][moves[i]-1] = 0;
                break;
            }
        }
    }
    
    for(var z = 0; z < basket.length; z++){
        if(basket[z] === basket[z+1]){
            basket.splice(z,2);
            z = z - 2;
            answer += 2;
        }
    }
    
    return answer;
}
