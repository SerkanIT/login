let inputs = document.getElementsByClassName("user-input");
let passwords = document.getElementsByClassName("pass-input");
const rememberMeCheckbox = document.getElementById('remember-me');

function login(event) {
  event.preventDefault(); 
  const user = inputs[0].value; 
  const pass = passwords[0].value; 
  
  // Retrieve stored username and password from local storage
  const storedUser = localStorage.getItem('username');
  const storedPass = localStorage.getItem('password');

  // Check if the entered credentials match the stored ones
  if (user === storedUser && pass === storedPass) {
    // Redirect to index.html
    window.location.href = "index.html";
    
    // Store credentials in local storage if "Remember Me" is checked
    if (rememberMeCheckbox.checked) {
      localStorage.setItem('username', user);
      localStorage.setItem('password', pass);
    } else {
      // Clear local storage if "Remember Me" is unchecked
      localStorage.removeItem('username');
      localStorage.removeItem('password');
    }
  } else {
    console.log("Wrong username or password");
    alert("Wrong username or password");
  }
}

// Retrieve stored credentials and pre-fill the input fields (if any)
function prefillCredentials() {
  const storedUser = localStorage.getItem('username');
  const storedPass = localStorage.getItem('password');

  if (storedUser) {
    inputs[0].value = storedUser;
  }
  if (storedPass) {
    passwords[0].value = storedPass;
  }
}

// Call this function to pre-fill credentials on page load
prefillCredentials();

document.querySelector('.login-btn').addEventListener('click', login);
