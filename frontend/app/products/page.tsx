const products = [
  { id: 1, name: "Iphone", price: 100 },
  { id: 2, name: "Bildschirm", price: 150 },
  { id: 3, name: "Bier", price: 2 },
];

export default function ProductsPage() {
  return (
    <main className="min-h-screen max-w-3xl mx-auto p-8">
      <h1 className="text-3xl font-extrabold mb-6">Produkte - statish!</h1>

      <ul className="grid gap-4 sm:grid-cols-2">
        {products.map((product) => {
          product;
          return (
            <li
              className="rounded-xl border border-slate-700 p-4 flex flex-col gap-2"
              key={product.id}
            >
              <h2 className="text-xl font-semibold">{product.name}</h2>
              <span className="text-sm text-slate-400">{product.price}€</span>
            </li>
          );
        })}
      </ul>
    </main>
  );
}
