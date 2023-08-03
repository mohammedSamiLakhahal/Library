var Books_List = [];

var showBook = document.getElementById("showBook");

if (localStorage.getItem("Books_List") != null) {
    Books_List = JSON.parse(localStorage.getItem("Books_List"));
}

showBook.addEventListener("click", function () {
    SearchBooks();
})

function SearchBooks() {

    var Result = "";

    for (var i = 0; i < Books_List.length; i++) {
        Result +=
            ` <tr>
            <td>${Books_List[i].Name}</td>
            </tr > `
    }

    document.getElementById("tableBody").innerHTML = Result;
}