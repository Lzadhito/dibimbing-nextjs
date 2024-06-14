import Link from "next/link";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();

  const handleClickMauBayar = () => {
    router.push("/shop/checkout");
  };

  return (
    <div>
      <div className="flex gap-4 text-blue-500">
        <Link href="/profile">Profile</Link>
        <Link href="/shop/sepatu-lari">Sepatu Lari</Link>
        <Link href="/emang-gaada">Emang gaada</Link>
        <Link href="/rafli-hidayat">Rafli Hidayat</Link>
        <Link href="/toko/indomaret">indomaret</Link>
      </div>
      <button className="rounded-full px-4 py-1 bg-blue-400" onClick={handleClickMauBayar}>
        Mau Bayar
      </button>
    </div>
  );
}
