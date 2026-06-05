import React from "react"
import { cn } from "@/lib/utils"
import { Building2, Brain, Cog, UsersRound } from "lucide-react"

interface MilestoneButtonProps {
  index: number
}

const logos = [
  {
    label: "IEEE",
    icon: Building2,
    color: "bg-blue-600",
    ring: "ring-blue-300",
  },
  {
    label: "CIS",
    icon: Brain,
    color: "bg-purple-600",
    ring: "ring-purple-300",
  },
  {
    label: "IES+WIE",
    icon: Cog,
    secondaryIcon: UsersRound,
    color: "bg-emerald-600",
    ring: "ring-emerald-300",
  },
]

const MilestoneButton = ({ index }: MilestoneButtonProps) => {
  const { label, icon: Icon, secondaryIcon: SecondaryIcon, color, ring } =
    logos[index] ?? logos[0]

  return (
    <button
      className={cn(
        "w-14 h-14 rounded-full flex flex-col items-center justify-center gap-0.5 shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl ring-2 ring-offset-2 ring-offset-blue-500",
        color,
        ring
      )}
      title={label}
    >
      <span className="flex items-center gap-0.5">
        <Icon size={14} className="text-white" />
        {SecondaryIcon && <SecondaryIcon size={14} className="text-white" />}
      </span>
      <span className="text-[9px] font-bold text-white leading-none">{label}</span>
    </button>
  )
}

export default MilestoneButton
