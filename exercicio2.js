let products = [
    { name: 'Macbook', price: 1300, quantity: 40, colors: ['silver', 'black', 'white'] },
    { name: 'Iphone', price: 1000, quantity: 50, colors: ['silver', 'red', 'white'] },
    { name: 'Pendrive', price: 10, quantity: 10, colors: [] },
    { name: 'Headset', price: 50, quantity: 0, colors: ['black'] },
    { name: 'Mouse', price: 20, quantity: 5, colors: ['white', 'black', 'blue'] },
    { name: 'Tablet', price: 500, quantity: 20, colors: ['white', 'black'] },
    { name: 'USB adaptor', price: 5, quantity: 0, colors: [] },
    { name: 'Keyboard', price: 30, quantity: 35, colors: ['white'] },
    { name: 'Gamepad', price: 30, quantity: 25, colors: ['black', 'silver'] },
    { name: 'Monitor', price: 200, quantity: 3, colors: [] },
]


// 1 - OK
products.push({ name: 'Headset', price: 75, quantity: 8, colors: ['blue']});
console.log(products);


// 2 - OK
const removerSemEstoque = products.filter((element) => element.quantity <1);
console.log(removerSemEstoque);

// 3 - OK
const somaEstoque = products.reduce((acc, element) => {
    acc += element.quantity;
    return acc;
    }, 0);

console.log(somaEstoque);


// 4 - OK
const filtrarPreco = products.filter((element) => element.price > 600);
console.log(filtrarPreco);


// 5 - OK
const pesquisaNome = products.filter((element) => {
    return element.name.includes('o');
});
console.log(pesquisaNome);