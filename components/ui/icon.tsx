import * as FcIcons from "react-icons/fc";
import * as HeroIcons2 from "react-icons/hi2";
import * as LuIcons from "react-icons/lu";
import * as Fa6Icons from "react-icons/fa6";

import type { IconType } from "react-icons/lib";

export type IconMap = Record<string, IconType>;
export type Library = "fc" | "hi" | "lu" | "fa";

interface IDynamicIcon {
  lib: Library;
  icon: string;
  size?: number;
  className?: string;
}

export const DynamicIcon: React.FC<IDynamicIcon> = ({
  lib,
  icon,
  size = 20,
  className,
}) => {
  const Icon: IconType = (returnLibraryIcons(lib) as IconMap)[icon];

  return <Icon className={className} size={size} />;
};

export const LibraryIcons = {
  fa: Fa6Icons,
  lu: LuIcons,
  fc: FcIcons,
  hi: HeroIcons2,
};

export const returnLibraryIcons = (lib: Library) => {
  return LibraryIcons[lib];
};
