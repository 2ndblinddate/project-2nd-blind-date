
document.querySelector("#proceed-btn").addEventListener("click", async (evt) => {
    evt.preventDefault();

    const username = document.querySelector('#username').value.trim();
    const age = document.querySelector('#age').value.trim();
    const gender = document.querySelector('#gender').value.trim();
    const sexual_orientation = document.querySelector('#sexOrientation').value.trim();
    const id = document.querySelector("#userId").value.trim();

    if (username && age && gender && sexual_orientation) {
      const response = await fetch(`/api/users/${id}/updateProfile`, {
        method: 'post',
        body: JSON.stringify({
          username,
          age,
          gender,
          sexual_orientation,
        }),
        headers: { 'Content-Type': 'application/json' }
      });
  
      if (response.ok) {
        document.location.replace('/myprofile');
      } else {
        alert("error");
      }
    }
})