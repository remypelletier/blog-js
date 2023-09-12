import type { GetServerSideProps, Metadata } from "next";
import { Navbar } from "../../components/Navbar";
import Providers from "../../components/Providers";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Blog",
  description: "Remsapp Blog",
};

export default async function AppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Providers>
      <Navbar />
      <div className="pt-14">{children}</div>
      <Footer />
    </Providers>
  );
}
