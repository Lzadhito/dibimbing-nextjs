import axios from "axios";
import { useState } from "react";

export default function usePost() {
  const [loading, setLoading] = useState(false);

  const post = async (url, body) => {
    try {
      setLoading(true);
      await axios.post(url, body, {
        headers: {
          apiKey: "w05KkI9AWhKxzvPFtXotUva-",
          "Content-Type": "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1pZnRhaGZhcmhhbkBnbWFpbC5jb20iLCJ1c2VySWQiOiJjYTIzZDdjYy02Njk1LTQzNGItODE2Yy03ZTlhNWMwNGMxNjQiLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE2NjE4NzUzMjF9.wV2OECzC25qNujtyb9YHyzYIbYEV-wud3TQsYv7oB4Q",
        },
      });
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return { post, loading };
}
