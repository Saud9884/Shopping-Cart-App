import { useEffect, useState } from "react";
import { Oval, TailSpin } from "react-loader-spinner";
import ProductTiles from "../components/product-tiles";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  async function fetchData() {
    try {
      setLoading(true);
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();

      if (data) {
        setLoading(false);
        setProducts(data);
      }
    } catch (error) {
      console.log("Error:", error);
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      {loading ? (
        <div className="min-h-screen w-full flex justify-center items-center">
          <Oval
            height={"120"}
            width={"120"}
            color="rgb(127,29,29)"
            visible={true}
          />
        </div>
      ) : (
        <div className="min-h-[80vh] grid sm:grid-cols-2 md:grid-cols-3  lg:grid-cols-4 max-w-6xl mx-auto p-3">
          {products && products.length
            ? products.map((productItems) => (
                <ProductTiles product={productItems} />
              ))
            : null}
        </div>
      )}
    </div>
  );
}
