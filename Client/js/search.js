var Books_List = [];

var Books_List = [
    {
        Name: "NameofBook",
        Category: "CategoryofBook",
        Author: "AuthorofBook",
        Publisher: "PublisherBook",
        Overview: "OverviewBook",
        Position: "PositionBook",
        Borrowing_Price: "Borrowing Price",
        Price: "PriceofBook",
        Quantity: "Quantity "
    },
    {
        Name: "NameofBook",
        Category: "CategoryofBook",
        Author: "AuthorofBook",
        Publisher: "PublisherBook",
        Overview: "OverviewBook",
        Position: "PositionBook",
        Borrowing_Price: "Borrowing Price",
        Price: "PriceofBook",
        Quantity: "Quantity "
    }, {
        Name: "gggggg",
        Category: "CategoryofBook",
        Author: "AuthorofBook",
        Publisher: "PublisherBook",
        Overview: "OverviewBook",
        Position: "PositionBook",
        Borrowing_Price: "Borrowing Price",
        Price: "PriceofBook",
        Quantity: "Quantity "
    },
    {
        Name: "NameofBook",
        Category: "CategoryofBook",
        Author: "AuthorofBook",
        Publisher: "PublisherBook",
        Overview: "OverviewBook",
        Position: "PositionBook",
        Borrowing_Price: "Borrowing Price",
        Price: "PriceofBook",
        Quantity: "Quantity "
    }

];


if (localStorage.getItem("Books_List") != null) {
    Books_List = JSON.parse(localStorage.getItem("Books_List"));
}



var searchBtn = document.getElementById("searchBtn");

searchBtn.addEventListener("click", function (Event_info) {
    SearchBooks(document.getElementById("Name").value)
    console.log("aaaaa");
})


function SearchBooks(nameOfBook) {

    var Result = "";

    for (var i = 0; i < Books_List.length; i++) {

        if (Books_List[i].Name.toLowerCase().includes(nameOfBook.toLowerCase())) {
            Result +=
                ` <tr>
                    <td>${Books_List[i].Name}</td>
                    <td>${Books_List[i].Category}</td>
                    <td>${Books_List[i].Author}</td>
                    <td>${Books_List[i].Price}</td >
                    <td>${Books_List[i].Borrowing_Price}</td >
            </tr > `
        }
    }

    document.getElementById("tableBody").innerHTML = Result;
}




