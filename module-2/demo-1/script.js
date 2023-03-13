var str = window.prompt("Enter String");

function cw(str){
    var res = str.match(/[aeiou]/gi);
    return res === null ? 0 : res.length;
}

$("div h2").append(cw(str));