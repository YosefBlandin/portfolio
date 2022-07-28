import { SiHomeassistant, SiInstapaper, SiAboutdotme } from "react-icons/si";

export const hamburguerElements = [
  {
    name: "Home",
    external: false,
    route: "/",
    download: false,
    icon: <SiHomeassistant />,
  },
  {
    name: "Blog",
    external: true,
    route:
      "https://medium.com/turpialdev/how-the-event-loop-works-in-javascript-349c0936ab03?source=collection_home---4------3-----------------------",
    icon: <SiInstapaper />,
  },
  {
    name: "Resume",
    external: true,
    route:
      "https://drive.google.com/file/d/1y-F6HNGyYcCi6F9E1d7PseJUQ2sizXzV/view?usp=sharing",
    icon: <SiAboutdotme />,
  },
];
