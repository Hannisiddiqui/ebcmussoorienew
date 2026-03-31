import { SectionWithContainer } from "@/components/sectionComponants";
import Image from "next/image";
import Link from "next/link";
import blogData from "../components/blogData";
import ExploreMoreBLogs from "./components/ExploreMoreBLogs";

interface Params {
  params: {
    slug: string;
  };
  searchParams: {
    [key: string]: string | string[] | undefined;
  };
}

function getRandomBlog(currentSlug: string, count = 3) {
  return blogData
    .filter((post) => post.slug !== currentSlug)
    .sort(() => Math.random() - 0.5)
    .slice(0, count);
}

export async function generateStaticParams() {
  const blogPosts = await blogData;

  return blogPosts.map((post) => ({
    slug: post.slug,
    fallback: false,
  }));
}

export async function generateMetadata({ params }: Params) {
  const path = await params;
  const post = blogData.find((post) => post.slug === path.slug);

  return {
    title: post?.title,
    description: post?.subtitle,
    alternate: {
      canonical: `https://fielmente.com/${post?.slug}/`,
    },
    openGraph: {
      title: post?.title,
      description: post?.subtitle,
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

export default async function LandingPage({ params }: Params) {
  const path = await params;
  const data = blogData.find((post) => post.slug === path.slug);

  const randomBLogs = getRandomBlog(path.slug);

  const randomData = {
    title: "Explore More Blogs",
    cta: {
      title: "View all Blogs",
      url: "/blogs",
    },
    cards: [
      ...randomBLogs.map((item) => ({
        src: item.image,
        title: item.title,
        slug: item.slug,
      })),
    ],
  };

  if (!data) {
    return (
      <main>
        <h1>404</h1>
      </main>
    );
  }

  return (
    <main>
      <SectionWithContainer>
        <article className="md:max-w-6xl w-full mx-auto space-y-2.5">
          <div className="flex flex-col gap-3">
            <p className="text-[#6B7280] flex items-center gap-1">
              <Link href="/blogs">Blogs</Link>{" "}
              <span>
                <NextIcon />
              </span>{" "}
              <span className="text-color4">Blog Details</span>
            </p>
            <h1 className="font-medium font-primary text-primary md:text-4xl text-xl">
              {data.title}
            </h1>
            <p className="text-[#686868] md:text-xl font-medium">
              {data.subtitle}
            </p>
          </div>

          {/* divider */}
          <div className="w-full h-px bg-primary" />

          <div className="md:space-y-6 space-y-4">
            {data.date && (
              <p className="text-[#686868] md:text-lg pr-4">
                Date: <span className="text-light">{data.date}</span>
              </p>
            )}
            {data.image && (
              <div className="w-full max-w-xl border-4 border-background-2 relative aspect-4/3 md:aspect-[4/2.7] overflow-hidden rounded-2xl">
                <Image
                  src={data.image}
                  alt={data.title}
                  fill
                  className="object-cover"
                />
              </div>
            )}
            {/* {data.imgItems && (
              <div className="grid md:grid-cols-3 gap-4 mt-6">
                {data.imgItems.map((img, i) => (
                  <div key={i} className="space-y-2">
                    <div className="relative w-full aspect-4/3 rounded-xl overflow-hidden">
                      <Image
                        src={img.img}
                        alt={img.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <p className="text-sm font-medium">{img.subtitle}</p>
                  </div>
                ))}
              </div>
            )} */}
            {data.imgTitle && (
              <p className=" text-primary md:text-xl">{data.imgTitle}</p>
            )}
          </div>
          {data.title2 && (
            <div className="space-y-3 mt-6">
              <h2 className="font-light font-primary md:text-3xl text-lg">
                {data.title2}
              </h2>
              <p className="text-[#686868] md:text-[1.375rem]">
                {data.subtitle2}
              </p>
            </div>
          )}
          <div className="space-y-6 mt-4">
            {data.content?.map((item, index) => (
              <div className="space-y-3" key={index}>
                <h2 className="font-light font-primary md:text-3xl text-lg">
                  {item.title}
                </h2>

                {/* paragraphs */}
                <div className="text-[#686868] md:text-[1.375rem] space-y-2">
                  {item.subtitle?.map((para, i) => (
                    <p key={i}>{para}</p>
                  ))}
                </div>

                {/* items (safe check) */}
                {"items" in item && item.items && (
                  <ul className="list-disc pl-5 space-y-1 text-[#686868] md:text-[1.375rem]">
                    {item.items.map((listItem, i) => (
                      <li key={i}>{listItem}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </article>
      </SectionWithContainer>
      <ExploreMoreBLogs {...randomData} />
    </main>
  );
}

export const NextIcon = () => (
  <svg
    width={20}
    height={20}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M10.7883 10L7.39393 6.60584C7.27865 6.49042 7.21963 6.34535 7.21685 6.17063C7.21421 5.99605 7.27324 5.84834 7.39393 5.7275C7.51477 5.60681 7.66115 5.54646 7.8331 5.54646C8.00504 5.54646 8.15143 5.60681 8.27227 5.7275L12.0175 9.47271C12.0954 9.55077 12.1504 9.63306 12.1825 9.71959C12.2146 9.80612 12.2306 9.89959 12.2306 10C12.2306 10.1004 12.2146 10.1939 12.1825 10.2804C12.1504 10.367 12.0954 10.4492 12.0175 10.5273L8.27227 14.2725C8.15685 14.3878 8.01178 14.4468 7.83706 14.4496C7.66247 14.4522 7.51477 14.3932 7.39393 14.2725C7.27324 14.1517 7.21289 14.0053 7.21289 13.8333C7.21289 13.6614 7.27324 13.515 7.39393 13.3942L10.7883 10Z"
      fill="#6A7691"
    />
  </svg>
);
