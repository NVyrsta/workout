export default function (products) {
  return products.filter(product => product.onSale);
}