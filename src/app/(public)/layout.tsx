import Footer from "@/components/footer";
import Header from "@/components/header";

export default function PublicLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main className="flex flex-col items-center justify-center min-h-screen mt-20">{children}</main>
      <Footer />
    </>
  );
}
