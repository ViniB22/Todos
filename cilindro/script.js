let res = document.getElementById('res')
let calculo = 0;

function calcula_volume(){
    let raio = Number(document.getElementById("raio").value)
    let altura = Number(document.getElementById("altura").value)

    calculo = raio * raio * altura * Math.PI
    
    emprimir()
}
function emprimir(){
    res.innerHTML = `O volume do cilíndro é ${calculo.toFixed(2)}`
}