const matchBtn = document.querySelector(".match-btn:not(.is-matched)");

matchBtn?.addEventListener("click", async () => {
    matchBtn.style.color = "red";

    const id = document.querySelector("#userId").value.trim();
    const matched = document.querySelector("#matchId").value.trim();
        
    const response = await fetch('/api/matches/', {
        method: 'post',
        body: JSON.stringify({
            user_id: id,
            user_match: matched,
        }),
        headers: { 'Content-Type': 'application/json' }
    });

    if (!response.ok) {
        alert("error");
    }
}, { once: true });