function solution(answers) {
    let st = [ "12345", "21232425", "3311224455" ];
    
    let corrects = new Array(3).fill(0);
    for (let [idx, item] of st.entries()) {
        let marked = new Array(answers.length).fill(0);
        
        let it = 0;
        for (let [key, value] of marked.entries()) {
            marked[it++] = parseInt(item[key % item.length]);
        }
        
        let count = 0;
        for (let i = 0; i < answers.length; i++) {
            if (answers[i] === marked[i]) count++;
        }
        corrects[idx] = count;
    }

    let max = corrects[0];
    for (let i = 1; i < corrects.length; i++) if (corrects[i] > max) max = corrects[i];
    
    let answer = [];
    for (let i = 0; i < corrects.length; i++) if (corrects[i] === max) answer.push(i + 1);
    
    return answer;
}