import Footer from "./Components/Footer";
import FormSection from "./Components/FormSection";
import HeroSection from "./Components/HeroSection";
import clsx from "clsx";

function App() {
  return (
    <div
      className={clsx(
        "bg-intro-mobile md:bg-intro-desktop min-h-screen",
        "bg-primary-1 bg-opacity-90",
        "font-poppins"
      )}
    >
      <div className="container">
        <HeroSection />
        <FormSection />
        <Footer />
      </div>
    </div>
  );
}

export default App;
