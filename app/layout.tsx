import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ContactBar } from "@/components/sections/ContactBar";
import { ChatWidgets } from "@/components/ChatWidgets";
import { Chatbot } from "@/components/Chatbot";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Kindway BioReZens — Dental Implants & Training India",
  description:
    "Advanced dental implants, biomaterials, and expert dental training workshops by Kindway BioReZens in India.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${poppins.variable} font-sans antialiased min-h-screen flex flex-col bg-[#0A0F1E] text-[#F9FAFB]`}
      >
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
        <ContactBar />
        <ChatWidgets />
        <Chatbot />
      </body>
    </html>
  );
}
