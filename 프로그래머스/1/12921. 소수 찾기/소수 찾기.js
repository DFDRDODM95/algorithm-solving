function solution(n) {
    if (n === 1) return 0;
    if (n === 2) return 1;
    let arr = new Array(n + 1).fill(0);
    
    function change(start, acc, flag) {
        for (let i = start; i < n + 1; i += acc)
            arr[i] = flag;
    }
    
    arr[2] = 1;
    arr[3] = 1;
    change(5, 6, 1);
    change(7, 6, 1);
    
    for (let i = 5, j = 25; i < n + 1;) {
        let next = (i - 3) % 6;
        if (arr[i] === 1) {
            let addi = i * 6;
            change(j, addi, 0);
            change(next * i + j, addi, 0);
        }
        i += next;
        j = i * i;
    }
    
    let answer = arr.filter(v => v === 1).length;
    return answer;
}