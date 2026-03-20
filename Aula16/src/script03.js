// Validação de Foumulário
const formulário = document.forms["NovoForm"]["texto"].value;

console.log(formulario);

function validarForm() {
    if (formulario == ""){
        alert("por favor, insira um valor para o campo!")
    }
    
    }

