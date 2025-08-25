"use client";

import MatchSlider from "@/components/shared/sliders/match";
// import RankingTable from "@/components/shared/tables/ranking-table";
// import PlayerCard from "@/components/shared/cards/player-card";
// import TeamCard from "@/components/shared/cards/team-card";
// import AppFooter from "@/components/layouts/app-footer";
import { IMAGES } from "@/utils/constants";
import PlayerCard from "./players/_components/player-card";
import TeamCard from "./teams/_components/team-card";
import RankingTable from "./rankings/_components/ranking-table";
import Link from "next/link";
import HeroSection from "@/components/shared/hero-section";

export default function Home() {
  // Sample data
  const topPlayers = [
    {
      id: "p1",
      name: "Ripon Arnob",
      role: "All-Rounder",
      team: "Machain",
      runs: 523,
      wickets: 21,
      imageUrl: IMAGES.default_player,
    },
    {
      id: "p2",
      name: "Badol Munshi",
      role: "Batsman",
      team: "Gangdhair",
      runs: 480,
      wickets: 5,
      imageUrl: IMAGES.default_player,
    },
  ];

  const sampleTeam = {
    name: "RGBC Warriors",
    coach: "John Doe",
    captain: "Alex Smith",
    logoUrl: "/team-logo.png",
    players: topPlayers,
  };

  return (
    <div className="flex flex-col gap-12">
      {/* Hero Section */}
      <HeroSection />

      {/* Live & Upcoming Matches */}
      <section className="px-4 md:px-12">
        <h2 className="text-2xl font-bold mb-4">Live & Upcoming Matches</h2>
        <MatchSlider />
      </section>

      {/* Top Players */}
      <section className="px-4 md:px-12">
        <h2 className="text-2xl font-bold mb-4">Top Players</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {topPlayers.map((player) => (
            <PlayerCard key={player.id} player={player} />
          ))}
        </div>
      </section>

      {/* Teams */}
      <section className="px-4 md:px-12">
        <h2 className="text-2xl font-bold mb-4">Featured Teams</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <TeamCard team={sampleTeam} />
        </div>
      </section>

      {/* Player Rankings */}
      <section className="px-4 md:px-12">
        <h2 className="text-2xl font-bold mb-4">Player Rankings</h2>
        <RankingTable />
      </section>
    </div>
  );
}
