import type { GetServerSideProps, Metadata } from "next";
import { Navbar } from "../../components/Navbar";
import Providers from "../../components/Providers";
import Footer from "@/components/Footer";
import { cookies } from "next/headers";

export const metadata: Metadata = {
  title: "Blog",
  description: "Remsapp Blog",
};

export default async function AppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const cookieStore = cookies();
  const token = cookieStore.get("tokenTSJS");
  const isLoggedIn = token ? true : false;

  return (
    <Providers>
      <Navbar isLoggedIn={isLoggedIn} />
      <div className="pt-14">{children}</div>
      <Footer />
    </Providers>
  );
}
