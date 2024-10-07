import input from './input.js'
let text = "Hello WORLD! Today is the 5th of June 2024 21th century. I've 15 apples, 123 oranges, and 4567 grapes."
let regex, result

console.log(text)

    function numberLength2Or3(text) {
    //Kétjegyű számok
    let digits = text.match(/\b\d{2,3}\b/g);
    return digits;
    }
    console.log(numberLength2Or3(text));
    
    function startsWithEven(text) {
        regex = /[2468][0-9]*/g
        let digits = text.match(regex)
        return digits;
    }
    console.log(startsWithEven(text));

    function startsWithNumber(text){
        regex = /\b\d\w*/g
        let digits = text.match(regex);
        return digits;
    }
    console.log(startsWithNumber(text))