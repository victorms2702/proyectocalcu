function calcularOhm() {
    const V = parseFloat(document.getElementById('voltaje').value);
    const I = parseFloat(document.getElementById('corriente').value);
    const R = parseFloat(document.getElementById('resistencia').value);
    let resultado = '';

    if (isNaN(V) && !isNaN(I) && !isNaN(R)) { 
        resultado = `Voltaje = ${I * R} V`;
    } else if (!isNaN(V) && isNaN(I) && !isNaN(R)) {
        resultado = `Corriente = ${(V / R).toFixed(2)} A`;
    } else if (!isNaN(V) && !isNaN(I) && isNaN(R)) {
        resultado = `Resistencia = ${(V / I).toFixed(2)} Ω`;
    } else {
        resultado = 'Por favor, deja solo un campo vacío.';
    }

    document.getElementById('resultadoOhm').textContent = resultado;
}

function calcularCoulomb() {
    const q1 = parseFloat(document.getElementById('q1').value);
    const q2 = parseFloat(document.getElementById('q2').value);
    const r = parseFloat(document.getElementById('distancia').value);
    const k = 8.99e9;
    let resultado = '';

    if (!isNaN(q1) && !isNaN(q2) && !isNaN(r) && r !== 0) {
        const F = k * Math.abs(q1 * q2) / (r * r);
        resultado = `Fuerza = ${F.toFixed(2)} N`;
    } else {
        resultado = 'Por favor, ingresa valores válidos y distintos de cero.';
    }

    document.getElementById('resultadoCoulomb').textContent = resultado;
}

function calcularCampo() {
    const q = parseFloat(document.getElementById('cargaCampo').value);
    const r = parseFloat(document.getElementById('distanciaCampo').value);
    const k = 8.99e9;

    if (isNaN(q) || isNaN(r) || r === 0) {
        document.getElementById('resultadoCampo').textContent = "Por favor ingresa valores válidos (r ≠ 0)";
        return;
    }

    const E = k * Math.abs(q) / (r * r);
    document.getElementById('resultadoCampo').textContent = `Campo Eléctrico = ${E.toFixed(2)} N/C`;
}

function limpiarCamposOhm() {
    document.getElementById('voltaje').value = '';
    document.getElementById('corriente').value = '';
    document.getElementById('resistencia').value = '';
    document.getElementById('resultadoOhm').textContent = '';
}

function limpiarCamposCoulomb() {
    document.getElementById('q1').value = '';
    document.getElementById('q2').value = '';
    document.getElementById('distancia').value = '';
    document.getElementById('resultadoCoulomb').textContent = '';
}

function limpiarCamposCampo() {
    document.getElementById('cargaCampo').value = '';
    document.getElementById('distanciaCampo').value = '';
    document.getElementById('resultadoCampo').textContent = '';
    
}

