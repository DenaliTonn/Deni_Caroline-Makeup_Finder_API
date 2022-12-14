import { useEffect, useState } from "react";
import "./styles.css";
import Title from "./Title.js";
import EntryBrand from "./EntryBrand.js";
import EntryProduct from "./EntryProduct.js";
import Info from "./Info.js";

export default function App() {
  const [brand, setBrand] = useState("");
  const [productType, setProduct] = useState("");
  const [data, setData] = useState("");

  useEffect(() => {
    if (!brand && !productType) {
      return;
    }
    const makeup = encodeURIComponent(brand.toLowerCase());
    const makeupType = encodeURIComponent(productType.toLowerCase());
    const url = `https://makeup-api.herokuapp.com/api/v1/products.json?brand=${makeup}&product_type=${makeupType}`;
    console.log(url);
    fetch(url)
      .then((r) => r.json())
      .then((r) => setData(r))
      .catch((e) => setData(e));
  }, [brand, productType]);

  return (
    <div className="App">
      <header>
        <Title text="Makeup Finder" />
      </header>
      <div class="div2">
        <section>
          <EntryBrand action={setBrand} />
          <EntryProduct action={setProduct} />
        </section>
      </div>
      <div class="div3">
        <Info brand={brand} productType={productType} data={data} />
      </div>
    </div>
  );
}
