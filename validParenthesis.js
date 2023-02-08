var isValid = function(s) {
    let stack = [];
    for (let chars of s) {
        if (chars === '(' || chars === '{' || chars === '[') {
            stack.push(chars);
        } else if (chars === ')' && stack.length && stack[stack.length - 1] === '(') {
            stack.pop();
        } else if (chars === '}' && stack.length && stack[stack.length - 1] === '{') {
            stack.pop();
        } else if (chars === ']' && stack.length && stack[stack.length - 1] === '[') {
            stack.pop();
        } else {
            return false;
        }
    }
    return stack.length === 0;
};
