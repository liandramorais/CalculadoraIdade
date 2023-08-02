/*Algoritmo:

1. Pegar os valores
2. Calcular a Idade
      a. Com base no ano
      b. Com mês (EXTRA)
      c. Com dia (EXTRA)

3. Gerar a faixa etária
   
    Resultado            Faixa
    0 à 12                Criança
    13 à 17                Adolescente
    18 à 65               Adulto
    Acima de 65         Idoso
   

4. Organizar o objeto pessoa para salvar na lista
5. Cadastrar a pessoa na lista
6. Função para carregar as pessoas, carrega a lista do localStorage, chamar ao carregar a página
7. Renderizar o conteúdo da tabela com as pessoas cadastradas
8. Botão para limpar os registros;*/

//Programação funcional

function calcular (event) {
    //Previne o recarregar da página;
    event.preventDefault()

    console.log("Foi executada a função calcular.")

    //PASSO 1: Pegar os valores(inputs);
    let usuario = recberValores()

    //PASSO 2: Calcular a Idade;
    let idadeCalculada = calcularIdade(usuario.ano, usuario.mes, usuario.data)

    //PASSO 3: Gerar a faixa etária;
    let classificacaoFaixaetaria = classificarFaixaetaria(idadeCalculada)

    //PASSO 4. Organizar o objeto pessoa para salvar na lista;
    usuario = organizarDados(usuario, idadeCalculada, classificacaoFaixaetaria)
}

//PASSO 1: Pegar os valores(inputs);
function receberValores() {
    let nomeRecebido = document.getElementById("nome").value.trim()
    let dataRecebida = document.getElementById("data").value
    let mesRecebido = document.getElementById("mes").value
    let anoRecebido = document.getElementById("ano").value

    let dadosUsuario = {
        nome: nomeRecebido,
        data: dataRecebida,
        mes: mesRecebido,
        ano: anoRecebido
    }

    console.log(nomeRecebido)
    console.log(dataRecebida)
    console.log(mesRecebido)
    console.log(anoRecebido)

    console.log(dadosUsuario)

    return dadosUsuario
}

// PASSO 2. Calcular a Idade
    //   a. Com base no ano
    //   b. Com mês (EXTRA)
    //   c. Com dia (EXTRA)
function calcularIdade(dataNasc) {
    var dataAtual = new Date();
    var anoAtual = dataAtual.getFullYear();
    var anoNascParts = dataNasc.split('/');
    var diaNasc = anoNascParts[0];
    var mesNasc = anoNasParts[1];
    var anoNasc = anoNascParts[2];
    var idade = anoAtual - anoNasc;
    var mesAtual = dataAtual.getMonth() + 1;

    //Se mês atual for menor que o nascimento, não fez aniversário ainda;
    if (mesAtual < mesNasc) {
        idade--;
    } else {
        //Se estiver no mês do nascimento, verificar o dia;
        if (mesAtual == mesNasc) {
            if (new Date().getDate() < diaNasc) {
                //Se a data atual for menor que o dia de nascimento ele ainda não fez aniversário
                idade--;
            }
        }
    }
    return idade;
}

console.log(calcularIdade('dataNasc'));

//PASSO 3. Gerar a faixa etária
   /*Resultado            Faixa
    0 à 12                Criança
    13 à 17                Adolescente
    18 à 65               Adulto
    Acima de 65         Idoso*/

function classificarFaixaetaria(dataNasc) {
    if (dataNac <= 12) {
        return "Criança"
    } else if (dataNasc >= 13 && dataNasc <= 17) {
        return "Adolescente"
    } else if ( dataNasc >= 18 && dataNasc <= 65) {
        return "Adulto"
    } else {
        return "Idoso"
    }
}

//PASSO 4. Organizar o objeto pessoa para salvar na lista;
function organizarDados(dadosUsuario)