var data = [
  {
    username: "thesaihan",
    fullname: "Sai Han",
    team: "ALL",
  },
  {
    username: "johndoe",
    fullname: "John Doe",
    team: "FE",
  },
];

var tbody = document.getElementById("tbody");

var usrInput = document.getElementById("memUsername");
var nameInput = document.getElementById("memName");
var teamSelect = document.getElementById("memTeam");
var addOrUpdateBtn = document.getElementById("addBtn");

const goAddOrUpdate = (event) => {
  event.preventDefault();
  const usrText = usrInput.value.trim();
  const nameText = nameInput.value.trim();
  const teamText = teamSelect.value.trim();
  if (usrText && nameText && teamText) {
    if (addOrUpdateBtn.value == "+ Update") {
      // UPDATE code here
      const oldMemInd = data.findIndex((mem) => mem.username === usrText);
      if (oldMemInd !== -1) {
        data.splice(oldMemInd, 1, {
          username: usrText,
          fullname: nameText,
          team: teamText,
        });
        displayData();
        usrInput.value = "";
        nameInput.value = "";
        teamSelect.value = "";
        addOrUpdateBtn.value = "+ Add";
        usrInput.removeAttribute("readonly");
      }
    } else {
      // ADD code here
      const oldMem = data.find((mem) => mem.username === usrText);
      if (oldMem) {
        alert("Member with username: " + usrText + " already exist!");
      } else {
        data.push({
          username: usrText,
          fullname: nameText,
          team: teamText,
        });
        displayData();
        usrInput.value = "";
        nameInput.value = "";
        teamSelect.value = "";
      }
    }
  } else {
    alert("Missing data");
  }
};

const extractSelectedUsername = (event) => {
  let btnClicked = null;
  if (event.target.nodeName === "I" || event.target.nodeName === "i") {
    btnClicked = event.target.parentElement;
  } else {
    btnClicked = event.target;
  }
  return btnClicked.getAttribute("mem-username");
};

const goEdit = (event) => {
  const selectedUsrname = extractSelectedUsername(event);
  const selectedMember = data.find((mem) => mem.username === selectedUsrname);
  usrInput.value = selectedMember.username;
  nameInput.value = selectedMember.fullname;
  teamSelect.value = selectedMember.team;
  addOrUpdateBtn.value = "+ Update";
  usrInput.setAttribute("readonly", "true");
};

const goDelete = (event) => {
  const selectedUsrname = extractSelectedUsername(event);
  if (
    confirm(
      "Are you sure you want to delete the member: " + selectedUsrname + "?"
    )
  ) {
    // delete is confirmed
    data = data.filter((mem) => mem.username !== selectedUsrname);
    displayData();
  }
};

const getRowHTML = (mem) => {
  return `
    <tr>
      <td>${mem.username}</td>
      <td>${mem.fullname}</td>
      <td>${mem.team}</td>
      <td>
        <div class="d-flex align-items-center">
          <button class="btn btn-sm btn-info mx-2" mem-username="${mem.username}" onclick="goEdit(event)">
            <i class="fa fa-edit"></i> &nbsp;Edit
          </button>
          <button class="btn btn-sm btn-danger mx-2" mem-username="${mem.username}" onclick="goDelete(event)">
            <i class="fa fa-trash-o"></i> &nbsp;Delete
          </button>
        </div>
      </td>
    </tr>
  `;
};

const displayData = () => {
  tbody.innerHTML = "";
  const dataHTML = data.map((mem) => getRowHTML(mem)).join("");
  tbody.innerHTML = dataHTML;
};

window.onload = () => {
  displayData();
};
