
var NameInput = document.getElementById("Name");
var CategoryInput = document.getElementById("Category");
var AuthorInput = document.getElementById("Author");
var PublisherInput = document.getElementById("Publisher");
var textarea_descInput = document.getElementById("textarea_desc");
var BorrowingInput = document.getElementById("Borrowing");
var PositionInput = document.getElementById("Position");
var PriceInput = document.getElementById("Price");
var QuantityInput = document.getElementById("Quantity");


var Books_List = [];
if (localStorage.getItem("Books_List") != null) {
    Books_List = JSON.parse(localStorage.getItem("Books_List"));
}


function ValidatName() {
    var regex = /^[A-Z][a-z]{3,15}$/;
    return regex.test(NameInput.value);
}

var btnAdd = document.getElementById("btnAdd");

btnAdd.addEventListener("click", function (Event_info) {
    AddBook();
    console.log("aaaaa");
})

function AddBook() {

    if (ValidatName()) {
        var Obj = {
            Name: NameInput.value,
            Category: CategoryInput.value,
            Author: AuthorInput.value,
            Publisher: PublisherInput.value,
            Overview: textarea_descInput.value,
            Position: PositionInput.value,
            Borrowing_Price: BorrowingInput.value,
            Price: PriceInput.value,
            Quantity: QuantityInput.value
        }

        Books_List.push(Obj);
        localStorage.setItem("Books_List", JSON.stringify(Books_List));
        Clear_Input();
        alert("The Book added Successfully ")
    }
    else alert("The Book Name invalid, please Enter first Character capital and name is greater than 5 character");
}

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