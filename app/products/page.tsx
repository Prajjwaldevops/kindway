import type { Metadata } from "next";
import { products } from "@/lib/data/products";
import { Card, CardContent } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { CTABanner } from "@/components/sections/CTABanner";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export const metadata: Metadata = {
    title: "Our Products | Kindway BioReZens",
    description: "Explore our range of advanced dental implants, biomaterials, and expert dental instruments.",
};

export default function ProductsPage() {
    return (
        <>
            <section className="bg-primary py-20 md:py-32 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/images/bg3.jpg')] bg-cover bg-center opacity-20 mix-blend-overlay"></div>
                <div className="container mx-auto px-4 relative z-10 text-center">
                    <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-6">Our Products</h1>
                    <p className="text-xl text-blue-100 max-w-2xl mx-auto">
                        High-performance dental solutions engineered for predictability and lasting clinical success.
                    </p>
                </div>
            </section>

            <section className="py-24 bg-gray-50 min-h-screen">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {products.map((product) => (
                            <Card key={product.slug} className="group flex flex-col h-full border-gray-100 hover:border-primary/20 bg-white hover:bg-white shadow-sm hover:shadow-xl transition-all duration-300">
                                <div className="relative h-64 w-full overflow-hidden rounded-t-2xl">
                                    <Image
                                        src={product.image}
                                        alt={product.name}
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-semibold text-primary">
                                        {product.category.replace("-", " ")}
                                    </div>
                                </div>
                                <CardContent className="p-8 flex flex-col flex-grow">
                                    <h3 className="text-2xl font-bold text-gray-900 mb-3">{product.name}</h3>
                                    <p className="text-gray-600 mb-8 flex-grow">
                                        {product.shortDescription}
                                    </p>
                                    <Link href={`/products/${product.slug}`} className="mt-auto block w-full">
                                        <Button variant="secondary" className="w-full group-hover:bg-primary group-hover:text-white transition-colors flex items-center justify-center gap-2">
                                            View Specifications <ChevronRight size={18} />
                                        </Button>
                                    </Link>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            <CTABanner
                title="Looking for Clinical Training?"
                subtitle="Learn how to effectively utilize our biomaterials and implant systems in our upcoming workshops."
                primaryCTA={{ text: "View Workshops", href: "/training" }}
                secondaryCTA={{ text: "Contact Support", href: "/contact" }}
            />
        </>
    );
}
