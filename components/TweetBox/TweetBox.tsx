import React, { useState } from "react";

import {
  CalendarIcon,
  FaceSmileIcon,
  MapPinIcon,
  PhotoIcon,
  MagnifyingGlassCircleIcon,
} from "@heroicons/react/24/outline";

function TweetBox() {
  const [input, setInput] = useState<string>("");
  return (
    <div className="flex space-x-2 p-5">
      <img
        className="h-14 w-14 mt-4 rounded-full object-cover"
        src="https://th.bing.com/th/id/OIP.zCadk3mZ7UHHlQKoa1s-YgHaHa?pid=ImgDet&rs=1"
        alt=""
      />

      <div className="flex flex-1 items-center pl-2">
        <form
          onSubmit={(e) => e.preventDefault()}
          className="flex flex-1 flex-col "
        >
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            type="text"
            placeholder="What is Happenning?"
            className="h-24 text-xl outline-none placeholder:text-xl"
          />
          <div className="flex items-center">
            <div className="flex space-x-2 text-twitter flex-1 ">
              <PhotoIcon className="h-5 w-5" />
              <MagnifyingGlassCircleIcon className="h-5 w-5" />
              <FaceSmileIcon className="h-5 w-5" />
              <CalendarIcon className="h-5 w-5" />
              <MapPinIcon className="h-5 w-5" />
            </div>

            <button
              disabled={!input}
              className="bg-twitter text-white rounded-full px-5 py-2 font-bold disabled:opacity-40"
            >
              Tweet
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default TweetBox;
