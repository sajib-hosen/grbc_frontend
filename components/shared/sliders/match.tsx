"use client";

import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider, { Settings } from "react-slick";
import Image from "next/image";
import { IMAGES } from "@/utils/constants";

const settings: Settings = {
  dots: false,
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 5000,
  pauseOnHover: true,
  centerMode: true,
  responsive: [
    {
      breakpoint: 640, // sm
      settings: {
        slidesToShow: 1,
      },
    },
    {
      breakpoint: 768, // md
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 1024, // lg
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 1280, // xl
      settings: {
        slidesToShow: 4,
      },
    },
  ],
};

const MatchSlider = () => {
  return (
    <div className="relative mx-auto max-w-[280px] sm:max-w-[500px] md:max-w-[600px] lg:max-w-[870px] ">
      <Slider {...settings} className="">
        {[...Array(6)].map((_, index) => (
          <div className=" flex justify-center items-center p-2" key={index}>
            <div className="p-2 rounded-md bg-gray-200  dark:bg-gray-800">
              <div className="bg-base-100 w-full max-w-xs">
                <div className=" relative flex items-center justify-between text-xs text-gray-700  dark:text-gray-300 font-light">
                  <span>Friendly Match</span>
                </div>

                <div className="mt-3 space-y-1 ">
                  <div className="flex items-center justify-between text-xs font-normal gap-1 sm:gap-2">
                    <div className="flex items-center justify-start gap-1 sm:gap-2 ">
                      <Image
                        src={IMAGES.bat_icon}
                        alt="flag"
                        width={16}
                        height={16}
                      />
                      <p className="font-medium">
                        {/* {match.battingFirstTeam?.nameCode ||
                          match.battingFirstTeam?.name} */}
                        GXI
                      </p>
                    </div>
                    <p>
                      <span>
                        {/* {match.firstInnings?.teamTotalRuns || "--"} -{" "}
                        {match.firstInnings?.totalWicketsFall} (
                        {match.firstInnings?.totalOversPlayed}) */}
                        95 - 8 (16)
                      </span>
                    </p>
                  </div>

                  <div className="flex items-center justify-between text-xs font-normal gap-1 sm:gap-2">
                    <div className="flex items-center justify-start gap-1 sm:gap-2  ">
                      <Image
                        src={IMAGES.bat_icon}
                        alt="flag"
                        width={16}
                        height={16}
                      />
                      <p className="font-medium">
                        {/* {match.bowlingFirstTeam?.nameCode ||
                          match.bowlingFirstTeam?.name} */}
                        RGBCS
                      </p>
                    </div>
                    <p>
                      <span>
                        {/* {match.secondInnings?.teamTotalRuns || "--"} -{" "}
                        {match.secondInnings?.totalWicketsFall} (
                        {match.secondInnings?.totalOversPlayed}) */}
                        149 - 7 (16)
                      </span>
                    </p>
                  </div>
                </div>

                <div className="text-xs mt-2 p-2">
                  <div className="font-semibold text-red-400 flex items-center gap-2 ">
                    <div className="animate-pulse rounded-full bg-red-500 h-3 w-3"></div>

                    <span>Live</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};
export default MatchSlider;
