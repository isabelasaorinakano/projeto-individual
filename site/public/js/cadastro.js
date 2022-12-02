

function verificarCadastro(){
    var nome = ipt_nome.value;
    var email = ipt_email.value;
    var senha = ipt_senha.value;

    var cadastro_valido = true;

    if (nome == "" || nome[0] == " " || nome.length < 3){
        ipt_nome.style.borderColor = "#FF0000";
        span_nome_inválido.innerHTML=`Nome inválido!`
        cadastro_valido = false;
    }    
   
    if (email == "" ||
        email.indexOf(" ") > -1 ||
        email.indexOf("@") < 3 ||
        (email.lastIndexOf(".") - email.indexOf("@")) < 4 ||
        (email.length - email.lastIndexOf(".")) < 3){
            span_email_inválido.innerHTML=`È-mail inválido!`
            ipt_email.style.borderColor = "#FF0000";
        cadastro_valido = false;
    }
    if (senha == "" || senha[0] == " " || senha.length < 5){
        ipt_senha.style.borderColor = "#FF0000";
        span_senha_inválida.innerHTML=`Senha inválida`
        cadastro_valido = false;
    }
    
    if (!cadastro_valido){
        return false;
    }

    return true
}
