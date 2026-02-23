import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Calendar, MapPin, Users } from "lucide-react";
import { workshops } from "@/lib/data/workshops";

export function TrainingSection() {
    const upcomingWorkshops = workshops.slice(0, 2);

    return (
        <section className="py-24 bg-muted relative overflow-hidden">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
                    <div className="max-w-2xl">
                        <span className="text-accent font-semibold tracking-wider text-sm uppercase mb-2 block">What Sets Us Apart</span>
                        <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-6">
                            Training and Education
                        </h2>
                        <p className="text-muted-foreground text-lg">
                            At Kindway Biorezens, we believe that excellence in dentistry is built on continuous learning. We invest in the growth of dental professionals by offering advanced, practice-oriented training.
                        </p>
                    </div>
                    <Link href="/training" className="shrink-0">
                        <Button variant="outline" size="lg">
                            View All Courses
                        </Button>
                    </Link>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {upcomingWorkshops.map((workshop) => (
                        <div key={workshop.slug} className="bg-card border border-card-border hover:shadow-xl transition-shadow duration-300 rounded-3xl overflow-hidden group flex flex-col sm:flex-row">
                            <div className="relative w-full sm:w-2/5 h-64 sm:h-auto overflow-hidden">
                                <Image
                                    src={workshop.image}
                                    alt={workshop.title}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                            </div>
                            <div className="p-8 sm:w-3/5 flex flex-col justify-between space-y-4">
                                <div>
                                    <Badge className="mb-4">{workshop.category}</Badge>
                                    <h3 className="text-xl font-bold text-foreground leading-tight mb-2">
                                        {workshop.title}
                                    </h3>
                                </div>

                                <div className="space-y-3 text-sm text-muted-foreground">
                                    <div className="flex items-center gap-2">
                                        <Calendar size={16} className="text-primary" />
                                        <span>{workshop.date}</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <MapPin size={16} className="text-primary" />
                                        <span>{workshop.location}</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Users size={16} className="text-primary" />
                                        <span>{workshop.instructor}</span>
                                    </div>
                                </div>

                                <div className="pt-4 flex items-center justify-between border-t border-card-border">
                                    <span className="text-sm font-medium text-accent">
                                        {workshop.seatsLeft} seats left
                                    </span>
                                    <Link href={`/register?workshop=${workshop.slug}`}>
                                        <Button variant="ghost" size="sm" className="font-semibold px-0 hover:bg-transparent hover:text-primary-dark group">
                                            Register Now
                                            <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
