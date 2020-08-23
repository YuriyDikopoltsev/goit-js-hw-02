let invoice = prompt('Количество товаров по накладной: ', 100);
const stock = 100;
message =
  invoice <= 0
    ? 'Ошибка ввода данных'
    : invoice > stock
    ? 'На складе недостаточно товаров!'
    : 'Заказ оформлен, с вами свяжется менеджер';
console.log(message);
alert(message);
