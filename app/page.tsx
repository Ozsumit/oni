import Image from "next/image";
import { motion } from "framer-motion";
import { Spotlight } from "@/components/spotlight";
import WordFlip from "@/components/ui/textflip";
import { BackgroundGradientAnimation } from "@/components/ui/gradient";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import { SparklesCore } from "@/components/ui/sparkles";
import { TextGenerateEffect } from "@/components/ui/text";
import ProfileCard from "@/components/ui/aboutme";
import ContactFooter from "@/components/ui/Footer";
// import Navigation from "@/components/ui/navigation";

export default function Home() {
  const words = ["Hello", "Namaste", "Ciao", "Konnichiwa", "Bonjour"];
  const items = [
    {
      title: "Repo-Nox",
      description:
        "Your friend for elite academic comeback that you dreamed of. Made with NextJS and Tailwind",
      link: "https://sumit.info.np/nox",
    },
    {
      title: "Jyoti EBS ",
      description:
        "This is a static website i made for Jyoti English Boarding School. It is made with plain HTML, CSS, & Javascript. ",
      link: "https://jyotiebs.edu.np/",
    },
    {
      title: "IEMIS",
      description:
        "I'm a government certified IEMIS contractor. Not much to say about it.",
      link: "https://emis.cehrd.gov.np/",
    },
  ];
  const wordss = `Im Experinced in NextJs,Vite and React Native and fluent in HTML CSS and JS. Here are some of the projects i've done`;

  return (
    <main className="bg-black h-full  w-full flex flex-col justify-center items-center sm:p-0 p-4 pb-0 pt-0">
      {/* <BackgroundGradientAnimation> */}
      <div
        id="Home"
        className="h-[40rem] relative w-full bg-black flex flex-col items-center pt-[8%] justify-start  rounded-md"
      >
        <WordFlip
          cursorClassName="text-white blinking-cursor"
          className="text-7xl flex text-white font-mono font-extrabold"
          words={words}
          cursorSymbol="|"
          typingSpeed={200}
          pauseTime={1500}
          loop={true}
          startDelay={300}
        />

        <h1 className="text-7xl text-center sm:w-auto lg:w-3/4    flex text-white font-mono font-extrabold">{`I'm Sumit, a frontend web developer`}</h1>
      </div>

      {/* </BackgroundGradientAnimation> */}
      <div className="h-auto lg:h-[225vh] w-full flex justify-center items-center flex-col">
        <BackgroundGradientAnimation className=" w-[99vw]  h-auto flex flex-col justify-center items-center">
          <div className="z-50 text-white ml-0  lg:ml-[50vw] mt-12 w-auto flex-col items-center justify-evenly p-5 lg:p-0 ">
            {/* <div className="flex">fg </div>? */}
            <TextGenerateEffect
              words={wordss}
              className="flex  w-auto lg:w-144 text-3xl font-mono"
            />{" "}
            <div id="Work"></div>
          </div>
          <HoverEffect className="w-3/4  " items={items} />
          <div id="About"></div>{" "}
          <ProfileCard className="lg:w-3/4 mb-20 w-full" />
          <div id="Contact"></div> <ContactFooter />
        </BackgroundGradientAnimation>
      </div>
    </main>
  );
}
