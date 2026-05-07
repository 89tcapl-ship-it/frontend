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
  overline: 'Get Consultation',
  title: 'Talk to our experts about your specific service requirements.',
  subtitle: 'We will help you understand the right next step and what documents or compliance support you need.',
  buttonText: 'Get Consultation',
  buttonLink: '/contact',
  whatsappText: 'WhatsApp',
  whatsappLink: 'https://wa.me/917019557994',
};
