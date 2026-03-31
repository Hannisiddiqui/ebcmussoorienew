import { contacts, desktopNavLinks } from "@/utils/constant";
import { FillLocationIcon } from "@/utils/icons";
import { JSX } from "react";
import { SocialLinks } from "../footers/footerData";

interface NavData {
  upperNav: {
    temperature: string;
    links: {
      title?: string;
      label: string;
      href: string;
      icon: JSX.Element;
    }[];
  };
  bottomNav: {
    logo: string;
    navLink: {
      name: string;
      href: string;
    }[];
    cta: {
      name: string;
      href: string;
    };
  };
}

export const CallIcon = () => (
  <svg
    width={40}
    height={40}
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx={20} cy={20} r="19.5" stroke="#29422C" />
    <g clipPath="url(#clip0_713_459)">
      <mask
        id="mask0_713_459"
        style={{ maskType: "luminance" }}
        maskUnits="userSpaceOnUse"
        x={10}
        y={10}
        width={21}
        height={21}
      >
        <path d="M30.67 10.0001H10V30.6701H30.67V10.0001Z" fill="white" />
      </mask>
      <g mask="url(#mask0_713_459)">
        <mask
          id="mask1_713_459"
          style={{ maskType: "luminance" }}
          maskUnits="userSpaceOnUse"
          x={7}
          y={7}
          width={27}
          height={28}
        >
          <path
            d="M7.33203 7.66708H33.9987V34.3337H7.33203V7.66708Z"
            fill="white"
          />
        </mask>
        <g mask="url(#mask1_713_459)">
          <path
            d="M17.4387 20.118C17.8833 20.6802 18.3726 21.2311 18.9047 21.7632C19.4369 22.2954 19.9879 22.7847 20.5499 23.2293C21.631 24.0843 23.1626 23.9952 24.1372 23.0206L24.4662 22.6917C25.4368 21.721 27.0251 21.721 27.9957 22.6917L29.3051 24.001C31.6692 26.3651 27.8797 29.5526 26.3665 29.7816C23.3736 30.7689 18.8386 29.1327 15.1869 25.4811C11.5352 21.8295 9.89904 17.2944 10.8864 14.3015C11.1153 12.7883 14.3029 8.9988 16.667 11.3629L17.9763 12.6722C18.947 13.6429 18.947 15.2312 17.9763 16.2018L17.6474 16.5308C16.6728 17.5053 16.5836 19.0369 17.4387 20.118Z"
            stroke="#29422C"
            strokeMiterlimit="22.926"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M22.8047 14.1111C23.7283 14.3014 24.5759 14.7581 25.2428 15.425C25.9001 16.0823 26.3535 16.9155 26.5485 17.8245"
            stroke="#29422C"
            strokeMiterlimit="22.926"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M20.3789 11.6545C22.786 11.1674 25.277 11.9185 27.0136 13.6551C28.7473 15.3888 29.499 17.8749 29.0163 20.2788"
            stroke="#29422C"
            strokeMiterlimit="22.926"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
      </g>
    </g>
    <defs>
      <clipPath id="clip0_713_459">
        <rect
          width="20.67"
          height="20.67"
          fill="white"
          transform="translate(10 10.0001)"
        />
      </clipPath>
    </defs>
  </svg>
)

export const navData: NavData = {
  upperNav: {
    temperature: "30.459459166454238, 78.02529427116416",
    links: [
      {
        title: "Mussoorie, Uttarakhand",
        label: "Mussoorie, Uttarakhand",
        href: contacts.addresses[0].addressUrl,
        icon: <FillLocationIcon />,
      },
      {
        title: "Call Us Now",
        label: contacts.phone[0],
        href: `tel:${contacts.phone[0]}`,
        icon: <CallIcon />,
      },
      ...SocialLinks,
    ],
  },
  bottomNav: {
    logo: "/logo.png",
    navLink: desktopNavLinks,
    cta: {
      name: "Book Now",
      href: "",
    },
  },
};



