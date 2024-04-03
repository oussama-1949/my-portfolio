import { useEffect, useState } from "react";
import Header from "./components/1-Header/Header";
import Hero from "./components/2-Hero/Hero";
import Main from "./components/3-Main/Main";
import Contact from "./components/4-contactus/Contact";
import Footer from "./components/5-Footer/Footer";

function App() {
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        setshowScrollBtn(true);
      } else {
        setshowScrollBtn(false);
      }
    });
  }, []);

  const [showScrollBtn, setshowScrollBtn] = useState(false);
  return (
    <>
      <div id="up" className="container">
        <Header />

        <Hero />
        <div className="divider" />
        <Main />
        <div className="divider" />

        <Contact />
        <div className="divider" />

        <Footer />
        <a
          style={{ opacity: showScrollBtn ? 1 : 0, transition: "2s" }}
          href="#up"
        >
          <button className="Scroll2top icon-keyboard_arrow_up"></button>
        </a>
      </div>
    </>
  );
}

export default App;
