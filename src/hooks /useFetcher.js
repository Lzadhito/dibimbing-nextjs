import { useState } from "react";

export default function useFetcher() {
  const [loading, setLoading] = useState(false);

  const fetcher = async (method = "GET", url, body) => {
    try {
      setLoading(true);
      await fetch(url, {
        method,
        body: body ? JSON.stringify(body) : undefined,
        headers: new Headers({
          apiKey: "w05KkI9AWhKxzvPFtXotUva-",
          "Content-Type": "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1pZnRhaGZhcmhhbkBnbWFpbC5jb20iLCJ1c2VySWQiOiJjYTIzZDdjYy02Njk1LTQzNGItODE2Yy03ZTlhNWMwNGMxNjQiLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE2NjE4NzUzMjF9.wV2OECzC25qNujtyb9YHyzYIbYEV-wud3TQsYv7oB4Q",
        }),
      });
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return { fetcher, loading };
}
