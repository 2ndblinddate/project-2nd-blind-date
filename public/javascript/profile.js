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
editBtn11 = document.querySelector("#edit-btn11");
saveBtn = document.querySelector("#save-btn");

saveBtn.addEventListener("click", function(){
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
    editBtn11.removeAttribute("class", "hide");
    profileTitle.style.display ="none";
    saveBtn.setAttribute("class", "hide")
   
})

editBtn1.addEventListener("click", function(){
    saveBtn.removeAttribute("class", "hide");
    saveBtn.style.padding = "6px 40px";
    saveBtn.style.backgroundImage = "linear-gradient(to right, #eb2249, #f45c43)";
    saveBtn.style.fontSize = "15px";
    saveBtn.style.borderRadius = "20px";
    saveBtn.style.color = "#fff";
    saveBtn.style.fontFamily = "'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif";
    saveBtn.style.textTransform = "uppercase";
    saveBtn.style.letterSpacing = "5px";
    saveBtn.style.cursor = "pointer";
   
})


//padding: 6px 40px;
//font-size: 15px;
//letter-spacing: 5px;
//cursor: pointer;
//border: none;
//border-radius: 20px;
//color: #fff;
//font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
//text-transform: uppercase;
//background: linear-gradient(to right, #eb2249, #f45c43);