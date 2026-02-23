export interface Service {
    slug: string;
    title: string;
    shortDescription: string;
    fullDescription: string;
    image: string;
    icon: string;
}

export const services: Service[] = [
    {
        slug: "dental-implants",
        title: "Dental Implants",
        shortDescription: "Advanced, reliable, and affordable dental implants.",
        fullDescription: "At Kindway Biorezens, our dental implants are engineered for superior functionality, reliability, and patient comfort. Every product undergoes rigorous testing and quality validation to ensure optimal biological compatibility, long-term clinical stability, and seamless integration into modern dental practice.",
        image: "/images/bg2.jpg",
        icon: "implant"
    },
    {
        slug: "bone-grafts",
        title: "Bone Grafts & Biomaterials",
        shortDescription: "High-performance biomaterials for predictable bone regeneration.",
        fullDescription: "We manufacture advanced biomaterials and synthetic bone graft substitutes designed for excellent osteoconductivity and handling characteristics. Ideal for everything from extraction socket preservation to complex ridge augmentation.",
        image: "/images/bg3.jpg",
        icon: "bone"
    },
    {
        slug: "mobile-dental-clinic",
        title: "Mobile Dental Clinic",
        shortDescription: "Outreach dental services for remote and marginalized communities.",
        fullDescription: "As part of our commitment to social responsibility, we actively reach underserved communities through our mobile dental clinic outreach initiatives. By bringing quality dental care directly to marginalized and remote populations, we aim to close gaps in oral healthcare access.",
        image: "/images/camp1.jpg",
        icon: "truck"
    }
];
