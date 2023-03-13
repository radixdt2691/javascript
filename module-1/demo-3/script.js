var date = new Date();
var datesrt = date.getDate() + "/" + "0" + (date.getMonth()+1) + "/" + date.getFullYear();

$(".maindiv h2").append(datesrt);