"use client";

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";

interface MatchCardProps {
  teamA: string;
  teamB: string;
  scoreA?: string;
  scoreB?: string;
  date: string;
  venue?: string;
  status?: string; // e.g. "upcoming" | "live" | "completed"
  winner?: string;
  resultText?: string; // e.g. "won by 7 wickets"
}

export function MatchCard({
  teamA,
  teamB,
  scoreA,
  scoreB,
  date,
  venue,
  status,
  winner,
  resultText,
}: MatchCardProps) {
  const isCompleted = status?.toLowerCase() === "completed";

  return (
    <Card className="bg-gray-200 dark:bg-gray-800 cursor-pointer max-w-sm w-full py-4 border-none shadow-none rounded-md">
      <CardHeader className="px-4">
        <CardTitle>
          {teamA} <span className="text-gray-400">vs</span> {teamB}
        </CardTitle>
        <CardDescription>
          {date}
          {venue ? ` • ${venue}` : ""}
        </CardDescription>
      </CardHeader>

      <CardContent className="px-4 space-y-1">
        {/* Score or Status */}
        {scoreA != null && scoreB != null ? (
          <p className="text-lg font-semibold">
            {scoreA} – {scoreB}
          </p>
        ) : (
          <p className="text-sm italic text-gray-500">
            {status || "Match upcoming"}
          </p>
        )}

        {/* Winner Info */}
        {isCompleted && winner && (
          <>
            <p className="text-sm">
              Winner: <span className="text-green-500 font-bold">{winner}</span>
            </p>
            {resultText && (
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {resultText}
              </p>
            )}
          </>
        )}
      </CardContent>
    </Card>
  );
}
