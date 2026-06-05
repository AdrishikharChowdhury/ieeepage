import React from "react"
import { cn } from "@/lib/utils"

interface StoryCardProps {
  title: string
  date: string
  description: string
  side: "left" | "right"
}

const StoryCard = ({ title, date, description, side }: StoryCardProps) => {
  return (
    <div
      className={cn(
        "bg-white rounded-2xl p-6 shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-1",
        side === "left" ? "rounded-bl-4xl" : "rounded-br-4xl"
      )}
    >
      <span className="inline-block bg-blue-500 text-white text-sm font-semibold px-3 py-1 rounded-full mb-3">
        {date}
      </span>
      <h2 className="text-2xl font-bold text-gray-800 mb-3">{title}</h2>
      <p className="text-gray-600 text-justify leading-relaxed">{description}</p>
    </div>
  )
}

export default StoryCard
