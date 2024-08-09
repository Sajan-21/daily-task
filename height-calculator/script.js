
{
    document.getElementById('submit').onclick = function () {

        let distance = document.getElementById('number-input').value;
        let inputLengthType = document.getElementById('input-distance').value;
        let outputLengthType = document.getElementById('output-distance').value;

        console.log(distance);
        console.log(inputLengthType);
        console.log(outputLengthType);

        if(inputLengthType==="inch" && outputLengthType==="centimeter"){
            convertedDistance = distance * 2.54;
        }
        else if(inputLengthType==="inch" && outputLengthType==="meter"){
            convertedDistance = distance / 39.37;
        }
        else if(inputLengthType==="centimeter" && outputLengthType==="inch"){
            convertedDistance = distance / 2.54;
        }
        else if(inputLengthType==="centimeter" && outputLengthType==="meter"){
            convertedDistance = distance / 100;
        }
        else if(inputLengthType==="meter" && outputLengthType==="inch"){
            convertedDistance = distance * 39.37;
        }
        else if(inputLengthType==="meter" && outputLengthType==="centimeter"){
            convertedDistance = distance * 100;
        }

        let x = document.getElementById('answer');
        x.innerHTML = (`${distance} ${inputLengthType} : ${convertedDistance} ${outputLengthType}`);

        
    }
}