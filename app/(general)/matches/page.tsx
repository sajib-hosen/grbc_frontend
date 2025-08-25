import { Metadata } from "next";
import { MatchCard } from "./_components/match-card";
import { matches } from "./_components/matches.data";

export const metadata: Metadata = {
  title: "Matches",
};

const MatchesPage = () => {
  return (
    <div className="p-2">
      <h1 className="text-2xl font-bold mb-6">Matches</h1>

      {/* Grid wrapper */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {matches.map((m) => (
          <MatchCard
            key={m.id}
            teamA={m.teamA}
            teamB={m.teamB}
            scoreA={m.scoreA}
            scoreB={m.scoreB}
            date={m.date}
            venue={m.venue}
            status={m.status}
          />
        ))}
      </div>
    </div>
  );
};

export default MatchesPage;
