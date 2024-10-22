function verificarIdade(){

    const idade = document.getElementById('idade').value;
    const resultado = document.
    getElementById('resultado');

    if(idade = 18){
         resultado.textContent = "hahahahaha vai pro exército";

    }
    else {
        resultado.textContent = "Você é menor de idade"
    }
    if (idade > 18) {
        resultado.textContent = "PODE SER PRESO"
    }
}