import { useState, useEffect } from "react";
import { getAllProducts } from "../services/products";

export const useProducts = () => {
  const [dataProducts, setDataProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    getAllProducts()
      .then((resp) => setDataProducts(resp.products))
      .catch(console.log)
      .finally(setLoading(false));
  }, []);
  return { dataProducts, loading };
};
