export default function FoodForm({ onSubmitFood, loading }) {
  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = formData.get("name");
    const imageUrl = formData.get("imageUrl");

    onSubmitFood({ name, imageUrl });
  };

  return (
    <form className="grid gap-2 w-1/2 justify-center" onSubmit={handleSubmit}>
      <h4 className="text-xl font-bold">Buat Makanan Baru</h4>
      <label>Nama:</label>
      <input name="name" className="text-black" placeholder="nama makanan" />
      <label>URL Gambar:</label>
      <input name="imageUrl" className="text-black" placeholder="bahan makanan" />
      <button
        type="submit"
        disabled={loading}
        className={`${loading ? "bg-gray-300" : "bg-blue-500"} rounded-xl p-1 mt-4`}
      >
        Buat Makanan
      </button>
    </form>
  );
}
