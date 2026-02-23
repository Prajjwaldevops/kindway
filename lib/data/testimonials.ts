export interface Testimonial {
    id: string;
    name: string;
    designation: string;
    location: string;
    quote: string;
    rating: number;
}

export const testimonials: Testimonial[] = [
    {
        id: "1",
        name: "Dr. Ananya Sharma",
        designation: "Implantologist",
        location: "New Delhi",
        quote: "Kindway Biorezens' implants have completely transformed my clinical workflow. The primary stability is exceptional, and my patients experience minimal postoperative discomfort.",
        rating: 5
    },
    {
        id: "2",
        name: "Dr. Rahul Verma",
        designation: "Oral Surgeon",
        location: "Mumbai",
        quote: "The advanced surgical kit is highly intuitive. The quality of the instruments and the precision they offer make complex osteotomies straightforward and predictable.",
        rating: 5
    },
    {
        id: "3",
        name: "Dr. Priya Patel",
        designation: "Periodontist",
        location: "Ahmedabad",
        quote: "I've been using their synthetic bone graft for over a year now. The handling characteristics are superb, and the radiographic outcomes after 6 months are consistently excellent.",
        rating: 5
    },
    {
        id: "4",
        name: "Dr. Siddharth Rao",
        designation: "Prosthodontist",
        location: "Bangalore",
        quote: "Attended the tissue augmentation masterclass by Prof. Bansal. The hands-on sessions and clinical insights were invaluable. Truly a world-class educational experience.",
        rating: 5
    }
];
