"use client";
import React from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";
// import { LinkProps } from "next/link";
import Link from "next/link";
import { TextGenerateEffect } from "./text";

export const ProfileCard = ({ className }: { className?: string }) => {
  const p1abt = `I am currently studying computer engineering and building web pages is my hobby. This site is very close to me as I wanted to try some new things. I hope you will like this page. If you're wondering where "Vass" came from, There are some things. meant to be left unknown.`;
  return (
    <div
      className={cn(
        " font-mono flex flex-col md:flex-row items-center justify-center gap-8 p-6 bg-black text-[#d6d6d6] rounded-xl",
        className
      )}
    >
      {/* Main Profile Section */}
      <div className="flex z-50 flex-col items-center text-center p-4 rounded-2xl border border-white dark:border-white/[0.2] group-hover:border-slate-700 md:w-2/3">
        <h2 className="text-3xl font-bold mb-0">Who am I??</h2>
        <div className="w-32 h-32 rounded-md overflow-hidden mb-0">
          <Image
            src="https://scontent.fktm19-1.fna.fbcdn.net/v/t39.30808-6/441073413_958739272716084_4100520480123690146_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeElgEwrxe9r9-TImGyLeWDN0i5HOfcJwmvSLkc59wnCa341-yAmATps3zU5RAsBsY0M3fDSkwJbUOnM9Pl-M-Ir&_nc_ohc=aBlZON64cGkQ7kNvgEOYHBf&_nc_ht=scontent.fktm19-1.fna&oh=00_AYBGwVhsQd24P6T8N4nLYQLWcf2nk8yGbB8M-7przpra9Q&oe=66C56B25"
            alt="Namw"
            // layout="fill"
            width={100}
            height={100}
            objectFit="cover"
            className="rounded md"

            // Optionally set a fallback image
            // e.target.src = '/path/to/fallback-image.jpg';
          />
        </div>
        <h3 className="text-2xl font-sans font-bold mb-2">{`👋 Hi, I'm Sumit Pokhrel!`}</h3>

        <TextGenerateEffect
          className="text-md text-left font-mono mb-4"
          filter={true}
          words={p1abt}
          duration={1}
        />

        {/* <p className="text-md mb-4"></p> */}
      </div>

      {/* "What I like" and "What I hate" Sections */}
      <div className="flex flex-col gap-4 md:w-1/3">
        <div className="p-4 rounded-2xl border border-white dark:border-white/[0.2] group-hover:border-slate-700">
          <h3 className="text-2xl font-bold mb-2">What I like</h3>
          <ul className="list-disc list-inside text-lg">
            <li> Holiday</li>
            <li>Winter</li>
            <li>Winter Holiday</li>
          </ul>
        </div>
        <div className="p-4 rounded-2xl border border-white dark:border-white/[0.2] group-hover:border-slate-700">
          <h3 className="text-2xl font-bold mb-2">What I hate</h3>
          <ul className="list-disc list-inside text-lg">
            <li>Maths</li>
            <li>Cockroach</li>
            <li>Working</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
