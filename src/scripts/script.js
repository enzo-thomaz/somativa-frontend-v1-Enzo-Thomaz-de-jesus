// No arquivo src/scripts/script.js, crie uma lógica utilizando new Date().getHours(). Capture o parágrafo com o ID saudacao-cinema.

const horaAtual = new Date().getHours
();
const saudacao = document.
querySelector("#CinePipoca,")

// Regra: Se for antes das 12h, altere o texto para "Bom dia! Bem-vindo à Sessão Matinê!". Entre 12h e 18h, "Boa tarde! Sessão da Tarde liberada!". Após as 18h, "Boa noite! Prepare-se para a Sessão Coruja!".

if(horaAtual<12) {
    saudacao.textContent = "Bom dia! Bem-vindo à Sessão Matinê!";
}else if (horaAtual<18) {
 saudacao.textContent = "Boa tarde! Sessão da Tarde liberada!"
} else {
saudacao.textContent ="Boa noite! Prepare-se para a Sessão Coruja!";
}

// Capture a seção com o ID banner-vip.

const bannerVip = document.querySelector
("bannerVIp")

// Adicione um evento de mouseover (quando o mouse entra): utilize classList.add() para injetar a classe .modo-vip na seção.

bannerVip.addEventListener("mouseover",
() => {
bannerVip.classList.add("modo-vip");
});

// Adicione um evento de mouseout (quando o mouse sai): utilize classList.remove() para retirar a classe .modo-vip.

bannerVip.addEventListener("mouseout",
    () => {
   bannerVip.classList.remove
   ("modo-vip");
    });

// Capture o campo numérico de ingressos (ID qtd-ingressos).

const qtdIngressos = document.
querySelector("qtd-ingressos");
const QuantidadeIngressos = document.
querySelector
("QuantidadeIngressos");

// crie um evento do tipo input nele. A cada número digitado, pegue o .value, multiplique por 35 (preço do ingresso) e mCostre o resultado em tempo real no span com o ID total-pagar.

qtdIngressos.addEventListener ("input",
() => {
   QuantidadeIngressos.textContent = 
   Number(qtdIngressos.value) * 35;

});

// Capture o botão "Publicar Filme" (ID btn-publicar), o campo de texto com o nome do filme (ID nome-filme) e a div do mural (ID mural-criticas).

const btnPublicar = document. querySelector("#btn-Publicar");
const nomeFilme = document.querySelector("#nome-Filme");
const muralCriticas = document.querySelector("#mural-criticas");

// Adicione um evento de click no botão. Quando clicado, injete o filme no mural usando innerHTML +=.

btnPublicar.addEventListener("click", () =>{
if(nomeFilme.value ==="batman" || nomeFilme.value ==="batman") {
   alert("filme encontrado!");
}


// Regra de Exibição: Você deve obrigatoriamente concatenar emojis e a palavra "Filme" na sua string HTML. Exemplo de como a tag deve ser montada no JS: <article class="card-critica"><h3>🎬 Filme: [NOME DO FILME DIGITADO] ⭐</h3></article>.

muralCriticas.innerHTML += '<article class ="card-critica"><h3>🎬 filme: [batman] ⭐</h3></article>.'

});

// Capture o botão "Limpar Mural" (ID btn-apagar).

const btnApagar = document.querySelector
("#btnapagar")


btnApagar.addEventListener("click", () => {

// Crie um evento de click nele que esvazie completamente a div do mural (ID mural-criticas), deixando o innerHTML como "".

muralCriticas.innerHTML = "";

// Regra Extra de Usabilidade: Logo após limpar o mural, o seu código deve usar a função focus() no campo de input do nome do filme (ex: campoFilme.focus()). Isso fará o cursor do teclado voltar a piscar lá dentro automaticamente!

campoFilme.focus();

});