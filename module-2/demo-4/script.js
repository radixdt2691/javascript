var v = document.getElementById("val").value;
console.log(v);

function fun(){
    var va = document.getElementById("val");
    document.getElementById("val").value = "On";
    va.classList.add("in-css");
}