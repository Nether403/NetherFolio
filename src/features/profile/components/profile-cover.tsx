import { MvDMark } from "@/components/mvd-mark";
import { GradientDots } from "@/components/ui/gradient-dots";
import { cn } from "@/lib/utils";

export function ProfileCover() {
  return (
    <div
      className={cn(
        "relative aspect-2/1 border-x border-edge select-none sm:aspect-3/1",
        "flex items-center justify-center text-black dark:text-white",
        "screen-line-before screen-line-after before:-top-px after:-bottom-px",
        "overflow-hidden"
      )}
    >
      <GradientDots duration={20} />
      <MvDMark
        id="js-cover-mark"
        className="relative z-10 h-14 w-28 sm:h-16 sm:w-32"
      />
    </div>
  );
}
