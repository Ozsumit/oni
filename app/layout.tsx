import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { BackgroundGradientAnimation } from "@/components/ui/gradient";

import Navigation from "@/components/ui/navigation";
import { SparklesCore } from "@/components/ui/sparkles";
import { ShootingStars } from "@/components/ui/shooting-stars";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Vash",
  description: "Working on it..",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <div className="w-full absolute inset-0 h-screen">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
      </div>{" "}
      <body className="bg-black flex   flex-col overflow-x-hidden">
        <Navigation />
        {children}
      </body>
    </html>
  );
}
