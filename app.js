// Instantiate Github class
const github = new Github;
// Target UI element
const searchUser = document.getElementById('searchUser');
// Listen for inputs
searchUser.addEventListener('keyup', (e) => {
  const userText = e.target.value;
  if (userText !== '') {
    github.getUser(userText)
      .then(data => {

      });
  }
});