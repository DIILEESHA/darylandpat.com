import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const Scrolltotop = () => {
  const { pathname } = useLocation(); // Get current route

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top when route changes
  }, [pathname]); // Dependency ensures effect runs on route change

  return null;
};

export default Scrolltotop;
