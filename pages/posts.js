import Layout from "../components/layout";
import { TOKEN, DATABASE_POSTS_ID } from "../config";
import PostItem from "../components/posts/post-item";

export default function Posts({ posts }) {
  return (
    <Layout>
      <div className="p-7 min-height-calc">
        <ol>준비중입니다.</ol>
      </div>
    </Layout>
  );
}

export async function getServerSideProps() {
  const options = {
    method: "POST",
    headers: {
      accept: "application/json",
      "Notion-Version": "2022-06-28",
      "content-type": "application/json",
      Authorization: `Bearer ${TOKEN}`,
    },
    body: JSON.stringify({
      sorts: [
        {
          property: "Date",
          direction: "ascending",
        },
      ],
      page_size: 100,
    }),
  };

  const res = await fetch(
    `https://api.notion.com/v1/databases/${DATABASE_POSTS_ID}/query`,
    options
  );
  const posts = await res.json();

  return {
    props: { posts },
  };
}
