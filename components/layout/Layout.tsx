import { ReactNode } from "react";
import GoogleAnalytics from "../GAnalytics";
import CookieBanner from "../utils/CookieBanner";
import Footer from "./Footer";
import Header from "./Header";
import { Analytics } from "@vercel/analytics/react";

type LayoutProps = {
  children: ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="flex flex-col min-h-screen">
      <GoogleAnalytics GA_MEASUREMENT_ID="G-0F23B5CF3J" />
      <Analytics />
      <Header />
      <main className="flex-grow w-full mx-auto">{children}</main>
      <CookieBanner />
      <Footer />
    </div>
  );
}
