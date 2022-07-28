//Caso 'Tradicional'
let suscripcion = " ";
if (suscripcion == "Free") {
  console.log("Solo puedes tomar los cursos gratis");
}
if (suscripcion == "Basic") {
  console.log("Puedes tomar casi todos lo cursos durante un mes");
}
if (suscripcion == "ExpertDuo") {
  console.log("Tu y alguien mas puede tomar todos los cursos");
}

function validar(suscripcion) {
  if (suscripcion == "Free") {
    console.log("Solo puedes tomar los cursos gratis");
    return;
  }
  if (suscripcion == "Basic") {
    console.log("Puedes tomar casi todos lo cursos durante un mes");
    return;
  }
  if (suscripcion == "ExpertDuo") {
    console.log("Tu y alguien mas puede tomar todos los cursos");
    return;
  }
  console.warn("Eres pobre");
}
validar(suscripcion);

suscripcion = {
  tipo: "Expert",
  beneficios: "",
  pago: 3000,
};

const suscripciones = {
  free: "Solo puedes tomar los cursos gratis",
  basic: "Puedes tomar casi todos lo cursos durante un mes",
  expert: "Tu y alguien mas puede tomar todos los cursos",
};
function validar(params) {
  if (suscripciones[params]) {
    console.log(suscripciones[params]);
    return;
  }
  console.warn('Esa suscripcion no existe');
}
validar("exp");
