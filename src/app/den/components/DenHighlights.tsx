// import Section from "@/components/sectionComponants/Section";
// import Image from "next/image";

// const DenHighlights = () => {
//   return (

//     <Section className="relative bg-background-2 py-16 sm:py-20">
//       <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
//         <div className="grid gap-10 lg:grid-cols-[minmax(400px,1fr)_minmax(420px,1fr)] items-center">
          
//           {/* Image */}
//           <div className="overflow-hidden rounded-[2rem] border border-[#29422C]/10 bg-white">
//             <div className="relative aspect-[4/3] sm:aspect-[5/4]">
//               <Image
//                 src="/gallery/den/DSC04144-1-1.png"
//                 alt="The Den seating"
//                 fill
//                 className="object-cover"
//               />
//             </div>
//           </div>

//           {/* Text */}
//           <div className="max-w-lg">
//             <h2 className="text-3xl sm:text-4xl font-primary text-primary mb-4">
//               Explore - “The Den”
//             </h2>

//             <p className="text-base leading-7 text-[#4C4C4C]">
//               Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
//             </p>
//           </div>

//         </div>
//       </div>

//       {/* 🌲 Trees */}
//       <Image
//         src="/green-tree.png"
//         alt="trees"
//         width={60}
//         height={60}
//         className="absolute bottom-0 left-4 z-10"
//       />

//       <Image
//         src="/green-tree.png"
//         alt="trees"
//         width={60}
//         height={60}
//         className="absolute bottom-0 right-4 z-10"
//       />
//     </Section>
//   );
// };

// export default DenHighlights;
import Image from "next/image";
import { Section } from "@/components/sectionComponants";

interface DenHighlightsProps {
  image: string;
  title: string;
  description: string;
}

const DenHighlights: React.FC<DenHighlightsProps> = ({
  image,
  title,
  description,
}) => {
  return (
    <Section className="relative bg-background-2 py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        <div className="grid gap-10 lg:grid-cols-[minmax(400px,1fr)_minmax(420px,1fr)] items-center">
          
          {/* Image */}
          <div className="overflow-hidden rounded-[2rem] border border-[#29422C]/10 bg-white">
            <div className="relative aspect-[4/3] sm:aspect-[5/4]">
              <Image
                src={image}
                alt={title}
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Text */}
          <div className="max-w-lg">
            <h2 className="text-3xl sm:text-4xl font-primary text-primary mb-4">
              {title}
            </h2>

            <p className="text-base leading-7 text-[#4C4C4C]">
              {description}
            </p>
          </div>

        </div>
      </div>

      {/* 🌲 Trees (static decoration) */}
      <Image
        src="/green-tree.png"
        alt="trees"
        width={60}
        height={60}
        className="absolute bottom-0 left-4 z-10"
      />

      <Image
        src="/green-tree.png"
        alt="trees"
        width={60}
        height={60}
        className="absolute bottom-0 right-4 z-10"
      />
    </Section>
  );
};

export default DenHighlights;