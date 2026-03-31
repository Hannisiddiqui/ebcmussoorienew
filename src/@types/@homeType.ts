import { JSX } from "react";

export interface ExploreNearbyProps {
  title: string;
  description: string;
  image: string;
  cards: {
    placeName: string;
    placeImage: string;
    placeDetails: string;
    distance: {
      icon: JSX.Element;
      miter: string;
    }[];
  }[];
  link: {
    label: string;
    href: string;
  };
}

export interface PressSectionProps {
  title: string;
  links: {
    backImage: string;
    src: string;
    name: string;
    link: string;
  }[];
}
