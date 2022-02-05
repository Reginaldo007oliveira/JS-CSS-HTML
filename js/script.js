const form = document.getElementById('form')

form.addEventListener('submit', (e) => {
    e.preventDefault();
    let nome = document.getElementById('nome').value;
    let email = document.getElementById('email').value;
    let data = {
        nome,
         email,
    }
     let convertData = JSON.stringify(data);
     localStorage.setItem('lead', convertData)

     let content = document.getElementById('content')
     let carregando = `<p>carregando...<p>`
     let pronto = `<p> Cadastro efetuado com sucesso</p>`
     content.innerHTML  =   carregando;

     setTimeout( () => {
        content.innerHTML = pronto 
     }, 1000)
}) 

//vai pegar em tudo, está no escopo global do meu script
// var nume = 'guilherme';
// var idade = 28;
// var idadeDouble = 28.90;
// var bool = true;

// if( nome === 'guilherme'){
//     console.log(nume)
// }

