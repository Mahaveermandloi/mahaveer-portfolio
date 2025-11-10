// import { ThemeProvider } from "next-themes";
// import 'tailwindcss/tailwind.css';
// import '../styles/globals.css';
// import '../styles/fonts.css';

// function MyApp({ Component, pageProps }) {
//   return (
//     <ThemeProvider defaultTheme="light" attribute="class">
//       <Component {...pageProps} />
//     </ThemeProvider>
//   );
// }

// export default MyApp;



// "use client";

// import { useEffect } from "react";
// import { useRouter } from "next/router";
// import { ThemeProvider } from "next-themes";
// import "../styles/globals.css";
// import "../styles/fonts.css";
// import "tailwindcss/tailwind.css";

// function MyApp({ Component, pageProps }) {
//   const router = useRouter();

//   useEffect(() => {
//     if (typeof window === "undefined") return;

//     // 🟣 Save scroll position before navigating away
//     const handleRouteChangeStart = () => {
//       sessionStorage.setItem("scrollPosition", window.scrollY.toString());
//     };

//     // 🟢 Restore scroll position after returning
//     const handleRouteChangeComplete = () => {
//       const savedPosition = sessionStorage.getItem("scrollPosition");
//       if (savedPosition) {
//         window.scrollTo({
//           top: parseInt(savedPosition, 10),
//           behavior: "smooth",
//         });
//         sessionStorage.removeItem("scrollPosition");
//       }
//     };

//     router.events.on("routeChangeStart", handleRouteChangeStart);
//     router.events.on("routeChangeComplete", handleRouteChangeComplete);

//     return () => {
//       router.events.off("routeChangeStart", handleRouteChangeStart);
//       router.events.off("routeChangeComplete", handleRouteChangeComplete);
//     };
//   }, [router]);

//   return (
//     <ThemeProvider defaultTheme="light" attribute="class">
//       <Component {...pageProps} />
//     </ThemeProvider>
//   );
// }

// export default MyApp;



import { ThemeProvider } from "next-themes";
import "tailwindcss/tailwind.css";
import "../styles/globals.css";
import "../styles/fonts.css";
import dynamic from "next/dynamic";

// const BubbleBackground = dynamic(() => import("../components/BubbleBackground"), {
//   ssr: false, // ⛔ prevents server-side render
// });

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider defaultTheme="light" attribute="class">
      {/* <BubbleBackground /> */}
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
