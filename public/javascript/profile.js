const profileTitle = document.querySelector(".p-title");
const editBtn1 = document.querySelector("#edit-btn1");
const editBtn2 = document.querySelector("#edit-btn2");
const editBtn3 = document.querySelector("#edit-btn3");
const editBtn4 = document.querySelector("#edit-btn4");
const editBtn5 = document.querySelector("#edit-btn5");
const editBtn6 = document.querySelector("#edit-btn6");
const editBtn7 = document.querySelector("#edit-btn7");
const editBtn8 = document.querySelector("#edit-btn8");
const editBtn9 = document.querySelector("#edit-btn9");
const editBtn10 = document.querySelector("#edit-btn10");
const editBtn11 = document.querySelector("#edit-btn11");
const saveBtn = document.querySelector("#save-btn");

saveBtn.addEventListener("click", async (evt) => {

    evt.preventDefault();

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
    saveBtn.setAttribute("class", "hide");
    
    const id = document.querySelector("#userId").value.trim();

    
    const response = await fetch(`/api/users/${id}/updateAnswers`, {
        method: 'post',
        body: JSON.stringify([
            document.querySelector('#question-1').value.trim(),
            document.querySelector('#question-2').value.trim(),
            document.querySelector('#question-3').value.trim(),
            document.querySelector('#question-4').value.trim(),
            document.querySelector('#question-5').value.trim(),
            document.querySelector('#question-6').value.trim(),
            document.querySelector('#question-7').value.trim(),
            document.querySelector('#question-8').value.trim(),
            document.querySelector('#question-9').value.trim(),
            document.querySelector('#question-10').value.trim(),
            document.querySelector('#question-11').value.trim()
        ]),
        headers: { 'Content-Type': 'application/json' }
    });

    if (response.ok) {
        document.location.replace('/myprofile');
    } else {
        alert("error");
    }
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