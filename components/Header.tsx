"use client";
import React from "react";

import Logo from "./Logo";
import MobileNav from "./MobileNav";

export const dropDownItems = [
  {
    name: "Favorites",
    path: "favourite_videos?page=1",
    value: "favorites",
  },
  {
    name: "Watch later",
    path: "watch_later_videos?page=1",
    value: "watch-later",
  },
  {
    name: "Watch history",
    path: "history?page=1",
    value: "watch-history",
  },
  {
    name: "Playlists",
    path: "playlists?page=1",
    value: "playlists",
  },
  {
    name: "Friends",
    path: "friends?page=1",
    value: "friends",
  },
  {
    name: "Edit",
    path: "edit",
    value: "edit",
  },
  {
    name: "Info",
    path: "info",
    value: "info",
  },
];

const Header = () => {
  return (
    <>
      <div className="w-full hidden lg:flex items-center justify-between">
        <Logo />
      </div>
      <MobileNav className="flex lg:hidden" />
    </>
  );
};

export default Header;
