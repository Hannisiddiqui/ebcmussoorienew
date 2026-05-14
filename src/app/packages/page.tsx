import BookingPolicySection from "./components/BookingPolicySection";
import PricingInfoSection from "./components/PriceInfoSection";
import RoomPricingSection from "./components/RoomPricingSection";
import { packagesPageData } from "./pageData";

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
        {...packagesPageData?.termsAndConditionsData}
      />
    </main>
  );
};

export default page;
