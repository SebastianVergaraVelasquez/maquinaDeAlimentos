// Este problema apareció en el certamen recuperativo 1 del segundo semestre de 2011 en el campus Vitacura.
// Una máquina de alimentos tiene productos de tres tipos, A, B y C, que valen respectivamente $270, $340 y $390. 
// La máquina acepta y da de vuelto monedas de $10, $50 y $100.Escriba un programa que pida al usuario elegir 
// el producto y luego le pida ingresar las monedas hasta alcanzar el monto a pagar. Si el monto 
// ingresado es mayor que el precio del producto, el programa debe entregar las monedas de vuelto, una por una.'
'use strict'
const alimentos = [["A", "B", "C"], [270, 340, 390]]

function compraRealizada(alimentos, opcionEscogida) {
    let sumaMonedas = 0;
    let valorFaltante = 0;
    valorFaltante = alimentos[1][opcionEscogida-1]
    while (sumaMonedas < alimentos[1][opcionEscogida-1]) {
        try {
            let valorMoneda = Number(prompt("Ingrese una moneda, solo de 10, 50 o 100"));
            valorFaltante -= valorMoneda;
            if (valorFaltante < 0){
                alert(`Compra Realizada`)
            }
            else{
                alert(`hacen falta ${valorFaltante}`)
            }
            if (valorMoneda == 10 || valorMoneda == 50 || valorMoneda == 100) {
                sumaMonedas = sumaMonedas + valorMoneda
            }
            else {
                throw new Error();
            }
        }
        catch {
            alert("Asegurese de ingresar la moneda indicada")
        }
    }
    return sumaMonedas
}


function entregaVuelto (alimentos,x, opcionEscogida){
    let vuelto = x - alimentos[1][opcionEscogida-1]
    let monedasTexto = ""
    debugger
    if (vuelto < 50 && vuelto != 0){
        while(vuelto > 0){
            monedasTexto += "10\n"
            vuelto = vuelto - 10
        }
        alert(`Aqui tiene su vuelto:\n${monedasTexto}`)
    } 
    else if (vuelto == 50){
        alert(`Aqui tiene su vuelto:\n${vuelto}`)
    }
    else if (vuelto > 50){
        monedasTexto += "50\n"
        vuelto = vuelto - 50
        while(vuelto > 0){
            monedasTexto += "10\n"
            vuelto = vuelto - 10
        }
        alert(`Aqui tiene su vuelto:\n${monedasTexto}`)  
    }
    else if(vuelto == 0){
        alert(`Aqui tiene su vuelto:\n${vuelto}`)
    }  
    return
}
    

while(confirm("Desea comprar un producto?")){
    let textoMenu = "Estos son los productos disponibles:\n";
    for (let i = 0; i < alimentos[0].length; i++){
        textoMenu += `${i+1}. ${alimentos[0][i]} $${alimentos[1][i]}\n`
    }
    textoMenu += "Ingrese el indice del producto deseado"
    try{
        let opcionEscogida = Number(prompt(`${textoMenu}`))
        if (opcionEscogida <= (alimentos[0].length) && opcionEscogida>=0){
            alert(`El producto seleccionado es ${alimentos[0][opcionEscogida-1]}`);
            let pago = compraRealizada(alimentos, opcionEscogida);
            debugger
            entregaVuelto(alimentos,pago,opcionEscogida)
        } 
        else{
            throw new Error();
        }
    }
    catch {
        alert("Ingrese un valor válido")
    }
    
}
    
