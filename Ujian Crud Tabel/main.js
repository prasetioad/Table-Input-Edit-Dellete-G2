var selectedRow = null

function onFormSubmit() {
    var formData = readFormData();
    if (selectedRow == null)
        insertNewRecord(formData);
    else
        updateRecord(formData);

    resetForm();

}

function readFormData() {
    var formData = {};
    formData["nama"] = document.getElementById("nama").value;
    formData["asal"] = document.getElementById("asal").value;
    formData["umur"] = document.getElementById("umur").value;
    return formData;
}

function insertNewRecord(data) {
    var table = document.getElementById("employeeList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.nama;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.asal;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.umur;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = `<a onClick="onEdit(this)">Edit</a>
                       <a onClick="onDelete(this)">Delete</a>`;
}
function resetForm() {
    document.getElementById("nama").value = "";
    document.getElementById("asal").value = "";
    document.getElementById("umur").value = "";
    selectedRow = null;
}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("nama").value = selectedRow.cells[1].innerHTML;
    document.getElementById("asal").value = selectedRow.cells[2].innerHTML;
    document.getElementById("umur").value = selectedRow.cells[3].innerHTML;
}
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.nama;
    selectedRow.cells[1].innerHTML = formData.asal;
    selectedRow.cells[2].innerHTML = formData.umur;
}
function onDelete(td) {

    row = td.parentElement.parentElement;
    document.getElementById("employeeList").deleteRow(row.rowIndex);
    resetForm();
}

function myFunction() {

    var ketikan = document.getElementById("ketikan");
    var filter = ketikan.value.toUpperCase();
    var table = document.getElementById("employeeList");
    var tr = table.getElementsByTagName("tr")
    var i
    var td
    var txtValue

    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[0];
        if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }

}

var addNumeration = function (cl) {
    var table = document.querySelector('table.' + cl)
    var trs = table.querySelectorAll('tr')
    var counter = 1

    Array.prototype.forEach.call(trs, function (x, i) {
        var firstChild = x.children[0]
        if (firstChild.tagName === 'TD') {
            var cell = document.createElement('td')
            cell.textContent = counter++
            x.insertBefore(cell, firstChild)
        } else {
            firstChild.setAttribute('colspan', 1)
        }
    })
}

addNumeration("table")