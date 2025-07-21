import React, { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import "../../app.css";
import { CiLinkedin } from "react-icons/ci";
import { FaFacebookSquare, FaInstagram } from "react-icons/fa";

gsap.registerPlugin(SplitText);

const Header = () => {
  const [isClicked, setIsClicked] = useState(false);
  const dropDownMenu = useRef(null);
  const pro_line = useRef(null);
  const rotateDown = useRef(null);
  const rotateUp = useRef(null);
  const menuWrapperRef = useRef(null);
  

  useEffect(() => {
    const menuItems = menuWrapperRef.current.querySelectorAll(".menu_item");
    const addressTexts = menuWrapperRef.current.querySelectorAll(".menuWrapper p");

    gsap.to(dropDownMenu.current, {
      yPercent: isClicked ? 100 : 0,
      opacity: 1,
      duration: 1,
      ease: "power2.out",
    });

    if (isClicked) {
      gsap.fromTo(
        menuItems,
        { y: 0, opacity: 0 },
        {
          y: 30,
          opacity: 1,
          delay: 0.7,
          duration: 1,
          stagger: 0.1,
          ease: "power2.out",
        }
      );

      gsap.to(pro_line.current, {
        height: window.innerHeight - 80,
        duration: 1,
      });

      // Clean up previous splits if any
      const split = new SplitText(addressTexts, { type: "lines" });

      gsap.from(split.lines, {
        y: 30,
        opacity: 0,
        delay: 0.5,
        duration: 1,
        stagger: 0.1,
        ease: "power2.out",
      });
    } else {
      gsap.to(menuItems, {
        y: 0,
        opacity: 0,
        duration: 1,
      });

      gsap.to(pro_line.current, {
        height: 20,
        duration: 1,
      });

      gsap.to(addressTexts, {
        y: 0,
        duration: 1,
      });
    }
  }, [isClicked]);

  function handleMenuBtn() {
    setIsClicked((prev) => !prev);
  }

  return (
    <>
      <header className="bg-red-500">
        {/* Navigation */}
        <nav
          className={`w-full py-4 fixed top-0 left-0 z-40 ${
            isClicked ? "border-b border-gray-300" : ""
          }`}
        >
          <div className="container flex justify-between">
            <div className="logo w-40 text-3xl font-bold text-white">HORIBOL</div>
            <div className="menu">
              <div
                onClick={handleMenuBtn}
                className="border py-2 px-4 rounded-full flex items-center gap-3 hover:cursor-pointer text-white"
              >
                <div className="w-12 h-6 overflow-hidden">
                  {isClicked ? <span>Close</span> : <span>Menu</span>}
                </div>
                <div className="flex flex-col gap-3">
                  <div
                    ref={rotateDown}
                    className={`w-5 h-[2px] bg-white ${
                      isClicked ? "rotate-45 origin-top-left" : ""
                    }`}
                  ></div>
                  <div
                    ref={rotateUp}
                    className={`w-5 h-[2px] bg-white ${
                      isClicked ? "-rotate-45 origin-bottom-left" : ""
                    }`}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>

      {/* Dropdown Menu */}
      <div
        ref={dropDownMenu}
        
        className="w-full h-screen bg-gray-800 absolute left-0 top-100 py-20 z-30 opacity-0 translate-y-[-100%]"
      >
        <div ref={menuWrapperRef} className="menuWrapper flex">
          {/* Address Section */}
          <div className="w-1/2 h-full p-12 lg:py-20 lg:px-36 border-l text-white">
            <div className="mb-12">
              <div className="text-mask relative h-8 w-full overflow-hidden">
                <p className="text-2xl">(+351) 212 071 122</p>
              </div>
              <div className="text-mask relative h-8 w-full overflow-hidden">
                <p className="text-2xl">info@wallnut.pt</p>
              </div>
            </div>
            <div className="mb-12">
              <strong>Lisbon</strong>
              <div className="text-mask relative h-8 w-full overflow-hidden">
                <p className="text-2xl">Rua Nova do Almada 59, 3.º</p>
              </div>
              <div className="text-mask relative h-8 w-full overflow-hidden">
                <p className="text-2xl">1200-288 Lisboa</p>
              </div>
            </div>
            <div className="mb-12">
              <strong>São Paulo</strong>
              <div className="text-mask relative h-8 w-full overflow-hidden">
                <p className="text-2xl">Av. Paulista, 1374, 11.º Andar - 104</p>
              </div>
              <div className="text-mask relative h-8 w-full overflow-hidden">
                <p className="text-2xl">01310-100 São Paulo, Brazil</p>
              </div>
            </div>

            <div>
              <ul className="w-full flex text-4xl gap-5">
                <li><FaInstagram /></li>
                <li><FaFacebookSquare /></li>
                <li><CiLinkedin /></li>
              </ul>
            </div>
          </div>

          {/* Divider Line */}
          <div ref={pro_line} className="pro_line w-[2px] bg-gray-500 h-5"></div>

          {/* Menu Items */}
          <div className="w-1/2 h-full px-12">
            <ul className="text-white text-[5vw] flex flex-col">
              <li className="menu_item">Home</li>
              <li className="menu_item">Services</li>
              <li className="menu_item">Work</li>
              <li className="menu_item">About</li>
              <li className="menu_item">Contact</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
