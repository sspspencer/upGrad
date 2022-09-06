var subjectInput = document.getElementById("subject-query");
var abstractInput = document.getElementById("abstract-input");
var radioCollabYesInput = document.getElementById("collab-query-yes");
var radioCollabNoInput = document.getElementById("collab-query-no");
var radioFinishedYesInput = document.getElementById("finished-query-yes");
var radioFinishedNoInput = document.getElementById("finished-query-no");


function revealResearch() {
    var x = document.getElementById("show-filter");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

function openProjectForm() {
    var x = document.getElementById("show-form-filter");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}
// filterBtn.addEventListener('click', function () {
//     console.log("Hello World");
//     dropDownInstu.className = "d-block";
// });