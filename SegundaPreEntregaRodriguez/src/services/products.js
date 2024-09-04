export async function getAllProducts() {
  return await fetch("https://dummyjson.com/products").then((res) =>
    res.json()
  );
}
