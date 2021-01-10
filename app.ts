const add = (n1: number, n2: number, showResult: boolean, phrase: string) => {
    const result = n1 + n2;
    if (showResult) {
        console.log(phrase + result);
    } else {
        return result;
    }
}

add(1, 2, true, "testing");