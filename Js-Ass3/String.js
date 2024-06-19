//Q1

// Array of Indian states
const indianStates = [
    "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh",
    "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand",
    "Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur",
    "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab",
    "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura",
    "Uttar Pradesh", "Uttarakhand", "West Bengal"
];

const noVowelStates = indianStates.filter(state => !'AEIOU'.includes(state[0].toUpperCase()));

console.log(noVowelStates);

//Q2

let sentence = "I love my India";

let wordArray = sentence.split(" ");
let reversedWords = wordArray.reverse();
let reversedSentence = reversedWords.join(" ");

console.log(reversedSentence);

//Q3

let country = "INDIA";

let countryArray = Array.from(country);

countryArray.splice(3, 0, "O", "N", "E", "S");

let modifiedCountry = countryArray.join("");
console.log(modifiedCountry);

//Q4

let vowels = 0;
let consonants = 0;

const countChars = (str) => {
    for (let char of str) {
        if ('aeiou'.includes(char)) {
            vowels++;
        } else {
            consonants++;
        }
    }
    return { vowels, consonants };
};

countChars("abcdefghijklmnopqrst");

console.log(vowels, consonants);

//Q5

function replaceSubstring(str, oldSubstr, newSubstr) {
    return str.replace(oldSubstr, newSubstr);
}

const modifiedText = replaceSubstring("The time has come.", "time", "day");
console.log(modifiedText);

//Q6

const numbers = [1, 2, 3, 9, 10, 7, 5, 4, 3];
const greaterThanFive = numbers.filter(value => value > 5);

console.log(greaterThanFive);

//Q7

const studentData = [
    { name: "Ram", scores: [80, 70, 60] },
    { name: "Mohan", scores: [80, 70, 90] },
    { name: "Sai", scores: [60, 70, 80] },
    { name: "Hemang", scores: [90, 90, 80, 80] },
];

const studentAverages = studentData.map(student => {
    const total = student.scores.reduce((sum, score) => sum + score, 0);
    const average = total / student.scores.length;
    return { name: student.name, average };
});

console.log(studentAverages);

//Q8

function digitSum(num) {
    function sumDigits(n) {
        let sum = 0;
        while (n > 0) {
            sum += n % 10;
            n = Math.floor(n / 10);
        }
        return sum;
    }

    while (num >= 10) {
        num = sumDigits(num);
    }

    return num;
}

console.log(digitSum(456)); // Output: 6

//Q9

function wordCount(text) {
    const wordsArray = text.trim().split(/\s+/);
    return wordsArray.length;
}

const textParagraph = "This is a sample paragraph with several words.";
console.log("Number of words:", wordCount(textParagraph)); // Output: 8

//Q10

function reverse(input) {
    return input.split('').reverse().join('');
}

const sampleInput = "Hello";
console.log(reverse(sampleInput));
