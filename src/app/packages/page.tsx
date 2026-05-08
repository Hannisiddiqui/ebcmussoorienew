import React from "react";
import RoomPricingSection from "./components/RoomPricingSection";
import { packagesPageData } from "./pageData";
import PricingInfoSection from "./components/PriceInfoSection";
import BookingPolicySection from "./components/BookingPolicySection";

const page = () => {
  return (
    <main>
      <RoomPricingSection {...packagesPageData?.roomPricingSection} />
      <PricingInfoSection
        alwaysIncluded={packagesPageData.alwaysIncluded}
        seasonalPricingNotes={packagesPageData.seasonalPricingNotes}
        addOns={packagesPageData.addOns}
      />
      <BookingPolicySection
        {...packagesPageData?.bookingAndCancellationPolicy}
      />
    </main>
  );
};

export default page;
