/**
 * @param {string} s
 * @return {string}
 */
var removeOuterParentheses = function(s) {
    let result = [];
    let stack = new Stack()
    for(let i=0;i<s.length;i++){
        let char  = s[i];
         if (stack.isEmpty()){
             if (char=='('){
                 stack.push('(');
             }
         }else {
            if(char == ')' && stack.size() == 1){
                stack.pop();
            }else{
                result.push(char);
                if(char == '('){
                   stack.push(char);
                }else{
                    stack.pop()
                }
            }
         }
    }
    return result.join("");
};

class Stack {
    constructor() {
        this.stack = []
    }
    push(a) {
        this.stack.push(a)
    }
    pop() {
        return this.stack.pop()
    }
    peek() {
        return this.stack[this.stack.length - 1]
    }
    size() {
        return this.stack.length
    }
    toString(){
      return this.stack.join("");  
    }
    isEmpty() {
        return this.stack.length == 0
    }
}