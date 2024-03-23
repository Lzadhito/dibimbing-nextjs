import axios from "axios";

export async function getServerSideProps(context) {
  const resp = await axios.get(`https://api-bootcamp.do.dibimbing.id/api/v1/foods?page=${context.query.page}`, {
    headers: { apiKey: "w05KkI9AWhKxzvPFtXotUva-" },
  });

  return { props: { foods: resp.data.data } };
}

export default function Home({ foods }) {
  return (
    <div className="space-y-8">
      {foods.map((food) => (
        <div>
          <img src={food.imageUrl} className="w-64 aspect-video" />
        </div>
      ))}
    </div>
  );
}
