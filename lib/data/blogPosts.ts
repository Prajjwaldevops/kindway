export interface BlogPost {
    slug: string;
    title: string;
    date: string;
    category: string;
    author: string;
    excerpt: string;
    content: string;
    image: string;
}

export const blogPosts: BlogPost[] = [
    {
        slug: "how-dental-implants-work",
        title: "How Dental Implants Work",
        date: "Oct 15, 2026",
        category: "Education",
        author: "Kindway Biorezens",
        excerpt: "A comprehensive guide to understanding the mechanics and success rates of modern dental implants.",
        content: "Dental implants are the gold standard for tooth replacement. They consist of a titanium post surgically placed into the jawbone, acting as an artificial root. This biologically compatible approach ensures maximum stability and mimics the function of natural teeth.",
        image: "/images/b1.jpg"
    },
    {
        slug: "importance-of-bone-grafts",
        title: "Importance of Bone Grafts in Implant Success",
        date: "Nov 02, 2026",
        category: "Clinical Insights",
        author: "Kindway Biorezens",
        excerpt: "Why sufficient bone volume is critical and how advanced biomaterials ensure long-term stability.",
        content: "When a tooth is lost, the surrounding bone begins to resorb. To ensure successful implant placement, adequate bone volume is required. Our synthetic bone grafts provide an osteoconductive scaffold to regenerate lost bone, preparing the site for a stable implant.",
        image: "/images/b2.jpg"
    },
    {
        slug: "tips-for-implant-surgery-planning",
        title: "Tips for Implant Surgery Planning",
        date: "Nov 20, 2026",
        category: "Best Practices",
        author: "Kindway Biorezens",
        excerpt: "Essential steps for clinicians to ensure predictable and safe implant surgeries.",
        content: "Proper treatment planning is the foundation of implant dentistry. From initial CBCT analysis to selecting the appropriate implant size and evaluating the surgical site, meticulous planning minimizes complications and ensures excellent long-term outcomes.",
        image: "/images/b3.jpg"
    },
    {
        slug: "case-studies-workshops",
        title: "Case Studies from Our Workshops",
        date: "Dec 05, 2026",
        category: "Case Studies",
        author: "Kindway Biorezens",
        excerpt: "Real-world clinical scenarios and outcomes from our recent hands-on training sessions.",
        content: "In our latest advanced implantology workshop, attendees navigated complex cases ranging from immediate loading to full arch rehabilitation. These real-world applications underscore the effectiveness of hands-on learning.",
        image: "/images/b4.jpg"
    },
    {
        slug: "understanding-tissue-augmentation",
        title: "Understanding Tissue Augmentation Techniques",
        date: "Dec 22, 2026",
        category: "Clinical Insights",
        author: "Kindway Biorezens",
        excerpt: "Exploring methods to enhance soft and hard tissue for optimal aesthetic and functional results.",
        content: "Tissue augmentation is pivotal in achieving both functional stability and aesthetic excellence in modern implantology. From guided bone regeneration to soft tissue grafts, mastering these techniques enhances the overall patient outcome.",
        image: "/images/b5.jpg"
    }
];
