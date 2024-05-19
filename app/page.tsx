"use client";

import Resume from "@/components/resume";
import Time from "@/components/time";
import { BotMessageSquare, Clock, Github } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <main className="w-full h-full bg-[#09090b] text-[#fafafa] md:cursor-none md:px-[35rem] px-3 py-[5rem] text-2xl">
      <div className="">
        <p className="text-left flex justify-between font-bold">
          GreenKeewi
          <span className="ml-auto">
            <Clock style={{ display: "inline-block" }} /> <Time />
          </span>
        </p>
        <div className="">
          <p className="text-lg flex justify-between">
            WebDev
            <span className="ml-auto">
              <Link className="" href="">
                <Github style={{ display: "inline-block" }} />
              </Link>
              <Link className="" href="">
                {" "}
                <BotMessageSquare style={{ display: "inline-block" }} />
              </Link>
            </span>
          </p>
        </div>
        <p className="font-bold text-lg">
          Currently working as a Frontend Engineer
        </p>
        <br />
        <Resume />
      </div>
    </main>
  );
}
