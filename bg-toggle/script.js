{
    let count = 0;
    let num = 0;
    let textColor = ["white","black"];
    let color = ["black","white"];

    document.getElementById('toggle').onclick = function () {
        console.log(count);

        document.body.style.background = color[count];
        document.getElementById('text').style.color = textColor[num];
        count = (count+1) % color.length;
        num = (num+1) % textColor.length;
        
    }
}