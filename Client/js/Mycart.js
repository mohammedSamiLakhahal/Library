
var ShowData = document.getElementById("Show");

var Cart_list = [];

if (sessionStorage.getItem("Cart_list") != null) {
    Cart_list = JSON.parse(sessionStorage.getItem("Cart_list"));
}

ShowData.addEventListener("click", function () {
    Show();
})

function Show() {

    var Result = "";

    for (var i = 0; i < Cart_list.length; i++) {

        Result +=
            ` <tr>
                    <td>${Cart_list[i]}</td>
            </tr > `
    }

    document.getElementById("tableBody").innerHTML = Result;
}