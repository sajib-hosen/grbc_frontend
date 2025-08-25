"use client";

import { ArrowLeft } from "lucide-react";
import { motion } from "motion/react";
import { Player, PlayerCategoryType } from "./types";
import { STAT_CATEGORIES } from "./stats.categories";
import { useTheme } from "@/context/theme-provider";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface StatTableProps {
  category: string;
  categoryType: PlayerCategoryType | null;
  data: Player[];
  onBack: () => void;
}

const StatTable = ({
  category,
  categoryType,
  data,
  onBack,
}: StatTableProps) => {
  const { isMobile } = useTheme();
  const isBatting = categoryType === "batting";
  //   const navigate = useNavigate();

  // find category label
  const categoryLabel = [
    ...STAT_CATEGORIES["Batting"],
    ...STAT_CATEGORIES["Bowling"],
  ].find((e) => e.param === category)?.label;

  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -30 }}
      transition={{ duration: 0.4 }}
      className="flex-1 overflow-auto relative min-h-[400px]"
    >
      {isMobile && (
        <motion.button
          whileTap={{ scale: 0.95 }}
          onClick={onBack}
          className="flex items-center gap-1 mb-4 text-blue-600 font-medium"
        >
          <ArrowLeft size={18} /> Back
        </motion.button>
      )}

      {/* Category Title */}
      <h1 className="text-xl font-bold mb-3 px-2 text-gray-800 dark:text-gray-200">
        {categoryLabel}
      </h1>

      {/* Table Container */}
      <div className="overflow-x-auto bg-white dark:bg-gray-800 p-3 rounded-md shadow-sm">
        <Table>
          {/* optional caption */}
          <TableCaption>Statistics Table</TableCaption>

          {/* Table Header */}
          <TableHeader>
            <TableRow>
              <TableHead className="w-[50px]">#</TableHead>
              <TableHead>{isBatting ? "Batter" : "Bowler"}</TableHead>
              {isBatting ? (
                <>
                  <TableHead>Inns</TableHead>
                  <TableHead>Runs</TableHead>
                  <TableHead>Avg</TableHead>
                  <TableHead>SR</TableHead>
                </>
              ) : (
                <>
                  <TableHead>Ovs</TableHead>
                  <TableHead>Wkts</TableHead>
                  <TableHead>Econ</TableHead>
                  <TableHead>Avg</TableHead>
                  <TableHead>SR</TableHead>
                </>
              )}
            </TableRow>
          </TableHeader>

          {/* Table Body */}
          <TableBody>
            {data.length ? (
              data.map((player, idx) => (
                // Animated table row
                <motion.tr
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.05, duration: 0.3 }}
                  className="hover:bg-neutral-100 dark:hover:bg-gray-700 transition-colors"
                >
                  {/* Serial */}
                  <TableCell>{idx + 1}</TableCell>

                  {/* Player Name */}
                  <TableCell
                    className="text-blue-600 font-medium hover:underline cursor-pointer"
                    // onClick={() => navigate(`/players/${player.id}`)}
                  >
                    {player.nickname}
                  </TableCell>

                  {/* Player Stats */}
                  {isBatting ? (
                    <>
                      {"innings" in player && (
                        <TableCell>{player.innings}</TableCell>
                      )}
                      {"runs" in player && <TableCell>{player.runs}</TableCell>}
                      {"battingAvg" in player && (
                        <TableCell>{player.battingAvg}</TableCell>
                      )}
                      {"battingSR" in player && (
                        <TableCell>{player.battingSR}</TableCell>
                      )}
                    </>
                  ) : (
                    <>
                      {"overs" in player && (
                        <TableCell>{player.overs}</TableCell>
                      )}
                      {"wickets" in player && (
                        <TableCell>{player.wickets}</TableCell>
                      )}
                      {"economy" in player && (
                        <TableCell>{player.economy}</TableCell>
                      )}
                      {"bowlingAvg" in player && (
                        <TableCell>{player.bowlingAvg}</TableCell>
                      )}
                      {"bowlingSR" in player && (
                        <TableCell>{player.bowlingSR}</TableCell>
                      )}
                    </>
                  )}
                </motion.tr>
              ))
            ) : (
              // No data row
              <TableRow>
                <TableCell
                  colSpan={isBatting ? 6 : 7}
                  className="text-center py-6 text-gray-500 dark:text-gray-400 italic"
                >
                  No data found
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </motion.div>
  );
};

export default StatTable;
