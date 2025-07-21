import React, { useEffect, useRef, useState } from 'react'
import { HiArrowLongRight } from 'react-icons/hi2'

const ConstructionZones = () => {
    const constructionHeader = useRef(null);


    return (
        <>
            <div id="constructionZone" className='w-full min-h-screen px-9 py-20 '>
                <div className="constructionZoneWrapper border-t relative ">
                    <div className="custructionIndicator absolute -top-3 w-[220px] flex items-center gap-3 bg-white ">
                        <div className="w-5 h-5 bg-yellow-300 rounded-full"></div>
                        <span>Lorem, ipsum dolor.</span>
                    </div>
                    <div ref={constructionHeader} className=" h-[450px] lg:h-[350px] flex items-end  absolute">
                        <div className="cuntructionHeading w-3/4">
                            <h2 className='font-semibold text-4xl lg:text-5xl indent-52 max-w-[70%]'>
                                With extensive expertise in high-end design
                                and build services, we create luxurious residential,
                                professional and leisure spaces tailored to exceed
                                your expectations. <span className='text-yellow-400'>Building in a better way</span> is at the
                                heart of everything we do.
                            </h2>
                        </div>
                        <div className="custructionBtnWrper w-1/4 flex justify-end">
                            <div className="btn flex items-center gap-3 border py-2 px-4 rounded-full">
                                <span>Get In Toch</span>
                                <div className="bx bg-slate-500 rounded-full py-2 px-2">
                                    <HiArrowLongRight />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="constructionColWrapper flex h-full">

                        <div className="constructionCol w-1/3 h-full pt-[450px] lg:pt-[400px] px-5 lg:px-8 border-r">
                            <div className="badge w-fit px-3 py-1 rounded-full font-bold text-3xl bg-yellow-300">1</div>
                            <h3 className='text-3xl'>Residential as Signuture Properties</h3>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore deleniti ducimus incidunt, nemo nostrum necessitatibus velit. Vitae labore, accusamus consequuntur voluptas corporis similique a fugit neque sed molestiae mollitia explicabo?</p>
                        </div>
                        <div className="constructionCol w-1/3 h-full pt-[450px] lg:pt-[400px] px-5 lg:px-8">
                            <div className="badge w-fit px-3 py-1 rounded-full font-bold text-3xl bg-yellow-300">2</div>
                            <h3 className='text-3xl'>Residential as Signuture Properties</h3>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore deleniti ducimus incidunt, nemo nostrum necessitatibus velit. Vitae labore, accusamus consequuntur voluptas corporis similique a fugit neque sed molestiae mollitia explicabo?</p>
                        </div>
                        <div className="constructionCol w-1/3 h-full pt-[450px] lg:pt-[400px] px-5 lg:px-8 border-l">
                            <div className="badge w-fit px-3 py-1 rounded-full font-bold text-3xl bg-yellow-300">3</div>
                            <h3 className='text-3xl'>Residential as Signuture Properties</h3>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore deleniti ducimus incidunt, nemo nostrum necessitatibus velit. Vitae labore, accusamus consequuntur voluptas corporis similique a fugit neque sed molestiae mollitia explicabo?</p>
                        </div>




                    </div>

                </div>
            </div>
        </>
    )
}

export default ConstructionZones