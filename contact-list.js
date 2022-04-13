//*añadir un nuevo contacto a una lista
function addContact() {
  let operacion = "Y";
  while (operacion == "Y") {
    const newContact = {
      id: contadorId++,
      nombres: prompt("Introduce tu nombre"),
      apellido: prompt("Introduce tu apellido"),
      telefono: parseInt(prompt("Introduce tu telefono")),
      ubicaciones: [
        prompt("Introduce tu ciudad"),
        prompt("Introduce tu direccion"),
      ],
    };
    contactName.push(newContact);
    operacion = prompt("Quiere seguir ingresando usuarios? : Y, N");
  }
}
//borrar un contacto existente de la lista

function deleteContact() {
  alert("Borrar Contacto");
  const idBorrar = parseInt(prompt("Ingrese el id que quiera borrar"));
  for (let i = 0; i < contactName.length; i++) {
    if (contactName[i].id == idBorrar) {
      contactName.splice(i, 1);
    }
  }
}

//modificar un contacto
function modificarContacto() {
  alert("Modificar contacto");
  const modiContact = parseInt(prompt("Ingrese el id que quiere modificar"));
  for (let i = 0; i < contactName.length; i++) {
    if (contactName[i].id == modiContact) {
      (contactName[i].nombres = prompt("nombres", contactName[i].nombres)),
        (contactName[i].apellido = prompt("apellido", contactName[i].apellido)),
        (contactName[i].telefono = prompt("telefono", contactName[i].telefono)),
        (contactName[i].ubicaciones = [
          prompt("Direccion", contactName[i].ubicaciones[1]),
          prompt("Ciudad"),
          contactName[i].ubicaciones[0],
        ]);
    }
  }
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

addContact();

deleteContact();

modificarContacto();

// arreglo de ordenamiento
contactName.sort(function (a, b) {
  return a.apellido.localeCompare(b.apellido);
});
console.log(contactName);
