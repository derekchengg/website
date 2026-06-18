import Image from "next/image";
import { cards } from "@/components/data/languageData";
import { cn } from "@/lib/utils";

export function SkillsList({ className }: { className?: string }) {
  return (
    <div className={cn("flex flex-wrap gap-2.5", className)}>
      {cards.map((card) => (
        <div
          key={card.title}
          className="flex items-center gap-2 pl-2 pr-3.5 py-2 rounded-full bg-white shadow-sm ring-1 ring-black/[0.06]"
        >
          <Image
            src={card.src}
            alt=""
            width={18}
            height={18}
            className="w-[18px] h-[18px] object-contain"
          />
          <span className="text-xs font-medium text-neutral-700">
            {card.title}
          </span>
        </div>
      ))}
    </div>
  );
}

export default SkillsList;
