let res = document.getElementById('res')
let calculo = 0;

function calcula_volume(){
    let comp = Number(document.getElementById("comp").value)
    let larg = Number(document.getElementById("larg").value)
    let altura = Number(document.getElementById("altura").value)

    calculo = comp * larg * altura
    
    emprimir()
}
function emprimir(){
    res.innerHTML = `O volume do paralelepípedo é ${calculo}`
}