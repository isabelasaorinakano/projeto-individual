


let titulo = document.querySelector('h1')
let instrucoes = document.querySelector('#instrucoes')
let aviso = document.querySelector('#aviso')

let pontos = 0 // pontos para o placar
let placar = 0 // placar

// PERGUNTA
let numQuestao = document.querySelector('#numQuestao')
let pergunta   = document.querySelector('#pergunta')

// ALTERNATIVAS
let a = document.querySelector('#a')
let b = document.querySelector('#b')
let c = document.querySelector('#c')

// article com a class questoes
let articleQuestoes = document.querySelector('.questoes')
// ol li com as alternativas
let alternativas = document.querySelector('#alternativas')


// json que contén questões
const q0 = {
    numQuestao   : 0,
    pergunta     : "Pergunta",
    alternativaA : "Alternativa A",
    alternativaB : "Alternativa B",
    alternativaC : "Alternativa C",
    correta      : "0",
}

const q1 = {
    numQuestao   : 1,
    pergunta     : "Qual é maior raça de gatos do mundo?",
    alternativaA : "Persa",
    alternativaB : "Bombain",
    alternativaC : "Maine Coon",
    correta      : "Maine Coon",
}

const q2 = {
    numQuestao   : 2,
    pergunta     : "Nos humanos a impressão digital são os dedos, e nos gatos é?",
    alternativaA : "Nariz",
    alternativaB : "Orelhas",
    alternativaC : "Patas",
    correta      : "Nariz",
}

const q3 = {
    numQuestao   : 3,
    pergunta     : "A maioria dos gatos tricolor ou malhados são?",
    alternativaA : "Fofos",
    alternativaB : "Macho",
    alternativaC : "Fêmea",
    correta      : "Fêmea",
}

const q4 = {
    numQuestao   : 4,
    pergunta     : "Qual a cor da pelagem dos felinos adorados pelas bruxas e piratas?",
    alternativaA : "Branco",
    alternativaB : "Preto",
    alternativaC : "Tigrado",
    correta      : "Preto",
}

const q5 = {
    numQuestao   : 5,
    pergunta     : "Em média, quanto tempo os gatos dormem por dia?",
    alternativaA : "O dia todo!",
    alternativaB : "2/3 do dia",
    alternativaC : "1/4 do dia",
    correta      : "2/3 do dia",
}

// CONSTANTE COM UM ARRAY DE OBJETOS COM TODAS AS QUESTOES
const questoes = [q0, q1, q2, q3, q4, q5]

let numero = document.querySelector('#numero')
let total  = document.querySelector('#total')

numero.textContent = q1.numQuestao

let totalDeQuestoes = (questoes.length)-1
console.log("Total de questões " + totalDeQuestoes)
total.textContent = totalDeQuestoes

// MONTAR A 1a QUESTAO COMPLETA, para iniciar o Quiz
numQuestao.textContent = q1.numQuestao
pergunta.textContent   = q1.pergunta
a.textContent = q1.alternativaA
b.textContent = q1.alternativaB
c.textContent = q1.alternativaC

// CONFIGURAR O VALUE INICIAL DA 1a QUESTAO COMPLETA
a.setAttribute('value', '1A')
b.setAttribute('value', '1B')
c.setAttribute('value', '1C')

// PARA MONTAR AS PROXIMAS QUESTOES
function proximaQuestao(nQuestao) {
    numero.textContent = nQuestao
    numQuestao.textContent = questoes[nQuestao].numQuestao
    pergunta.textContent   = questoes[nQuestao].pergunta
    a.textContent = questoes[nQuestao].alternativaA
    b.textContent = questoes[nQuestao].alternativaB
    c.textContent = questoes[nQuestao].alternativaC
    a.setAttribute('value', nQuestao+'A')
    b.setAttribute('value', nQuestao+'B')
    c.setAttribute('value', nQuestao+'C')
}

function bloquearAlternativas() {
    a.classList.add('bloqueado')
    b.classList.add('bloqueado')
    c.classList.add('bloqueado')
}

function desbloquearAlternativas() {
    a.classList.remove('bloqueado')
    b.classList.remove('bloqueado')
    c.classList.remove('bloqueado')
}

function verificarSeAcertou(nQuestao, resposta) {

    let numeroDaQuestao = nQuestao.value
    console.log("Questão " + numeroDaQuestao)

    let respostaEscolhida = resposta.textContent
  

    let certa = questoes[numeroDaQuestao].correta
    

    if(respostaEscolhida == certa) {
       
        pontos += 10 // pontos = pontos + 10
    } 
    
    // atualizar placar
    placar = pontos
    instrucoes.textContent = "Pontos " + placar

    // bloquear a escolha de opcoes
    bloquearAlternativas()

    setTimeout(function() {
        //respostaEsta.textContent = '...'
        proxima = numeroDaQuestao+1

        if(proxima > totalDeQuestoes) {
            console.log('Fim do Jogo!')
            fimDoJogo()
        } else {
            proximaQuestao(proxima)
        }
    }, 250)
    desbloquearAlternativas()
}

function fimDoJogo() {
    instrucoes.textContent = "Fim de Jogo!"
    numQuestao.textContent = ""

    let pont = ''
    pontos == 0 ? pont = 'ponto' : pont = 'pontos'

    pergunta.textContent   = "Você conseguiu " + pontos + " " + pont

    aviso.textContent = "Você conseguiu " + pontos + " " + pont

    a.textContent = ""
    b.textContent = ""
    c.textContent = ""

    a.setAttribute('value', '0')
    b.setAttribute('value', '0')
    c.setAttribute('value', '0')

    // OCULTAR O ARTICLE DA QUESTAO
    articleQuestoes.style.display = 'none'

    setTimeout(function() {
        pontos = 0 // zerar placar
        location.reload();
    }, 2000)
}
