profileTitle = document.querySelector(".p-title");
editBtn1 = document.querySelector("#edit-btn1");
editBtn2 = document.querySelector("#edit-btn2");
editBtn3 = document.querySelector("#edit-btn3");
editBtn4 = document.querySelector("#edit-btn4");
editBtn5 = document.querySelector("#edit-btn5");
editBtn6 = document.querySelector("#edit-btn6");
editBtn7 = document.querySelector("#edit-btn7");
editBtn8 = document.querySelector("#edit-btn8");
editBtn9 = document.querySelector("#edit-btn9");
editBtn10 = document.querySelector("#edit-btn10");
saveBtn = document.querySelector("#save-btn");

saveBtn.addEventListener("click", function(e){
    e.preventDefault()
    editBtn1.removeAttribute("class", "hide");
    editBtn2.removeAttribute("class", "hide");
    editBtn3.removeAttribute("class", "hide");
    editBtn4.removeAttribute("class", "hide");
    editBtn5.removeAttribute("class", "hide");
    editBtn6.removeAttribute("class", "hide");
    editBtn7.removeAttribute("class", "hide");
    editBtn8.removeAttribute("class", "hide");
    editBtn9.removeAttribute("class", "hide");
    editBtn10.removeAttribute("class", "hide");
    profileTitle.style.display ="none";
    window.stop()
   
})

editBtn1.addEventListener("click", function(){
    saveBtn.removeAttribute("class", "hide");
})

