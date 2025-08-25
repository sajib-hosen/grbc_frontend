"use client";

import { useTheme } from "@/context/theme-provider";
import StatCategoryList from "./stat-category-list";
import { useState } from "react";
import StatTable from "./stat-table";
import { PlayerCategoryType } from "./types";
import { useQueryState } from "nuqs";
import { STAT_CATEGORIES } from "./stats.categories";
import { ScrollText } from "lucide-react";

const Stats = () => {
  const { isMobile } = useTheme();
  const [statView, setStateView] = useQueryState("stat_view");
  const [playerData, setPlayerData] = useState([]);
  const [categoryType, setCategoryType] = useState<PlayerCategoryType | null>(
    null
  );

  // const fetchStatData = async (param: string) => {
  //   //     setIsLoading(true);
  //   //     try {
  //   //       const isBatting = Object.values(STAT_CATEGORIES.Batting).some(
  //   //         (item) => item.param === param
  //   //       );
  //   //       const endpoint = isBatting ? "/stat/batting" : "/stat/bowling";
  //   //       const res = await axiosi.get(endpoint, { params: { type: param } });
  //   //       setPlayerData(res.data);
  //   //     } catch (error) {
  //   //       console.error("Error loading stats:", error);
  //   setPlayerData([]);
  //   //     } finally {
  //   //       setIsLoading(false);
  //   //     }
  // };

  const handleCategoryClick = (label: string, param: string) => {
    const isBatting = STAT_CATEGORIES.Batting.some(
      (item) => item.param === param
    );
    setCategoryType(isBatting ? "batting" : "bowling");
    setStateView(param);
  };

  const handleBack = () => {
    setStateView("");
    setPlayerData([]);
  };

  return (
    <div className="p-1 sm:p-4 flex flex-col sm:flex-row bg-base-200 gap-2 transition-all duration-300">
      {/* Sidebar */}
      {!isMobile && (
        <StatCategoryList
          activeCategory={statView}
          onCategoryClick={handleCategoryClick}
        />
      )}

      {/* Table Section */}
      {statView ? (
        <StatTable
          category={statView}
          categoryType={categoryType}
          data={playerData}
          onBack={handleBack}
        />
      ) : isMobile ? (
        <StatCategoryList
          activeCategory={statView}
          onCategoryClick={handleCategoryClick}
        />
      ) : (
        <div className=" flex justify-center items-center w-full">
          <div className=" flex flex-col justify-center items-center">
            <ScrollText className=" text-gray-500" size={150} />
            <p className="text-gray-500 font-bold text-4xl">Not to select</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Stats;
