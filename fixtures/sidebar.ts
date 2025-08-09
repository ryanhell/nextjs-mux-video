import {
  BetweenHorizontalStart,
  Video,
  VideoIcon,
  FileVideo,
  Code,
} from "lucide-react";

export const navItems = [
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
    path: "/SallyBagshaw",
    icon: {
      name: "code",
      classes: "h-6 w-6",
      icon: Code,
    },
  },
  {
    id: 5,
    name: "Rivercom 911 Operation Manager",
    path: "/JeremiahJohnson",
    icon: {
      name: "code",
      classes: "h-6 w-6",
      icon: Code,
    },
  },
];
