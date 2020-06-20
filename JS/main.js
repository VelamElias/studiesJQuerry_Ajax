//alert("Running");

function consultaCEP()
{
    //show a progress bar while the consult is running
    $(".bar-progress").show();

    var cep = document.getElementById("cep").value;
    var url = "https://viacep.com.br/ws/" + cep +"/json/";
    
    //requisição ajax usando biblioteca jquerry
    $.ajax({
        url: url,
        type: "GET",
        success: function(response){
            console.log(response);
            //document.getElementById("logradouro").innerHTML = response.logradouro;
            //document.getElementById("cidade").innerHTML = response.localidade;
            //document.getElementById("bairro").innerHTML = response.bairro;
            //document.getElementById("uf").innerHTML = response.uf;
            
            //Alternative .ajax $("#id").html(responde.value);
            $("#logradouro").html(response.logradouro);
            $("#cidade").html(response.localidade);
            $("#bairro").html(response.bairro);
            $("#uf").html(response.uf);
            $("#cepTitle").html("CEP " + response.cep);

            //show the table with cep information
            $(".cep").show();
            //hide the progress bar when consult finish
            $(".bar-progress").hide();
        }
    })
}

//hide the cep table until search button be press
//jquerry
$(function(){
    $(".cep").hide();
    $(".bar-progress").hide();
});