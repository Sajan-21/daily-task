

let btn = document.getElementById('btn').onclick = function () {
    let input = document.getElementById('input-box').value;
    console.log(input);

    let regexpdate = /^\d{1,2}-\d{1,2}-\d{4}/i;
    let result = regexpdate.test(input);

    if(result===true){
        console.log("good job");
        let x = document.getElementById('output');
        x.style.color = "green";
        x.innerHTML = "date valid succesfully"
    }
    else{
        console.log("enter valid date!!!!!");
        let x = document.getElementById('output');
        x.style.color = "red";
        x.innerHTML = ("enter valid date !!!")
    }

}
