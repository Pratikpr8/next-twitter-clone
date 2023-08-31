import React from "react";

interface Props {
  title: string;
  Icon: any;
}

function SidebarRow({ Icon, title }: Props) {
  return (
    <div className=" group flex space-x-2 items-center px-4 py-3 rounded-full max-w-fit transition-all duration-200  hover:bg-gray-100 cursor-pointer">
      <Icon className="h-6 w-6" />
      <p className="group-hover:text-twitter text-base font-light hidden md:inline-flex lg:text-xl">
        {title}
      </p>
    </div>
  );
}

export default SidebarRow;
