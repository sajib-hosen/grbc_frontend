import { Metadata } from "next";
import TeamCard from "./_components/team-card";

export const metadata: Metadata = {
  title: "Teams",
};

const sampleTeam = {
  name: "RGBC Warriors",
  coach: "John Doe",
  captain: "Alex Smith",
  logoUrl: "/team-logo.png",
  players: [
    {
      id: "1",
      name: "David Warner",
      role: "Batsman",
      runs: 4500,
      wickets: 12,
      imageUrl: "/players/warner.png",
    },
    {
      id: "2",
      name: "Pat Cummins",
      role: "Bowler",
      runs: 850,
      wickets: 300,
      imageUrl: "/players/cummins.png",
    },
    // add more players...
  ],
};

const TeamsPage = () => {
  return (
    <div className="p-2">
      <h1 className="text-2xl font-bold">Teams</h1>

      <div className="py-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
        <TeamCard team={sampleTeam} />
      </div>
    </div>
  );
};

export default TeamsPage;
