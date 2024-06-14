import { useRouter } from "next/router";

export default function DetailTokoPage() {
  const router = useRouter();
  return <div className="bg-yellow-800 p-8 m-auto">{router.query.namaToko}</div>;
}
