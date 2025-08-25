"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { IMAGES } from "@/utils/constants";
import Image from "next/image";
import { motion } from "motion/react";

interface Player {
  id: string;
  name: string;
  role: string;
  team: string;
  runs: number;
  wickets: number;
  imageUrl: string;
}

interface PlayerCardProps {
  player: Player;
}

const PlayerCard: React.FC<PlayerCardProps> = ({ player }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05, rotate: 1 }}
      transition={{ type: "spring", stiffness: 200 }}
      className="w-full max-w-sm"
    >
      <Card className="relative cursor-pointer rounded-2xl shadow-lg hover:shadow-2xl transition overflow-hidden backdrop-blur-md">
        {/* Moving colorful blobs */}
        <div className="absolute inset-0 -z-0">
          <div className="absolute w-40 h-40 bg-red-300 rounded-full mix-blend-multiply filter blur-3xl animate-blob top-0 left-0"></div>
          <div className="absolute w-32 h-32 bg-green-300 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000 top-10 right-0"></div>
          <div className="absolute w-40 h-40 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000 bottom-0 left-10"></div>
        </div>

        {/* Card Content */}
        <CardHeader className="relative flex flex-col items-center z-10">
          <Image
            src={IMAGES.default_player}
            alt={player.name}
            width={120}
            height={120}
            className="rounded-full border-4 border-background shadow-md object-cover"
          />
          <CardTitle className="mt-3 sm:text-xl font-bold text-center">
            {player.name}
          </CardTitle>
          <p className="text-sm text-muted-foreground">{player.role}</p>
          <p className="text-xs text-muted-foreground">{player.team}</p>
        </CardHeader>

        {/* Stats Section */}
        {/* <CardContent className="relative flex justify-around text-sm mt-2 z-10">
          <div className="flex flex-col items-center">
            <span className="font-semibold text-lg">{player.runs}</span>
            <span className="text-xs text-muted-foreground">Runs</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="font-semibold text-lg">{player.wickets}</span>
            <span className="text-xs text-muted-foreground">Wickets</span>
          </div>
        </CardContent> */}
      </Card>
    </motion.div>
  );
};

export default PlayerCard;
