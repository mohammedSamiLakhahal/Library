
var OldNameInput = document.getElementById("OldName");
var NameInput = document.getElementById("Name");
var CategoryInput = document.getElementById("Category");
var AuthorInput = document.getElementById("Author");
var PublisherInput = document.getElementById("Publisher");
var textarea_descInput = document.getElementById("textarea_desc");
var BorrowingInput = document.getElementById("Borrowing");
var PositionInput = document.getElementById("Position");
var PriceInput = document.getElementById("Price");
var QuantityInput = document.getElementById("Quantity");
var searchbtn = document.getElementById("searchbtn");

var modifybtn = document.getElementById("modifybtn");


var Books_List = [];

if (localStorage.getItem("Books_List") != null) {
    Books_List = JSON.parse(localStorage.getItem("Books_List"));
}


searchbtn.addEventListener("click", function (Event_info) {
    searchBook();
})


var Index = -1;
var Check = false;

function searchBook() {

    var wordvalue = document.getElementById("OldName").value;

    for (var i = 0; i < Books_List.length; i++) {

        if (Books_List[i].Name.toLowerCase().includes(wordvalue.toLowerCase()) == true) {

            NameInput.setAttribute('value', Books_List[i].Name);

            CategoryInput.value = Books_List[i].Category;
            AuthorInput.value = Books_List[i].Author;
            PublisherInput.value = Books_List[i].Publisher;
            PositionInput.value = Books_List[i].Position;
            BorrowingInput.value = Books_List[i].Borrowing_Price;
            PriceInput.value = Books_List[i].Price;
            QuantityInput.value = Books_List[i].Quantity;

            Check = true;
            break;
        }
    }
}
modifybtn.addEventListener("click", function () {
    Modify();
})

function Modify() {

    if (Check) {
        Books_List[Index].Category = CategoryInput.value;
        Books_List[Index].Author = AuthorInput.value;
        Books_List[Index].Publisher = PublisherInput.value;
        Books_List[Index].Overview = textarea_descInput.value;
        Books_List[Index].Position = PositionInput.value;
        Books_List[Index].Borrowing_Price = BorrowingInput.value;
        Books_List[Index].Price = PriceInput.value;
        Books_List[Index].Quantity = QuantityInput.value;

        localStorage.setItem("Books_List", JSON.stringify(Books_List));
        console.log("11111111111111");
        Clear_Input()
    }
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

