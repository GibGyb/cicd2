"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.avg = exports.min = exports.max = void 0;
function max(numbers) {
    if (!numbers.length) {
        throw Error("numbers was empty");
    }
    return Math.max(...numbers);
}
exports.max = max;
function min(numbers) {
    if (!numbers.length) {
        throw Error("numbers was empty");
    }
    const min = Math.min(...numbers);
    return min;
}
exports.min = min;
function avg(numbers) {
    if (!numbers.length) {
        throw Error("numbers was empty");
    }
    const sum = numbers.reduce((r, n) => {
        return r + n;
    });
    return sum / numbers.length;
}
exports.avg = avg;
console.log(max([1, 2, 3]));
console.log(min([1, 2, 3]));
console.log(avg([1, 2, 3]));
//# sourceMappingURL=index.js.map