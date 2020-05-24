(() => {
  fetch("http://localhost:8080/account")
  .then(resp => resp.json())
  .then(data => {
    console.log(data);
  })
  .catch(err => console.log(err));
})();