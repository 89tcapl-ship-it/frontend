import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/home/HeroSection";
import { ServicesPreview } from "@/components/home/ServicesPreview";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { CTABanner } from "@/components/home/CTABanner";
import { SEO } from "@/hooks/useSEO";

const Index = () => {
  return (
    <Layout>
      <SEO
        title="89T Corporate Advisors | Company Registration, MCA Compliance & Business Advisory in Bangalore"
        description="Expert corporate advisory services for startups and growing businesses. Specializing in company registration, MCA compliance, GST, income tax filing, and business advisory services in Bangalore, Karnataka."
        keywords="company registration Bangalore, MCA compliance, GST services, income tax filing, business advisory, corporate advisors, startup registration, ROC filing, private limited company, LLP registration"
      />
      <HeroSection />
      <ServicesPreview />
      <WhyChooseUs />
      <CTABanner />
    </Layout>
  );
};

export default Index;
