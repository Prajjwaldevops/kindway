import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Card, CardContent } from "@/components/ui/Card";
import { blogPosts } from "@/lib/data/blogPosts";
import { Calendar } from "lucide-react";

export function BlogPreview() {
    const recentBlogs = blogPosts.slice(0, 3);

    return (
        <section className="py-24 bg-white relative">
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl pointer-events-none" />
            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <span className="text-accent font-semibold tracking-wider text-sm uppercase mb-2 block">Kindway</span>
                    <h2 className="text-3xl md:text-5xl font-display font-bold text-gray-900 mb-6">
                        Recent Activities
                    </h2>
                    <p className="text-gray-600 text-lg">
                        Stay updated with our latest insights, case studies, and upcoming events in the world of advanced dentistry.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                    {recentBlogs.map((post) => (
                        <Card key={post.slug} className="group border-gray-100 hover:border-primary/20 bg-gray-50/50 hover:bg-white transition-all duration-300">
                            <div className="relative h-56 w-full overflow-hidden rounded-t-2xl">
                                <Image
                                    src={post.image}
                                    alt={post.title}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-semibold text-primary">
                                    {post.category}
                                </div>
                            </div>
                            <CardContent className="p-8">
                                <div className="flex justify-between items-center text-xs text-gray-500 mb-4">
                                    <div className="flex items-center gap-1.5">
                                        <Calendar size={14} />
                                        {post.date}
                                    </div>
                                    <span className="font-medium text-primary">{post.author}</span>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">{post.title}</h3>
                                <p className="text-gray-600 mb-6 line-clamp-3 text-sm">
                                    {post.excerpt}
                                </p>
                                <Link href={`/blog/${post.slug}`}>
                                    <span className="text-primary font-medium hover:text-accent transition-colors flex items-center gap-2 text-sm">
                                        Read More <span>→</span>
                                    </span>
                                </Link>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                <div className="text-center">
                    <Link href="/blog">
                        <Button variant="secondary" size="lg">View All Activities</Button>
                    </Link>
                </div>
            </div>
        </section>
    );
}
