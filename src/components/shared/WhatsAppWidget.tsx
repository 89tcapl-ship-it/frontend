import { MessageCircle } from "lucide-react";

export function WhatsAppWidget() {
  return (
    <a
      href="https://wa.me/917019557994?text=Hi%2089TCA,%20I%20would%20like%20to%20enquire%20about%20your%20services."
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-20 right-4 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-[#25d366] text-white shadow-[0_8px_18px_rgba(37,211,102,0.18)] transition-transform hover:-translate-y-0.5 hover:scale-105 sm:bottom-20 sm:right-6 sm:h-14 sm:w-14"
      aria-label="Chat with us on WhatsApp"
      title="Chat with us on WhatsApp"
    >
      <MessageCircle className="h-6 w-6 stroke-[2.1] sm:h-7 sm:w-7" />
    </a>
  );
}
