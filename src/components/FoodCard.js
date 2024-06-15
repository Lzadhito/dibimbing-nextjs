import { useRouter } from "next/router";

export default function FoodCard({ food }) {
  const router = useRouter();

  const onClick = () => {
    router.push(`food/${food.id}`);
  };

  return (
    <li className="border bg-green-950 rounded p-8 w-48 cursor-pointer" onClick={onClick}>
      <img className="w-32 h-auto aspect-square object-contain rounded" src={food.imageUrl} />
      <div>{food.name}</div>
    </li>
  );
}
