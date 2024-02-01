function solution(s) {
    let x = s[0];
    let [cnt1, cnt2] = [0, 0];
    
    let [start, end] = [0, 0];
    let rst = [];
    for (let i = 0; i < s.length; i++) {
        if (s[i] === x) cnt1++;
        else cnt2++;
        
        if (cnt1 === cnt2) {
            end = i + 1;
            rst.push(s.slice(start, end));
            start = i + 1;
            x = s[i + 1];
        }
        else if (i === s.length -1 && i - start >= 0) {
            rst.push(s.slice(start));
        }
    }
    
    return rst.length;
}