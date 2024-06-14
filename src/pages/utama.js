import axios from "axios";
import { useEffect, useState } from "react";

const HalamanUtama = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState();

  useEffect(() => {
    setLoading(true);
    axios
      .get("https://api-bootcamp.do.dibimbing.id/api/v1/foods", {
        headers: { apiKey: " w05KkI9AWhKxzvPFtXotUva-" },
      })
      .then((resp) => {
        setLoading(false);
        setData(resp);
      });
  }, []);

  if (loading) return <div>LOADING...</div>;
  return <div>{JSON.stringify(data)}</div>;
};

export default HalamanUtama;
