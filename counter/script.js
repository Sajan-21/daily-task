{
    let num = 0;
    console.log(num);

    let numberZero = document.getElementById('display-num');
        numberZero.innerHTML = num;

    document.getElementById('btn-=').onclick = function () {
        num  = num-1;

        let numberZero = document.getElementById('display-num');
        numberZero.innerHTML = num;
    }

    document.getElementById('btn+=').onclick = function () {
        num  = num+1;

        let numberZero = document.getElementById('display-num');
        numberZero.innerHTML = num;
    }

    document.getElementById('btn-reset').onclick = function () {
        num  = 0;

        let numberZero = document.getElementById('display-num');
        numberZero.innerHTML = num;
    }
    
}
