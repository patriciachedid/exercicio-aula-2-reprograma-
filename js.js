function validando(){
    let inputName = document.getElementById('defaultSubscriptionFormPassword')
    let inputEmail = document.getElementById('defaultSubscriptionFormEmail')
    if(inputName.value == ''){
        inputName.style.backgroundColor = 'wheat'
    }else{
        inputName.style.backgroundColor = 'white'
        return true
    }
    if(inputEmail.value == ''){
        inputEmail.style.backgroundColor = 'wheat'
    }else{
        inputEmail.style.backgroundColor = 'white'
        return true
    }
}

