var data = [
  {
    username: "thesaihan",
    name: "Sai Han",
    team: "ALL"
  },
  {
    username: "johndoe",
    name: "John Doe",
    team: "FE"
  }
];
var tbody = document.getElementById("tbody");
var memUsername = document.getElementById("memUsername");
var memName = document.getElementById("memName");
var memTeam = document.getElementById("memTeam");

function displayData() {
  tbody.innerHTML = "";
  console.log("Display");
  data.forEach(mem => {
    tbody.appendChild(getRow(mem));
  });
}

function getRow(mem) {
  const row = document.createElement("tr");

  let col1 = document.createElement("td");
  col1.innerHTML = mem.username;
  row.appendChild(col1);

  let col2 = document.createElement("td");
  col2.innerHTML = mem.name;
  row.appendChild(col2);

  let col3 = document.createElement("td");
  col3.innerHTML = mem.team;
  row.appendChild(col3);

  let col4 = document.createElement("td");
  // col4.innerHTML = mem.team;
  row.appendChild(col4);

  return row;
}

function goAdd(event){
  event.preventDefault();

  const oldMem = data.find(m => m.username === memUsername.value);
  if(oldMem) {
    oldMem.name = memName.value;
    oldMem.team = memTeam.value;
  } else {
    const mem = {
      username: memUsername.value,
      name: memName.value,
      team: memTeam.value,
    }
    data.push(mem);
  }
  displayData();
}

function goRemove(username){
  data = data.filter(m = m.username !== username);
  displayData();
}

displayData();