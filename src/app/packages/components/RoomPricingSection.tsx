import { SectionWithContainer } from "@/components/sectionComponants";
import Link from "next/link";
import React from "react";

type RoomPricingSectionProps = {
  title: string;
  roomPricing: {
    accommodation: string;
    category: string;
    price: string;
    included: string;
    button: {
      label: string;
      href: string;
    };
  }[];
};

const RoomPricingSection = ({
  // title,
  roomPricing,
}: RoomPricingSectionProps) => {
  return (
    <SectionWithContainer sectionClassName="bg-ternary">
      {/* Title */}
      {/* <h1 className="text-center text-4xl md:text-5xl font-primary text-[#e2d2ae]">
        {title}
      </h1> */}

      {/* Table */}
      <div className="overflow-x-auto mt-16">
        <table className="w-full border-collapse">
          {/* Header */}
          <thead className="bg-primary border-b">
            <tr className="text-lg text-secondary">
              <th className="p-6 text-left font-primary">Accommodation</th>
              <th className="p-6 text-left font-primary">Category</th>
              {/* <th className="p-6 text-left font-primary">Price / Night</th> */}
              <th className="p-6 text-left font-primary">Included</th>
              <th className="p-6 text-center font-primary">Book</th>
            </tr>
          </thead>

          {/* Rows */}
          <tbody>
            {roomPricing.map((room, index) => (
              <tr
                key={index}
                className="border-b border-[#1a2a1d] hover:bg-[#0d1a12] transition"
              >
                {/* Accommodation */}
                <td className="px-6 py-5 text-white text-[15px]">
                  {room.accommodation}
                </td>

                {/* Category */}
                <td className="px-6 py-5 whitespace-nowrap">
                  <span className="px-3 py-2 text-xs uppercase tracking-widest bg-secondary/10 text-secondary">
                    {room.category}
                  </span>
                </td>

                {/* Price */}
                {/* <td className="px-6 py-5 text-[#d2b277] text-sm font-light">
                  <span className="ml-6">{room.price}</span>
                </td> */}

                {/* Included */}
                <td className="px-6 py-5 text-white text-sm leading-relaxed whitespace-nowrap">
                  {room.included}
                </td>

                {/* Button */}
                <td className="px-6 py-5">
                  <div className="flex justify-center">
                    <Link
                      href={room?.button?.href}
                      target="_blank"
                      className="bg-[#c9a56b] hover:bg-[#d7b67f] text-black uppercase tracking-wider text-xs px-5 py-3 rounded-md transition duration-300"
                    >
                      {room.button.label}
                    </Link>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </SectionWithContainer>
  );
};

export default RoomPricingSection;
