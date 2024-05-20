import type { Metadata } from "next";
import { Darker_Grotesque } from "next/font/google";
import AnimatedCursor from "react-animated-cursor";
import "./globals.css";

const dg = Darker_Grotesque({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Links and Portfolio",
  description: "Made with Next.js, React, TypeScript, and Tailwind CSS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={dg.className}>
        <div className="md:cursor-none cursor-auto">
          <AnimatedCursor
            innerSize={8}
            outerSize={32}
            color="250, 250, 250"
            outerAlpha={0.2}
            innerScale={0.7}
            outerScale={2}
            clickables={[
              "a",
              'input[type="text"]',
              'input[type="email"]',
              'input[type="number"]',
              'input[type="submit"]',
              'input[type="image"]',
              "label[for]",
              "select",
              "textarea",
              "button",
              ".link",
            ]}
          />
        </div>
        {children}
      </body>
    </html>
  );
}
