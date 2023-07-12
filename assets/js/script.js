
 function validate(){
    //validar email
    const emailInput = document.querySelector("#user")
    const emailPattern = /^\S+@\S+.\S+$/ // pattern dos caracteres do email
    const isValidEmail = emailPattern.test(emailInput.value)//validador do email

    //validar senha
    const passwordInput = document.querySelector("#password")
    const password = passwordInput.value //valor do input
    const hasUpperCase = /[A-Z]/.test(password) // uma letra maiuscula 
    const hasLoweCase = /[a-z]/.test(password) //uma letra minuscula
    const hasNumber = /[0-9]/.test(password) // um numero
    const isValidPassword = hasUpperCase && hasLoweCase && hasNumber && password.length > 3; //validador da senha

    const errorMessage = document.querySelector('#validar')
    
    //mensagens geradas pro email ou senha
    if(!isValidEmail){
        errorMessage.innerHTML = "Insira o email corretamente"
    }else if(!isValidPassword){
        errorMessage.innerHTML = "A senha deve conter no minímo: Letra maiúscula, letra minúscula, Número. "
    }else{
        alert("Tudo correto")
    }
    event.preventDefault()
 }
