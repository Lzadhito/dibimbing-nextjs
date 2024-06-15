import axios from "axios";
import { useRouter } from "next/router";

export async function getServerSideProps(context) {
  const resp = await axios.get(`https://jsonplaceholder.typicode.com/posts?_page=1`);
  const data = resp.data;
  return { props: { postDetail: data } };
}

export default function PostDetail({ postDetail }) {
  const router = useRouter();
  const page = Number(router.query.page);
  return (
    <div>
      <ul className="list-disc list-inside">
        {postDetail.map((post) => (
          <li>{post.title}</li>
        ))}
      </ul>
      <button className="p-2 rounded bg-blue-800 text-white" onClick={() => router.push(`/${postId + 1}`)}>
        Next
      </button>
    </div>
  );
}
