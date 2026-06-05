import React from "react";

const Story = () => {
  return (
    <section className="min-h-screen w-full bg-blue-500 p-5 flex flex-col gap-6" id="story">
      <div className="flex justify-between w-full">
        <h1 className="bg-white px-10 py-6 rounded-full font-extrabold w-fit h-fit text-4xl text-nowrap">
          Our Story
        </h1>
        <div className="p-6 bg-white rounded-b-4xl rounded-l-4xl w-3/5 flex flex-col gap-4 justify-center items-center">
        <h2 className="text-2xl font-bold text-center" >IEEE Student Branch Foundation</h2>
        <p className='text-justify tracking-widest text-lg/8 italic' >The journey began with the official establishment of the main IEEE Student Branch on August 4, 2022. This foundational milestone laid the groundwork for future technical societies and professional growth on the campus.</p>
        </div>
      </div>
      <div className="p-6 bg-white rounded-b-4xl rounded-r-4xl w-3/5 flex flex-col gap-4 justify-center items-center">
          <h2 className="text-2xl font-bold text-center" >Growth in Computational Intelligence</h2>
        <p className='text-justify tracking-widest text-lg/8 italic' >Expanding its academic and research reach, the institution established the IEEE Student Chapter (SC) for the Computational Intelligence Society (CIS) on May 23, 2024. This addition focused on fostering advanced skills and knowledge in AI and computing fields.</p>
        </div>
        <div className="p-6 bg-white rounded-b-4xl rounded-l-4xl w-3/5 flex flex-col gap-4 justify-center items-center self-end">
        <h2 className="text-2xl font-bold text-center" >Dual Expansion: Industry Focus and Inclusivity</h2>
        <p className='text-justify tracking-widest text-lg/8 italic' >A major dual milestone occurred on April 5, 2025, when two distinct groups were formed simultaneously. The first was the IEEE Student Chapter for the Industrial Electronics Society (IES), aimed at specializing in hardware and electronic applications. On the exact same day, the IEEE Student Affinity Group for Women in Engineering (WIE) was established to promote diversity and empower female student leaders in technology.</p>
        </div>
    </section>
  );
};

export default Story;
