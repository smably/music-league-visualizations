import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  Legend,
} from "recharts";

const MusicLeagueBumpChart = () => {
  // Sample data - competitor rankings across rounds
  // Lower rank number = better position (1st place = rank 1)
  const sampleData = [
    {
      round: "Round 1",
      catherine: 1,
      "Christopher Kong": 2,
      Cat: 3,
      Evan: 4,
      Emily: 5,
      Sylvan: 6,
      lizz: 7,
      Divya: 8,
    },
    {
      round: "Round 2",
      "Christopher Kong": 1,
      Cat: 2,
      catherine: 3,
      Emily: 4,
      Evan: 5,
      Divya: 6,
      Sylvan: 7,
      lizz: 8,
    },
    {
      round: "Round 3",
      Cat: 1,
      Emily: 2,
      "Christopher Kong": 3,
      Divya: 4,
      catherine: 5,
      lizz: 6,
      Evan: 7,
      Sylvan: 8,
    },
    {
      round: "Round 4",
      Emily: 1,
      Cat: 2,
      Divya: 3,
      lizz: 4,
      "Christopher Kong": 5,
      catherine: 6,
      Sylvan: 7,
      Evan: 8,
    },
    {
      round: "Round 5",
      Cat: 1,
      Emily: 2,
      lizz: 3,
      Divya: 4,
      Sylvan: 5,
      christopher: 6,
      catherine: 7,
      Evan: 8,
    },
  ];

  const competitors = [
    "catherine",
    "Christopher Kong",
    "Cat",
    "Evan",
    "Emily",
    "Sylvan",
    "lizz",
    "Divya",
  ];

  // Color palette for different competitors
  const colors = [
    "#2563eb",
    "#dc2626",
    "#059669",
    "#d97706",
    "#7c3aed",
    "#db2777",
    "#0891b2",
    "#65a30d",
  ];

  return (
    <div className="w-full max-w-6xl mx-auto p-6 bg-white">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          Music League Rankings
        </h1>
        <p className="text-gray-600">
          Competitor rankings across rounds (lower is better)
        </p>
      </div>

      <div className="bg-gray-50 p-6 rounded-lg">
        <ResponsiveContainer width="100%" height={500}>
          <LineChart
            data={sampleData}
            margin={{
              top: 20,
              right: 30,
              left: 20,
              bottom: 20,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
            <XAxis dataKey="round" stroke="#6b7280" fontSize={12} />
            <YAxis
              domain={[1, 8]}
              reversed={true}
              stroke="#6b7280"
              fontSize={12}
              tickFormatter={(value) => `#${value}`}
            />
            <Legend wrapperStyle={{ paddingTop: "20px" }} />

            {competitors.map((competitor, index) => (
              <Line
                key={competitor}
                type="monotone"
                dataKey={competitor}
                stroke={colors[index]}
                strokeWidth={3}
                dot={{ fill: colors[index], strokeWidth: 2, r: 5 }}
                activeDot={{ r: 7, stroke: colors[index], strokeWidth: 2 }}
                connectNulls={false}
              />
            ))}
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div className="mt-6 text-sm text-gray-500">
        <p>
          <strong>How to read:</strong> Lines show each competitor's ranking
          position across rounds. Lower positions (closer to #1) are better!
        </p>
      </div>
    </div>
  );
};

export default MusicLeagueBumpChart;
