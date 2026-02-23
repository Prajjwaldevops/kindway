import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Card, CardContent } from "@/components/ui/Card";
import { products } from "@/lib/data/products";

export function ProductsShowcase() {
    const featuredProducts = products.slice(0, 3);

    return (
        <section className="py-24 bg-background">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
                    <div className="max-w-2xl">
                        <span className="text-accent font-semibold tracking-wider text-sm uppercase mb-2 block">What Sets Us Apart</span>
                        <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-6">
                            Pioneering Products
                        </h2>
                        <p className="text-muted-foreground text-lg">
                            We engineer and manufacture high-performance dental implants, biomaterials, and advanced chairside solutions designed to offer superior functionality, reliability, and patient comfort.
                        </p>
                    </div>
                    <Link href="/products" className="shrink-0">
                        <Button variant="outline" size="lg">
                            View All Products
                        </Button>
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {featuredProducts.map((product) => (
                        <Card key={product.slug} className="group flex flex-col h-full border-card-border hover:border-primary/30 bg-muted hover:bg-card transition-colors duration-300">
                            <div className="relative h-64 w-full overflow-hidden rounded-t-2xl">
                                <Image
                                    src={product.image}
                                    alt={product.name}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                            </div>
                            <CardContent className="p-8 flex flex-col flex-grow">
                                <div className="text-xs font-semibold text-accent uppercase tracking-wider mb-2">
                                    {product.category.replace("-", " ")}
                                </div>
                                <h3 className="text-2xl font-bold text-foreground mb-3">{product.name}</h3>
                                <p className="text-muted-foreground mb-8 flex-grow">
                                    {product.shortDescription}
                                </p>
                                <Link href={`/products/${product.slug}`} className="mt-auto block w-full">
                                    <Button variant="secondary" className="w-full group-hover:bg-primary group-hover:text-white transition-colors">
                                        View Details
                                    </Button>
                                </Link>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
