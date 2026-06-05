import React from "react"

const StoryHeader = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-4 mb-8 px-10 py-2">
        <div className="flex flex-col w-full justify-center items-center text-center gap-2">
          <h1 className="font-extrabold text-4xl text-white">Our Story</h1>
        <span className="w-1/6 h-0.5 bg-white" />
        </div>
        <p className="text-white/80 text-lg text-center max-w-2xl">
        From a single spark to a blazing trail — the journey of IEEE STCET Student Branch
      </p>
      
      </div>
  )
}

export default StoryHeader
