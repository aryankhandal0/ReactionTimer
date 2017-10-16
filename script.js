/**
 * Created by ak on 14/10/17.
 */
var besttime=9999999999999999999999999999999999999;
var start = new Date().getTime();
colors = ["red","black","green","blue","yellow"];
var color;
function destColor() {
    color = Math.floor(Math.random() * 5);
    document.getElementById("display").innerHTML = "You have to select the color " + colors[color];
}
destColor();
function shapeAppear(){
    //var width = (Math.random()*200) + 100;
    //document.getElementById("shape").style.width=width;
    //document.getElementById("shape").style.height=width;
    document.getElementById("shape").style.display="block";
    var color2 = Math.floor(Math.random()*5);
    document.getElementById("shape").style.backgroundColor=colors[color2].toUpperCase();
    if(colors[color2]==colors[color]){
        start = new Date().getTime();
    } else {
        changeAfterDelay();
    }
}

function changeAfterDelay() {

    setTimeout(shapeAppear, Math.random() * 2000);

}
changeAfterDelay();
document.getElementById("shape").onclick = function(){
    if(document.getElementById("shape").style.backgroundColor==colors[color]){
        var end = new Date().getTime();
        var tt = end-start;
        document.getElementById("timeTaken").innerHTML = (tt/1000)+" seconds";
        if(tt/1000<besttime){
            besttime=tt/1000;
        }
        document.getElementById("besttime").innerHTML = besttime+" seconds";
        destColor();
        changeAfterDelay();
    } else {
        alert("Wrong Choice");
        destColor();
    }
};
