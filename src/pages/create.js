import axios from "axios";
import { useRouter } from "next/router";
import { useState } from "react";

export default function CreateFood() {
  const router = useRouter();
  const [formData, setFormData] = useState({ name: "", imageUrl: "" });

  const onSubmit = async (event) => {
    event.preventDefault();
    const resp = await axios.post(
      "https://api-bootcamp.do.dibimbing.id/api/v1/create-food",
      {
        name: formData.name,
        imageUrl: formData.imageUrl,
        description: "",
        ingredients: [],
      },
      {
        headers: {
          apiKey: "w05KkI9AWhKxzvPFtXotUva-",
          "Content-Type": "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1pZnRhaGZhcmhhbkBnbWFpbC5jb20iLCJ1c2VySWQiOiJjYTIzZDdjYy02Njk1LTQzNGItODE2Yy03ZTlhNWMwNGMxNjQiLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE2NjE4NzUzMjF9.wV2OECzC25qNujtyb9YHyzYIbYEV-wud3TQsYv7oB4Q",
        },
      }
    );
    if (resp.data.code === "200") router.push("/");
  };

  return (
    <form onSubmit={onSubmit} className="flex flex-col items-center">
      <h1>Buat Makanan Baru</h1>
      <input
        onChange={(event) => setFormData((prev) => ({ ...prev, name: event.target.value }))}
        className="text-black block mt-2"
        placeholder="Masukkan nama makanan"
      />
      <input
        onChange={(event) => setFormData((prev) => ({ ...prev, imageUrl: event.target.value }))}
        className="text-black block mt-2"
        placeholder="Masukkan url gambar"
      />
      <button type="submit" className="mt-2 px-4 py-1 rounded-full bg-blue-700">
        Buat Makanan
      </button>
    </form>
  );
}
