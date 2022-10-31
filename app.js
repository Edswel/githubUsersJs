// Instantiate Github class
const github = new Github;
// Instantiate UI class
const ui = new UI;
// Target UI element
const searchUser = document.getElementById('searchUser');
// Listen for inputs
searchUser.addEventListener('keyup', (e) => {
  const userText = e.target.value;
  if (userText !== '') {
    github.getUser(userText)
      .then(data => {
        if (data.profile.message === 'Not Found') {
          // Show alert for user not found
          ui.showAlert('User not found.', 'alert alert-danger');
        } else {
          // Show user
          ui.showProfile(data.profile);
        }
      });
  } else {
    ui.clearProfile();
  }
});