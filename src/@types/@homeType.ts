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

export interface OurStoryProps {
  title: string;
  subtitle: string;
  description: string[];
  images: string[];
  link: {
    label: string;
    href: string;
  };
}

export interface AccommodationsTypes {
  title: string;
  description: string[];
  video: {
    src: string;
    videoSrc: string;
  }[];
  items: {
    badge: string;
    title: string;
    description: string;
    price: string;
    image: string;
    primaryButton: {
      label: string;
      href: string;
    };
    secondaryButton: {
      label: string;
      href: string;
    };
  }[];
}

export interface JourneyProps {
  title: string;
  description: string[];
  items: {
    title: string;
    description: string[];
    image: string;
    link: string;
  }[];
  link: {
    label: string;
    href: string;
  };
}

export interface ExperienceProps {
  title: string;
  description: string[];
  image: string;
  items: {
    title: string;
    description: string;
    icon: string;
  }[];
  link: {
    label: string;
    href: string;
  };
}
