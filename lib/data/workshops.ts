export interface Workshop {
    slug: string;
    title: string;
    date: string;
    location: string;
    instructor: string;
    seatsLeft: number;
    price: number;
    category: "Implant Surgery" | "Tissue Augmentation" | "Bone Grafting" | "Full Arch Rehabilitation";
    image: string;
    description: string;
}

export const workshops: Workshop[] = [
    {
        slug: "implant-surgery-fundamentals",
        title: "Dental Implant Training/Workshop - Only for Dentists",
        date: "Dec 22, 2026",
        location: "Kindway Training Center, India",
        instructor: "Prof. Rajesh Bansal",
        seatsLeft: 5,
        price: 15000,
        category: "Implant Surgery",
        image: "/images/b1.jpg",
        description: "Join our exclusive Dental Implant Training/Workshop, tailored solely for Dentists. Elevate your expertise with hands-on learning, expert guidance, and cutting-edge techniques."
    },
    {
        slug: "tissue-augmentation-masterclass",
        title: "Tissue Augmentation Training/Workshop/Course",
        date: "Jan 16-22, 2027",
        location: "Kindway Training Center, India",
        instructor: "Prof. Monika Bansal",
        seatsLeft: 12,
        price: 25000,
        category: "Tissue Augmentation",
        image: "/images/b3.jpg",
        description: "Enroll in our Tissue Augmentation Training designed for dental professionals. Explore advanced techniques, hands-on practice, and expert insights in tissue augmentation."
    }
];
