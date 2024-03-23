import { useRouter } from "next/router";

export default function ProductDetailPage() {
  const router = useRouter();
  return (
    <div>
      Detail dari halaman <h1 className="inline text-6xl font-bold">{router.query.namaProduk}</h1>
    </div>
  );
}
