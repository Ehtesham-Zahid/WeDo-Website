import gsap from "gsap";
import { useGSAP } from "@gsap/react"; // Assuming this is from your gsap-react package

import MainSection from "../MainSection/MainSection";
import { useEffect, useRef, useState } from "react";
import PreLoader from "../PreLoader/PreLoader";
import Header from "../Header/Header";
import AboutSection from "../AboutSection/AboutSection";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ServicesMarquee from "../ServicesMarquee/ServicesMarquee";
import FaqsSection from "../FaqsSection/FaqsSection";
import ServicesSection from "../ServicesSection/ServicesSection";
import Footer from "../Footer/Footer";
import ContactSection from "../ContactSection/ContactSection";
import SectionSpace from "../SectionSpace/SectionSpace";
import ProcessSection from "../ProcessSection/ProcessSection";

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const mainContainerRef = useRef();
  const aboutContainerRef = useRef();
  const faqContainerRef = useRef();
  const servicesContainerRef = useRef();
  const processContainerRef = useRef();
  const contactContainerRef = useRef();

  const card1Ref = useRef();
  const card2Ref = useRef();
  const card3Ref = useRef();
  const card4Ref = useRef();
  const card5Ref = useRef();
  const card6Ref = useRef();

  // ------------------SINGLE TIMELINE----------------------
  useGSAP(() => {
    let mm = gsap.matchMedia();

    // -------------------------------------BELOW IS THE CODE WHICH WAS RUNNING ON THE LOOM VIDEO.....

    mm.add("(min-width:1280px)", () => {
      // FIRST ANIMATION
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: mainContainerRef.current,
          start: "5% 0%",
          end: "75% 0%",
          scrub: 2,
          // markers: true,
        },
      });
      tl.to(
        [
          card1Ref.current,
          card2Ref.current,
          card3Ref.current,
          card4Ref.current,
          card5Ref.current,
          card6Ref.current,
        ],
        {
          top: "130%",
          left: "70%",
          rotate: "360",
          scale: 0.5,
          // duration: 5,
        },
        "first"
      );
      // SECOND ANIMATION
      const tl2 = gsap.timeline({
        scrollTrigger: {
          trigger: aboutContainerRef.current,
          start: "50% 50%",
          end: "100% 10%",
          scrub: 2,
          // markers: true,
        },
      });
      tl2.to(
        [
          card1Ref.current,
          card2Ref.current,
          card3Ref.current,
          card4Ref.current,
          card5Ref.current,
          card6Ref.current,
        ],

        {
          top: "235%",
          left: "20%",
          rotate: "270",
          scale: 1,
          duration: 2,
          stagger: 0.2,
        },
        "second"
      );
      // 3RD ANIMATION
      const tl3 = gsap.timeline({
        scrollTrigger: {
          trigger: faqContainerRef.current,
          start: "0% 0%",
          end: "150% 0%",
          scrub: 2,
          markers: true,
        },
      });
      tl3.to(
        card1Ref.current,

        {
          top: "345%",
          left: "30%",
          rotate: "45",
          scale: 0.5,
          // duration: 0.2,
        },
        "card"
      );
      tl3.to(
        card2Ref.current,

        {
          top: "345%",
          left: "59%",
          rotate: "12",
          scale: 0.5,
          // duration: 0.2,
        },
        "card"
      );
      tl3.to(
        card3Ref.current,

        {
          top: "378%",
          left: "30%",
          rotate: "36",
          scale: 0.5,
          // duration: 0.2,
        },
        "card"
      );
      tl3.to(
        card4Ref.current,

        {
          top: "378%",
          left: "59%",
          rotate: "57",
          scale: 0.5,
          // duration: 0.2,
        },
        "card"
      );
      tl3.to(
        card5Ref.current,

        {
          top: "410%",
          left: "30%",
          rotate: "99",
          scale: 0.5,
          // duration: 0.2,
        },
        "card"
      );
      tl3.to(
        card6Ref.current,

        {
          top: "410%",
          left: "59%",
          rotate: "270",
          scale: 0.5,
          // duration: 0.2,
        },
        "card"
      );
      //   // 4TH ANIMATION
      const tl4 = gsap.timeline({
        scrollTrigger: {
          trigger: processContainerRef.current,
          start: "20% 100%",
          end: "80% 50%",
          scrub: 2,
          markers: true,
        },
      });
      tl4.to(
        [
          card1Ref.current,
          card2Ref.current,
          card3Ref.current,
          card4Ref.current,
          card5Ref.current,
          card6Ref.current,
        ],
        {
          top: "480%",
          left: "20%",
          rotate: "270",
          // scale: 1,
          duration: 2,
          stagger: 0.2,
        }
      );
      tl4.fromTo(
        [
          card1Ref.current,
          card2Ref.current,
          card3Ref.current,
          card4Ref.current,
          card5Ref.current,
          card6Ref.current,
        ],
        {
          top: "480%",
          left: "20%",
          rotate: "270",
          // scale: 1,
          duration: 2,
          stagger: 0.2,
        },
        {
          top: "530%",
          left: "70%",
          rotate: "270",
          // scale: 1,
          duration: 2,
          stagger: 0.2,
        }
      );
      tl4.to(
        [
          card1Ref.current,
          card2Ref.current,
          card3Ref.current,
          card4Ref.current,
          card5Ref.current,
          card6Ref.current,
        ],

        {
          top: "580%",
          left: "20%",
          rotate: "270",
          // scale: 1,
          duration: 2,
          stagger: 0.2,
        }
      );
      // 5th ANIMATION
      const tl5 = gsap.timeline({
        scrollTrigger: {
          trigger: processContainerRef.current,
          start: "90% 50%",
          end: "140% 50%",
          scrub: 2,
          markers: true,
        },
      });
      tl5.to(
        card1Ref.current,
        {
          top: "650%",
          left: "30%",
          rotate: "45",
          scale: 0.8,
          zIndex: 5,
        },
        "card5"
      );
      tl5.to(
        card2Ref.current,
        {
          top: "652%",
          left: "80%",
          rotate: "-45",
          scale: 0.8,
          zIndex: 5,
        },
        "card5"
      );
      tl5.to(
        card3Ref.current,
        {
          top: "670%",
          left: "48%",
          rotate: "315",
          scale: 0.8,
          zIndex: 5,
        },
        "card5"
      );
      tl5.to(
        card4Ref.current,
        {
          top: "720%",
          left: "28%",
          rotate: "45",
          scale: 0.8,
          zIndex: 5,
        },
        "card5"
      );
      tl5.to(
        card5Ref.current,
        {
          top: "720%",
          left: "80%",
          rotate: "-45",
          scale: 0.8,
          zIndex: 5,
        },
        "card5"
      );
      tl5.to(
        card6Ref.current,
        {
          top: "700%",
          left: "50%",
          rotate: "163",
          scale: 0.8,
          zIndex: 5,
        },
        "card5"
      );
    });

    // ------------------------------------------------------- IT ENDS HERE

    // -------------------LARGE SCREENS--------------------

    mm.add("(min-width:1700px)", () => {
      // FIRST ANIMATION
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: mainContainerRef.current,
          start: "1% 0%",
          end: "20% 50%",
          scrub: 2,

          // markers: true,
        },
      });

      tl.to(
        [
          card1Ref.current,
          card2Ref.current,
          card3Ref.current,
          card4Ref.current,
          card5Ref.current,
          card6Ref.current,
        ],
        {
          top: "130%",
          left: "70%",
          rotate: "360",
          scale: 0.5,
          duration: 5,
        },
        "first"
      );

      // SECOND ANIMATION
      const tl2 = gsap.timeline({
        scrollTrigger: {
          trigger: aboutContainerRef.current,
          start: "70% 50%",
          end: "155% 50%",
          scrub: 2,

          // markers: true,
        },
      });
      tl2.to(
        [
          card1Ref.current,
          card2Ref.current,
          card3Ref.current,
          card4Ref.current,
          card5Ref.current,
          card6Ref.current,
        ],
        {
          top: "235%",
          left: "20%",
          rotate: "270",
          scale: 1,
          duration: 1,
          stagger: 0.2,
        },
        "second"
      );

      // 3RD ANIMATION

      const tl3 = gsap.timeline({
        scrollTrigger: {
          trigger: faqContainerRef.current,
          start: "80% 50%",
          end: "150% 50%",
          scrub: 2,

          // markers: true,
        },
      });

      tl3.to(
        card1Ref.current,
        {
          top: "280%",
          left: "22.5%",
          rotate: "45",
          scale: 0.5,
          // duration: 0.2,
        },
        "card"
      );
      tl3.to(
        card2Ref.current,
        {
          top: "280%",
          left: "45%",
          rotate: "12",
          scale: 0.5,
          // duration: 0.2,
        },
        "card"
      );
      tl3.to(
        card3Ref.current,
        {
          top: "280%",
          left: "67%",
          rotate: "36",
          scale: 0.5,
          // duration: 0.2,
        },
        "card"
      );
      tl3.to(
        card4Ref.current,
        {
          top: "312%",
          left: "22.5%",
          rotate: "57",
          scale: 0.5,
          // duration: 0.2,
        },
        "card"
      );
      tl3.to(
        card5Ref.current,
        {
          top: "312%",
          left: "45%",
          rotate: "99",
          scale: 0.5,
          // duration: 0.2,
        },
        "card"
      );
      tl3.to(
        card6Ref.current,
        {
          top: "312%",
          left: "67%",
          rotate: "270",
          scale: 0.5,
          // duration: 0.2,
        },
        "card"
      );

      // 4th ANIMATION

      const tl4 = gsap.timeline({
        scrollTrigger: {
          trigger: servicesContainerRef.current,
          start: "80% 50%",
          end: "180% 50%",
          scrub: 2,

          // markers: true,
        },
      });

      tl4.to(
        card1Ref.current,
        {
          top: "368%",
          left: "30%",
          rotate: "45",
          scale: 0.8,
          zIndex: 5,
        },
        "card2"
      );
      tl4.to(
        card2Ref.current,
        {
          top: "368%",
          left: "80%",
          rotate: "-45",
          scale: 0.8,
          zIndex: 5,
        },
        "card2"
      );
      tl4.to(
        card3Ref.current,
        {
          top: "390%",
          left: "48%",
          rotate: "315",
          scale: 0.8,
          zIndex: 5,
        },
        "card2"
      );
      tl4.to(
        card4Ref.current,
        {
          top: "425%",
          left: "28%",
          rotate: "45",
          scale: 0.8,
          zIndex: 5,
        },
        "card2"
      );
      tl4.to(
        card5Ref.current,
        {
          top: "425%",
          left: "80%",
          rotate: "-45",
          scale: 0.8,
          zIndex: 5,
        },
        "card2"
      );
      tl4.to(
        card6Ref.current,
        {
          top: "415%",
          left: "50%",
          rotate: "163",
          scale: 0.8,
          zIndex: 5,
        },
        "card2"
      );
    });
  });

  return (
    <div className=" ">
      <div
        className=" w-28 h-28 2xl:w-44 2xl:h-28   rotate-45  absolute top-[20%] 2xl:top-[17%] left-[18%] 2xl:left-[22%]  hidden xl:flex   justify-center items-center"
        id="card-1"
        ref={card1Ref}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="150"
          height="150"
          fill="rgba(6,182,212,1)"
        >
          <path d="M21 8V20.9932C21 21.5501 20.5552 22 20.0066 22H3.9934C3.44495 22 3 21.556 3 21.0082V2.9918C3 2.45531 3.4487 2 4.00221 2H14.9968L21 8ZM19 9H14V4H5V20H19V9ZM8 7H11V9H8V7ZM8 11H16V13H8V11ZM8 15H16V17H8V15Z"></path>
        </svg>
      </div>
      <div
        className=" w-28 h-28 2xl:w-44 2xl:h-28   rotate-90  absolute top-[47%] left-[12%] 2xl:left-[6%]  hidden xl:flex   justify-center items-center"
        id="card-2"
        ref={card2Ref}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="150"
          height="150"
          fill="rgba(6,182,212,1)"
        >
          <path d="M21 8V20.9932C21 21.5501 20.5552 22 20.0066 22H3.9934C3.44495 22 3 21.556 3 21.0082V2.9918C3 2.45531 3.4487 2 4.00221 2H14.9968L21 8ZM19 9H14V4H5V20H19V9ZM8 7H11V9H8V7ZM8 11H16V13H8V11ZM8 15H16V17H8V15Z"></path>
        </svg>
      </div>
      <div
        className=" w-28 h-28 2xl:w-44 2xl:h-28   rotate-180  absolute top-[75%] left-[15%] 2xl:left-[22%] hidden xl:flex   justify-center items-center"
        id="card-3"
        ref={card3Ref}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="150"
          height="150"
          fill="rgba(6,182,212,1)"
        >
          <path d="M21 8V20.9932C21 21.5501 20.5552 22 20.0066 22H3.9934C3.44495 22 3 21.556 3 21.0082V2.9918C3 2.45531 3.4487 2 4.00221 2H14.9968L21 8ZM19 9H14V4H5V20H19V9ZM8 7H11V9H8V7ZM8 11H16V13H8V11ZM8 15H16V17H8V15Z"></path>
        </svg>
      </div>
      <div
        className=" w-28 h-28 2xl:w-44 2xl:h-28   -rotate-45  absolute top-[20%] 2xl:top-[17%] right-[22%] 2xl:right-[22%] hidden xl:flex   justify-center items-center"
        id="card-4"
        ref={card4Ref}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="150"
          height="150"
          fill="rgba(6,182,212,1)"
        >
          <path d="M21 8V20.9932C21 21.5501 20.5552 22 20.0066 22H3.9934C3.44495 22 3 21.556 3 21.0082V2.9918C3 2.45531 3.4487 2 4.00221 2H14.9968L21 8ZM19 9H14V4H5V20H19V9ZM8 7H11V9H8V7ZM8 11H16V13H8V11ZM8 15H16V17H8V15Z"></path>
        </svg>
      </div>
      <div
        className=" w-28 h-28 2xl:w-44 2xl:h-28   -rotate-90  absolute top-[47%] right-[12%] 2xl:right-[6%] hidden lg:flex   justify-center items-center"
        id="card-5"
        ref={card5Ref}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="150"
          height="150"
          fill="rgba(6,182,212,1)"
        >
          <path d="M21 8V20.9932C21 21.5501 20.5552 22 20.0066 22H3.9934C3.44495 22 3 21.556 3 21.0082V2.9918C3 2.45531 3.4487 2 4.00221 2H14.9968L21 8ZM19 9H14V4H5V20H19V9ZM8 7H11V9H8V7ZM8 11H16V13H8V11ZM8 15H16V17H8V15Z"></path>
        </svg>
      </div>
      <div
        className=" w-28 h-28 2xl:w-44 2xl:h-28   rotate-12  absolute top-[75%] right-[22%]  2xl:right-[22%] hidden lg:flex   justify-center items-center"
        id="card-6"
        ref={card6Ref}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="150"
          height="150"
          fill="rgba(6,182,212,1)"
        >
          <path d="M21 8V20.9932C21 21.5501 20.5552 22 20.0066 22H3.9934C3.44495 22 3 21.556 3 21.0082V2.9918C3 2.45531 3.4487 2 4.00221 2H14.9968L21 8ZM19 9H14V4H5V20H19V9ZM8 7H11V9H8V7ZM8 11H16V13H8V11ZM8 15H16V17H8V15Z"></path>
        </svg>
      </div>

      {/* <PreLoader /> */}
      <div className=" min-h-screen  relative">
        <Header />
        <div ref={mainContainerRef}>
          <MainSection />
        </div>
        <div className="" ref={aboutContainerRef}>
          <AboutSection />
        </div>

        {/* <SectionSpace /> */}
        <div ref={faqContainerRef}>
          <FaqsSection />
        </div>
        {/* <SectionSpace /> */}
        <div ref={servicesContainerRef}>
          <ServicesSection />
        </div>
        {/* <SectionSpace /> */}
        {/* <ServicesMarquee /> */}
        <div ref={processContainerRef}>
          <ProcessSection />
        </div>
        {/* <SectionSpace /> */}

        <div className="" ref={contactContainerRef}>
          <ContactSection />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
