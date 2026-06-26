import { Outlet } from "react-router";
import { Header } from "../sections/Header";
import { Hero } from "../sections/Hero";
import { DetailsGrid } from "../sections/DetailsGrid";
import { MoreInfo } from "../sections/MoreInfo";
import { Instructor } from "../sections/Instructor";
import { RegistrationForm } from "../sections/RegistrationForm";
import { Footer } from "../sections/Footer";

/**
 * Layout principal de la landing page.
 * Compone el header, todas las secciones, y el footer.
 */
export function RootLayout() {
  return (
    <div className="bg-brand-dark min-h-screen text-white scroll-smooth selection:bg-brand-gold selection:text-brand-dark">
      <Header />
      <main>
        <Hero />
        <DetailsGrid />
        <MoreInfo />
        <Instructor />
        <RegistrationForm />
      </main>
      <Footer />
      <Outlet />
    </div>
  );
}
