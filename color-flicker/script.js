{
    let count = 0;
    let color = ["green","blue","red"];

    document.getElementById('text').onclick = function () {
        
        document.getElementById('text').style.color = "white";

        console.log(count);

        document.body.style.background = color[count];
        count = (count+1) % color.length;
        
    }
}