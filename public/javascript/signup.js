
console.log('connected');
async function signupFormHandler(event) {
    event.preventDefault();
  console.log('in the function');
    
    const email = document.querySelector('#email').value.trim();
    const password = document.querySelector('#password').value.trim();
    //const confirmPass =  document.querySelector('#confirm-password').value.trim();
    if (email && password ) {
      const response = await fetch('/api/users', {
        method: 'post',
        body: JSON.stringify({
          email,
          password,
        
        }),
        headers: { 'Content-Type': 'application/json' }
      });
  
      if (response.ok) {
        document.location.replace('/');
      } else {
        alert(response.statusText);
      }
    }
  }
  document.querySelector('.signup-form').addEventListener('submit', signupFormHandler);