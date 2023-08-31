"use client";

import Feed from "@/container/Feed/Feed";
import Sidebar from "@/components/Sidebar/Sidebar";
import Widgets from "@/components/Widgets/Widgets";

export default function Home() {
  return (
    <div className="mx-auto max-h-screen lg:max-w-6xl overflow-hidden ">
      <main className="grid grid-cols-9">
        {/* Sidebar */}
        <Sidebar />

        {/* Feed */}
        <Feed />

        {/* Widgets */}

        <Widgets />
      </main>
    </div>
  );
}
