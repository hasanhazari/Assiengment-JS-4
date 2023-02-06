// first problem -------

// let num = [33];
function mindGame(number){
    const totalMalTi = number * 3;
    const totalSum = totalMalTi + 10;
    const totalDivided = totalSum / 2;
    const totalMaiNas = totalDivided - 5;
    return totalMaiNas;

}

// const result = mindGame(33);
// console.log(result);


// Second problem -------
let string ='Hasan Hazari';
function evenOdd(string){
    const stringLength = string.length;
    if(stringLength % 2 == 0){
        return 'even';
    }
    else{
        return 'odd';
    }
}

// const finalResult = evenOdd('Hasan Hazari');
// console.log(finalResult);


// Third problem ----------

// let number = [6];
function isLGSeven(number){
    const totalMns = number - 7;
    if(totalMns < 7){
        return totalMns;
    }
    else if(totalMns > 7){
        const doubleInput =  number + number;
        return doubleInput;
    }
}

// const ans = isLGSeven(15);
// console.log(ans);


// Forth problem --------

// var numbers = [ 2, -5, -7, -13];
// let negativeArr = [];
// let positiveArr = [];
// function findingBadData(numbers){
//     if(number % 2 < 0){
        
//         return numbers;
//     }
//     else{
//         return numbers;
//     } 
// }
// const response = findingBadData(numbers.length)
// console.log(response)



// Fifth problem ---------
function gemsToDiamond(firstFriend, secondFriend, thirdFriend){
    const totalDiamond = firstFriend * 21 + secondFriend * 32 + thirdFriend * 43;
    const totalMaiNas = totalDiamond - 2000;
    return totalMaiNas;
    // return totalGems;
}

// const solution = gemsToDiamond(20, 200, 50);
// console.log(solution);