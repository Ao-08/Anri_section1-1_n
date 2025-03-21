1-1. TypeScript Must課題3


function upsideDown(str: string): string{
        const charArray = str.split('');
        const reversedArray = charArray.reverse();
        const reversedString = reversedArray.join('');
        return reversedString;
        }

