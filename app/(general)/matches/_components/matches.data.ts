export interface Match {
  id: string;
  teamA: string;
  teamB: string;
  scoreA?: string;
  scoreB?: string;
  date: string;
  venue?: string;
  status?: string;
}

export const matches: Match[] = [
  {
    id: "1",
    teamA: "RGBC Tigers",
    teamB: "RGBC Warriors",
    scoreA: "152/7 (20)",
    scoreB: "148/9 (20)",
    date: "2025-08-20",
    venue: "RGBC Stadium, Dhaka",
    status: "Finished",
  },
  {
    id: "2",
    teamA: "RGBC Royals",
    teamB: "RGBC Challengers",
    date: "2025-08-23",
    venue: "RGBC Stadium, Dhaka",
    status: "Upcoming",
  },
  {
    id: "3",
    teamA: "RGBC Strikers",
    teamB: "RGBC Titans",
    scoreA: "89/3 (12)",
    scoreB: "92/4 (11.5)",
    date: "2025-08-21",
    venue: "RGBC Ground 2, Dhaka",
    status: "Live",
  },
  {
    id: "4",
    teamA: "RGBC Kings",
    teamB: "RGBC Gladiators",
    scoreA: "175/6 (20)",
    scoreB: "170/8 (20)",
    date: "2025-08-18",
    venue: "RGBC Ground 1, Dhaka",
    status: "Finished",
  },
  {
    id: "5",
    teamA: "RGBC Thunder",
    teamB: "RGBC Hawks",
    date: "2025-08-25",
    venue: "RGBC Stadium, Dhaka",
    status: "Upcoming",
  },
];
