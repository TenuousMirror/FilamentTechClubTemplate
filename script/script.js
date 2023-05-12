function changeColor() {
var currentcolor = document.getElementById("muffins").style.color;
var newcolor = selectNewColor (currentcolor);
document.getElementById("muffins").style.color = newcolor;
}


function selectNewColor(currentcolor) {
var newcolor = "";

if (currentcolor == "") {
newcolor = "purple";

} else if (currentcolor == "purple") {
newcolor = "green";

} else if (currentcolor == "green") {
    newcolor == "red";
} else if (currentcolor == "red") {
newcolor = "";
}
return newcolor;

}