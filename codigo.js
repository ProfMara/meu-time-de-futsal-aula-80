var matrizNomes = [];
var semVirgulas ='';
var matrizOrdenadaCompleta = [];

function enviar()
{



    //Esconder o botão enviar e mostrar o botão organizar
    document.getElementById("enviarBotao").style.display = "none";
    document.getElementById("organizarBotao").style.display = "inline-block";
    document.getElementById("mostrarNomes").style.display = "block";
    
}

function organizar(){
    //esconder a lista
    document.getElementById("mostrarNomes").style.display = "none";
    document.getElementById("mostrarNomesOrganizado").style.display = "block";


}

