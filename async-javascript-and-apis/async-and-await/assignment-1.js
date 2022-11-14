// rewrite code using async/await
function loadJson(url) {
  return fetch(url)
    .then(response => {
      if (response.status == 200) {
        return response.json();
      } else {
        throw new Error(response.status);
      }
    });
}

loadJson('https://javascript.info/no-such-user.json')
.catch(alert); // Error: 404

// rewritten 
async function loadJson(url) {
  let response = await fetch(url)

  if (response.status == 200) {
    let json = await response.json()
    return json
  }

  throw new Error(response.status)
}

loadJson('https://javascript.info/no-such-user.json')
  .catch(alert); // Error: 404

// rewrite the rethrow example using async/await
function demoGithubUser() {
  let name = prompt("Enter a name?", "iliakan");

  return loadJson(`https://api.github.com/users/${name}`)
    .then(user => {
      alert(`Full name: ${user.name}.`);
      return user;
    })
    .catch(err => {
      if (err instanceof HttpError && err.response.status == 404) {
        alert("No such user, please reenter.");
        return demoGithubUser();
      } else {
        throw err;
      }
    });
}

async function demoGithubUser() {
  let user;
  while (true) {
    let name = prompt("Enter a name?", "iliakan");

    try {
      user = await loadJson(`https://api.github.com/users/${name}`)
      break
    } catch(err) {
      if (err instanceof HttpError && err.response.status == 404) {
        alert('no user, please reenter')
      } else {
        throw err
      }
    }
  }
  alert(`full name: ${user.name}`)
  return user
}