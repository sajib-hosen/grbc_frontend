import { Metadata } from "next";
import TournamentCard from "./_components/tournament-card";

export const metadata: Metadata = {
  title: "Tournaments",
};

const TournamentsPage = () => {
  return (
    <div>
      <h1>Tournaments</h1>
      <TournamentCard />
    </div>
  );
};

export default TournamentsPage;
