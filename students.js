
const formulario = document.getElementById("formulario");
const numeroControl = document.getElementById("numeroControl");
const nombre = document.getElementById("nombre");
const carrera = document.getElementById("carrera");
const lista = document.getElementById("lista");



let alumnos = JSON.parse(localStorage.getItem("alumnos")) || [];



mostrarAlumnos();



formulario.addEventListener("submit", function (evento) {

    
    evento.preventDefault();

    
    const alumno = {
        numeroControl: numeroControl.value,
        nombre: nombre.value,
        carrera: carrera.value
    };

    
    alumnos.push(alumno);

    
    localStorage.setItem(
        "alumnos",
        JSON.stringify(alumnos)
    );

    
    mostrarAlumnos();


    formulario.reset();

});



function mostrarAlumnos() {

    lista.innerHTML = "";

    alumnos.forEach(function (alumno) {

        const elemento = document.createElement("div");

        elemento.classList.add("alumno");

        elemento.innerHTML = `
            <strong>${alumno.numeroControl}</strong>
            <p>${alumno.nombre}</p>
            <p>${alumno.carrera}</p>
        `;

        lista.appendChild(elemento);

    });

}
