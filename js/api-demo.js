(() => {
  fetch("http://localhost:8080/account")
  .then(resp => resp.json())
  .then(data => {
    console.log(data);
    displayData(data);
  })
  .catch(err => console.log(err));
})();


var tbody = document.getElementById("tbody");

function displayData(data) {
  tbody.innerHTML = "";
  console.log("Display");
  data.forEach(mem => {
    tbody.appendChild(getRow(mem));
  });
}

function getRow(mem) {
  const row = document.createElement("tr");

  let col0 = document.createElement("td");
  col0.innerHTML = mem.id;
  row.appendChild(col0);

  let col1 = document.createElement("td");
  col1.innerHTML = mem.username;
  row.appendChild(col1);

  let col2 = document.createElement("td");
  col2.innerHTML = mem.name;
  row.appendChild(col2);

  let col3 = document.createElement("td");
  col3.innerHTML = mem.email;
  row.appendChild(col3);

  return row;
}

function addNew(){
  const newAcc = {
    "username": "shawnmendes",
    "name": "Shawn Mendes",
    "email": "shawn@gmail.com",
    "dob": "1998-08-08"
  };
  fetch("http://localhost:8080/account", {
    method: 'POST', 
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(newAcc)
  })
  .then(resp => resp.json())
  .then(data => {
    console.log(data);
  })
  .catch(err => console.log(err));
}