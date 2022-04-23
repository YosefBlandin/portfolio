import { SiHomeassistant, SiOnnx, SiAboutdotme } from "react-icons/si";

export const hamburguerElements = [
  {
    name: "Home",
    route: "/",
    download: false,
    icon: <SiHomeassistant />,
  },
  {
    name: "Resume",
    download: true,
    route: "/public/yosefCurriculum.pdf",
    icon: <SiAboutdotme />,
  },
];
