import { HomeIcon, BookOpenIcon, WrenchIcon } from "@heroicons/react/24/solid";

export const headerNavLinks = [
  {
    id: 1,
    href: "/",
    icon: <HomeIcon className="headerIcon" />,
    label: "Home",
  },
  {
    id: 2,
    href: "/blog",
    icon: <BookOpenIcon className="headerIcon" />,
    label: "Blog",
  },
  {
    id: 3,
    href: "/isr",
    icon: <WrenchIcon className="headerIcon" />,
    label: "ISR",
  },
];
