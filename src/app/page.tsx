import Image from "next/image";
import { Inter } from "next/font/google";
import { SectionArticle } from "@/components/SectionArticle";
import yosefMobileImg from "../../public/developer.svg";
import phoneImg from "../../public/phone.svg";
import githubProfileImg from "../../public/github_profile.svg";
import { Card } from "@/components/Card";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const mainSectionLinks = [
    { name: "Know more", url: "/career" },
    { name: "Get in touch", url: "/contact" },
  ];

  const secondSectionLinks = [
    {
      name: "Resume",
      url: "https://drive.google.com/file/d/1lpI_r-YpIOgX-BepdE1F5eQe03mmKtAu/view?usp=sharing",
    },
    { name: "Github profile", url: "https://github.com/YosefBlandin" },
  ];

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <SectionArticle
        sectionTitle="Frontend Developer"
        sectionDescription="3 Years of experience creating digital products"
        sectionLinks={mainSectionLinks}
        sectionImg={{ src: yosefMobileImg, alt: "Developer profile image" }}
        sectionSecondaryImg={{
          src: phoneImg,
          alt: "App developed by Yosef Blandin",
        }}
      ></SectionArticle>
      <SectionArticle
        sectionTitle="Career trajectory"
        sectionDescription={`
					Angular, React and Typescript.
				`}
        titleTwClass="text-zinc-800"
        descriptionTwClass="text-zinc-800"
        sectionLinks={secondSectionLinks}
        sectionImg={{ src: githubProfileImg, alt: "Github profile image" }}
        sectionImgTwClass="xl:max-w-3xl"
        bgColorTwClass="bg-white"
      ></SectionArticle>

      <section className="grid xs:grid-cols-1 lg:grid-cols-2 gap-3 w-full">
        <Card
          sectionTitle="Note Taking System"
          sectionDescription={`
					Built in React and Typescript.
				`}
          titleTwClass="text-zinc-100"
          descriptionTwClass="text-zinc-100"
          sectionLinks={[
            {
              name: "Learn more",
              url: "https://drive.google.com/file/d/1lpI_r-YpIOgX-BepdE1F5eQe03mmKtAu/view?usp=sharing",
            },
          ]}
          sectionImg={{ src: githubProfileImg, alt: "Github profile image" }}
          sectionImgTwClass="xl:max-w-3xl"
          bgColorTwClass="bg-black"
        />
        <Card
          sectionTitle="Blandin Shopping Page"
          sectionDescription={`
					React, Tailwind and Typescript.
				`}
          titleTwClass="text-zinc-100"
          descriptionTwClass="text-zinc-100"
          sectionLinks={[
            {
              name: "Learn more",
              url: "https://drive.google.com/file/d/1lpI_r-YpIOgX-BepdE1F5eQe03mmKtAu/view?usp=sharing",
            },
          ]}
          sectionImg={{ src: githubProfileImg, alt: "Github profile image" }}
          sectionImgTwClass="xl:max-w-3xl"
          bgColorTwClass="bg-black"
        />
      </section>
    </main>
  );
}
