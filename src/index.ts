export function max(numbers: number[]): number {
  if (!numbers.length) {
    throw Error("numbers was empty");
  }

  return Math.max(...numbers);
}

export function min(numbers: number[]): number {
  if (!numbers.length) {
    throw Error("numbers was empty");
  }

  const min = Math.min(...numbers);
  return min;
}

export function avg(numbers: number[]): number {
  if (!numbers.length) {
    throw Error("numbers was empty");
  }

  const sum = numbers.reduce((r, n) => {
    return r + n;
  });

  return sum / numbers.length;
}

console.log(max([1, 2, 3]));
console.log(min([1, 2, 3]));
console.log(avg([1, 2, 3]));
