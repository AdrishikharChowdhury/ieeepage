import { milestones } from "@/lib/constants";
import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div className="w-full bg-linear-to-b from-slate-50 via-blue-50 to-slate-50">
      {/* About IEEE STCET SB Section */}
      <section className="mx-auto max-w-6xl px-4 md:px-8 py-16">
        <div className="mb-12">
          <h1 className="text-5xl md:text-6xl font-bold text-left py-8 border-b-4 border-blue-500 inline-block">
            <span className="text-slate-900">About</span>{" "}
            <span className="bg-linear-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">IEEE STCET SB</span>
          </h1>
        </div>
        
        <div className="grid gap-6 md:gap-8">
          {milestones.map(({ date, title, description }, idx) => (
            <div
              key={idx}
              className="group relative border-l-4 border-blue-500 bg-white rounded-lg p-8 shadow-md hover:shadow-xl transition-all duration-300 hover:translate-x-1 overflow-hidden"
            >
              <div className="absolute inset-0 bg-linear-to-r from-blue-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative z-10">
                <span className="inline-block bg-linear-to-r from-blue-600 to-blue-500 text-white text-xs font-bold px-4 py-2 rounded-full mb-4 shadow-md">
                  {date}
                </span>
                <h2 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">{title}</h2>
                <p className="text-slate-600 text-base leading-relaxed text-justify">
                  {description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* About STCET Section */}
      <section className="mx-auto max-w-6xl px-4 md:px-8 py-16">
        <div className="mb-12">
          <h1 className="text-5xl md:text-6xl font-bold text-left py-8 border-b-4 border-blue-500 inline-block">
            <span className="text-slate-900">About</span> <span className="bg-linear-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">STCET</span>
          </h1>
        </div>
        
        <div className="group border-l-4 border-blue-500 bg-white rounded-lg p-8 shadow-md hover:shadow-xl transition-all duration-300 hover:translate-x-1 overflow-hidden">
          <div className="absolute inset-0 bg-linear-to-r from-blue-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <p className="relative z-10 text-slate-700 text-lg leading-relaxed text-justify">
            St. Thomas' College of Engineering & Technology in Kolkata is a
            prestigious institution renowned for its academic excellence and
            holistic student development. With a wide range of engineering
            programs, experienced faculty, state-of-the-art infrastructure, and
            emphasis on research and innovation, the college provides a
            comprehensive education. It also offers a vibrant campus life,
            encouraging extracurricular activities and industry interactions,
            shaping students into competent professionals and responsible
            citizens, ready to make significant contributions to society.
          </p>
        </div>
      </section>

      {/* Brief History Section */}
      <section className="mx-auto max-w-6xl px-4 md:px-8 py-16">
        <div className="mb-12">
          <h1 className="text-5xl md:text-6xl font-bold text-left py-8 border-b-4 border-blue-500 inline-block">
            <span className="text-slate-900">Brief</span> <span className="bg-linear-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">History</span>
          </h1>
        </div>

        <div className="grid gap-6 md:gap-8 mb-12">
          <div className="group border-l-4 border-blue-500 bg-white rounded-lg p-8 shadow-md hover:shadow-xl transition-all duration-300 hover:translate-x-1 overflow-hidden">
            <div className="absolute inset-0 bg-linear-to-r from-blue-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <p className="relative z-10 text-slate-700 text-lg leading-relaxed text-justify">
              In a bid to supplement the efforts of the West Bengal Government
              College and the All India Council for Technical Education (AICTE) in
              expanding the infrastructure of technical education in this region
              it was contemplated in 2000 to establish an Engineering College for
              the benefit of students in West Bengal and also in the region. To
              give the idea a shape, St. Thomas' College of Engineering &
              Technology was established with the intention to impart quality
              technical education to the students and imbibe confidence into the
              young talents graduating from the institution to stand up to the
              challenges of life with confidence. To ensure this, a plan was made
              so that it could become a seat of excellence in due course of time.
              Based on this preamble, St. Thomas' College of Engineering &
              Technology at 4, Diamond Harbour Road, Kidderpore, Kolkata 700023,
              West Bengal came into being on 29th August 2000.
            </p>
          </div>

          <div className="group border-l-4 border-blue-500 bg-white rounded-lg p-8 shadow-md hover:shadow-xl transition-all duration-300 hover:translate-x-1 overflow-hidden">
            <div className="absolute inset-0 bg-linear-to-r from-blue-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <p className="relative z-10 text-slate-700 text-lg leading-relaxed text-justify">
              The college is affiliated to Maulana Abul Kalam Azad University of
              Technology, West Bengal (MAKAUT, WB), formerly known as West Bengal
              University of Technology (WBUT).
            </p>
          </div>

          <div className="group border-l-4 border-blue-500 bg-white rounded-lg p-8 shadow-md hover:shadow-xl transition-all duration-300 hover:translate-x-1 overflow-hidden">
            <div className="absolute inset-0 bg-linear-to-r from-blue-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <p className="relative z-10 text-slate-700 text-lg leading-relaxed text-justify">
              The college is approved by the All India Council for Technical
              Education (AICTE). All the courses are approved by AICTE and
              affiliated to MAKAUT,WB. The college also offers NBA accredited
              programmes.
            </p>
          </div>
        </div>

        {/* Images Section */}
        <div className="w-full flex flex-row-reverse">
          <div className="flex flex-col">
            <Image
              src="/aicte-webp.webp"
              alt="logo"
              width={100}
              height={50}
              className="size-40 p-4 object-cover"
            />
            <Image
              src="/makaut-webp.webp"
              alt="logo"
              width={100}
              height={50}
              className="size-40 p-4 object-cover"
            />
            <Image
              src="/NBA-webp.webp"
              alt="logo"
              width={100}
              height={50}
              className="size-40 p-4 object-cover"
            />
          </div>
          <Image
            src="/STCET-Building.webp"
            className="w-4/5"
            width={200}
            height={100}
            alt="building"
          />
        </div>
      </section>
    </div>
  );
};

export default page;
