import { createBrowserRouter, Outlet } from "react-router";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { DetailsGrid } from "./components/DetailsGrid";
import { MoreInfo } from "./components/MoreInfo";
import { Instructor } from "./components/Instructor";
import { RegistrationForm } from "./components/RegistrationForm";
import { Footer } from "./components/Footer";

function Root() {
  return (
    <div className="bg-[#060b0d] min-h-screen text-white scroll-smooth selection:bg-[#D4AF37] selection:text-[#060b0d]">
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

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
  },
]);
