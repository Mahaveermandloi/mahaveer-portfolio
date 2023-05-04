import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiTailwindcss,
  SiNextdotjs,
  SiFigma,
} from "react-icons/si";

const projects = [
  {
    title: "E-commerce Shop",
    description:
      "A responsive e-commerce website developed with React and utilizing the Fake Store API for data, while employing the Context API for state management.",
    imageUrl: "/images/project-1.jpg",
    githubUrl: "https://github.com/nsafarova/ecommerce-shop-react-app",
    liveDemoUrl: "https://ecommerce-shop-react-app.vercel.app/",
    techStackIcons: [
      { icon: <SiReact />, key: "react" },
      { icon: <SiJavascript />, key: "javascript" },
      { icon: <SiTailwindcss />, key: "tailwind" },
    ],
  },
  {
    title: "Image Gallery",
    description:
      "An image gallery app that utilizes the Unsplash API and is built with React, featuring a wide variety of high-quality photos to choose from.",
    imageUrl: "/images/project-2.jpg",
    githubUrl: "https://github.com/nsafarova/image-gallery-react-app",
    liveDemoUrl: "https://nsafarova.github.io/image-gallery-react-app/",
    techStackIcons: [
      { icon: <SiReact />, key: "react" },
      { icon: <SiJavascript />, key: "javascript" },
      { icon: <SiTailwindcss />, key: "tailwind" },
    ],
  },
  {
    title: "Agency Landing Page",
    description:
      "The agency landing page, built with ReactJS, features a responsive design optimized for both desktop and mobile viewing.",
    imageUrl: "/images/project-3.jpg",
    githubUrl: "https://github.com/nsafarova/landing-page-design",
    liveDemoUrl: "https://nsafarova.github.io/landing-page-design/",
    techStackIcons: [
      { icon: <SiReact />, key: "react" },
      { icon: <SiCss3 />, key: "css" },
      { icon: <SiFigma />, key: "figma" },
    ],
  },
  {
    title: "Weather App",
    description:
      "A weather app using OpenWeather API and built with React that displays weather information and changes the background based on the current weather condition.",
    imageUrl: "/images/project-4.jpg",
    githubUrl: "https://github.com/nsafarova/weather-app",
    liveDemoUrl: "https://nsafarova.github.io/weather-app/",
    techStackIcons: [
      { icon: <SiReact />, key: "react" },
      { icon: <SiJavascript />, key: "javascript" },
      { icon: <SiCss3 />, key: "css" },
    ],
  },
  // Add more projects here
];

export default projects;
