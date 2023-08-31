import React from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import { TwitterTimelineEmbed } from "react-twitter-embed";

function Widgets() {
  return (
    <div className="col-span-2 mt-2 px-2 hidden lg:inline">
      {/* Search */}
      <div className="flex space-x-2 rounded-full bg-gray-100 mt-2 mb-2 p-3">
        <MagnifyingGlassIcon className="h-6 w-6 text-gray-400" />
        <input
          type="text"
          placeholder="Search Twitter"
          className="outline-none bg-transparent flex-1"
        />
      </div>

      <TwitterTimelineEmbed
        sourceType="profile"
        screenName="f1"
        options={{ height: 800 }}
      />
    </div>
  );
}

export default Widgets;
