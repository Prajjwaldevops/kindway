import type { Metadata } from "next";
import { products } from "@/lib/data/products";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { CTABanner } from "@/components/sections/CTABanner";
import { CheckCircle2, ChevronLeft } from "lucide-react";

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
    const product = products.find((p) => p.slug === params.slug);
    if (!product) return { title: "Product Not Found" };

    return {
        title: `${product.name} | Kindway BioReZens`,
        description: product.shortDescription,
    };
}

// Ensure static generation for all products
export async function generateStaticParams() {
    return products.map((product) => ({
        slug: product.slug,
    }));
}

export default function ProductDetailsPage({ params }: { params: { slug: string } }) {
    const product = products.find((p) => p.slug === params.slug);

    if (!product) {
        notFound();
    }

    return (
        <>
            <section className="bg-white py-12 md:py-24">
                <div className="container mx-auto px-4 md:px-6 max-w-6xl">
                    <Link href="/products" className="inline-flex items-center text-primary font-medium hover:text-accent transition-colors mb-12">
                        <ChevronLeft size={20} className="mr-2" /> Back to Products
                    </Link>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                        <div className="relative w-full h-[500px] rounded-3xl overflow-hidden glass-panel p-2 sticky top-32">
                            <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-inner">
                                <Image
                                    src={product.image}
                                    alt={product.name}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>

                        <div className="space-y-10">
                            <div>
                                <span className="text-accent font-semibold tracking-wider text-sm uppercase mb-3 block">
                                    {product.category.replace("-", " ")}
                                </span>
                                <h1 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-6 leading-tight">
                                    {product.name}
                                </h1>
                                <p className="text-xl text-gray-600 leading-relaxed">
                                    {product.fullDescription}
                                </p>
                            </div>

                            {/* Specifications */}
                            <div className="space-y-6 bg-gray-50 rounded-2xl p-8 border border-gray-100">
                                <h3 className="text-2xl font-bold text-gray-900">Specifications</h3>
                                <dl className="space-y-4">
                                    {Object.entries(product.specifications).map(([key, value]) => (
                                        <div key={key} className="flex justify-between border-b border-gray-200 pb-3 last:border-0 last:pb-0">
                                            <dt className="text-gray-500 capitalize">{key.replace("-", " ")}</dt>
                                            <dd className="font-medium text-gray-900">{value}</dd>
                                        </div>
                                    ))}
                                </dl>
                            </div>

                            {/* Clinical Indications */}
                            <div className="space-y-6">
                                <h3 className="text-2xl font-bold text-gray-900">Clinical Indications</h3>
                                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    {product.clinicalIndications.map((ind, i) => (
                                        <li key={i} className="flex items-start gap-3">
                                            <CheckCircle2 className="text-primary mt-0.5 shrink-0" size={20} />
                                            <span className="text-gray-700">{ind}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="pt-8 flex flex-col sm:flex-row gap-4">
                                <Button variant="primary" size="lg" className="w-full sm:w-auto text-lg shadow-xl hover:-translate-y-1 transition-transform">
                                    Request Quote
                                </Button>
                                <Link href="/contact" className="w-full sm:w-auto">
                                    <Button variant="outline" size="lg" className="w-full">
                                        Contact Sales
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <CTABanner
                title="Master This Product"
                subtitle={`Learn advanced protocols for using the ${product.name} in our hands-on workshops.`}
                primaryCTA={{ text: "Explore Workshops", href: "/training" }}
            />
        </>
    );
}
