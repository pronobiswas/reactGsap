import React, { useEffect, useRef } from "react";
import { HiArrowLongRight } from "react-icons/hi2";
import gsap from "gsap";

const ConstructionZones = () => {
  const wrapperRef = useRef(null);

  const columns = [
    {
      id: 1,
      badge: "1",
      title: "Residential Signature Properties",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore deleniti ducimus incidunt.",
      img: "images/img3.avif",
    },
    {
      id: 2,
      badge: "2",
      title: "Commercial High-End Spaces",
      desc: "Creating luxurious spaces tailored to exceed your expectations.",
      img: "images/image1.png",
    },
    {
      id: 3,
      badge: "3",
      title: "Professional & Leisure Design",
      desc: "We build professional and leisure spaces with high expertise.",
      img: "images/image2.png",
    },
  ];

  useEffect(() => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;

    const cols = wrapper.querySelectorAll(".constructionCol");

    cols.forEach((col) => {
      const overlay = col.querySelector(".overlay img");

      const handleEnter = (e) => {
        const rect = col.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const fromLeft = x < rect.width / 2;

        // Reset position instantly
        gsap.set(overlay, {
          x: fromLeft ? "-100%" : "100%",
          opacity: 1,
        });

        // Animate into view
        gsap.to(overlay, {
          x: "0%",
          duration: 0.6,
          ease: "power2.out",
        });
      };

      const handleLeave = (e) => {
        const rect = col.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const toLeft = x < rect.width / 2;

        gsap.to(overlay, {
          x: toLeft ? "-100%" : "100%",
          opacity: 0,
          duration: 0.6,
          ease: "power2.in",
        });
      };

      col.addEventListener("mouseenter", handleEnter);
      col.addEventListener("mouseleave", handleLeave);

      return () => {
        col.removeEventListener("mouseenter", handleEnter);
        col.removeEventListener("mouseleave", handleLeave);
      };
    });
  }, []);

  return (
    <div id="constructionZone" className="w-full min-h-screen px-9 py-20">
      <div className="constructionZoneWrapper border-t relative">
        {/* Header */}
        <div className="custructionIndicator absolute -top-3 w-[220px] flex items-center gap-3 bg-white">
          <div className="w-5 h-5 bg-yellow-300 rounded-full"></div>
          <span>Lorem, ipsum dolor.</span>
        </div>

        <div className="h-[450px] lg:h-[350px] flex items-end absolute">
          <div className="cuntructionHeading w-3/4">
            <h2 className="font-semibold text-4xl lg:text-5xl indent-52 max-w-[70%]">
              With extensive expertise in high-end design and build services, we create luxurious
              spaces tailored to exceed expectations.{" "}
              <span className="text-yellow-400">Building in a better way</span> is at the heart of
              everything we do.
            </h2>
          </div>
          <div className="custructionBtnWrper w-1/4 flex justify-end">
            <div className="btn flex items-center gap-3 border py-2 px-4 rounded-full">
              <span>Get In Touch</span>
              <div className="bx bg-slate-500 rounded-full py-2 px-2">
                <HiArrowLongRight />
              </div>
            </div>
          </div>
        </div>

        {/* Columns */}
        <div ref={wrapperRef} className="constructionColWrapper flex h-full">
          {columns.map((col, index) => (
            <div
              key={col.id}
              className={`constructionCol relative w-1/3 h-full pt-[450px] lg:pt-[400px] ${
                index === 0 ? "border-r" : index === 2 ? "border-l" : ""
              } overflow-hidden`}
            >
              <div className="w-full h-80">
                <div className="badge w-fit px-3 py-1 rounded-full font-bold text-3xl bg-yellow-300">
                  {col.badge}
                </div>
                <div className="p-5">
                  <h3 className="text-3xl">{col.title}</h3>
                  <p>{col.desc}</p>
                </div>
              </div>

              <div className="imageBox w-full h-96 bg-white relative overflow-hidden">
                <div className="overlay absolute top-0 left-0 w-full h-full z-10">
                  <img
                    src={col.img}
                    alt={`image ${col.id}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ConstructionZones;
