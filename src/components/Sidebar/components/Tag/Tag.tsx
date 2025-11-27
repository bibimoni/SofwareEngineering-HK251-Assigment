import { NavLink } from "react-router-dom";

interface TagProps {
  tagName: string;
  path: string;
}

export default function Tag({ tagName, path }: TagProps) {
  const activeClasses = "border-r-[#3747F9] bg-[#3747F9]/5 text-[#3747F9] font-semibold";
  const defaultClasses =
    "border-r-transparent text-gray-600 hover:border-r-[#3747F9] hover:bg-[#3747F9]/5 hover:text-[#3747F9]";

  return (
    <NavLink
      to={path}
      end={path === "/"}
      className={({ isActive }) =>
        `flex h-[44px] w-full cursor-pointer items-center border-r-4 pl-5 transition-all duration-150 ease-in-out ${
          isActive ? activeClasses : defaultClasses
        }`
      }
    >
      {tagName}
    </NavLink>
  );
}
