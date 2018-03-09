let container = document.querySelector('.container .row');

function buscarDados(tipo){
    let url = 'http://localhost:3000/' + tipo;
    
    axios.get(url).then(function(resposta){
        container.innerHTML = '';

        for(let personagem of resposta.data){
            container.innerHTML += `
            <div class="card col">
                <img class="card-img-top" src="${personagem.imagem}" alt="Card image cap">
                <div class="card-body">
                    <h5 class="card-title">${personagem.nome}</h5>
                    <p class="card-text">${personagem.serie}</p>
                </div>
            </div>`
        }
    });
}

function mostrarFormulario(){
    container.innerHTML = `
        <form>
            <div class="form-group">
                <input class="form-control" type="text" placeholder="Nome">
            </div>
            <div class="form-group">
                <input class="form-control" type="text" placeholder="Série">
            </div>
            <div class="form-group">
                <select class="form-control">
                    <option>anime</option>
                    <option>cartoon</option>
                </select>
            </div>
            <div class="form-group">
                <input class="form-control" type="text" placeholder="Imagem">
            </div>
            <button class="btn btn-primary" onclick="enviarFormulario()">Enviar</button>
        </form>
    `;
}

function enviarFormulario(){
    let inputs = document.querySelectorAll('input');
    let select = document.querySelector('select');
    
    let dados = {
        nome: inputs[0].value,
        serie: inputs[1].value,
        imagem: inputs[2].value
    };

    let url = 'http://localhost:3000/' + select.value;

    axios.post(url, dados).then(function(resposta){
        console.log(resposta);

        container.innerHTML = `<div class="alert alert-success">Personagem inserido!</div>`;
    });
    
}