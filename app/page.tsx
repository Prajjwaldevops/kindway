import { HeroSlider } from "@/components/sections/HeroSlider";
import { MissionVision } from "@/components/sections/MissionVision";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { ProductsShowcase } from "@/components/sections/ProductsShowcase";
import { TrainingSection } from "@/components/sections/TrainingSection";
import { StatsSection } from "@/components/sections/StatsSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { BlogPreview } from "@/components/sections/BlogPreview";
import { CTABanner } from "@/components/sections/CTABanner";

export default function Home() {
  return (
    <>
      <HeroSlider />
      <MissionVision />
      <WhyChooseUs />
      <ProductsShowcase />
      <TrainingSection />
      <StatsSection />
      <TestimonialsSection />
      <BlogPreview />

      {/* Newsletter Signup / Final CTA for Homepage */}
      <CTABanner
        title="Ready to Elevate Your Dental Practice?"
        subtitle="Connect with us to gain access to world-class biomaterials, continuous educational workshops, and exclusive premium support."
        primaryCTA={{ text: "Book Your Workshop Today", href: "/register" }}
        secondaryCTA={{ text: "View Product Catalogue", href: "/products" }}
      />
    </>
  );
}
