import type { Metadata } from "next";
import { blogPosts } from "@/lib/data/blogPosts";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Calendar, User, ChevronLeft } from "lucide-react";

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
    const post = blogPosts.find((p) => p.slug === params.slug);
    if (!post) return { title: "Post Not Found" };

    return {
        title: `${post.title} | Kindway BioReZens Blog`,
        description: post.excerpt,
    };
}

export async function generateStaticParams() {
    return blogPosts.map((post) => ({
        slug: post.slug,
    }));
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
    const post = blogPosts.find((p) => p.slug === params.slug);

    if (!post) {
        notFound();
    }

    return (
        <article className="bg-background min-h-screen pb-24">
            {/* Blog Hero */}
            <header className="relative w-full h-[50vh] min-h-[400px]">
                <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent" />

                <div className="absolute bottom-0 left-0 right-0 p-8 md:p-16">
                    <div className="container mx-auto max-w-4xl">
                        <Link href="/blog" className="inline-flex items-center text-blue-200 hover:text-white transition-colors mb-6 text-sm font-medium">
                            <ChevronLeft size={16} className="mr-1" /> Back to all articles
                        </Link>

                        <div className="mb-4">
                            <span className="bg-accent/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-semibold text-white">
                                {post.category}
                            </span>
                        </div>

                        <h1 className="text-3xl md:text-5xl font-display font-bold text-white mb-6 leading-tight">
                            {post.title}
                        </h1>

                        <div className="flex flex-wrap items-center gap-6 text-blue-100 text-sm font-medium">
                            <div className="flex items-center gap-2">
                                <User size={16} className="text-accent" />
                                {post.author}
                            </div>
                            <div className="flex items-center gap-2">
                                <Calendar size={16} className="text-accent" />
                                {post.date}
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            {/* Content */}
            <div className="container mx-auto px-4 md:px-6 pt-16">
                <div className="max-w-3xl mx-auto">
                    <p className="text-xl text-muted-foreground leading-relaxed font-medium mb-10 border-l-4 border-accent pl-6 italic">
                        &quot;{post.excerpt}&quot;
                    </p>

                    <div className="prose prose-lg prose-blue dark:prose-invert max-w-none text-foreground/80">
                        {post.content.split('\n\n').map((paragraph, index) => (
                            <p key={index} className="mb-6 leading-loose">
                                {paragraph}
                            </p>
                        ))}
                    </div>

                    <hr className="my-16 border-card-border" />

                    <div className="text-center">
                        <h3 className="text-xl font-bold text-foreground mb-6">Share this article</h3>
                        <div className="flex justify-center gap-4">
                            <button className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center hover:bg-primary hover:text-white transition-colors">f</button>
                            <button className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center hover:bg-primary hover:text-white transition-colors">in</button>
                            <button className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center hover:bg-primary hover:text-white transition-colors">t</button>
                        </div>
                    </div>
                </div>
            </div>
        </article>
    );
}
