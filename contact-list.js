let contact = prompt("Introduce un contacto");

let contactName = [
  "David Cabrera",
  "Santiago Martinez",
  "Jose Gonzalez",
  "Colin Campbell",
];

addContact(contactName);

function addContact(contactName) {
  let newContact = contactName.push(contact);
}
alert(contactName);

let contactToDelete;
function borrarContacto(contactToDelete) {
  for (i = 0; i <= contactName.length - 1; i++) {
    if (contactName[i] == contactToDelete) {
      contactName.splice(i, 1);
    }
  }
  return contactName;
}

alert("Elimina Contacto");
alert(borrarContacto(prompt(contactToDelete)));

function printList() {
  const newPrint = console.log(contactName);
}
printList(contactName);
alert(contactName);
