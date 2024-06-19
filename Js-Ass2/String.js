//Q1

const printEvens = () => {
    for (let number = 1; number <= 100; number++) {
        if (number % 2 === 0) {
            console.log(number); 
        }
    }
}

printEvens();

//Q2

function operate(num1, num2, operator) {
    let outcome;
    
    switch (operator) {
        case 'addition':
            outcome = num1 + num2;
            break;
        case 'subtraction':
            outcome = num1 - num2;
            break;
        case 'multiplication':
            outcome = num1 * num2;
            break;
        case 'division':
            outcome = num1 / num2;
            break;
        default:
            outcome = 'Invalid operator';
    }
    
    return outcome;
}

console.log(operate(10, 5, 'addition'));       
console.log(operate(10, 5, 'subtraction'));   
console.log(operate(10, 5, 'multiplication')); 
console.log(operate(10, 5, 'division'));       


//Q3

function computeTax(income) {
    let taxPercentage;
    
    switch (true) {
        case (income > 0 && income <= 500000):
            taxPercentage = 0;
            break;
        case (income > 500000 && income <= 1000000):
            taxPercentage = 0.1;
            break;
        case (income > 1000000 && income <= 1500000):
            taxPercentage = 0.2;
            break;
        case (income > 1500000):
            taxPercentage = 0.3;
            break;
        default:
            return 'Invalid income';
    }
    
    return income * taxPercentage;
}


console.log(computeTax(400000));   
console.log(computeTax(600000));   
console.log(computeTax(1200000));  
console.log(computeTax(2000000));  

//Q4

function productSum(a, b) {
    const str1 = a.toString();
    const str2 = b.toString();
  
    let total = 0;
    for (let i = 0; i < Math.min(str1.length, str2.length); i++) {
     
        const digit1 = parseInt(str1[i]);
        const digit2 = parseInt(str2[i]);
      
        total += digit1 * digit2;
    }
    
    return total;
}


console.log(productSum(1234, 5678));  
console.log(productSum(4321, 8765));  


