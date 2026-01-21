import { useEffect, useState } from "react";
import api from "@/lib/api";

interface Settings {
  siteName: string;
  companyInfo?: {
    cin: string;
    incorporationDate: string;
    status: string;
  };
}

export function StatsSection() {
  const [settings, setSettings] = useState<Settings | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSettings = async () => {
      try {
        const response: any = await api.get('/settings');
        setSettings(response.data);
      } catch (error) {
        console.error('Failed to fetch settings:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchSettings();
  }, []);

  const stats = [
    { label: "CIN", value: settings?.companyInfo?.cin || "U69201KA2025PTC213011" },
    { label: "Incorporated", value: settings?.companyInfo?.incorporationDate || "23 Dec 2025" },
    { label: "Status", value: settings?.companyInfo?.status || "Active" },
  ];

  return (
    <section className="bg-foreground">
      <div className="container-custom py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="text-center md:text-left p-4 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <p className="text-sm font-medium text-background/60 uppercase tracking-wider mb-1">
                {stat.label}
              </p>
              {loading ? (
                <div className="h-6 w-48 bg-background/20 animate-pulse rounded" />
              ) : (
                <p className="text-lg md:text-xl font-semibold text-background">
                  {stat.value}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
