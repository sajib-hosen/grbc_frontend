import { Metadata } from "next";
import RankingTable from "./_components/ranking-table";

export const metadata: Metadata = {
  title: "Rankings",
};

const RankingsPage = () => {
  return (
    <div className="p-2">
      <h1 className="text-2xl font-bold">Rankings</h1>

      <RankingTable />
    </div>
  );
};

export default RankingsPage;
