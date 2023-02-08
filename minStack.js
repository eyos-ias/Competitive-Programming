class MinStack {
constructor() {
this.Stack = [];
}

push(val) {
this.Stack.unshift(val);
}

pop() {
this.Stack.shift();
}

top() {
return this.Stack[0];
}

getMin() {
return Math.min(...this.Stack);
}
}
