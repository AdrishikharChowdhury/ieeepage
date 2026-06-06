"use client";
import { stats } from "@/lib/constants";
import Aurora from "./Aurora";
import Link from "next/link";

const Banner = () => {
  return (
    <section className="w-full h-screen bg-white p-10 pt-10">
      <div className="bg-blue-800 h-full rounded-2xl overflow-hidden relative" id="home" >
        <Aurora
          colorStops={["#00d4ff", "#0072ff", "#00d4ff"]}
          blend={0.5}
          amplitude={1.0}
          speed={1}
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white px-10 text-center">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-md rounded-full px-5 py-2 text-sm font-medium mb-8 border border-white/20">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              IEEE Student Branch — Est. 2022
            </div>

            <h1 className="text-6xl md:text-8xl font-black tracking-tight leading-none mb-6">
              Where Ideas
              <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-white to-blue-200">
                Ignite Innovation
              </span>
            </h1>

            <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-10 leading-relaxed">
              Join the premier community of technologists, engineers, and visionaries
              at {" "}
              <span className="text-white font-semibold">St. Thomas&apos; College of Engineering &amp; Technology</span>.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/blogs" className="bg-white text-blue-600 font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 text-lg">
                Get Involved
              </Link>
              <Link href="/events"  className="bg-transparent border-2 border-white/40 text-white font-semibold px-8 py-4 rounded-xl hover:bg-white/10 hover:border-white/60 transition-all duration-300 text-lg">
                Explore Events
              </Link>
            </div>
          </div>
          

          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-8 text-white/50 text-sm">
            {stats.map((s,idx:number)=>(
            <div key={idx} className="flex items-center gap-2">
              <span className="font-bold text-white/70 text-lg">{s.value}</span>
              {s.label}
            </div>
          ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
