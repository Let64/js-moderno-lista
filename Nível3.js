//15. Calculando desconto
const calcularDesconto = (a, b) => a-b;
    console.log(calcularDesconto(200, 20));

//16. Produto com desconto
const produto = {
  nome: "Headset",
  preco: 200,
  desconto: 20
};

const calcularPreco = ({preco, desconto}) => {
    return preco - desconto;
}

console.log(`O ${produto.nome} custava R$ 200 e agora custa R${calcularPreco(produto)}`);


//17. Média de um aluno
const aluno = {
  nome: "Lucas",
  nota1: 8,
  nota2: 6
};

const calcularMedia = ({nota1, nota2}) => {
    return (nota1 + nota2) /2;
}

console.log(`${aluno.nome} ficou com média ${calcularMedia(aluno)}`);

//18. Verificando idade
const verificarIdade = (idade) => {
    if (idade >= 18) {
        return `Maior de idade`
    } else {
        return `Menor de idade`
    }
};

console.log(verificarIdade(17));

//19 Cadastro de jogo

const jogo = {
    titulo: "Fortnite",
    genero: "Ação",
    preco: 100
};

const exibirjogo = ({titulo, genero, preco}) => {
    return `${titulo} é um jogo do gênero ${genero} e custa R${preco}.`
};

console.log(exibirjogo(jogo));

//20. Pedido de uma loja
const pedido = {
  produto1: "Teclado Mecânico",
  preco: 250,
  quantidade: 2
};

const calcularTotal = ({ produto,preco, quantidade}) => {
    return quantidade * preco;
}

const { produto1, preco, quantidade } = pedido;

console.log(`Produto: ${produto1}`);
console.log(`Quantidade: ${quantidade}`);
console.log(`Valor unitário: R$ ${preco}`);
console.log(`Total: R$ ${calcularTotal(pedido)}`);

