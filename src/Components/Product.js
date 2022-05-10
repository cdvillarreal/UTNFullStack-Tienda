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
      <p className="skuProduct">Stock: {quantityProduct}</p>
    </div>
  );
};
export default Product;
