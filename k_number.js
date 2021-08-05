function solution(array, commands) {
    var result = new Array(commands.length);
    for(var x = 0; x < commands.length; x++){
        var command = commands[x];
        var i = command[0]; 
        var j = command[1]; 
        var k = command[2];
        var slice_f = array.slice(i-1,j);
        var sort_f = slice_f.sort();
        result[x] = sort_f[k-1];
        }
    var answer = result;
    return answer;
}
