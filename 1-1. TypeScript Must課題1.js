1-1. TypeScript Must課題1



const numbers: number[] = [12, 5, 8, 21, 15, 3, 28, 9, 17, 6, 35, 11];
function findMax(numbers: number[]): number {
  let max = numbers[0];
  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > max) {
      max = numbers[i];
    }
  }
  return max;
}
