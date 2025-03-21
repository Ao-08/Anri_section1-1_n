1-1. TypeScript Must課題2

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