import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Work from "@/components/Work";

export const metadata = {
  title: "Our Work | Progen5",
  description:
    "See the websites, MVPs and products we have built for founders and startups.",
};

export default function WorkPage() {
  return (
    <>
      <Navbar />
      <Work />
      <Footer />
    </>
  );
}
