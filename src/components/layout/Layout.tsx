import { Header } from "./Header";
import { Footer } from "./Footer";
import { ConsultationWidget } from "@/components/shared/ConsultationWidget";
import { WhatsAppWidget } from "@/components/shared/WhatsAppWidget";

interface LayoutProps {
  children: React.ReactNode;
  showConsultationWidget?: boolean;
  showWhatsAppWidget?: boolean;
}

export function Layout({ children, showConsultationWidget = true, showWhatsAppWidget = true }: LayoutProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
      {showWhatsAppWidget ? <WhatsAppWidget /> : null}
      {showConsultationWidget ? <ConsultationWidget /> : null}
    </div>
  );
}
