import { Dependency } from "@/components/Dependencies";
import {
  LuPackage,
  LuTerminal,
  LuTrash,
  LuFolderOutput,
  LuSearch,
  LuList,
  LuInfo,
  LuGitBranch,
  LuBell,
  LuRocket,
} from "react-icons/lu";

export const dependencies: Dependency[] = [
  { label: "yay/paru", description: "AUR helpers for Arch Linux" },
  { label: "readline", description: "Library for command-line input" },
  { label: "ncurses", description: "Library for text-based UIs" },
  { label: "gcc", description: "GNU Compiler Collection" },
  { label: "git", description: "For installing an AUR helper" },
];

export const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export const featureItems = [
  {
    icon: <LuPackage className="w-5 h-5" />,
    title: "System Updates",
    description: "Update your system/specific packages",
  },
  {
    icon: <LuTerminal className="w-5 h-5" />,
    title: "Package Installation",
    description: "Install packages with simple commands",
  },
  {
    icon: <LuTrash className="w-5 h-5" />,
    title: "Package Removal",
    description: "Remove unwanted packages cleanly",
  },
  {
    icon: <LuFolderOutput className="w-5 h-5" />,
    title: "Cache Cleaning",
    description: "Clean package cache to free up disk space",
  },
  {
    icon: <LuPackage className="w-5 h-5" />,
    title: "Orphan Management",
    description: "Clean or list orphaned packages",
  },
  {
    icon: <LuSearch className="w-5 h-5" />,
    title: "Package Search",
    description: "Find the packages you need",
  },
  {
    icon: <LuList className="w-5 h-5" />,
    title: "Package Listing",
    description: "List all installed packages",
  },
  {
    icon: <LuInfo className="w-5 h-5" />,
    title: "Package Information",
    description: "Get detailed information about packages",
  },
  {
    icon: <LuGitBranch className="w-5 h-5" />,
    title: "Dependency Tree",
    description: "Visualize package dependencies",
  },
  {
    icon: <LuBell className="w-5 h-5" />,
    title: "Update Checking",
    description: "Check for available updates",
  },
  {
    icon: <LuRocket className="w-5 h-5" />,
    title: "In active development",
    description: "More awesome features to come!",
  },
];
