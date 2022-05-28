import { useState, useRef } from "react";

const Product = ({
  imgProduct,
  nameProduct,
  descriptionProduct,
  priceProduct,
  skuProduct,
  quantityProduct,
}) => {
  const [sold, setSold] = useState(false);
  const imageProd = useRef();
  const selling = () => {
    setSold(true);
    const element = imageProd.current;
    element.classList.add("soldout");
  };

  return (
    <div className="product">
      <img
        ref={imageProd}
        src={imgProduct}
        alt={nameProduct}
        className="imageProduct"
      />
      <h2 className="nameProduct">{nameProduct}</h2>
      <p className="descriptionProduct">{descriptionProduct}</p>
      <p className="priceProduct">{priceProduct}</p>
      <p className="skuProduct">SKU: {skuProduct}</p>
      {/* <p className="quantityProduct">Stock: {quantityProduct}</p> */}
      {!sold && (
        <button className="buyButton" id="buyButton" onClick={selling}>
          Comprar
        </button>
      )}
      {sold && <div className="thankyou">¡Muchas gracias por su compra!</div>}
    </div>
  );
};
export default Product;
