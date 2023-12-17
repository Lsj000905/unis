// m.js
console.log('hello world');

function myFunction(a, b) {
    return a * b;
}

// 导出 myFunction 函数
module.exports = {
    myFunction:myFunction
};
console.log(module)