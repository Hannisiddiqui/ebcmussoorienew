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

export interface CommonCardSectionProps {
  title?: string;
  subTitle?: string;
  description?: string[];
  images: string[];
  link?: CtaBtnPropsType;
  titleColor?: string;
  subTitleColor?: string;
  btnClassName?: string;
  sectionColor?: string;
  wrapperClassName?: string;
}

export interface CommonCard2Props {
  title: string;
  description?: string;
  items: {
    title: string;
    description: string[];
    image?: string;
    images?: string[];
  }[];
}

export interface CuisineProps {
  title: string;
  description: string[];
  images: {
    title: string;
    src: string;
  }[];
}
