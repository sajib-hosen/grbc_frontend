"use client";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { IMAGES } from "@/utils/constants";
import { ArrowDown, ArrowUp, Minus } from "lucide-react";
import Image from "next/image";
import { motion } from "motion/react";

const players = [
  {
    id: "p1",
    rank: 1,
    name: "Ripon Arnob",
    team: "Machain",
    ratings: 577,
    change: 0,
  },
  {
    id: "p2",
    rank: 2,
    name: "Badol Munshi",
    team: "Gangdhair",
    ratings: 539,
    change: 0,
  },
  {
    id: "p3",
    rank: 3,
    name: "Mohammad Asif",
    team: "Doshchira",
    ratings: 415,
    change: 2,
  },
  {
    id: "p4",
    rank: 4,
    name: "Durjoy Bhuyan",
    team: "Dorikoyra",
    ratings: 414,
    change: -1,
  },
  {
    id: "p5",
    rank: 5,
    name: "Mehrab Rabbi Ratin",
    team: "Rupsha",
    ratings: 388,
    change: -1,
  },
  {
    id: "p6",
    rank: 6,
    name: "Rezaul Islam Rana",
    team: "Rupsha",
    ratings: 369,
    change: 0,
  },
];

const RankingTable = () => {
  return (
    <div className="py-6 bg-background overflow-x-auto">
      <Table>
        <TableCaption className="text-base font-medium">
          🏏 Player Rankings
        </TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-12">RK</TableHead>
            <TableHead>Change</TableHead>
            <TableHead>Player</TableHead>
            <TableHead className="text-right">Ratings</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {players.map((player, index) => (
            <motion.tr
              key={player.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05, duration: 0.3 }}
              className={`hover:bg-muted/50 transition-colors `}
            >
              <TableCell className="font-semibold">{player.rank}</TableCell>

              {/* Change column */}
              <TableCell>
                {player.change > 0 && (
                  <motion.span
                    className="flex items-center text-green-500 font-medium"
                    animate={{ y: [0, -4, 0] }}
                    transition={{ repeat: 2, duration: 0.5 }}
                  >
                    <ArrowUp className="w-4 h-4 mr-1" />
                    {player.change}
                  </motion.span>
                )}
                {player.change < 0 && (
                  <motion.span
                    className="flex items-center text-red-500 font-medium"
                    animate={{ y: [0, 4, 0] }}
                    transition={{ repeat: 2, duration: 0.5 }}
                  >
                    <ArrowDown className="w-4 h-4 mr-1" />
                    {Math.abs(player.change)}
                  </motion.span>
                )}
                {player.change === 0 && (
                  <span className="flex items-center text-gray-400">
                    <Minus className="w-4 h-4 mr-1" /> –
                  </span>
                )}
              </TableCell>

              {/* Player column */}
              <TableCell>
                <div className="flex gap-3 items-center">
                  <motion.div
                    whileHover={{ scale: 1.15, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Image
                      width={32}
                      height={32}
                      src={IMAGES.default_player}
                      alt="player"
                      className="rounded-full shadow-sm"
                    />
                  </motion.div>
                  <div>
                    <p className="font-medium">{player.name}</p>
                    <p className="text-xs text-gray-600 dark:text-gray-400">
                      {player.team}
                    </p>
                  </div>
                </div>
              </TableCell>

              <TableCell className="text-right font-semibold">
                {player.ratings}
              </TableCell>
            </motion.tr>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default RankingTable;
