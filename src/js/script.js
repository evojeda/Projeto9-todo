//  Declarando a variavel

let tarefa=[];

//Função que valida o preenchimento do campo caso esteja vazio

//"required" funciona só quando esta dentro 
function validaCampo()
{
    let valida = false;
    if(document.getElementById("task").value =="")
    valida true
    return valida;
}

//Função que adiciona a tarefa

function adicionarTarefa(){
    //Criando a variavel que vai receber as tarefas
    let linhas = document.getElementById("task");

    if (validaCampo()){
        alert("Preencha o campo com a tarefa")
    }else{
        //Adicionando as tarefas
        tarefas.push(linhas.value);
        //Passando para a proxima linha vazia
        linhas.value="";
        //Chamando a função que vai mostrar as taerfas 
        listarTarefas();
    }
    document.getElementById("task").focus();
}