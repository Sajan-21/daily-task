//task-1

function reverseRightAnglePattern() {
    let str='';

    for(let i=1; i<=5; i++){
        for(let j=5; j>=i; j--){
            str=str+" *";
        }
        str=str+"\n";
    }

    console.log(str);
}
reverseRightAnglePattern();
console.log('\n\n\n');

//task-2

function numberPattern() {
    let str='';

    for(let i=1; i<=5; i++){
        for(let j=1; j<=i; j++){
            str=str+j;
        }
        str=str+'\n';
    }
    console.log(str);
}
numberPattern();
console.log('\n\n\n');

//task-3

function printOnetoTen () {
    for(let i=1; i<=10; i++){
        console.log(i);
    }
}
printOnetoTen ();
console.log('\n\n\n');

//task-4

function sumOfConsicutiveNumbers() {
    let sum=0;

    for(let i=1; i<=10; i++){
        sum=sum+i;
    }
    console.log(sum);
}
sumOfConsicutiveNumbers();
console.log('\n\n\n');

//task-5

function evenNumbers() {
    for(let i=1; i<=20; i++){
        if(i%2==0){
            console.log(i);
        }
    }
}
evenNumbers();
console.log('\n\n\n');

//task-6

function numberOfVowels() {
    let name=['s','a','m','s','u','n'];
    let v=['a','e','i','o','u'];
    let count=0;

    for(let i=0; i<=name.length-1; i++){
        for(let j=0; j<=v.length-1; j++){
            if(name[i]==v[j]){
                count++;
            }
        }
    }
    console.log(count);
}
numberOfVowels();
console.log('\n\n\n');

//task-7

function isPrime() {
    let count=0;

    let num=7;

        for(let i=2; i<num/2; i++){
            if(num%i==0){
                count++;
            }
        }

        if(count==0){
            console.log("it is a prime number");
        }else{
            console.log('not a prime number');
        }
}
isPrime();
console.log('\n\n\n');

//task-largest

function LargestNumber() {
    let arr=[10,7,21,19,30,8];
    let largest=arr[0];

    for(let i=0; i<=arr.length -1; i++){
        if(arr[i]>largest){
            largest=arr[i];
        }

    }
    console.log("largest is : ",largest);
}
LargestNumber();
console.log('\n\n\n');

//task-smallest

function smallestNumber() {
    let arr=[10,7,21,19,30,8];
    let smallest=arr[0];

    for(let i=0; i<=arr.length -1; i++){
        if(arr[i]<smallest){
            smallest=arr[i];
        }

    }
    console.log("smallest is : ",smallest);
}
smallestNumber();
console.log('\n\n\n');

//task-factorial

function Factorial() {
    let num=5;
    let fact=1;
    for(let i=1; i<=num; i++){
        fact=fact*i;
    }
    console.log(fact);
}
Factorial();
console.log('\n\n\n');




