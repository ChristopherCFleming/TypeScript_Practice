let x = 4;
let y: number = 6;
let s: string = 'string';
let b: boolean = true;
let v: any = false;

let isAnswered: boolean = true;

console.log(x);


let strArray: string[] = [];
let strAr: Array<string> = [];

let userInfo: [number, string] = [9, 'nine'];
console.log(true);

const small: number = 5;
enum Size {small=5};

console.log(Size);

const person: {id: number, user: string} = {
    id: 0,
    user: 'Chris',
}


//Here, we say this function must take in a number and return a boolean
function isEven (x: number): boolean {
    if (x % 2 === 1) return false;
    return true;
}

//Here, if a function calls another function or doesn't return anything itself, we must say it returns void. If it actually returns null, we have to say null.
function doesntReturnAnything (x: number): void {
    console.log('HelloWorld')
}