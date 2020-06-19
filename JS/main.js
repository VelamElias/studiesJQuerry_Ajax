//alert("Running");

function consultaCEP()
{
    var cep = document.getElementById("CEP").value;
    var url = "https://viacep.com.br/ws/" + cep +"/json/";

    //requisição ajax usando biblioteca jquerry
    $.ajax({
        url: url,
        type: "GET",
        success: function(response){
            document.getElementById("logradouro").innerHTML = response.logradouro;
            document.getElementById("bairro").innerHTML = response.bairro;
            document.getElementById("localidade").innerHTML = response.localidade;
            document.getElementById("uf").innerHTML = response.uf;

            //Usando AJAX puro para consultar a UF
            $("#ufAJ").html(response.uf);
        }
    })
}