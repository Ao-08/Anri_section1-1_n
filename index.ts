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

const maxNumber: number = findMax(numbers);
console.log(maxNumber);

function fizzBuzz1(num: number): string {
    if (num % 3 === 0 && num % 5 === 0) { 
    return "FizzBuzz";
    } else if (num % 3 === 0) {
    return "Fizz";
    } else if (num % 5 === 0) {
    return "Buzz";
    }else{
    return num;
    }
    }
        
    function fizzBuzz2() {
    for (let i = 1; i <= 100; i++) {
    console.log(fizzBuzz1(i));
    }
    }
        
    fizzBuzz2();

    function upsideDown(str: string): string{
        const charArray = str.split('');
        const reversedArray = charArray.reverse();
        const reversedString = reversedArray.join('');
        return reversedString;
        }
        
        const result = upsideDown("baseball");
        console.log(result);

        function stringSplitting(str: string,separator: string):string[] {
            const text: string = str;
            const splitArray: string[] = text.split(separator);
            return splitArray;
            }
            