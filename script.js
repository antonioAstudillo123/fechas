function obtenerDiasEntreRango(fechaInicio, fechaFin) {
    const dias = [];
    let inicio = new Date(fechaInicio);
    const fin = new Date(fechaFin);

    while (inicio <= fin) 
    {

        inicio.setDate(inicio.getDate() + 1);


        if(inicio.getDay() === 0){
            console.log(inicio.toDateString());
        }
         // Incrementamos al siguiente día
    }

    return dias;
}

const fechaInicio = "2024-11-18";
const fechaFin = "2024-12-02";

const dias = obtenerDiasEntreRango(fechaInicio, fechaFin);

// Mostramos los días en formato legible
dias.forEach(dia => console.log(dia.toDateString()));