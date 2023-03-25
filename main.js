document.getElementById('entrar').style.setProperty('display', 'none', 'important')

function situacao(){
    const url = new URLSearchParams(window.location.search)
    if(url.get('sim')){
        document.getElementById('entrar').style.setProperty('display', 'block', 'important')
        document.getElementById("mensagem").innerHTML="Olá! Gostaria de te dar boas vindas a Cervejaria do Pericles.<br>Aqui você encontrará as melhores bebidas do Brasil!"
    }
    if(url.get('nao')){
        document.getElementById("mensagem").innerHTML="Sinto muito, mas este site só é permitido para maiores de 18 anos! :("
    }
}