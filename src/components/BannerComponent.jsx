import React, { useEffect, useRef, useState } from 'react';
import '../index.css'
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(SplitText);

const BannerComponent = () => {
    const bannerRef = useRef(null);
    const images = [
        '/images/image1.png',
        '/images/image2.png'
    ];
    const [bgIndex, setBgIndex] = useState(0);
    useEffect(() => {
        const interval = setInterval(() => {
            setBgIndex(prev => (prev + 1) % images.length);
        }, 4000);
        if (bannerRef.current) {
            bannerRef.current.classList.add('animBG');
        }

        return () => clearInterval(interval);
    }, []);
    useEffect(() => {
        if (!bannerRef.current) return;

        const ctx = gsap.context(() => {
            gsap.to(bannerRef.current, {
                backgroundSize: '100% 100%',
                duration: 2,
                ease: 'power1.inOut',
                // yoyo: true,
                // repeat: -1,
            });
        }, bannerRef);

        return () => ctx.revert();
    }, [bgIndex]);



    useEffect(() => {
        const headings = bannerRef.current.querySelectorAll('.banner_heading h1');
        const subheadings = bannerRef.current.querySelectorAll('.banner_subHeading h4');

        headings.forEach((heading) => {
            const split = new SplitText(heading, { type: "words" });
            gsap.from(split.words, {
                y: 100,
                opacity: 0,
                duration: 1,
                ease: "power4.out",
                stagger: 0.1
            });
        });
        subheadings.forEach((subheeading) => {
            const split = new SplitText(subheeading, { type: "words" });
            gsap.from(split.words, {
                y: -100,
                opacity: 0,
                duration: 1,
                ease: "power4.out",
                stagger: 0.1
            });
        });
    }, []);


    return (
        <div id="banner"
            className="w-full"
            style={{
                backgroundImage: `url(${images[bgIndex]})`,
            }}

            ref={bannerRef}>
            <div className="bannerWarpper w-full h-screen text-white">
                <div className="proRow w-full h-1/4 border-b border-b-gray-400"></div>

                <div className="proRow w-full h-1/4 border-b border-b-gray-400 py-5 px-20">
                    <div className="banner_subHeading relative overflow-hidden">
                        <h4 className='text-center text-2xl'>Residential and Signature Properties</h4>
                    </div>
                    <div className="banner_heading relative overflow-hidden">
                        <h1 className='text-[6vw] font-semibold'>High-end</h1>
                    </div>
                </div>

                <div className="proRow w-full h-1/4 border-b border-b-gray-400 py-5 px-20">
                    <div className="banner_subHeading relative overflow-hidden">
                        <h4 className='text-center text-2xl'>Professional and Adaptive Spaces</h4>
                    </div>
                    <div className="banner_heading relative overflow-hidden">
                        <h1 className='text-[6vw] font-semibold text-right'>Design + Build</h1>
                    </div>
                </div>

                <div className="proRow w-full h-1/4 border-b border-b-gray-700 py-5 px-20">
                    <div className="banner_subHeadingrelative overflow-hidden">
                        <h4 className='text-right text-2xl'>Hospitality and Wellness Complexes</h4>
                    </div>
                    <div className="banner_heading relative overflow-hidden">
                        <h1 className='text-[6vw] font-semibold'>for elevated living</h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BannerComponent;
