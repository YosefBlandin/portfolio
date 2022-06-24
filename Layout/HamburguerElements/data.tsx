import { SiHomeassistant, SiOnnx, SiAboutdotme } from "react-icons/si";

export const hamburguerElements = [
  {
    name: "Home",
    external: false,
    route: "/",
    download: false,
    icon: <SiHomeassistant />,
  },
  {
    name: "Resume",
    external: true,
    route:
      "https://drive.google.com/file/d/1y-F6HNGyYcCi6F9E1d7PseJUQ2sizXzV/view?usp=sharing",
    icon: <SiAboutdotme />,
  },
];
