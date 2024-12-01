import { ReactNode } from "react";

export interface SeoProps {
  children: ReactNode;
  metaTitle?: string;
  metaDescription?: string;
  metaAuthor?: string;
  metaKeywords?: string;
}
