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
      "https://drive.google.com/file/d/1SzbQzHpSYprcpiVZI4yxQwDQi6GMi5uw/view?usp=sharing",
    icon: <SiAboutdotme />,
  },
];
