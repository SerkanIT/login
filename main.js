async function getpromise() {
    try {
      let response = await fetch("https://jsonplaceholder.typicode.com/users");
      let users = await response.json();
      let list = document.querySelector(".list");
  
      function displayUsers(users) {
        list.innerHTML = ""; 
        users.forEach((user) => {
          let card = `
                    <div class="card">
                        <h3>${user.name}</h3>
                        <p><strong>Username:</strong> ${user.username}</p>
                        <p><strong>Email:</strong> ${user.email}</p>
                        <p><strong>City:</strong> ${user.address.city}</p>
                        <p><strong>Street:</strong> ${user.address.street}, ${user.address.suite}</p>
                        <p><strong>Zipcode:</strong> ${user.address.zipcode}</p>
                        <p><strong>Phone:</strong> ${user.phone}</p>
                    </div>
                `;
          list.innerHTML += card;
        });
      }
  
      displayUsers(users);
  
      let filterInput = document.getElementById("filterInput");
  
      filterInput.addEventListener("input", function () {
        let searchTerm = filterInput.value.toLowerCase();
  
        let filteredUsers = users.filter((user) => {
          return user.name.toLowerCase().includes(searchTerm);
        });
  
        displayUsers(filteredUsers);
      });
    } catch (error) {
      console.error("Error founded", error);
    }
  }
  
getpromise()
  