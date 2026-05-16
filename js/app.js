const btnSoma = document.getElementById('aumenta');
const btnSubtrai = document.getElementById('diminui');
const valorAtual = document.getElementById('valor-atual');

btnSoma.addEventListener('click', () => soma(1));

btnSubtrai.addEventListener('click', () => soma(-1));

function soma(diff) {
    let atual = Number(valorAtual.innerText);
    valorAtual.innerText = atual + diff;
    alertaCor(valorAtual.innerText);
}

function alertaCor(atual) {
    resetCor()
    if (atual > 0){
        valorAtual.classList.add('text-success')
    }
    if (atual < 0){
        valorAtual.classList.add('text-danger')
    }
}

function resetCor(){
    valorAtual.classList.remove('text-success')
    valorAtual.classList.remove('text-danger')
}
