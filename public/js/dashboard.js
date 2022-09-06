//let cardDeck = document.querySelector(".card-deck")
const query = {}


var filterBtn = document.querySelector("#filter-btn");
var dropDownInstu = document.querySelector("#show-filter");
var dropDownSubject = document.querySelector("#dept");
var dropDownCollab = document.querySelector("#collab");


function selectedInstu() {
    var instu = document.getElementById("instu").value;
    document.getElementById("demo").innerHTML = "You selected: " + instu;

}

function selectedDept() {
    var dept = document.getElementById("dept").value;
    document.getElementById("demo-2").innerHTML = "You selected: " + dept;

}

function selectedCollab() {
    var dept = document.getElementById("collab").value;
    document.getElementById("demo-3").innerHTML = "You selected: " + dept;

}


// filterBtn.addEventListener('click', function () {
//     console.log("Hello World");

//     dropDownInstu.className = "d-block";
//     if (dropDownInstu.style === "none") {
//         dropDownInstu.style.display = "block";
//     } else {
//         dropDownInstu.style.display = "none";
//     }
// });