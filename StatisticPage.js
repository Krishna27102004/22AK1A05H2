import React, { useEffect, useState } from "react";
import useApi from "../hooks/useApi";

function StatisticsPage() {
  const [stats, setStats] = useState([]);
  const api = useApi();

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const data = await api.get("/statistics");
        setStats(data);
      } catch (error) {
        console.error("Error fetching statistics:", error);
      }
    };
    fetchStats();
  }, []);

  return (
    <div>
      <h2>URL Statistics</h2>
      <ul>
        {stats.map((item) => (
          <li key={item.shortId}>
            {item.shortUrl} → {item.originalUrl} | Clicks: {item.clicks}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default StatisticsPage;
