import { AccommodationsTypes } from "@/@types/@homeType";
import RoomCardImgSlider from "../sliders/RoomCardImgSlider";
import Link from "next/link";
import LinkButton from "@/components/buttons/LinkButton";
import { contacts } from "@/utils/constant";

const RoomCardNew: React.FC<AccommodationsTypes["items"][0]> = ({
  category,
  title,
  description,
  images,
  price,
  link,
  details,
}) => {
  const slugRoomUrl =
    "/room/" +
    title
      .toLowerCase()
      .trim()
      .replace(/\s+/g, "-") 
      .replace(/[^a-z0-9-]/g, ""); 
  return (
    <div className="flex flex-col h-full w-full rounded-sm overflow-hidden hover:border-secondary transition-all hover:shadow-md hover:-translate-y-2 duration-200 ease-in-out">
      <RoomCardImgSlider images={images} title={title} category={category} />
      <div className="py-5 px-3.5 grid grid-rows-[auto_auto_3fr_auto] rounded-b-sm auto-rows-fr gap-6 border-b-[0.5px] border-x-[0.5px] border-secondary/60">
        <p className="text-white font-primary text-3xl">{title}</p>
        <ul className="flex items-center justify-between gap-1 border border-secondary/60 py-2 md:px-4 px-2">
          {details.map((item, index) => (
            <li
              key={index}
              className="flex gap-2 items-center md:text-sm text-[11px] text-white/80"
            >
              <span>{item.icon}</span>
              <span>{item.text}</span>
            </li>
          ))}
        </ul>
        <p className="text-white text-sm">{description}</p>
        {/* <p className="text-new-secondary font-primary text-[1.375rem]">
          {price}
        </p> */}
        <div className="grid grid-cols-1 md:grid-cols-2 items-center justify-between gap-2">
          <LinkButton
            label={"view room"}
            href={slugRoomUrl}
            className="bg-secondary border-none rounded-sm text-primary uppercase"
            target="_blank"
            rel="noopener noreferrer"
          />

          <LinkButton
            label={link.label}
            href={link.href}
            className="bg-secondary border-none rounded-sm text-primary"
            target="_blank"
            rel="noopener noreferrer"
          />
        </div>
      </div>
    </div>
  );
};

export default RoomCardNew;
