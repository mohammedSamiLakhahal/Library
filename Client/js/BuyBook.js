var Name = document.getElementById("Name");

var Addbtn = document.getElementById("Addbtn");
var Cart_list = [];




Addbtn.addEventListener("click", function () {
if(Name.value!="")
{
    Cart_list.push(Name.value);
    sessionStorage.setItem("Cart_list", JSON.stringify(Cart_list));
    alert("The book has been added Successfully")
}
else{
    alert("Please Enter Book Name ")
}
})

