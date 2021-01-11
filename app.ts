const add = (n1: number, n2: number, showResult: boolean, phrase: string) => {
    const result = n1 + n2;
    if (showResult) {
        console.log(phrase + result);
    } else {
        return result;
    }
}

add(1, 2, true, "testing");

const printResult = (num: number):void => { //void is not necessary, its implicitly infered
    console.log(`Result ${num}`)
}


type Combinable = number | string; // a way to do union types

const combine = (input1: Combinable, input2: Combinable) => {
    const result = input1 + input2;
    return result;
}

const combinedAges = combine(30, 26);
console.log(combinedAges);

const combinedNames = combine('Max', 'Anna');
console.log(combinedNames);

