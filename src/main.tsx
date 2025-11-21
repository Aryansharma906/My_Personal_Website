import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import initSectionObserver from "./lib/sectionObserver";

// Start observing sections for entrance animations
initSectionObserver();

createRoot(document.getElementById("root")!).render(<App />);
