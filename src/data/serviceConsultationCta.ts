export interface ServiceConsultationCta {
  overline: string;
  title: string;
  subtitle: string;
  buttonText: string;
  buttonLink: string;
  whatsappText: string;
  whatsappLink: string;
}

export const SERVICE_CONSULTATION_CTA_SLUG = 'service-consultation-cta';

export const defaultServiceConsultationCta: ServiceConsultationCta = {
  overline: 'EXPERT GUIDANCE',
  title: 'Talk to Our CA Experts About Your Specific Needs',
  subtitle: 'From queries to execution, we guide you through each stage of compliance, making the process simple, structured, and stress-free.',
  buttonText: 'Get Free Consultation',
  buttonLink: '/contact',
  whatsappText: 'WhatsApp',
  whatsappLink: 'https://wa.me/917019557994',
};
