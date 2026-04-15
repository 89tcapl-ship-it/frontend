import { Header } from "./Header";
import { Footer } from "./Footer";
import { ConsultationWidget } from "@/components/shared/ConsultationWidget";

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
      <ConsultationWidget />
    </div>
  );
}
