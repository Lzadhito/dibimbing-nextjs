import axios from "axios";

export async function getServerSideProps(context) {
  const resp = await axios.get(`https://api-bootcamp.do.dibimbing.id/api/v1/foods/${context.params.idMakanan}`, {
    headers: { apiKey: "w05KkI9AWhKxzvPFtXotUva-", kataKunci: "Kopi enak bikin kembung" },
  });

  return { props: { food: resp.data.data } };
}

export default function FooDetailPage({ food }) {
  return (
    <div>
      <img src={food?.imageUrl} className="w-64 aspect-video" />
    </div>
  );
}
