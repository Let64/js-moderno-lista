//🏆 DESAFIO FINAL
const notebook = {
  marca: "Dell",
  modelo: "Inspiron",
  preco: 3500,
  desconto: 500
};

const {marca, modelo, preco, desconto} = notebook;

const calcularPrecofinal = (preco, desconto) => {
    return preco - desconto
};

console.log(`Notebook: ${marca} ${modelo}`);
console.log(`Preço original: ${preco}`);
console.log(`Desconto: ${desconto}`);
console.log(`Preço final: ${calcularPrecofinal(preco, desconto)}`);