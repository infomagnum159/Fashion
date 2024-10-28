// функция для получения данных из хранилище под ключом cart
export const getLocalStorage = () => {
  const cart = JSON.parse(localStorage.getItem("cart"));
  return cart;
};
//  функция для подсчета стоимости за одну позицию
export const calcSubPrice = (elem) => {
  return elem.count * elem.item.price;
};
//  функция totalPrice для вывода общей суммы
export const calcTotalPrice = (products) => {
  const totalPrice = products.reduce((acc, curr) => acc + curr.subPrice, 0);
  const totalPricePrice = products.reduce(
    (acc, curr) => acc + curr.item.price,
    0
  );
  return totalPrice == 0 ? totalPrice : totalPrice;
};
// функция для вывода колв-во товаров в корзине
export const getProductsCountInCart = () => {
  let cart = getLocalStorage();
  return cart ? cart.products.length : 0;
};
