function solution(n, arr1, arr2) {
    let answer = [];
    let crack1 = [];
    let crack2 = [];
    let result = Array.from({length: arr1.length}, undefined => ""); 
 
    for(let number of arr1){
        crack1.push(number.toString(2).padStart(arr1.length,'0'));
    }
    for(let number of arr2){
        crack2.push(number.toString(2).padStart(arr2.length,'0'));
    }
    for(let i = 0; i < crack1.length; i++){
        for(let j = 0; j < crack1.length; j++){
            if(crack1[i][j] === '1' || crack2[i][j] === '1'){
                result[i] += '#';
            }
            else{
                result[i] += ' ';
            }   
       } 
    }
    return result;
}
