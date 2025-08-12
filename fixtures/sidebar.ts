import {
  BetweenHorizontalStart,
  Video,
  VideoIcon,
  FileVideo,
  Brain,
  Activity,
} from "lucide-react";

export const navItems = [
  {
    id: 1,
    name: "Rivercom 911",
    path: "/911Calls",
    icon: {
      name: "Activity",
      classes: "h-6 w-6",
      icon: Activity,
    },
  },
  {
    id: 2,
    name: "Tampered Evidence Videos",
    path: "/videos",
    icon: {
      name: "file-video",
      classes: "h-6 w-6",
      icon: FileVideo,
    },
  },

  {
    id: 3,
    name: "Sally Bagshaw",
    path: "/SallyBagshaw",
    icon: {
      name: "brain",
      classes: "h-6 w-6",
      icon: Brain,
    },
  },
  {
    id: 4,
    name: "Rivercom 911 Operation Manager",
    path: "/JeremiahJohnson",
    icon: {
      name: "activity",
      classes: "h-6 w-6",
      icon: Activity,
    },
  },
  {
    id: 5,
    name: "My Bio",
    path: "/aboutRyan",
    icon: {
      name: "Activity",
      classes: "h-6 w-6",
      icon: Activity,
    },
  },
];
