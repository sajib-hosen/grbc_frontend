export interface PlayerBatting {
  id: string;
  nickname: string;
  innings: number;
  runs: number;
  battingAvg: number | string;
  battingSR: number | string;
}

export interface PlayerBowling {
  id: string;
  nickname: string;
  overs: number;
  wickets: number;
  economy: number | string;
  bowlingAvg: number | string;
  bowlingSR: number | string;
}

export type Player = PlayerBatting | PlayerBowling;

export type PlayerCategoryType = "batting" | "bowling";
