import { useState } from "react";

export function ConsultationWidget() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {open && (
        <div className="card-soft w-[min(90vw,22rem)] p-4 shadow-md transition-all duration-200">
          <div className="flex items-center justify-between">
            <p className="text-sm font-semibold text-foreground">Available Free CA Consultation</p>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="text-xs text-muted-foreground hover:text-foreground"
              aria-label="Close consultation form"
            >
              Close
            </button>
          </div>
          <form className="mt-4 space-y-3">
            <div>
              <label className="text-xs font-semibold text-muted-foreground">
                Name
              </label>
              <input
                type="text"
                placeholder="Your name"
                className="mt-2 w-full rounded-xl border border-border bg-white px-3 py-2 text-sm outline-none focus:border-primary"
              />
            </div>
            <div>
              <label className="text-xs font-semibold text-muted-foreground">
                Email
              </label>
              <input
                type="email"
                placeholder="name@company.com"
                className="mt-2 w-full rounded-xl border border-border bg-white px-3 py-2 text-sm outline-none focus:border-primary"
              />
            </div>
            <div>
              <label className="text-xs font-semibold text-muted-foreground">
                Phone
              </label>
              <input
                type="tel"
                placeholder="+91 XXXXX XXXXX"
                className="mt-2 w-full rounded-xl border border-border bg-white px-3 py-2 text-sm outline-none focus:border-primary"
              />
            </div>
            <div>
              <label className="text-xs font-semibold text-muted-foreground">
                Query
              </label>
              <textarea
                rows={3}
                placeholder="Tell us a bit about your needs"
                className="mt-2 w-full rounded-xl border border-border bg-white px-3 py-2 text-sm outline-none focus:border-primary"
              />
            </div>
            <button type="submit" className="btn-primary w-full">
              Submit
            </button>
          </form>
        </div>
      )}

      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className="min-w-[14rem] rounded-full bg-primary px-4 py-3 text-[11px] font-semibold text-primary-foreground shadow-md transition-transform hover:-translate-y-0.5"
        aria-expanded={open}
      >
        Available Free CA Consultation
      </button>
    </div>
  );
}
