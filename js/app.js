

function comprar(){

    let tipo = document.getElementById('tipo-ingresso').value;
    let qtd = parseInt(document.getElementById('qtd').value); 


    if(qtd > 0){
        if(tipo == 'pista'){
            comprarPista(qtd);
        }else if(tipo == 'superior'){
            compraSuperior(qtd);
        }else if(tipo == 'inferior'){
            compraInferior(qtd);
        }   

    }else{
        alert('ERRO!!!')
    }
    

}

function comprarPista(qtd){
    let qtdPista = parseInt(document.getElementById('qtd-pista').textContent);
    if(qtd > qtdPista){
        alert('Quantidade indisponivel');
    }else{
        qtdPista = qtdPista - qtd;
        document.getElementById('qtd-pista').textContent = qtdPista;
        alert('Compra efetuada');
        document.getElementById('qtd').value = '0';
    }
    
} 

function compraSuperior(qtd){
    let qtdSuperior = parseInt(document.getElementById('qtd-superior').textContent);
    if(qtd > qtdSuperior){
        alert('Quantidade indisponivel');
    }else{
        qtdSuperior = qtdSuperior - qtd;
        document.getElementById('qtd-superior').textContent = qtdSuperior;
        alert('Compra efetuada');
        document.getElementById('qtd').value = '0';
    }
    
} 

function compraInferior(qtd){
    let qtdInferior = parseInt(document.getElementById('qtd-inferior').textContent);
    if(qtd > qtdInferior){
        alert('Quantidade indisponivel');
    }else{
        qtdInferior = qtdInferior - qtd;
        document.getElementById('qtd-inferior').textContent = qtdInferior;
        alert('Compra efetuada');
        document.getElementById('qtd').value = '0';
        
    }
    
} 