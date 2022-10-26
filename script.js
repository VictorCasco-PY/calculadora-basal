const CALCULAR = document.getElementById('btnCalcular');
const ERROR = document.getElementById('error');
const VOL = document.getElementById('vol');
const FLUJOMIN = document.getElementById('flujoMin');
const FLUJOMEDIO = document.getElementById('flujoMedio');


function calcVolumen(peso) {
    let volDiario;
    let supCorporal = 0;
    if (peso <= 10) {
        volDiario = peso * 100;
    }
    if (peso > 10 && peso <= 20) {
        volDiario = 1000 + (peso - 10) * 50;
    }
    if (peso > 20 && peso <= 30) {
        volDiario = 1500 + (peso - 20) * 20;
    }
    if (peso > 30) {
        supCorporal = (((peso * 4) + 7) / (Number(peso) + 90));
        console.log(supCorporal);
        volDiario = supCorporal * 1500;
    }
    return volDiario;
}

CALCULAR.addEventListener('click', () => {
    const DATO = document.getElementById('peso').value;
    //Validar peso
    if (DATO > 0 && DATO < 31) {
        ERROR.style.display = 'none';
        let vol = Math.round(calcVolumen(DATO));
        let mant = Math.round((vol / 24));
        let mantMedio = Math.round(mant * 1.5);
        VOL.innerHTML = 'Volumen diario: ' + vol + ' [cc/día]';
        FLUJOMIN.innerHTML = 'Flujo min: ' + mant + ' [cc/hr]';
        FLUJOMEDIO.innerHTML = 'Flujo min(x1.5): ' + mantMedio + '[cc/hr]';
        VOL.style.display = 'block';
        FLUJOMIN.style.display = 'block';
        FLUJOMEDIO.style.display = 'block';
    } else if (DATO > 30) {
        let vol = Math.round(calcVolumen(DATO));
        let mant = Math.round((vol / 24));
        VOL.innerHTML = 'Volumen diario: ' + vol + ' [cc/día]';
        FLUJOMIN.innerHTML = 'Flujo min: ' + mant + ' [cc/hr]';
        VOL.style.display = 'block';
        FLUJOMIN.style.display = 'block';
        FLUJOMEDIO.style.display = 'none';
    } else {
        ERROR.style.display = 'block';
        VOL.style.direction = 'none';
        FLUJOMIN.style.direction = 'none';
        FLUJOMEDIO.style.direction = 'none';
    }
})



