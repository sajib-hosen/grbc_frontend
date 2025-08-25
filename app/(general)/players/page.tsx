import { Metadata } from "next";
import PlayerCard from "./_components/player-card";

export const metadata: Metadata = {
  title: "Players",
};

const players = [
  {
    id: "p1",
    name: "Shakib Al Hasan",
    role: "All-Rounder",
    team: "RGBC United",
    runs: 523,
    wickets: 21,
    imageUrl: "/players/shakib.jpg",
  },
  {
    id: "p2",
    name: "Tamim Iqbal",
    role: "Batsman",
    team: "RGBC United",
    runs: 421,
    wickets: 5,
    imageUrl: "/players/tamim.jpg",
  },
  {
    id: "p3",
    name: "Mustafizur Rahman",
    role: "Bowler",
    team: "RGBC United",
    runs: 72,
    wickets: 33,
    imageUrl: "/players/mustafiz.jpg",
  },
  // add more players here...
];

const PlayersPage = () => {
  return (
    <div className="p-2">
      <h1 className="text-2xl font-bold mb-6">Players</h1>

      {/* Responsive grid for player cards */}
      <div className="grid gap-2 sm:gap-6 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {players.map((player) => (
          <PlayerCard key={player.id} player={player} />
        ))}
      </div>
    </div>
  );
};

export default PlayersPage;
