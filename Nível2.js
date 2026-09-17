// NÍVEL 2 — DESESTRUTURAÇÃO
//8. Primeira desestruturação

const aluno = {
  nome: "Maria",
  idade: 17,
  turma: "2TDS"
};

console.log(`Nome: ${aluno.nome}`);
console.log(`Idade: ${aluno.idade}`);
console.log(`Turma: ${aluno.turma}`);

//9. Pegando apenas algumas propriedades
const usuario = {
  nome: "Pedro",
  idade: 20,
  email: "pedro@email.com",
  cidade: "São Paulo"
};

console.log(`Nome: ${usuario.nome} - ${usuario.email}`);

//10. Desestruturação + Template Literal
const filme = {
  titulo: "Interestelar",
  ano: 2014,
  diretor: "Christopher Nolan"
};

const {titulo, ano, diretor} = filme;
console.log(`${titulo} foi lançado em ${ano} e dirigido por ${diretor}.`);

//11. Informações de um carro
const carro = {
  marca: "Toyota",
  modelo: "Corolla",
  ano: 2024
};
console.log(`${carro.marca} ${carro.modelo} - Ano ${carro.ano}`);

//12. Produto dentro de uma função
const produto = {
  nome: "Mouse",
  preco: 80
};

const mostrarProduto = (nome, preco) => {
    return console.log(`Produto: ${nome} - R$ ${preco}! `);
}
mostrarProduto(produto.nome , produto.preco)

//13. Desestruturação diretamente na função

const produto1 = {
  nome: "Mouse",
  preco: 80
};

const mostrarProduto1 = ({ nome, preco }) => {
    return `Produto: ${produto.nome} - R${produto.preco}`
};

//14. Apresentando uma pessoa
const pessoa = {
  nome: "Mariana",
  idade: 25,
  profissao: "Desenvolvedora"
};

const apresentarPessoa = {nome, idade, profissao} = pessoa 
    console.log(`${nome} tem ${idade} e trabalha como ${profissao}`);


