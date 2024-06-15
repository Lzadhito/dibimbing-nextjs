export default function FoodCard({ food }) {
  return (
    <li className="border bg-green-950 rounded p-8 w-48 cursor-pointer" onClick={() => router.push(`food/${food.id}`)}>
      <img className="w-32 h-auto aspect-square object-contain rounded" src={food.imageUrl} />
      <div>{food.name}</div>
    </li>
  );
}
