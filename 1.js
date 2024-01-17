let input= document.getElementById("inp");
let text=document.querySelector(".text");

function Add(){
    if(input.value == ""){
        alert("Please Enter the Text")
    }
    else{
        let Element= document.createElement("ul");
         Element.innerHTML=`${input.value} <i class="fa-solid fa-trash-can">Delete</i>`;
        text.appendChild(Element);
        input.value="";
        Element.querySelector("i").addEventListener("click" , remove);
        function remove() {
            Element.remove();
        }
    }
}