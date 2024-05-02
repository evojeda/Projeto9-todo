//  Declarando a variavel

let tarefas=[];

//Função que valida o preenchimento do campo caso esteja vazio

//"required" funciona só quando esta dentro 
function validaCampo()
{
    let valida = false;
    if(document.getElementById("task").value =="")
    valida = true
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

//Criando função listar tarefas

function listarTarefas(){
    let valor = "";
    for(let i=0; i< tarefas.length; i++){
        valor += tarefas[i] + "<br>";
    }
    document.getElementById("lista").innerHTML = valor;
}

//Função remover terefa
function removerTarefa(){
    //pop = metodo que remove a ultima linha adcionada
    tarefas.pop();
    listarTarefas();
}