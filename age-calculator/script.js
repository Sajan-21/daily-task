{
    let date = new Date ();
    console.log(date);
    let currentYear =date.getFullYear();
    console.log(currentYear);
    let month = date.getMonth();
    let currentMonth = month+1;
    console.log(currentMonth);
    let currentDate = date.getDate();
    console.log(currentDate);

    let displayCurrentDate = document.getElementById('display-currentDate');
    displayCurrentDate.innerHTML = (`${currentDate} - ${currentMonth} - ${currentYear}`);


    let btn = document.getElementById('submit-btn').onclick = function () {


        let dob = document.getElementById('dob-input').value;
        console.log(dob);

        let select = dob.split('-');
        console.log(select);

        let dobYear = select[0];
        console.log(dobYear);
        let dobMonth = select[2];
        console.log(dobMonth);

        let age = currentYear-dobYear ;

        if(dobMonth>=currentMonth) {
            age = age-1;
            console.log(age);
        }else{
            console.log(age);
        }

        document.getElementById("date-id").style.display = "none";
        document.getElementById("input-label").style.display = "none";
        document.getElementById("submit-btn").style.display = "none";

        let agefromjs = document.getElementById('display-age');
        agefromjs.innerHTML = (`heiii... You are ${age} years old`);

    }

}