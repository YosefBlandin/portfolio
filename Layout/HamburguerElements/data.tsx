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
      "https://drive.google.com/file/d/1bPP7VV9MYpkCCNrz-7DGuNn6qrYDQ6To/view?usp=sharing",
    icon: <SiAboutdotme />,
  },
];
