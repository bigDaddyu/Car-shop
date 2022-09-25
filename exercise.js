let score = 67;
if(score >= 90 && score <= 100){
    console.log("A")
}
else if (score >=80 && score <=89){
    console.log("B")
}
else if(score >=70 && score <=79){
    console.log("C")
}
else if(score >=60 && score <=69){
    console.log("D")
}
else if(score>=50 && score <=59){
    console.log("E")
}
else if(score>=0 && score <=49){
    console.log("F")
}

//Number
let Number = 24;
if(Number % 2 == 0){
    console.log(`${Number} is an even number`)
}
else {
    console.log(`${Number} is an odd number`)
}

//Age restriction
let Age = 76;
if(Age < 18){
    console.log("Not eligible to drive")
}
else if(Age >=60){
    console.log("Too old to drive")
}

//vote
let votingAge = 20;
if(votingAge < 20){
    console.log("Not old enough to own a PVC")
} 
else if(votingAge >=20){
    console.log("Old enough to vote")
}
let cardDuration = 8;
if(cardDuration > 10){
    console.log("Expired card")
} else {
    console.log("card is still valid")
}