let PrecoAlcool;
let PrecoGasolina;

function CapturaPrecos() {
    var inputElement = document.getElementById('PrecoAlcool');
    PrecoAlcool = parseFloat(inputElement.value); 

    inputElement = document.getElementById('PrecoGasolina');
    PrecoGasolina = parseFloat(inputElement.value); 
}

function CalculaMelhorPreco() {
    let diferenca = (PrecoAlcool / PrecoGasolina);

    alert(`Diferença de preços: ${diferenca.toFixed(2)}`); 

    if (diferenca >=0.70) {
        alert (`Abasteça com Gasolina`);
    } else {
        alert (`Abasteça com Alcool`);
    }
}


