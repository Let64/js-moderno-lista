//1. Criando um objeto
const aluno = {
    nome: "Leticia",
    idade: 17,
    curso: "Desenvolvimento de Sistemas"
};
console.log(`Nome: ${aluno.nome}`);
console.log(`idade: ${aluno.idade}`);
console.log(`Curso: ${aluno.curso}`);

//2.  Acessando propriedades
const produto = {
  nome: "Teclado",
  preco: 150,
  marca: "Logitech"
};

console.log(produto.nome);
console.log(produto.preco);
console.log(produto.marca);

//3. Template Literal
const nome = "Carlos";
const idade = 18;
console.log(`${nome} tem ${idade} anos.`);

//4. Template Literal com objeto
const jogo = {
  nome: "Minecraft",
  preco: 99
};

console.log(`O jogo ${jogo.nome} custa R$ ${jogo.preco}.`);

//5. Primeira Arrow Function
const dobro = (numero) => numero*2;
console.log(dobro(5));

//6. Soma com Arrow Function
const somar = (a, b) => a + b 
console.log(somar(10, 5));

//7. Criando uma mensagem
const apresentar = (nome, curso) => `Olá, meu nome é ${nome} e estudo ${curso}.`;
console.log(apresentar("Maria", "Desenvolvimento de Sistemas"));