import {
  BetweenHorizontalStart,
  Video,
  VideoIcon,
  FileVideo,
  Code,
} from "lucide-react";

export const navItems = [
  {
    id: 1,
    name: "Upload Video",
    path: "/",
    icon: {
      name: "video",
      icon: VideoIcon,
      classes: "h-6 w-6",
    },
  },
  {
    id: 2,
    name: "View Videos",
    path: "/videos",
    icon: {
      name: "file-video",
      classes: "h-6 w-6",
      icon: FileVideo,
    },
  },

  {
    id: 4,
    name: "Sally Bagshaw",
    path: "/BagShawsBags",
    icon: {
      name: "code",
      classes: "h-6 w-6",
      icon: Code,
    },
  },
];
