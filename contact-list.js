//*añadir un nuevo contacto a una lista
function addContact() {
  const newContact = {
    id: contadorId++,
    nombres: prompt("Introduce tu nombre"),
    apellido: prompt("Introduce tu apellido"),
    telefono: prompt("Introduce tu telefono"),
    ubicaciones: [
      prompt("Introduce tu ciudad"),
      prompt("Introduce tu direccion"),
    ],
  };
  contactName.push(newContact);
}
//ejecucion empieza aqui pa abajo
let contadorId = 1;
let contactName = [
  {
    id: contadorId++,
    nombres: "Tomas",
    apellido: "Gomez",
    telefono: 320,
    ubicaciones: ["Bogota", "Calle 100"],
  },
  {
    id: contadorId++,
    nombres: "Carol",
    apellido: "Garcia",
    telefono: 315,
    ubicaciones: ["Bogota", "Calle 94"],
  },
];

console.log(contactName);
addContact();
console.log(contactName);

//borrar un contacto existente de la lista
alert("Borrar Contacto");
const deleteContact = (function () {
  const numeroId = prompt("Introducir id");

  contactName = contactName.filter((contact) => {
    contact.id != numeroId;
  });
})();
