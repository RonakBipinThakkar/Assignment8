/*eslint-env browser*/
var submitButton = document.getElementById("submit");

var employees = [
		["Sally Smith", "Quality Assurance", 3423],
		["Mark Martin", "VP Sales", 3346],
		["John Johnson", "Marketing", 3232],
		["Ronak Thakkar", "Technical Lead", 3428],
		["Rupesh Kshirsagar", "Associate Architect", 3429],
]

submitButton.addEventListener("click", function () {
	var employeeName = document.getElementById("name").value;
	var employeeTitle = document.getElementById("title").value;
	var employeeExtension = document.getElementById("extension").value;
	if(!employeeName) document.getElementById("errorName").innerHTML = "Enter valid employee name";
	else document.getElementById("errorName").innerHTML = "";
	if(!employeeTitle) document.getElementById("errorTitle").innerHTML = "Enter valid employee title";
	else document.getElementById("errorTitle").innerHTML = "";
	if(!employeeExtension) document.getElementById("errorExtension").innerHTML = "Enter valid employee extension";
	else document.getElementById("errorExtension").innerHTML = "";
	if (!(employeeName && employeeTitle && employeeExtension)) return;
	employees.push([employeeName, employeeTitle, employeeExtension]);
	loadEmployeeDetails();
});

function loadEmployeeDetails() {
	var empFormedHtml = ""
	for (var i = 0; i < employees.length; i++) {
		var thisEmployee = employees[i];
		empFormedHtml += '<tr><td>' + thisEmployee[0] + '</td><td>' + thisEmployee[1] + '</td><td>' + thisEmployee[2] + '</td><td><button class="deleteButton" onclick="deleteEmployee(' + i + ')">Delete</button></td></tr>';
	}
	document.querySelector("tbody").innerHTML = empFormedHtml;
	document.getElementById("employeeCount").innerHTML = employees.length;
}

function deleteEmployee(n) {
	employees.splice(n, 1);
	loadEmployeeDetails();
}

window.onload = function () {
	loadEmployeeDetails();
}