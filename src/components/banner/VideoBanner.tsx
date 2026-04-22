import { Section } from "../sectionComponants";
import { LazyLoadedVideo } from "../Video";

const VideoBanner = ({ video }: { video: { src: string; poster: string } }) => {
  return (
    <Section
      defaultPadding={false}
      className="relative py-1 w-full xl:aspect-4/1.7 aspect-video overflow-hidden"
    >
      <LazyLoadedVideo src={video.src} poster={video.poster} />
    </Section>
  );
};

export default VideoBanner;
