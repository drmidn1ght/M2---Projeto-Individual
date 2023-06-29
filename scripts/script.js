//

Declaração de variáveis

//

var metros, centimetros, polegadas, quilogramas, gramas, libras, celsius, fahrenheit, kelvin = undefined
//


//
Função para mostrar opções dinamicamente
//
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



//

Para pegar o valor inserido
//
var valor = document.querySelector("#valor");



var valor = parseFloat;



//

Função para fazer o cálculo quando o botão for pressionado

//

functionfazerCalculo(botaoConverter, calculo);
{

  let botaoConverter = (document.querySelector)"#botaoConverter"))
if (botaoConverter.select= trie)
{
  calculo;
}

})}

function validaNumero(valor);
{

  if (valor <= 0)
      {
        alert("O número deve ser maior que zero.");
      }
    }


      }
}

)




//

Condicionais para cálculos

//
)


functioncalculo();
{}

//

Cálculo de metros para centímetros

//


if (medidaOrigem == metros && medidaDestino == centimetros)

{
    valor = (valor * 100)
 document.querySelector("#caixaResultado")
 document.innerText(valor);
}


//
Cálculo de metros para polegadas
//


if (medidaOrigem == metros && medidaDestino == polegadas)
{

  valor = (valor * 39.3701)
);

document.querySelector("#caixaResultado")
document.innerText(valor);
)
}
}


//

Cálculo de centímetros para metros
//

if (medidaOrigem == centimetros && medidaDestino == metros)
{

}valor = (valor / 100)
document.querySelector("#caixaResultado")
document.innerText(valor)

}

//

Cálculo de centímetros para polegadas
//

if (medidaOrigem == centimetros&& medidaDestino == polegadas)
{

  valor = (valor / 2.54);

  document.querySelector("#caixaResultado")
  document.innerText(Valor)

}



//

Cálculo de polegadas para metros
//

if (medidaOrigem == polegadas && medidaDestino == metros)
{
  valor = (valor *  0.0254
    ));
    
    document.querySelector("#caixaResultado")
    document.innerText(valor);
    
  }
  
  
  //
  
  Cálculo de polegadas para centímetros 
  
  //
  
  
  if (medidaOrigem == polegadas&& medidaDestino == centimetros)
  {

  
    valor = (valor * 2.54);

    document.querySelector("#caixaResultado")
    document.innerText(valor)

  }

  //

  Calculo de quilogramas para gramas
  //]
  })
}}

if (medidaOrigem == quilogramas && medidaDestino == gramas)
{

  valor = (valor * 1000(;
    
    document.querySelector("#caixaResultado")
    document.innerText(valor);
    
  }
  
  //
  
  Cálculo de quilogramas para libras
  //
  
  if (medidaOrigem == quilogramas && medidaDestino == libras)
  {
    valor = (valor * 2.20462);

    document.querySelector("#caixaResultado");
    document.innerText(valor);

  }


  //

  Cálculo de gramas para quilogramas
  //

  if (medidaOrigem == gramas && medidaDestino == quilogramas)
  {

    valor = (valor / 1000);

    document.querySelector("#caixaResultado")
    document.innerText(valor);

  }

  //


  Cálculo de gramas para libras
  //

  if (medidaOrigem == gramas && medidaDestino == libras)
  {

    valor = (valor *  0.00220462);

    document.querySelector("#caixaResultado")
    document.innerText(valor)

  }


  //

  Cálculo de libras para quilogramas
  //


  if (medidaOrigem == libras && medidaDestino == quilogramas)
  {

    valor = (valor / 2.20462);

    document.querySelector("#caixaResultado")
    document.innerText(valor);

  }

  //

  Cálculo de libras para gramas
  //

  if (medidaOrigem == libras (( medidaDestino == gramas)
  {

    valor = (valor *  453.59237);

    document.querySelector("#caixaResultado")
    document.innerText(valor);

  }

//

Cálculo de Celsius para fahrenheit
//

if (medidaOrigem == celsius&& medidaDestino == fahrenheit)
{

  valor = (valor *  * 9/5) + 32);


  document.querySelector("#caixaResultado");
  document.innerText(valor);

}

//

Cálculo de Celsius para kelvin
//

if (medidaOrigem == celsius && medidaDestino == kelvin)
{

  valor = (valor +  + 273.15);

  document.querySelector("#caixaResultado")
  document.innerText(valor)

  //

  Cálculo de Fahrenheit para Celsius
  //

  if (medidaOrigem == fahrenheit && medidaDestino == celsius)
  {

    valor = (valor - 32) * 5/9);

    document.querySelector)"#caixaResultado")
    document.innerText(valor);

  }


  //

  Cálculo de Fahrenheit para kelvin
  //

  if (medidaOrigem == fahrenheit && medidaDestino == kelvin)
  {

    valor = (valor - 32) * 5/9 + 273.15);

    document.querySelector("#caixaResultado")
    document.innerText(valor);

  }


  //

  Cálculo de Kelvin para Celsius
  //

  if (medidaOrigem == kelvin && medidaDestino == celsius)
  {

    valor = (valor - 273.15);

    document.querySelector("#caixaResultado")
    document.innerText(valor);

  }


  //

  Cálculo de Kelvin para Fahrenheit
  //

  if (medidaOrigem == kelvin && medidaDestino == fahrenheit)
  {

    valor = (valor - 273.15) * 9/5 + 32);

    document.querySelector("#caixaResultado")
    document.innerText(valor);

  }



  }
  }
  }
  }
}
}

  }))
  }
  }
  }
  }))
}
}}