let btn = document.querySelector('.fa-eye')

btn.addEventListener('click', ()=>{
    let inputSenha = document.querySelector('#senha')

    if(inputSenha.getAttribute('type')=='password'){
        inputSenha.setAttribute('type','text')

    } else{
        inputSenha.setAttribute('type', 'password')

    }
})

function entrar(){

    let usuario = document.querySelector('#usuario')

    let userLabel = document.querySelector('userLabel')

    let senha = document.querySelector('#senha')

    let senhaLabel = document.querySelector('#senhaLabel')

    let msgError = document.querySelector('#msgError')

    let listaUser =[]

    let userValid ={
        nome: '',
        user: '',
        senha: ''
    

    }

    listaUser = JSON.parse(localStorage.getItem('listaUser'))

    listaUser.forEach((Item) => {
        if(usuario.value== Item.userCad && senha.value == Item.senhaCad){
        
            userValid={
                nome: item.nomeCad,
                user: item.userCad,
                senha:item.senhaCad
            }
        }
    })

    if(usuario.value== userValid.user && senha.value == userValid.senha){
        window.location.href ='../index.html'
    }
}