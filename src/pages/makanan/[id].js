import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";

export default function FooDetailPage() {
  const router = useRouter();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getFoods = async () => {
      setLoading(true);
      const resp = await axios.get(`https://api-bootcamp.do.dibimbing.id/api/v1/foods/${router.query.id}`, {
        headers: { apiKey: "w05KkI9AWhKxzvPFtXotUva-" },
      });

      setData(resp.data.data);
      setLoading(false);
    };

    if (router.query.id) getFoods();
  }, [router.query.id]);

  if (loading) return <div>Loading . . .</div>;

  return (
    <div>
      <img src={data?.imageUrl} className="w-64 aspect-video" />
    </div>
  );
}
