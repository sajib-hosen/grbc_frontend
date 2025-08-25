"use client";

import React from "react";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";

interface Player {
  id: string;
  name: string;
  role: string;
  runs: number;
  wickets: number;
  imageUrl: string;
}

interface Team {
  name: string;
  coach: string;
  captain: string;
  logoUrl: string;
  players: Player[];
}

interface TeamCardProps {
  team: Team;
}

const TeamCard: React.FC<TeamCardProps> = ({ team }) => {
  return (
    <Card className="p-2 cursor-pointer rounded-sm shadow-none border-none w-full mx-auto dark:bg-gray-800">
      {/* Header */}
      <CardHeader className=" p-2 flex flex-row items-center gap-4">
        <div>
          <CardTitle className="text-2xl font-bold">{team.name}</CardTitle>
          <p className="text-sm text-muted-foreground">Address: {team.coach}</p>
          <p className="text-sm text-muted-foreground">
            Captain: {team.captain}
          </p>
          <p className="text-sm text-muted-foreground">Code: RGXI</p>
        </div>
      </CardHeader>
    </Card>
  );
};

export default TeamCard;
