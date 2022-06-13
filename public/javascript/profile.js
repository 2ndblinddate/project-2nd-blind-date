document.addEventListener('DOMContentLoaded', () => {
    const profileTitle = document.querySelector(".p-title");
    const saveBtn = document.querySelector("#save-btn");

    const editButtons = [];
    const answerInputs = [];

    for (let i = 0; i <= 10; i++) {
        editButtons.push(document.querySelector(`#edit-btn${i + 1}`));
        answerInputs.push(document.querySelector(`#question-${i + 1}`));

        if (answerInputs[i].value.trim() === '') {
            profileTitle.removeAttribute("hidden");
        } else {
            editButtons[i].removeAttribute('hidden');
            answerInputs[i].setAttribute('disabled', '');
        }

        editButtons[i].addEventListener("click", () => {
            saveBtn.removeAttribute("hidden");
            answerInputs[i].removeAttribute('disabled');
        });
    }


    saveBtn.addEventListener("click", async (evt) => {
        evt.preventDefault();

        saveBtn.setAttribute('hidden', '');

        for (const [i, input] of answerInputs.entries()) {
            if (input.value.trim() !== '') {
                editButtons[i].removeAttribute('hidden');
                input.setAttribute('disabled', '');
            }
        }
        
        const id = document.querySelector("#userId").value.trim();
        
        const response = await fetch(`/api/users/${id}/updateAnswers`, {
            method: 'post',
            body: JSON.stringify(answerInputs.map((input) => input.value.trim())),
            headers: { 'Content-Type': 'application/json' }
        });

        if (response.ok) {
            document.location.replace('/myprofile');
        } else {
            alert("error");
        }
    });
});



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