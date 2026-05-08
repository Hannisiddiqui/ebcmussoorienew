import Image from "next/image";
import Link from "next/link";

interface RoomPageCardProps {
  category: string;
  title: string;
  description: string[];
  features: string[];
  price: string;
  images: string[];
  buttons: {
    label: string;
    href: string;
  }[];
}

const RoomPageCard: React.FC<RoomPageCardProps> = ({
  category,
  title,
  description,
  features,
  images,
  buttons,
}) => {
  return (
    <div className="w-full grid lg:grid-cols-2 grid-cols-1 gap-6 items-center">
      <div className="w-full relative aspect-4/3 max-w-lg">
        <Image src={images[0]} alt={title} fill className="object-cover" />
      </div>
      <div className="space-y-4 text-white">
        <p className="bg-[#C9A06026] w-fit text-[#C9A060] px-2 py-1 text-sm">
          {category}
        </p>
        <h2 className="md:text-3xl text-2xl font-primary ">{title}</h2>
        <div className="space-y-2 mt-4">
          {description.map((item, index) => (
            <p key={index} className="text-white/80">
              {item}
            </p>
          ))}
        </div>
        <div className="space-y-2 mt-4 divide-y divide-white/30">
          {features.map((item, index) => (
            <p key={index} className="flex items-center gap-2 pb-2">
              <span className="text-secondary">✓</span> {item}
            </p>
          ))}
        </div>
        <div className="flex flex-wrap gap-3 pt-2">
          <Link
            href={buttons[0].href || "#"}
            className="border border-[#C8A46B] rounded-md px-5 py-3 text-sm font-medium uppercase tracking-[0.15em] text-[#C8A46B] transition-all duration-300 hover:bg-[#C8A46B] hover:text-black"
          >
            {buttons[0].label}
          </Link>

          <Link
            href={buttons[1].href || "#"}
            target="_blank"
            className="bg-[#C8A46B] rounded-md px-5 py-3 text-sm font-medium uppercase tracking-[0.15em] text-black transition-all duration-300 hover:bg-[#d8b47b]"
          >
            {buttons[1].label}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RoomPageCard;
