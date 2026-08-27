import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";
import { Button } from "./button";

const SHOW_AFTER_PX = 400;

// Floating "back to top" button. Only becomes visible/clickable once the
// user has scrolled down a considerable amount, and smooth-scrolls back
// to the top of the page when pressed.
const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > SHOW_AFTER_PX);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Button
      variant="default"
      size="icon"
      onClick={scrollToTop}
      className={`fixed bottom-6 right-6 z-40 rounded-full shadow-lg transition-opacity duration-300 ${
        isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
      aria-hidden={!isVisible}
      tabIndex={isVisible ? 0 : -1}
    >
      <ArrowUp className="h-5 w-5" />
      <span className="sr-only">Volver arriba</span>
    </Button>
  );
};

export default ScrollToTop;
