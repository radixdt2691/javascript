const str = window.prompt("Enter String");
console.log(str);
const arr = str.split(' ');

for(var i=0;i<arr.length;i++){
    arr[i]=arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
}

const str2 = arr.join(" ");
console.log(str2);
$("div h2").append(str2);