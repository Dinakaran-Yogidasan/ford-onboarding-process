import { Inter } from "next/font/google";
import NavItems from "../components/navigation/navItems";
import "./globals.css";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Ford Onboarding Process",
  description: "Steps to be followed while onboarding to Ford",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="main">
          <header></header>
          <article className="container">
            <NavItems />
            <section className="navdetails">
                {children}
            </section>
          </article>
          <footer></footer>
        </main>
      </body>
    </html>
  );
}
