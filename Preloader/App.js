import React, {useState, useEffect} from "react"
import Preloader from "./Preloader";
import { AnimatePresence } from "framer-motion";

export default function App() {
const [isLoading, setIsLoading] = useState(true);

useEffect(() => {
(async () => {
const LocomotiveScroll = (await import("locomotive-scroll")).default;
const locomotiveScroll = new LocomotiveScroll();

setTimeout(() => {
setIsLoading(false);
document.body.style.cursor = "default";
window.scrollTo(0, 0);
}, 2000);
})();
}, []);
return (
<>
  <AnimatePresence mode="wait">
    {isLoading &&
    <Preloader />}
  </AnimatePresence>
  
  <h1>hello</h1>
</>
);
}
