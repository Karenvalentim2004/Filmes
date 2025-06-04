// JSON - javascript object notation    

let filme1 = {
    titulo:"Jurrassic Park 0",
    foto: "filme1.webp",
    avaliacao:"10/10",
    duracao: "1h50m",
}

let filme2 = {
    titulo:"Karate Kid Lendas",
    foto: "filme2.jpg",
    avaliacao:"08/10",
    duracao: "1h30m",
}

let filme3 = {
    titulo:"Lilo e Stitch",
    foto: "filme3.jpg",
    avaliacao:"10/10",
    duracao: "2h30m",
}

let filme4 = {
    titulo:"Pecadores",
    foto: "filme4.jpg",
    avaliacao:"10/10",
    duracao: "1h40m",
}

function fnMontarCartao(filmeAtual){
    console.log(`
        <div class="card-filme">
        <img src="img/${filmeAtual.foto}">
        <h3>${filmeAtual.titulo}</h3>
        <span> ⭐ ${filmeAtual.avalicao}</span>
        </div>
         `)	
}

//DOM - Document Object Model
document.querySelector("h")

fnMontarCartao(filme1)
fnMontarCartao(filme2)
fnMontarCartao(filme3)
fnMontarCartao(filme4)
