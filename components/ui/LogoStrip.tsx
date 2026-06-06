import Image from "next/image";

interface LogoStripProps {
  logos: { src: string; alt: string; width: number; height: number }[];
}

export function LogoStrip({ logos }: LogoStripProps) {
  return (
    <div className="bg-white-card rounded-[40px] w-full px-6 py-8 flex items-center justify-center gap-8 md:gap-12 overflow-x-auto">
      {logos.map((logo, i) => (
        <div key={i} className="shrink-0">
          <Image src={logo.src} alt={logo.alt} width={logo.width} height={logo.height} className="object-contain h-10 w-auto" />
        </div>
      ))}
    </div>
  );
}
