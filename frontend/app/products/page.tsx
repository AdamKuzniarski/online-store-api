const products = [
  { id: 1, name: "Iphone", price: 100 },
  { id: 2, name: "Bildschirm", price: 150 },
  { id: 3, name: "Bier", price: 2 },
];

export default function ProductsPage() {
  return (
    <main className="min-h-screen max-w-3xl mx-auto p-8">
      <h1 className="text-3xl font-extrabold mb-6">Produkte - statish!</h1>

      <ul>
        {products.map((product) => {
          product;
          return (
            <li key={product.id} className="grid gap-4 sm:grid-cols-2">
              <h2>{product.name}</h2>
              <span>{product.price}€</span>
            </li>
          );
        })}
      </ul>
    </main>
  );
}
