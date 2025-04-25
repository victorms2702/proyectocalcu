function convertirPrefijo() {
    const valor = parseFloat(document.getElementById("valorPrefijo").value);
    const de = document.getElementById("dePrefijo").value;
    const a = document.getElementById("aPrefijo").value;

    const prefijos = { 
        p: 1e-12, // pico
        n: 1e-9,  // nano
        u: 1e-6,  // micro
        m: 1e-3,  // mili
        1: 1      // unidad base
    };

    if (isNaN(valor)) {
        document.getElementById("resultadoPrefijo").textContent = "Por favor, ingresa un valor válido.";
        return;
    }

    if (!(de in prefijos) || !(a in prefijos)) {
        document.getElementById("resultadoPrefijo").textContent = "Conversión no soportada.";
        return;
    }

    const valorEnBase = valor * prefijos[de];
    const valorConvertido = valorEnBase / prefijos[a];

    document.getElementById("resultadoPrefijo").textContent = `Resultado: ${valorConvertido.toExponential(2)} ${a}`;

}

function convertir() {
    const valor = parseFloat(document.getElementById('valor').value);
    const unidadOrigen = document.getElementById('unidadOrigen').value;
    const unidadDestino = document.getElementById('unidadDestino').value;

    if (isNaN(valor)) {
        document.getElementById('resultado').innerText = 'Por favor, ingresa un valor válido.';
        return;
    }

    const conversiones = {
        km: {
            Hm: 10,
            dam: 100,
            m: 1000,
            dm: 10000,
            cm: 100000,
            mm: 1000000,
            ft: 3280.84,
            in: 39370.1,
        },
        Hm: {
            km: 0.1,
            dam: 10,
            m: 100,
            dm: 1000,
            cm: 10000,
            mm: 100000,
            ft: 328.084,
            in: 3937.01,
        },
        dam: {
            km: 0.01,
            Hm: 0.1,
            m: 10,
            dm: 100,
            cm: 1000,
            mm: 10000,
            ft: 32.8084,
            in: 393.701,
        },
        m: {
            km: 0.001,
            Hm: 0.01,
            dam: 0.1,
            dm: 10,
            cm: 100,
            mm: 1000,
            ft: 3.28084,
            in: 39.3701,
        },
        dm: {
            km: 0.0001,
            Hm: 0.001,
            dam: 0.01,
            m: 0.1,
            cm: 10,
            mm: 100,
            ft: 0.328084,
            in: 3.93701,
        },
        cm: {
            km: 0.00001,
            Hm: 0.0001,
            dam: 0.001,
            m: 0.01,
            dm: 0.1,
            mm: 10,
            ft: 0.0328084,
            in: 0.393701,
        },
        mm: {
            km: 0.000001,
            Hm: 0.00001,
            dam: 0.0001,
            m: 0.001,
            dm: 0.01,
            cm: 0.1,
            ft: 0.00328084,
            in: 0.0393701,
        },
        ft: {
            km: 0.0003048,
            Hm: 0.003048,
            dam: 0.03048,
            m: 0.3048,
            dm: 3.048,
            cm: 30.48,
            mm: 304.8,
            in: 12,
        },
        in: {
            km: 0.0000254,
            Hm: 0.000254,
            dam: 0.00254,
            m: 0.0254,
            dm: 0.254,
            cm: 2.54,
            mm: 25.4,
            ft: 0.0833333,
        },
    };

    if (conversiones[unidadOrigen] && conversiones[unidadOrigen][unidadDestino]) {
        const factor = conversiones[unidadOrigen][unidadDestino];
        const resultado = valor * factor;
        document.getElementById('resultado').innerText = `Resultado: ${resultado.toFixed(2)} ${unidadDestino}`;
    } else {
        document.getElementById('resultado').innerText = 'Conversión no soportada.';
    }
}

function limpiarprefijos() {
    document.getElementById("valorPrefijo").value = "";
    document.getElementById("dePrefijo").selectedIndex = 0;
    document.getElementById("aPrefijo").selectedIndex = 0;
    document.getElementById("resultadoPrefijo").textContent = "";
}

function limpiarCamposCamp() {
    document.getElementById("valor").value = "";
    document.getElementById("unidadOrigen").selectedIndex = 0;
    document.getElementById("unidadDestino").selectedIndex = 0;
    document.getElementById("resultado").textContent = "";
}



