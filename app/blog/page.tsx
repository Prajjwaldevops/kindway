import type { Metadata } from "next";
import { blogPosts } from "@/lib/data/blogPosts";
import { Card, CardContent } from "@/components/ui/Card";
import { CTABanner } from "@/components/sections/CTABanner";
import Image from "next/image";
import Link from "next/link";
import { Calendar } from "lucide-react";

export const metadata: Metadata = {
    title: "Blog & Activities | Kindway BioReZens",
    description: "Read the latest insights, news, and case studies from the world of dental implantology.",
};

export default function BlogPage() {
    const featuredPost = blogPosts[0];
    const regularPosts = blogPosts.slice(1);

    return (
        <>
            <section className="bg-primary py-20 md:py-32 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/images/b4.jpg')] bg-cover bg-center opacity-20 mix-blend-overlay"></div>
                <div className="container mx-auto px-4 relative z-10 text-center">
                    <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-6">Blog & Activities</h1>
                    <p className="text-xl text-blue-100 max-w-2xl mx-auto">
                        Insights, clinical case studies, and the latest news from Kindway BioReZens.
                    </p>
                </div>
            </section>

            <section className="py-24 bg-muted">
                <div className="container mx-auto px-4 md:px-6">
                    {/* Featured Post */}
                    <div className="mb-16">
                        <h2 className="text-2xl font-bold text-foreground mb-8 border-b border-card-border pb-4">Featured Article</h2>
                        <Link href={`/blog/${featuredPost.slug}`} className="group block">
                            <div className="bg-card rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 flex flex-col md:flex-row border border-card-border">
                                <div className="relative w-full md:w-1/2 h-72 md:h-auto overflow-hidden">
                                    <Image
                                        src={featuredPost.image}
                                        alt={featuredPost.title}
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                                    />
                                    <div className="absolute top-4 left-4 bg-card/90 dark:bg-slate-800/90 backdrop-blur-md px-4 py-1.5 rounded-full text-sm font-semibold text-primary">
                                        {featuredPost.category}
                                    </div>
                                </div>
                                <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                                    <div className="flex items-center gap-1.5 text-sm text-muted-foreground mb-4">
                                        <Calendar size={16} />
                                        {featuredPost.date}
                                        <span className="mx-2">•</span>
                                        <span className="font-medium text-primary">{featuredPost.author}</span>
                                    </div>
                                    <h3 className="text-3xl font-display font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                                        {featuredPost.title}
                                    </h3>
                                    <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                                        {featuredPost.excerpt}
                                    </p>
                                    <span className="text-primary font-medium flex items-center gap-2 group-hover:text-accent transition-colors">
                                        Read Full Article <span className="group-hover:translate-x-1 transition-transform">→</span>
                                    </span>
                                </div>
                            </div>
                        </Link>
                    </div>

                    <h2 className="text-2xl font-bold text-foreground mb-8 border-b border-card-border pb-4">Recent Posts</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {regularPosts.map((post) => (
                            <Card key={post.slug} className="group border-card-border hover:border-primary/20 bg-card transition-all duration-300 h-full flex flex-col">
                                <div className="relative h-56 w-full overflow-hidden rounded-t-2xl">
                                    <Image
                                        src={post.image}
                                        alt={post.title}
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                    <div className="absolute top-4 left-4 bg-card/90 dark:bg-slate-800/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-semibold text-primary">
                                        {post.category}
                                    </div>
                                </div>
                                <CardContent className="p-8 flex flex-col flex-grow">
                                    <div className="flex justify-between items-center text-xs text-muted-foreground mb-4">
                                        <div className="flex items-center gap-1.5">
                                            <Calendar size={14} />
                                            {post.date}
                                        </div>
                                    </div>
                                    <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors line-clamp-2">
                                        {post.title}
                                    </h3>
                                    <p className="text-muted-foreground mb-6 line-clamp-3 text-sm flex-grow">
                                        {post.excerpt}
                                    </p>
                                    <Link href={`/blog/${post.slug}`} className="mt-auto">
                                        <span className="text-primary font-medium hover:text-accent transition-colors flex items-center gap-2 text-sm group-hover:translate-x-1 duration-300">
                                            Read More <span>→</span>
                                        </span>
                                    </Link>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            <CTABanner
                title="Stay Informed"
                subtitle="Subscribe to our newsletter to receive the latest clinical insights directly in your inbox."
                primaryCTA={{ text: "Subscribe Now", href: "#" }}
            />
        </>
    );
}
