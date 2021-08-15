function solution(a, b) {
    let days = 0;
    let monthdays = 0;
    const Week = ['THU', 'FRI', 'SAT', 'SUN', 'MON', 'TUE', 'WED']
    const MonthDay = [0, 31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30] 
    for (let i = 0; i < a; i++){
        monthdays += MonthDay[i];
    }
    days = monthdays + b;
    const answer = Week[days % 7]
    return answer;
}
