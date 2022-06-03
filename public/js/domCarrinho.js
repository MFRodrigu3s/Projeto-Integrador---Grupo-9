function getCarrinho() {

    let div = document.getElementById("area-produtos")

    for(let i = 1; i<=99; i++){

        let nome = localStorage.getItem("produto" + i)
        let quantidade = localStorage.getItem("qntdProd" + i)
        let valorTdP = localStorage.getItem("valorTdP" + i)
        let foto = localStorage.getItem("foto" + i)

            console.log(nome, quantidade, valorTdP)

if(nome){

    div.innerHTML += `<div class="produto-und">
        <img class="foto" src=${foto} alt="${nome}"></img>
        <p class="informacao">${nome}</p>
        <p class="informacao">${quantidade}und</p>
        <p class="informacao">R$ ${valorTdP}</p>
</div>`
}

    }
    
}

getCarrinho()