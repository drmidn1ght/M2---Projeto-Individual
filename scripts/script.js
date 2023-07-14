// Declaração de variáveis
var metros, centimetros, polegadas, quilogramas, gramas, libras, celsius, fahrenheit, kelvin;

//Função para mostrar opções dinamicamente
function mostrarOpcoes() {
    var tipoMedidaSelect = document.querySelector("#tipo-medida");
    var medidaOrigemSelect = document.querySelector("#medida-origem");
    var medidaDestinoSelect = document.querySelector("#medida-destino");

    medidaOrigemSelect.innerHTML = "";
    medidaDestinoSelect.innerHTML = "";

    if (tipoMedidaSelect.value === "comprimento") {
        adicionarOpcao(medidaOrigemSelect, "Metros", "metros");
        adicionarOpcao(medidaOrigemSelect, "Centímetros", "centimetros");
        adicionarOpcao(medidaOrigemSelect, "Polegadas", "polegadas");

        adicionarOpcao(medidaDestinoSelect, "Metros", "metros");
        adicionarOpcao(medidaDestinoSelect, "Centímetros", "centimetros");
        adicionarOpcao(medidaDestinoSelect, "Polegadas", "polegadas");
    } else if (tipoMedidaSelect.value === "peso") {
        adicionarOpcao(medidaOrigemSelect, "Quilogramas", "quilogramas");
        adicionarOpcao(medidaOrigemSelect, "Gramas", "gramas");
        adicionarOpcao(medidaOrigemSelect, "Libras", "libras");

        adicionarOpcao(medidaDestinoSelect, "Quilogramas", "quilogramas");
        adicionarOpcao(medidaDestinoSelect, "Gramas", "gramas");
        adicionarOpcao(medidaDestinoSelect, "Libras", "libras");
    } else if (tipoMedidaSelect.value === "temperatura") {
        adicionarOpcao(medidaOrigemSelect, "Celsius", "celsius");
        adicionarOpcao(medidaOrigemSelect, "Fahrenheit", "fahrenheit");
        adicionarOpcao(medidaOrigemSelect, "Kelvin", "kelvin");

        adicionarOpcao(medidaDestinoSelect, "Celsius", "celsius");
        adicionarOpcao(medidaDestinoSelect, "Fahrenheit", "fahrenheit");
        adicionarOpcao(medidaDestinoSelect, "Kelvin", "kelvin");
    }
}

function adicionarOpcao(select, texto, valor) {
    var option = document.createElement("option");
    option.text = texto;
    option.value = valor;
    select.add(option);
}

//Para pegar o valor inserido
var valorInput = document.querySelector("#valor");

//Função para fazer o cálculo quando o botão for pressionado
function fazerCalculo() {
    var medidaOrigem = document.querySelector("#medida-origem").value;
    var medidaDestino = document.querySelector("#medida-destino").value;
    var valor = parseFloat(valorInput.value);

    if (valor <= 0) {
        alert("O número deve ser maior que zero.");
    } else {
        var resultado;

        // Condicionais para cálculos
        if (medidaOrigem === "metros" && medidaDestino === "centimetros") {
            resultado = valor * 100;
        } else if (medidaOrigem === "metros" && medidaDestino === "polegadas") {
            resultado = valor * 39.3701;
        } else if (medidaOrigem === "centimetros" && medidaDestino === "metros") {
            resultado = valor / 100;
        } else if (medidaOrigem === "centimetros" && medidaDestino === "polegadas") {
            resultado = valor / 2.54;
        } else if (medidaOrigem === "polegadas" && medidaDestino === "metros") {
            resultado = valor * 0.0254;
        } else if (medidaOrigem === "polegadas" && medidaDestino === "centimetros") {
            resultado = valor * 2.54;
        } else if (medidaOrigem === "quilogramas" && medidaDestino === "gramas") {
            resultado = valor * 1000;
        } else if (medidaOrigem === "quilogramas" && medidaDestino === "libras") {
            resultado = valor * 2.20462;
        } else if (medidaOrigem === "gramas" && medidaDestino === "quilogramas") {
            resultado = valor / 1000;
        } else if (medidaOrigem === "gramas" && medidaDestino === "libras") {
            resultado = valor * 0.00220462;
        } else if (medidaOrigem === "libras" && medidaDestino === "quilogramas") {
            resultado = valor / 2.20462;
        } else if (medidaOrigem === "libras" && medidaDestino === "gramas") {
            resultado = valor * 453.59237;
        } else if (medidaOrigem === "celsius" && medidaDestino === "fahrenheit") {
            resultado = (valor * 9/5) + 32;
        } else if (medidaOrigem === "celsius" && medidaDestino === "kelvin") {
            resultado = valor + 273.15;
        } else if (medidaOrigem === "fahrenheit" && medidaDestino === "celsius") {
            resultado = (valor - 32) * 5/9;
        } else if (medidaOrigem === "fahrenheit" && medidaDestino === "kelvin") {
            resultado = (valor - 32) * 5/9 + 273.15;
        } else if (medidaOrigem === "kelvin" && medidaDestino === "celsius") {
            resultado = valor - 273.15;
        } else if (medidaOrigem === "kelvin" && medidaDestino === "fahrenheit") {
            resultado = (valor - 273.15) * 9/5 + 32;
        }

        document.querySelector("#caixaResultado").innerText = resultado;
    }
}
