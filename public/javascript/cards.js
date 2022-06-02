box1 = document.querySelector("#box-1");
box2 = document.querySelector("#box-2")
box3 = document.querySelector("#box-3")
box4 = document.querySelector("#box-4")
box5 = document.querySelector("#box-5")
box6 = document.querySelector("#box-6")
box7 = document.querySelector("#box-7")
//Users boxes
deleteBtn1 = document.querySelector("#delete-btn1");
deleteBtn2 = document.querySelector("#delete-btn2");
deleteBtn3 = document.querySelector("#delete-btn3");
deleteBtn4 = document.querySelector("#delete-btn4");
deleteBtn5 = document.querySelector("#delete-btn5");
deleteBtn6 = document.querySelector("#delete-btn6");
deleteBtn7 = document.querySelector("#delete-btn7");


deleteBtn1.addEventListener("click", function(){
    box1.style.display = "none"
})

deleteBtn2.addEventListener("click", function(){
    box2.style.display = "none"
})

deleteBtn3.addEventListener("click", function(){
    box3.style.display = "none"
})

deleteBtn4.addEventListener("click", function(){
    box4.style.display = "none"
})

deleteBtn5.addEventListener("click", function(){
    box5.style.display = "none"
})

deleteBtn6.addEventListener("click", function(){
    box6.style.display = "none"
})

deleteBtn7.addEventListener("click", function(){
    box7.style.display = "none"
})
