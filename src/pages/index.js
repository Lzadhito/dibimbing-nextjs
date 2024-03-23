import { useEffect, useState } from "react";
import axios from "axios";

export default function Home() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getFoods = async () => {
      setLoading(true);
      const resp = await axios.get("https://api-bootcamp.do.dibimbing.id/api/v1/foods", {
        headers: { apiKey: "w05KkI9AWhKxzvPFtXotUva-" },
      });

      setData(resp.data.data);
      setLoading(false);
    };

    getFoods();
  }, []);

  if (loading) return <div>Loading . . .</div>;

  return (
    <div className="space-y-8">
      {data.map((food) => (
        <div>
          <img src={food.imageUrl} className="w-64 aspect-video" />
        </div>
      ))}
    </div>
  );
}
