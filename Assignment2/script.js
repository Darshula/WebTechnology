if (document.getElementById('add-entry') != null) {
  const addEntryButton = document.getElementById('add-entry');
  const check = document.getElementById('added-check');

  window.addEventListener('DOMContentLoaded', () => { check.style.display = 'none'; });

  addEntryButton.addEventListener('click', (evt) => {
    evt.preventDefault();
    const newName = document.getElementById('fname').value;
    const newEmail = document.getElementById('mail').value;
    const newAddress = document.getElementById('address').value;

    let entries = JSON.parse(localStorage.getItem('users')) || [];

    const newEntry = {
      name: newName,
      email: newEmail,
      address: newAddress
    };

    entries.push(newEntry);

    localStorage.setItem('users', JSON.stringify(entries));

    check.style.display = 'inline';
    const timeoutId = setTimeout(() => { check.style.display = 'none'; }, 1000);
  });
}

if (document.getElementById('entryTable') != null) {
  window.addEventListener('DOMContentLoaded', () => {
    const entryTable = document.getElementById('entryTable');
    const entries = JSON.parse(localStorage.getItem('users'));

    if (entryTable != null) {
      let tbody = entryTable.getElementsByTagName("tbody")[0];

      for (let i = 0; i < entries.length; ++i) {
        let row = document.createElement('tr');
        let name = document.createElement("td");
        let email = document.createElement("td");
        let address = document.createElement("td");

        name.innerHTML = entries[i].name;
        email.innerHTML = entries[i].email;
        address.innerHTML = entries[i].address;

        row.appendChild(name);
        row.appendChild(email);
        row.appendChild(address);
        tbody.appendChild(row);
      }
    }
  });
}
