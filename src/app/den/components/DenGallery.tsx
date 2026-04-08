// "use client";

// import Image from "next/image";
// import SwiperCarousel from "@/components/slider/SwiperCarousel";
// import { Autoplay, Navigation } from "swiper/modules";
// import SectionWithContainer from "@/components/sectionComponants/SectionWithContainer";

// interface DenGalleryProps {
//   images: string[];
//   texts?: string[];
// }

// const DenGallery: React.FC<DenGalleryProps> = ({ images, texts }) => {
//   const data = images.map((image, index) => ({
//     image,
//     text: texts?.[index],
//   }));

//   return (
//     <SectionWithContainer sectionClassName="bg-primary relative py-16">
//       <SwiperCarousel
//         data={data}
//         modules={[Navigation, Autoplay]}
//         loop
//         autoplay={{ delay: 3500, disableOnInteraction: false }}
//         navigation={{ nextEl: ".den-next", prevEl: ".den-prev" }}
//         grabCursor
//         slidesPerView={1.1}
//         spaceBetween={20}
//         breakpoints={{
//           640: { slidesPerView: 1.3 },
//           768: { slidesPerView: 2 },
//           1024: { slidesPerView: 2.5 },
//           1280: { slidesPerView: 3 },
//         }}
//         renderSlide={(item, index = 0) => (
//           <div className="w-full max-w-[420px] rounded-[24px] bg-white overflow-hidden shadow-md">

//             {index % 2 === 0 ? (
//               <>
//                 {/* IMAGE */}
//                 <div className="relative h-[320px] w-full">
//                   <Image
//                     src={item.image}
//                     alt="Den"
//                     fill
//                     className="object-cover"
//                   />
//                 </div>

//                 {/* TEXT */}
//                 <div className="px-5 py-4 text-[14px] leading-5 text-[#2F3B33]">
//                   {item.text}
//                 </div>
//               </>
//             ) : (
//               <>
//                 {/* TEXT */}
//                 <div className="px-5 py-4 text-[14px] leading-5 text-[#394D40]">
//                   {item.text}
//                 </div>

//                 {/* IMAGE */}
//                 <div className="relative h-[320px] w-full">
//                   <Image
//                     src={item.image}
//                     alt="Den"
//                     fill
//                     className="object-cover"
//                   />
//                 </div>
//               </>
//             )}

//           </div>
//         )}
//       />

//       {/* NAV */}
//       <div className="absolute inset-y-0 left-2 hidden lg:flex items-center">
//         <button className="den-prev h-10 w-10 rounded-full bg-white text-xl shadow">
//           ‹
//         </button>
//       </div>

//       <div className="absolute inset-y-0 right-2 hidden lg:flex items-center">
//         <button className="den-next h-10 w-10 rounded-full bg-white text-xl shadow">
//           ›
//         </button>
//       </div>
//     </SectionWithContainer>
//   );
// };

// export default DenGallery;
"use client";

// FIX 1: Import useState
import { useState } from "react"; 
import Image from "next/image";
import SwiperCarousel from "@/components/slider/SwiperCarousel";
import { Autoplay, Navigation } from "swiper/modules";
import SectionWithContainer from "@/components/sectionComponants/SectionWithContainer";

interface DenGalleryProps {
  images: string[];
  texts?: string[];
}

const DenGallery: React.FC<DenGalleryProps> = ({ images, texts }) => {
  // FIX 2: Create state to hold the exact DOM nodes for the arrows
  const [prevEl, setPrevEl] = useState<HTMLElement | null>(null);
  const [nextEl, setNextEl] = useState<HTMLElement | null>(null);

  const data = images.map((image, index) => ({
    image,
    text: texts?.[index],
  }));

  return (
    <SectionWithContainer sectionClassName="bg-primary py-16">
      <div className="relative w-full mx-auto px-12 lg:px-16">
        
        <SwiperCarousel
          data={data}
          modules={[Navigation, Autoplay]}
          loop
          autoplay={{ delay: 3500, disableOnInteraction: false }}
          // FIX 3: Pass the React state directly into Swiper's navigation object
          navigation={{ prevEl, nextEl }}
          grabCursor
          slidesPerView={1.1}
          spaceBetween={20}
          breakpoints={{
            640: { slidesPerView: 1.3 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 3 },
          }}
          renderSlide={(item, index = 0) => (
            <div className="w-full max-w-[424px] mx-auto rounded-[24px] bg-white overflow-hidden shadow-md flex flex-col h-full min-h-[432px]">
              {index % 2 === 0 ? (
                <>
                  <div className="relative h-[320px] w-full shrink-0">
                    <Image src={item.image} alt="Den" fill className="object-cover" />
                  </div>
                  <div className="px-5 py-6 text-[22px] leading-5 text-[#2F3B33] flex-grow flex items-center bg-white">
                    {item.text}
                  </div>
                </>
              ) : (
                <>
                  <div className="px-5 py-6 text-[22px] leading-5 text-[#394D40] flex-grow flex items-center bg-white">
                    {item.text}
                  </div>
                  <div className="relative h-[320px] w-full shrink-0">
                    <Image src={item.image} alt="Den" fill className="object-cover" />
                  </div>
                </>
              )}
            </div>
          )}
        />

        {/* LEFT ARROW */}
        {/* FIX 4: Removed 'hidden lg:flex' and added 'z-[100]' to force visibility */}
        <div className="absolute top-1/2 left-0 z-[100] -translate-y-1/2 flex">
          <button 
            ref={(node) => setPrevEl(node)} // Binds this specific button to the prevEl state
            className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-gray-800 shadow-[0_4px_12px_rgba(0,0,0,0.12)] hover:bg-gray-50 hover:scale-105 transition-all duration-200 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="m15 18-6-6 6-6"/>
            </svg>
          </button>
        </div>

        {/* RIGHT ARROW */}
        {/* FIX 4: Removed 'hidden lg:flex' and added 'z-[100]' to force visibility */}
        <div className="absolute top-1/2 right-0 z-[100] -translate-y-1/2 flex">
          <button 
            ref={(node) => setNextEl(node)} // Binds this specific button to the nextEl state
            className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-gray-800 shadow-[0_4px_12px_rgba(0,0,0,0.12)] hover:bg-gray-50 hover:scale-105 transition-all duration-200 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="m9 18 6-6-6-6"/>
            </svg>
          </button>
        </div>

      </div>
    </SectionWithContainer>
  );
};

export default DenGallery;