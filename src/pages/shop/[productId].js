import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const DetilProduk = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState();

  useEffect(() => {
    if (router.query.productId) {
      setLoading(true);
      axios.get(`https://api.mudoapi.tech/menu/${router.query.productId}`).then((resp) => {
        setLoading(false);
        setData(resp.data);
      });
    }
  }, [router.query.productId]);

  if (loading) return <div>LOADING...</div>;
  return <div>{data?.data?.name}</div>;
};

export default DetilProduk;
