import { products } from "@/components/data/productData";
import { notFound } from "next/navigation";

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const product = products.find(p => p.slug === params.slug);
  
  if (!product) {
    notFound();
  }

  return (
    <main className="min-h-screen w-full pt-20">
      <div className="container mx-auto px-4 max-w-4xl">
      </div>
    </main>
  );
}

export function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}