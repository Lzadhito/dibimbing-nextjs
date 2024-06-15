import axios from "axios";
import { useRouter } from "next/router";
import { useState } from "react";

export default function FoodForm({ defaultFormData, isEdit }) {
  const router = useRouter();
  const [formData, setFormData] = useState(defaultFormData || { name: "", imageUrl: "" });

  const onSubmit = async (event) => {
    event.preventDefault();
    const urlEdit = `https://api-bootcamp.do.dibimbing.id/api/v1/update-food/${router.query.id}`;
    const urlCreate = "https://api-bootcamp.do.dibimbing.id/api/v1/create-food";
    const resp = await axios.post(
      isEdit ? urlEdit : urlCreate,
      {
        name: formData.name,
        imageUrl: formData.imageUrl,
        description: " ",
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
    <form onSubmit={onSubmit} className="">
      {isEdit ? null : <h1>Buat Makanan Baru</h1>}
      <input
        value={formData.name}
        onChange={(event) => setFormData((prev) => ({ ...prev, name: event.target.value }))}
        className="text-black block mt-2"
        placeholder="Masukkan nama makanan"
      />
      <input
        value={formData.imageUrl}
        onChange={(event) => setFormData((prev) => ({ ...prev, imageUrl: event.target.value }))}
        className="text-black block mt-2"
        placeholder="Masukkan url gambar"
      />
      <button type="submit" className="mt-2 px-4 py-1 rounded-full bg-blue-700">
        {isEdit ? "Update Makanan" : "Buat Makanan"}
      </button>
    </form>
  );
}
