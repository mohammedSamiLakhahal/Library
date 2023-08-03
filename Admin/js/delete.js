
var Books_List = [];

var OldNameInput = document.getElementById("OldName");
var NameInput = document.getElementById("Name");
var CategoryInput = document.getElementById("Category");
var AuthorInput = document.getElementById("Author");
var PublisherInput = document.getElementById("Publisher");
var textarea_descInput = document.getElementById("overview");
var BorrowingInput = document.getElementById("Borrowing");
var PositionInput = document.getElementById("Position");
var PriceInput = document.getElementById("Price");
var QuantityInput = document.getElementById("Quantity");

var searchbtn = document.getElementById("searchbtn");

if (localStorage.getItem("Books_List") != null) {
    Books_List = JSON.parse(localStorage.getItem("Books_List"));
}

searchbtn.addEventListener("click", function () {
    SearchBooks(document.getElementById("OldName").value);
})

var index = -1;

function SearchBooks(nameOfBook) {

    var Result = "";

    for (var i = 0; i < Books_List.length; i++) {

        if (Books_List[i].Name.toLowerCase().includes(nameOfBook.toLowerCase())) {

            NameInput.value = Books_List[i].Name;
            CategoryInput.value = Books_List[i].Category;
            AuthorInput.value = Books_List[i].Author;
            PublisherInput.value = Books_List[i].Publisher;
            textarea_descInput.value = Books_List[i].Overview;
            PositionInput.value = Books_List[i].Position;
            BorrowingInput.value = Books_List[i].Borrowing_Price;
            PriceInput.value = Books_List[i].Price;
            QuantityInput.value = Books_List[i].Quantity;

            index = i;
        }
    }

}

var deletebtn = document.getElementById("deletebtn");

deletebtn.addEventListener("click", function () {

    Books_List.splice(index, 1);

    localStorage.setItem("Books_List", JSON.stringify(Books_List));
    Clear_Input();
})


function Clear_Input() {
    NameInput.value = '';
    CategoryInput.value = '';
    AuthorInput.value = '';
    PublisherInput.value = '';
    textarea_descInput.value = '';
    PositionInput.value = '';
    BorrowingInput.value = '';
    PriceInput.value = '';
    QuantityInput.value = '';
}