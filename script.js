//assign answer element to a variable
var answer = document.getElementById("answer");

//get the month value
const m = new Date();
let month = m.getMonth(); //NOTE: 0 = January, 1 = February, etc

//if month value is 1 (February) change answer to yes
if(month == 1){
    answer.innerHTML = "Yes";
}else{
    answer.innerHTML = "No";
}