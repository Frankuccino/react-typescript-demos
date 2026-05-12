import { useState, useEffect } from "react";

type Product = {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
};

const Product = () => {
  const [data, setData] = useState<Product | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Controller to cancel the request if component unmounts
    const controller = new AbortController();

    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch("https://dummyjson.com/product/1", {
          signal: controller.signal,
        });

        if (!response.ok) throw new Error("Failed to fetch product");

        const result: Product = await response.json();
        setData(result);
      } catch (err) {
        if (err instanceof Error && err.name !== "AbortError") {
          setError(err.message);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();
    return () => controller.abort(); // Cleanup function
  }, []);

  // 1. Guard Clause for Loading
  if (loading) return <p>⌛ Loading product data...</p>;

  // 2. Guard Clause for Errors
  if (error) return <p style={{ color: "red" }}>❌ Error: {error}</p>;

  // 3. Main Render (using Destructuring)
  if (!data) return null;

  const { title, description, price, thumbnail } = data;

  return (
    <>
      <h1>Product Details</h1>
      <section
        style={{
          border: "1px solid #ddd",
          padding: "20px",
          borderRadius: "8px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <figure
          style={{
            border: "2px solid #1a1a22",
            borderRadius: "10px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "30px",
            maxWidth: "300px",
          }}
        >
          <img
            src={thumbnail}
            alt={title}
            style={{ width: "200px", borderRadius: "4px" }}
          />
          <figcaption>
            <h2>{title}</h2>
            <p>{description}</p>
            <p>
              <strong>Price:</strong> ${price}
            </p>
          </figcaption>
        </figure>
      </section>
    </>
  );
};

export default Product;
