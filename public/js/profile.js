var projectName = document.getElementById("project-name");
var subjectInput = document.getElementById("subject-query");
var abstractInput = document.getElementById("abstract-input");
var radioCollabYesInput = document.getElementById("collab-query-yes");
var radioFinishedYesInput = document.getElementById("finished-query-yes");
var projectUrlInput = document.getElementById("project-url");

async function createProjects() {
    var project_name = projectName.value;
    var subject = subjectInput.value;
    var abstract = abstractInput.value;
    var radioCollabYesInputValue = radioCollabYesInput.value;
    var radioFinishedYesInputValue = radioFinishedYesInput.value;
    var project_url = projectUrlInput.value;

    if (radioCollabYesInputValue === "on") {
        var collab_status = true;
    }
    if (radioFinishedYesInputValue === "on") {
        var ongoing_status = true
    }
    const response = await fetch("/api/projects", {
        method: "POST",
        body: JSON.stringify({
            project_name,
            subject,
            abstract,
            collab_status,
            ongoing_status,
            project_url
        }),

        headers: { "Content-Type": "application/json" },
    });
    location.reload();
}

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

document.querySelector(".project-form").addEventListener('submit', createProjects);