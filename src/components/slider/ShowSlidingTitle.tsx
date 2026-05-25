import { usePathname } from "next/navigation";
import SlidingTitle from "./SlidingTitle";
import { Section } from "../sectionComponants";

const ShowSlidingTitle: React.FC<{ title: string[] }> = ({ title }) => {
  const pathName = usePathname();
  title = [...title, ...title];
  if (pathName === "/") {
    return (
      <Section defaultPadding={false}>
        <SlidingTitle items={title} wrapperClassName="text-sm" />
      </Section>
    );
  } else {
    return null;
  }
};

export default ShowSlidingTitle;
