//task-1

{
    let str='';

    for(let i=1; i<=5; i++){
        for(let j=5; j>=i; j--){
            str=str+" *";
        }
        str=str+"\n";
    }

    console.log(str);
}
console.log('\n\n\n');

//task-2

{
    let str='';

    for(let i=1; i<=5; i++){
        for(let j=1; j<=i; j++){
            str=str+j;
        }
        str=str+'\n';
    }
    console.log(str);
}
console.log('\n\n\n');

//task-3

{
    for(let i=1; i<=10; i++){
        console.log(i);
    }
}
console.log('\n\n\n');

//task-4

{
    let sum=0;

    for(let i=1; i<=10; i++){
        sum=sum+i;
    }
    console.log(sum);
}
console.log('\n\n\n');

//task-5

{
    for(let i=1; i<=20; i++){
        if(i%2==0){
            console.log(i);
        }
    }
}
console.log('\n\n\n');

//task-6

{
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