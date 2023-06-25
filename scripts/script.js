function mostrarOpcoes() {
    var tipoMedidaSelect document.querySelector("#tipo-medida");
    var medidaOrigemSelect = document.querySelector("#medida-origem");
    var medidaDestinoSelect = document.querySelector("#medida-destino");

    medidaOrigemSelect.innerText = "";
    medidaDestinoSelect.innerText = "";

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

}

var valor = parseFloat

function validaNumero(valor)
if (valor <=0)
{
    document.createElement(" ("p exempl"o)
}