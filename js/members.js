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
var addBtn = document.getElementById("addBtn");

function displayData() {
  tbody.innerHTML = "";
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
  col4.innerHTML = `
  <button class="btn btn-sm mx-3 btn-danger float-right" onclick="goDelete(event)"><i class="fa fa-trash"></i></button>
  <button class="btn btn-sm mx-3 btn-outline-primary float-right" onclick="goEdit(event)"><i class="fa fa-pencil"></i></button>
  `;
  row.appendChild(col4);

  return row;
}

function goAdd(event){
  event.preventDefault();

  if(memName.value && memUsername && memTeam.value && !memUsername.value.includes(" ")){
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
    memUsername.value = "";
    memName.value = "";
    displayData();
  } else alert("Invalid inputs");
  addBtn.value = "+ Add";
}

function goEdit(event){
  let selectedRow = event.target.parentNode.parentNode;
  if(event.target.nodeName === "I")
    selectedRow = selectedRow.parentNode;
  const ind = selectedRow.rowIndex - 1;
  const oldMem = data[ind];
  memUsername.value = oldMem.username;
  memName.value = oldMem.name;
  memTeam.value = oldMem.team;
  addBtn.value = "Edit";
}

function goDelete(event){
  if(confirm("Are you sure you want to delete?")){
    let selectedRow = event.target.parentNode.parentNode;
    if(event.target.nodeName === "I")
      selectedRow = selectedRow.parentNode;
    const ind = selectedRow.rowIndex - 1;
    data.splice(ind, 1);
    displayData();
  }
}

displayData();