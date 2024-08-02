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

//array method tasks
{

    const people = [
        {name : 'Alice', age : 30, city : 'newYork'},
        {name : 'Bob', age : 25, city : 'Los Angeles'},
        {name : 'Charlie', age : 35, city : 'Chicago'},
        {name : 'David', age : 30, city : 'newYork'},
        {name : 'Eve', age : 28, city : 'Los Angeles'}
    ];

    //forEach-print names in uppercase
    
    people.forEach(item => {
        
        let names = item.name;
        console.log("names converted to uppercase : ",names.toUpperCase())
        
    });
    console.log("\n\n");

    people.forEach(item => {
        
        let ages = item.age;
        console.log(item.name + " + 5 : ",ages+5);
        
    });
    console.log("\n\n");

    people.forEach(item => {

        console.log("cities : ",item.city);
        
    });
    console.log("\n\n");

    let person = people.find(item => {
        return item.name == "Charlie";
    });
    console.log(person);

    let place = people.find(item => {

        return item.city == "Chicago";
        
    });
    console.log(place);
    console.log("\n\n\n");

    //filter
    
    let abovethirty = people.filter(item => {
        
        return item.age >= 30;
    });
    console.log(abovethirty);

    let cityNewyork = people.filter(item => {
        
        return item.city == "newYork";
    });
    console.log(cityNewyork);


    let nameLength = people.filter(item => {
        let name2 = item.name;
        return name2.length>=4;

    });
    console.log(nameLength);
    console.log("\n\n\n");

    //map

    let arrAges = people.map(item => {
        return item.age;
    });
    console.log(arrAges);

    people.map(item => {
        console.log("I am "+ item.name + " my age is " + item.age + ". and I am living in " + item.city);  
    });


}
console.log('\n\n\n');

//constructor
{
    function animal (name,colour){
        this.name=name;
        this.colour=colour;
        // this.weight;
        this.display = function (){
            console.log(`my pet animal is ${this.name}, ${this.colour} is my pet's colour.`);
        }
    }

    let animal1 = new animal("lion","brown");
    animal1.display();

}
console.log("\n\n\n");

//adding new objects
{
    class animal{
        name;
        colour;
        weight;

        constructor(name,colour,weight){
            this.name = name;
            this.colour = colour;
            this.weight = weight;
        }

        display = function () {
            console.log(`my pet animal is ${this.name}, ${this.colour} is my pet's colour.`);
        }
    }

    let animal1 = new animal("horse","white");
    animal1.display();

    let animal2 = new animal("cat","black","20 kg");
    // console.log(animal2);

    animal.prototype.getWeight = function (){
        console.log(`my pet animal is ${this.name}, ${this.colour} is my pet's colour. Weight is ${this.weight}.`);
    }

    animal2.getWeight();

}
console.log("\n\n\n");

//inheritance
{
    class Cars{
        name;
        color;

        constructor(name){
            this.name = name;
        }

        display(){
            console.log(`${this.name} is running`);
        }

    }

    class RacingCars extends Cars{
        display(){
            console.log(`${this.color} ${this.name} is drifting`);
        }

        set Color(color){
            this.color = color;
        }
        get Color(){
            return this.color;
        }

    }

    let ObjCars = new Cars("GTR");
    ObjCars.display();
    console.log("\n");


    let carsthings = new RacingCars ("GTR");
    carsthings.color = "dark blue";
    carsthings.display();

}
console.log("\n\n\n");

//task using object orientation
{
    class Peragraph {
        pera;

        constructor(content) {
            this.pera = document.createElement('text');
            this.pera.innerHTML  = content;
            document.body.appendChild(this.pera);
            this.pera.style.color = "blue";
        }
        onClick (fn) {
            this.pera.onclick = fn;
        }
        
    }

    let ObjPera1 = new Peragraph ('Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ea culpa dignissimos perspiciatis, illo repudiandae adipisci sequi reprehenderit magnam accusamus incidunt similique distinctio sint eius vitae nesciunt molestiae saepe quo quibusdam non quae libero quisquam dolor. Corrupti voluptates distinctio velit vitae commodi, odit autem? Sunt, nulla! Mollitia consequatur quis doloribus');

    ObjPera1.onClick (function () {
        console.log("text clicked...");
    })



    class NewPera extends Peragraph {

        constructor (content) {
            super (content);
            this.pera.style.color = "red";
        }

        onClick (fn) {
            this.pera.onclick = function () {
                this.pera.style.color = "yellow";
                this.pera.style.background = "black";
                this.pera.style.
                fn ();
            }.bind(this);
        }

        mouseOver (fn) {
            this.pera.onmouseover = function () {
                this.pera.style.fontSize = 20 + 'px';
                fn();
            }.bind(this);
            
        }

        mouseOut (fn) {
            this.pera.onmouseout = function () {
                this.pera.style.fontSize = 14 + 'px';
                fn();
            }.bind(this);
            
        }

    }

    let ObjPera2 = new NewPera ('Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ea culpa dignissimos perspiciatis, illo repudiandae adipisci sequi reprehenderit magnam accusamus incidunt similique distinctio sint eius vitae nesciunt molestiae saepe quo quibusdam non quae libero quisquam dolor. Corrupti voluptates distinctio velit vitae commodi, odit autem? Sunt, nulla! Mollitia consequatur quis doloribus');

    ObjPera2.onClick (function () {
        console.log("2nd text clicked...");
    })

    ObjPera2.mouseOver (function () {
        console.log("2nd text fired...");
    })

    ObjPera2.mouseOut (function () {
        console.log("2nd text released...");
    })

}

