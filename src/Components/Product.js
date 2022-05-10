const Product = ({
  imgProduct,
  nameProduct,
  descriptionProduct,
  priceProduct,
  skuProduct,
  quantityProduct,
}) => {
  return (
    <div className="product">
      <img src={imgProduct} alt={nameProduct} className="imageProduct" />
      <h2 className="nameProduct">{nameProduct}</h2>
      <p className="descriptionProduct">{descriptionProduct}</p>
      <p className="priceProduct">{priceProduct}</p>
      <p className="skuProduct">SKU: {skuProduct}</p>
      <p className="quantityProduct">Stock: {quantityProduct}</p>
      <button className="buyButton">Comprar</button>
    </div>
  );
};
export default Product;
