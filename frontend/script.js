console.log("srit")

//data types

//num=12;
//str="hi";
//bol=true;
//bigint=34034953534453453547993490;
//undefined
//unde;
//null=null;

//var ,let,const
var name1="srit";
console.log(name1)

// funtion
//function generateWelcomMessage(name){
//return "welcome," + name+"good morning srit"
//}

//let welcome_message=generateWelcomMessage(givename)
//console.log(welcome_message)

// java script operators
function Score(name, score) {
  console.log(name + " score is: " + score);
  let add=score+10;
  let sub=score-3;
  let mul=score*2;
  let div=score/5;
    console.log("after addition: " + add);
    console.log("after subtraction: " + sub);
    console.log("after multiplication: " + mul);
    console.log("after division: " + div);
}
Score("siva", 20);

// area of rectangle
function area(l,b){
    console.log("area of rectangle: "+(l*b))

}
area(5,6);

// factorial of a number
function factorial(n){
    let fact=1;
    for(let i=1;i<=n;i++){
        fact=fact*i;
    }
    console.log("factorial of a number: "+fact)
}
factorial(5);

//calculator code 

function caluclator(num1,num2,operator){
    switch(operator){
        case '+':
            console.log("addition: "+(num1+num2));
            break;
        case '-':
            console.log("subtraction: "+(num1-num2));
            break;
        case '*':
            console.log("multiplication: "+(num1*num2));
            break;
        case '/':
            console.log("division: "+(num1/num2));
            break;
        default:
            console.log("invalid operator");
    }

}
caluclator(10,5,'*');

// compound interest
function compoundInterest(p,r,t,n){
    let a=p*(1+r/n)^(n*t);
    let ci=a-p;
    console.log("compound interest: "+ci)
}
compoundInterest(1000,0.05,2,100);

// if conditions age elgible or not
let age=14;
if (age<=18){
    console.log("eligible the vote");
}else{
    console.log("not elgible the vote");
}

// Calculator using if conditions
let num1 = 87;
let num2 = 63;
let operator = "+";

if (operator === "+") {
    console.log("Addition: " + (num1 + num2));
} else if (operator === "-") {
    console.log("Subtraction: " + (num1 - num2));
} else if (operator === "*") {
    console.log("Multiplication: " + (num1 * num2));
} else if (operator === "/") {
    console.log("Division: " + (num1 / num2));
} else {
    console.log("Invalid operator");
}

//grade of a student
let marks=85;
if(marks>=90){
    console.log("grade A");
}else if(marks>=80){
    console.log("grade B");
}
else if(marks>=70){
    console.log("grade C");
}
else if(marks>=60){
    console.log("grade D");
}else{
    console.log("grade F");
}

//a person is travelling from a to b at speed of 30km/hr and speed is doubled for every 10 minutes 
// caluclate the distance between a to b when the speed os maximum is 120 kmph and travelled time is 96 minutes
let speed=30;
let time=96;
let distance=0;
for(let i=0;i<time;i++){
    if(i%10==0 && speed<120){
        speed=speed*2;
    }
    distance=distance+speed/60;
}
console.log("distance between a to b: "+distance+"km");


//b=30 for 4km
//for next 5km the price is 10
//for next 10km the price is 15
//if the kms are more the will be 20
//person travelled 19.5kms what will b ethr price
let kms=19.5;
let price=0;
if(kms<=4){
    price=30;
}else if(kms<=9){   
    price=30+10;
}
else if(kms<=19){
    price=30+10+15;
}
else{
    price=30+10+15+20;
}
console.log("total price: "+price);

//while loop
let i=0;
while(i<5){
    console.log(i);
    console.log("siva");
    i++;
}

//print 5 table using while loop
let n=5;
let j=1;
while(j<=10){
    console.log("5 x " +j+ " = " +n*j);
    j++;
}

//do while loop
let k=5;
do{
    console.log(k);
    k++;
}while(k<1);

//dom maanipulation

//const newparagraphb = document.createElemet('p');
//newparagraph.textcontent='this is a new paragraph'
//myDiv.appendchild(newparagraph);
//myDiv.addEvetvetListener('click',()=>{
//alert('Civ clicked');
//});
