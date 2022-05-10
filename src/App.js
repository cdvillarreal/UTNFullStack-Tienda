import Product from "./Components/Product";
import "./App.css";

const App = () => {
  return (
    <div className="container">
      <Product
        imgProduct="https://cbff-teco-strapi-cms-pro.s3.amazonaws.com/Moto_G200_Morado_Hero_min_f0c58911e4.png"
        nameProduct="Motorola Moto G200 - Morado + HDMI"
        descriptionProduct="Te presentamos el Motorola Moto G200 con un procesador Octa-Core 2.95GHz para que estés al día con todas las aplicaciones y juegos de última generación. Descubrí todas las posibilidades para tus fotos, tanto de día como de noche, con la cámara de 108+13+2 Mp. Memoria interna de 128 GB."
        priceProduct="$ 99.999"
        skuProduct="61160524168"
        quantityProduct="5"
      />
      <Product
        imgProduct="https://m.media-amazon.com/images/I/61U6oC65TTL._AC_SL1500_.jpg"
        nameProduct="Samsung Galaxy S22 Ultra"
        descriptionProduct=""
        priceProduct="$ 203.999"
        skuProduct=""
        quantityProduct="8"
      />
      <Product
        imgProduct="https://http2.mlstatic.com/D_NQ_NP_889493-MLA47887162031_102021-O.webp"
        nameProduct=""
        descriptionProduct=""
        priceProduct="$ "
        skuProduct=""
        quantityProduct="2"
      />
      <Product
        imgProduct="https://http2.mlstatic.com/D_NQ_NP_796078-MLA44111139148_112020-O.webp"
        nameProduct="Samsung Galaxy Z Fold2"
        descriptionProduct=""
        priceProduct="$ "
        skuProduct=""
        quantityProduct="4"
      />
    </div>
  );
};

export default App;
