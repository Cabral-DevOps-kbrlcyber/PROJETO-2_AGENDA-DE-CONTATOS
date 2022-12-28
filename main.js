const form = document.getElementById('form-agenda')
const imgOk = '<img src="./images/images/EMOJIN OK.png" alt="emojin dando um joia " />';
const contatos = [];
const numeros = [];

let linhas = '';

form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    adicioanaLinha();
    atualizaTabela();
    atualizaTotalContatos();
});

function adicioanaLinha() {
    const inputNomeContato = document.getElementById('nome-contato');
    const inputNumeroContato = document.getElementById('numero-contato');

    if(contatos.includes(inputNomeContato.value)) {
        alert(`O Contato: ${inputNomeContato.value} com o numero: ${inputNumeroContato.value} - já existe`);
    } else if (numeros.includes(inputNumeroContato.value)) {
        alert(`O Contato: ${inputNomeContato.value} com o numero: ${inputNumeroContato.value} - já existe`);
    } else {
        
        contatos.push(inputNomeContato.value);
        numeros.push(inputNumeroContato.value);
    
    
        let linha = '<tr>'
        linha += `<td>${inputNomeContato.value}</td>`;
        linha += `<td>${inputNumeroContato.value}</td>`;
        linha += `<td>${inputNumeroContato.value > 0 ? imgOk : imgOk}</td>`;
        linha += '</tr>';
    
        linhas += linha;
    }


    inputNomeContato.value = '';
    inputNumeroContato.value = '';
    
}

function calcularTotalFinal() {
    let somaDosContatos = 0;

    for (let i = 0; i < numeros.length; i++){
        somaDosContatos += numeros[i];
        
        return numeros.length;
    }
    
}

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}

function atualizaTotalContatos() {
    const totalDeContatos = calcularTotalFinal();

    document.getElementById('total-de-contatos').innerHTML = totalDeContatos;
    document.getElementById('resultado-final').innerHTML = totalDeContatos = calcularTotalFinal;
    
}