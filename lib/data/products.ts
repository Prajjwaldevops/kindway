export interface Product {
    slug: string;
    name: string;
    category: string;
    image: string;
    shortDescription: string;
    fullDescription: string;
    specifications: {
        diameter?: string;
        length?: string;
        material?: string;
        [key: string]: string | undefined;
    };
    clinicalIndications: string[];
    relatedWorkshops: string[];
}

export const products: Product[] = [
    {
        slug: "tapered-dental-implant",
        name: "Tapered Dental Implant",
        category: "dental-implants",
        image: "/images/bg2.jpg",
        shortDescription: "High-performance dental implant engineered for superior primary stability.",
        fullDescription: "Our Tapered Dental Implants are designed to offer superior functionality, reliability, and patient comfort. Blending evidence-based design with advanced manufacturing, they ensure optimal biological compatibility, long-term clinical stability, and seamless integration into modern dental practice.",
        specifications: {
            diameter: "3.5-6.0mm",
            length: "8-16mm",
            material: "Grade 4 Titanium",
        },
        clinicalIndications: [
            "Single tooth replacement",
            "Multiple tooth replacement",
            "Full arch rehabilitation",
            "Immediate loading protocols",
        ],
        relatedWorkshops: ["implant-surgery-fundamentals"],
    },
    {
        slug: "synthetic-bone-graft",
        name: "Synthetic Bone Graft Particulate",
        category: "bone-grafts",
        image: "/images/bg3.jpg",
        shortDescription: "Biocompatible and osteoconductive scaffold for predictable bone regeneration.",
        fullDescription: "Kindway Biorezens' synthetic bone graft substitutes are crafted to deliver excellent osteoconductivity and handling characteristics. Designed for ease of use in diverse surgical scenarios, it resorbs predictably, allowing newly formed bone to gradually replace the graft material.",
        specifications: {
            "pore-size": "300-500µm",
            "resorption-time": "6-12 months",
            material: "B-Tricalcium Phosphate (B-TCP)",
        },
        clinicalIndications: [
            "Extraction socket preservation",
            "Sinus floor elevation",
            "Ridge augmentation",
            "Periodontal defects",
        ],
        relatedWorkshops: ["tissue-augmentation-masterclass"],
    },
    // Adding placeholder products based on company context "Dental implants, biomaterials, surgical kits"
    {
        slug: "advanced-surgical-kit",
        name: "Advanced Surgical Kit",
        category: "surgical-kits",
        image: "/images/b1.jpg",
        shortDescription: "Comprehensive instrument set for precise implant site preparation.",
        fullDescription: "The Advanced Surgical Kit is meticulously organized to streamline surgical workflows. It features color-coded drills, precise depth gauges, and ergonomic drivers, all optimized for our implant systems to ensure accurate, safe, and efficient procedures.",
        specifications: {
            material: "Medical-grade Stainless Steel",
            compatibility: "Universal for Kindway Implants",
        },
        clinicalIndications: ["Implant osteotomy preparation", "Prosthetic delivery"],
        relatedWorkshops: ["implant-surgery-fundamentals"],
    }
];
