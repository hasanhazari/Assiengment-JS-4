// first problem -------
//Description : 


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

function findingBadData(numbers) {
    let positiveCount = 0;
    let negativeCount = 0;
 
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] < 0) {
            negativeCount++;
        } 
        else{
            positiveCount++;
        }
    }
    return negativeCount;
}

// const response = findingBadData([-4, -9, -5, -33, -55]);
// console.log(response);



// Fifth problem ---------
function gemsToDiamond(firstFriend, secondFriend, thirdFriend){
    const totalDiamond = firstFriend * 21 + secondFriend * 32 + thirdFriend * 43;
    if(totalDiamond > 2000){
        const remainingDiamond = totalDiamond - 2000;
        return remainingDiamond;
    }
    else if(totalDiamond < 2000){
        return totalDiamond;
    }
}

// const solution = gemsToDiamond(20, 200, 50);
// console.log(solution);