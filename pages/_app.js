import { ThemeProvider } from "next-themes";
import 'tailwindcss/tailwind.css';
import '../styles/globals.css';
import '../styles/fonts.css';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider defaultTheme="light" attribute="class">
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
