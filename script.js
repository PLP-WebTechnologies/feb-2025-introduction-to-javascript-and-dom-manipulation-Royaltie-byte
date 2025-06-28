let addingbutton = document.getElementById("addbutton");
let myList = document.getElementById("first-list");
let count= 1;
//function to add a list item to a list.
addingbutton.addEventListener("click",function(){
    
    let newItem = document.createElement("li");
    newItem.textContent = "Item" + count;
    myList.appendChild(newItem);
    count ++;
    console.log("Item added: " + newItem.textContent);

});

//function to remove a list item in an unordered list.
let removingbutton = document.getElementById("removebutton");
removingbutton.addEventListener("click", function(){
    if(myList.lastChild){
        myList.removeChild(myList.lastChild);
    }else{
        alert("The list is already empty!");
    }
});

// code to change the  CSS styling of an element.
let boxbtn = document.getElementById("box-button");
let actualBox = document.getElementById("box");
boxbtn.addEventListener("click",function(){
    actualBox.classList.toggle("changeColor");
});

//code to change the text content dynamically.
let myParagraph = document.getElementById("actualText");
myParagraph.addEventListener("click",function(){
    myParagraph.textContent = "Congratulations! You have clicked the text successfully.";
    myParagraph.style.color = "blue";
    alert("You have clicked the text!👏👏👏");
});


