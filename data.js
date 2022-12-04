// YOUR CODE COMES HERE

// Even or Odd

function evenOrOdd(string) {
    string.split("");
    for (let num of string) {
        if (num % 2 === 0) {
            return "Even"
        } else {
            return "Odd"
        }
    }
}

console.log(evenOrOdd("5"));

// Basic operations

function basicOperations(operation, value1, value2) {
    if (operation === '+') {
        return value1 + value2
    } else if (operation === '-') {
        return value1 - value2
    } else if (operation === '*') {
        return value1 * value2
    } else if (operation === '/') {
        return value1 / value2
    }
}

console.log(basicOperations("+", 8, 2));

// Total Points
console.log("-----------------------Total Points--------------------");

function totalPoints(games) {
    let sum = 0;
    for (let game of games) {
        if (game[0] > game[2]) {
            sum += 3
        } else if (game[0] < game[2]) {
            sum += 0
        } else if (game[0] === game[2]) {
            sum += 1
        }
    }
    return sum;
}

console.log(totalPoints(["1:1", "2:0", "3:0", "4:0", "2:1", "3:1", "4:1", "3:2", "2:2", "4:3"]));

// The largest number
console.log("-----------------------The largest number--------------------");

function largestNumber(a, b, c) {
    return Math.max(
        a + b + c,
        a * b * c,
        a * (b + c),
        (a + b) * c,
        a + b * c,
        a * b + c,
    );
}

console.log(largestNumber(1, 3, 1));

// Power of N-th

function index(array, n) {
    let result = 0;
    let npow = 0;
    if (n < array.length) {
        npow = Math.pow(array[n], n);
        result = npow;
    } else {
        result = -1
    }
    return result;
}

console.log(index([1, 2, 3], 2))

// Quater of the year

const quaterOfTheYear = (month) => {
    let quarter = 0
    if (month <= 3) {
        quarter = 1;
    }
    else if (month <= 6) {
        quarter = 2;
    }
    else if (month <= 9) {
        quarter = 3;
    }
    else if (month <= 12) {
        quarter = 4;
    }
    else {
        console.log('month is not valid')
    }
    return quarter
}

console.log("Quarter number: " + quaterOfTheYear(12));

// Century from year - ceil - zaokrąglenie do góry

function century(year) {
    return Math.ceil(year / 100);
}

console.log("Century: " + century(1222));

// Form the minimum - creation of set

function formTheMinimum(numbers) {
    let numbersSet = {};
    let result = [];
    numbersSet = new Set(numbers);
    console.log(numbersSet);
    result = Array.from(numbersSet);
    console.log(result)
    result = result.sort((a, b) => a - b)
    result = result.join("");
    result = parseInt(result);
    console.log(result)
    return result;
}

console.log("The smallest number formed from the array " + formTheMinimum([8, 6, 1, 2, 3, 1, 4, 5]));

// // Form the minimum - creation of set - short version

const formTheMinimum2 = (numbers) => {
    return parseInt((Array.from(new Set(numbers)).sort((a,b) => a - b)).join(""));
}

console.log(formTheMinimum2([8, 6, 1, 2, 3, 1, 4, 5]));

// DO NOT MODIFY THE CODE BELOW THIS LINE
let toExport;

try {
    toExport = [
        { name: "evenOrOdd", content: evenOrOdd, type: "function" },
        { name: "basicOperations", content: basicOperations, type: "function" },
        { name: "totalPoints", content: totalPoints, type: "function" },
        { name: "largestNumber", content: largestNumber, type: "function" },
        { name: "index", content: index, type: "function" },
        { name: "quarterOfTheYear", content: quarterOfTheYear, type: "function" },
        { name: "century", content: century, type: "function" },
        { name: "formTheMinimum", content: formTheMinimum, type: "function" }
    ]
} catch (error) {
    toExport = { error: error.message }
}

export { toExport };

