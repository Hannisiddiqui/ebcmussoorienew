import { ClientData } from "@/utils/client";
import { JSX } from "react";

export type BtnType = "button" | "link";

export interface CtaBtnPropsType {
  label: string;
  href?: string;
  type: BtnType;
  target?: string;
}

export interface AboutSectionProps {
  title: string;
  description: string[];
  images: string[];
  link: {
    label: string;
    href: string;
  };
}

export interface BannerProps {
  title?: string;
  images: string[];
}
