const WhatsAppIcon = ({ className = "h-6 w-6" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="currentColor">
    <path d="M20.52 3.48A11.87 11.87 0 0 0 12.06 0C5.5 0 .17 5.33.17 11.89c0 2.1.55 4.15 1.6 5.95L0 24l6.33-1.67a11.86 11.86 0 0 0 5.66 1.44h.01c6.56 0 11.89-5.33 11.89-11.89 0-3.18-1.24-6.17-3.37-8.4Zm-8.46 18.28h-.01a9.86 9.86 0 0 1-5.02-1.38l-.36-.22-3.75.99 1-3.66-.24-.38a9.85 9.85 0 0 1-1.51-5.22C2.17 6.42 6.45 2.14 11.98 2.14c2.68 0 5.2 1.04 7.08 2.92a9.7 9.7 0 0 1 2.92 6.83c0 5.53-4.28 9.87-9.92 9.87Zm5.74-7.84c-.31-.16-1.84-.91-2.13-1.01-.29-.11-.5-.16-.71.16-.21.31-.82 1.01-1 1.22-.18.21-.37.24-.68.08-.31-.16-1.31-.48-2.49-1.52-.92-.82-1.54-1.84-1.72-2.15-.18-.31-.02-.47.14-.62.15-.15.31-.37.47-.55.16-.18.21-.31.31-.52.1-.21.05-.39-.03-.55-.08-.16-.71-1.7-.97-2.34-.26-.62-.53-.54-.71-.55h-.61c-.21 0-.55.08-.84.39-.29.31-1.1 1.07-1.1 2.61 0 1.54 1.13 3.03 1.29 3.24.16.21 2.22 3.39 5.39 4.75.75.32 1.33.51 1.79.65.75.24 1.43.21 1.97.13.6-.09 1.84-.75 2.1-1.48.26-.73.26-1.36.18-1.48-.08-.11-.29-.18-.6-.34Z" />
  </svg>
);

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
      <WhatsAppIcon className="h-6 w-6 sm:h-7 sm:w-7" />
    </a>
  );
}
