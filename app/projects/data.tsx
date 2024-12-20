import {
    SiGo,
    SiPostgresql,
    SiFlutter,
    SiNextdotjs,
    SiTailwindcss
  } from "react-icons/si";

export const projects = [
    {
        id: "1",
        name: "Mr. Kiwi",
        description: "Is a web application for make better experience for user.",
        role: "Software Developer",
        duration: "2023 - 2024",
        stack: [
            {
                icon: <SiNextdotjs/>,
                name: "Next.js"
            },
            {
                icon: <SiTailwindcss/>,
                name: "TailwindCSS"
          },
          {
            icon: <SiGo/>,
            name: "Golang"
          },
        ],
        image: "/images/404.png",
        preview_image:["/images/404.png","/images/404.png","/images/404.png"],
        repository: "https://google.com",
        demo: "https://google.com"
    },
    {
        id: "2",
        name: "Smart Fire Detection app",
        description: "Is a web application for make better experience for user.",
        role: "Mobile Developer",
        duration: "2023 - 2024",
        stack: [
            {
                icon: <SiFlutter/>,
                name: "Flutter"
            },
            {
                icon: <SiPostgresql/>,
                name: "PostgreSQL"
          },
          {
            icon: <SiGo/>,
            name: "Golang"
          },
        ],
        image: "/images/404.png",
        preview_image:[
          "/previews/pv_01.png",
          "/previews/pv_02.png",
          "/previews/pv_03.png"
        ],
        repository: "https://google.com",
        demo: "https://google.com"
    },
    
]