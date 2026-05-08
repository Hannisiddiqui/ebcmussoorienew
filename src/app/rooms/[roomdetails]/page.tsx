import HeroBanner from "@/components/banner/HeroBanner";
import { roomDetailsPageData } from "./components/pageData";
import AboutUs from "./components/AboutUs";
import RoomsFeatures from "./components/RoomsFeatures";
import PerfectForData from "./components/PerfectForData";

interface Params {
  params: {
    roomdetails: string;
  };
}

export async function generateStaticParams() {
  const path = await roomDetailsPageData;

  return path.map((post) => ({
    slug: post.slug,
    fallback: false,
  }));
}

export async function generateMetadata({ params }: Params) {
  const path = await params;
  const post = roomDetailsPageData.find(
    (post) => post.slug === path.roomdetails
  );

  return {
    title: post?.metaData.title,
    description: post?.metaData.description,
    alternate: {
      canonical: `https://fielmente.com/${post?.slug}/`,
    },
    openGraph: {
      title: post?.metaData.title,
      description: post?.metaData.description,
      url: `https://fielmente.com/${post?.slug}/`,
      siteName: "Fielmente",
      locale: "en_IN",
      type: "website",
      images: [
        {
          url: `https://fielmente.com/${post?.slug}-og.png`,
          width: 1200,
        },
      ],
    },
    robots: {
      index: true,
      follow: true,
      nocache: true,
      googleBot: {
        index: true,
        follow: true,
        noimageindex: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}

export default async function RoomDetailsPage({ params }: Params) {
  const path = await params;
  const pageData = roomDetailsPageData.find(
    (post) => post.slug === path.roomdetails
  );

  if (!pageData) {
    return (
      <main>
        <h1>404</h1>
      </main>
    );
  }
  return (
    <main>
      {pageData?.banner && <HeroBanner {...pageData.banner} />}
      {pageData?.aboutUsData && <AboutUs {...pageData?.aboutUsData} />}
      {pageData?.roomsFeatures && (
        <RoomsFeatures {...pageData?.roomsFeatures} />
      )}
      {pageData?.perfectForData && (
        <PerfectForData {...pageData?.perfectForData} />
      )}
    </main>
  );
}
