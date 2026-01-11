//! object diye :

const { price, quantity, tax = 7 } = { name: 'shirt', price: 500, quantity: 7 }
// ekhane dan e taxt nai tai default set korsi 7 diye tasara undefined dekhato ....
// console.log(price, quantity, tax)

// const discount = product.price*20/100;
// const yourPay = product.price - discount;
// const vatAmount = product.price*7/100;
// const totalAmount = yourPay + vatAmount;

// const price = product.price;

// const discount = price * 20 / 100;
// const yourPay = price - discount;
// const vatAmount = price * 7 / 100;
// const totalAmount = yourPay + vatAmount;



const discount = price * 20 / 100;
const yourPay = price - discount;
const vatAmount = price * 7 / 100;
const totalAmount = yourPay + vatAmount;


const device = { name: 'phone', brand: 'samsung', price: 17000 }
const { brand } = device;

// --------------------------------------------------- //
// ! array diye :



const numbers = [25, 88, 89, 101]
const [first, second] = numbers      //* first = 25 , second = 88 
const [math, physics] = [90, 99];
console.log(physics)                  //* 99 output hobe

