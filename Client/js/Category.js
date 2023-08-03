var Books_List = [];

var showCategory = document.getElementById("showCategory");

if (localStorage.getItem("Books_List") != null) {
    Books_List = JSON.parse(localStorage.getItem("Books_List"));
}

showCategory.addEventListener("click", function () {
    SearchBooks();
})

function SearchBooks() {

    var Result = "";

    for (var i = 0; i < Books_List.length; i++) {
        Result +=
            ` <tr>
            <td>${Books_List[i].Category}</td>
            </tr > `
    }

    document.getElementById("tableBody").innerHTML = Result;
}