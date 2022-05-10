import Product from "./Components/Product";
import "./App.css";

const App = () => {
  return (
    <div className="tienda">
      <h1 className="titleStore">Catálogo de productos - TP N° 3</h1>
      <div className="container">
        <Product
          imgProduct="https://http2.mlstatic.com/D_NQ_NP_945498-MLA49272713403_032022-O.webp"
          nameProduct="Motorola Moto G200 5g 128gb 8gb Ram + Hdmi Y Control Remoto"
          descriptionProduct="Procesador Qualcomm® Snapdragon™ 888+, velocidad y desempeño increíbles. Experimentá lo último en entretenimiento y conexión, gracias al procesador ultrapotente."
          priceProduct="$ 99.999"
          skuProduct="61160524168"
          quantityProduct="5"
        />
        <Product
          imgProduct="https://http2.mlstatic.com/D_NQ_NP_665736-MLA49879371055_052022-O.webp"
          nameProduct="Samsung Galaxy S22 Ultra"
          descriptionProduct="Fotografía profesional en tu bolsillo. Descubrí infinitas posibilidades para tus fotos con las 4 cámaras principales de tu equipo. Poné a prueba tu creatividad y jugá con la iluminación diferentes planos y efectos para obtener grandes resultados."
          priceProduct="$ 210.000"
          skuProduct="723371"
          quantityProduct="8"
        />
        <Product
          imgProduct="https://http2.mlstatic.com/D_NQ_NP_889493-MLA47887162031_102021-O.webp"
          nameProduct="Samsung Galaxy Z Flip3"
          descriptionProduct="Doble cámara y más detalles. Sus 2 cámaras traseras de 12 Mpx/12 Mpx te permitirán tomar imágenes con más detalles y lograr efectos únicos como el famoso modo retrato de poca profundidad de campo."
          priceProduct="$ 139.999"
          skuProduct="723071"
          quantityProduct="2"
        />
        <Product
          imgProduct="https://http2.mlstatic.com/D_NQ_NP_796078-MLA44111139148_112020-O.webp"
          nameProduct="Samsung Galaxy Z Fold2"
          descriptionProduct="Fotografía profesional en tu bolsillo. Descubrí infinitas posibilidades para tus fotos con las 3 cámaras principales de tu equipo. Poné a prueba tu creatividad y jugá con la iluminación, diferentes planos y efectos para obtener grandes resultados."
          priceProduct="$ 259.999"
          skuProduct="SM-F916UZKATMB"
          quantityProduct="4"
        />
        <Product
          imgProduct="https://http2.mlstatic.com/D_NQ_NP_851545-MLA47777198395_102021-O.webp"
          nameProduct="Apple iPhone 13 Pro Max"
          descriptionProduct="iPhone 13 Pro Max. El mayor avance en el sistema de cámaras Pro hasta ahora. Pantalla Super Retina XDR con ProMotion que brinda una respuesta más rápida y fluida. Chip A15 Bionic para un rendimiento fuera de serie. Diseño resistente y la mayor duración de batería jamás vista en un iPhone."
          priceProduct="$ 515.000"
          skuProduct="13956"
          quantityProduct="3"
        />
        <Product
          imgProduct="https://http2.mlstatic.com/D_NQ_NP_959520-MLA46041527209_052021-O.webp"
          nameProduct="Apple iPhone 12 mini"
          descriptionProduct="El iPhone 12 mini incluye grandes funcionalidades en un diseño compacto de 5.4 pulgadas. Tiene una espectacular pantalla Super Retina XDR. Un frente de Ceramic Shield, cuatro veces más resistente a las caídas. Modo Noche en todas las cámaras, para que puedas tomar fotos increíbles con poca luz. Grabación, edición y reproducción de video HDR en Dolby Vision con calidad cinematográfica. Y el potente chip A14 Bionic."
          priceProduct="$ 309.999"
          skuProduct="IPH12M128B"
          quantityProduct="4"
        />
        <Product
          imgProduct="https://http2.mlstatic.com/D_NQ_NP_917772-MLA46164931649_052021-O.webp"
          nameProduct="Xiaomi Mi Smart Band 6"
          descriptionProduct="Con 10 años de trayectoria, Xiaomi se posiciona como uno de los líderes indiscutidos en el mercado de los smartwatches. Sus productos se destacan por la calidad, el diseño sencillo y muy buenas prestaciones. La Mi Band tiene todo lo necesario para acompañarte en tu rutina."
          priceProduct="$ 5.699"
          skuProduct="XITLMIBD600NDGND0GBKEU "
          quantityProduct="9"
        />
      </div>
    </div>
  );
};

export default App;
