import React from "react"

const StoryHeader = () => {
  return (
    <div className="">
      <div className="flex flex-col items-center justify-center gap-4 mb-12 bg-white px-10 py-4 rounded-lg shadow-lg">
        <div className="flex flex-col w-full justify-center items-center text-center gap-2">
          <h1 className="font-extrabold text-4xl text-blue-600">Our Story</h1>
        <span className="w-1/3 h-0.5 bg-blue-600" />
        </div>
        <p className="text-black/80 text-lg text-center max-w-2xl">
        From a single spark to a blazing trail — the journey of IEEE STCET Student Branch
      </p>
      
      </div>
      
    </div>
  )
}

export default StoryHeader
