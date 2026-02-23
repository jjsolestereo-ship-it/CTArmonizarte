
import { ReactNode } from 'react';

export interface NavItem {
  label: string;
  href: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  fullDefinition?: string;
  icon: ReactNode;
  specialAction?: boolean;
}

export interface PricingPlan {
  name: string;
  price: string;
  period?: string; 
  features: string[];
  cta: string;
  recommended?: boolean;
}

export interface ContactFormData {
  name: string;
  email: string;
}
