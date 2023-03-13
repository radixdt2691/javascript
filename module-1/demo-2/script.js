var fname = window.prompt("Enter First Name:- ");
var lname = window.prompt("Enter Last Name:- ");
console.log(fname,lname);
var markup = "<tr><td>"+fname+"</td><td>"+lname+"</td></tr>";

$("table tbody").append(markup);