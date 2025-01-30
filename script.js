function mostrarinfo(event) {
    event.preventDefault(); //Ajuda no envio de informações, testei sem isso e não funcionou.

    const nome = document.getElementById("name").value;

    document.getElementById("mensagemnome").innerHTML = "Obrigado pelo seu Currículo, " + nome; //Digita na tela o nome da pessoa depois que clica

    document.getElementById("name").value = ""; //Faz limpar depois que eu clico no botão!
    document.getElementById("email").value = "";
    document.getElementById("date").value = "";
    document.getElementById("file").value = "";
    document.getElementById("masculino").checked = false;
    document.getElementById("feminino").checked = false; //o .checked false, significa que "não foi marcado" por isso fica vazio
    document.getElementById("outro").checked = false;
    document.getElementById("prefiro_nao_dizer").checked = false;
}

function alertatela(){
    document.getElementById("comentario").value = "";
    alert("Obrigado pela mensagem!!")
}