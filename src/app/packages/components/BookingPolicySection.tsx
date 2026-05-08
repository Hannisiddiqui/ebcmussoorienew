import { SectionWithContainer } from "@/components/sectionComponants";
import { contacts } from "@/utils/constant";
import Link from "next/link";
import React from "react";
import { FaCheck } from "react-icons/fa";

type BookingAndCancellationPolicy = {
  title: string;
  booking: string[];
  cancellation: string[];
};

const BookingPolicySection = ({
  title,
  booking,
  cancellation,
}: BookingAndCancellationPolicy) => {
  return (
    <SectionWithContainer sectionClassName="bg-ternary">
      <div className="max-w-3xl mx-auto">
        {/* Title */}
        <h2 className="text-center md:text-5xl text-2xl font-primary text-white">
          {title}
        </h2>

        {/* Card */}
        <div className="mt-16 bg-linear-to-r from-[#0d1b12] to-[#0a160f] border border-[#243326] rounded-md p-8 md:p-10">
          {/* Booking */}
          <div className="mb-10">
            <h3 className="text-secondary text-3xl font-primary mb-6">
              Booking
            </h3>

            <div className="space-y-5">
              {booking.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 border-b border-[#223025] pb-4"
                >
                  <FaCheck size={12} className="text-secondary" />

                  <p className="text-[#c7c2b3] text-sm md:text-base leading-7">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Cancellation */}
          <div>
            <h3 className="text-secondary text-3xl font-primary mb-6">
              Cancellation
            </h3>

            <div className="space-y-5">
              {cancellation.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 border-b border-[#223025] pb-4"
                >
                  <FaCheck size={12} className="text-secondary" />

                  <p className="text-[#c7c2b3] text-sm md:text-base leading-7">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Button */}
        <div className="flex justify-center mt-12">
          <Link
            href={contacts?.WhatsAppCta}
            target="_blank"
            className="bg-[#c9a56b] hover:bg-[#d6b67a] text-black uppercase tracking-widest text-sm px-10 py-4 rounded-md transition duration-300"
          >
            Book Via WhatsApp
          </Link>
        </div>
      </div>
    </SectionWithContainer>
  );
};

export default BookingPolicySection;
