import Layout from "../components/layout";
import { TOKEN, DATABASE_POSTS_ID } from "../config";
import PostItem from "../components/posts/post-item";

export default function Posts({ posts }) {
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center min-h-screen px-5 mb-10 px-6">
        <div className="grid xl:grid-cols-4 md:grid-cols-3 grid-cols-2 py-10 m-6 gap-8">
          {posts.results.map((aPost) => (
            <PostItem key={aPost.id} data={aPost} />
          ))}
        </div>
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
          property: "Name",
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

  const postNames = posts.results.map(
    (aPost) => aPost.properties.Name.title[0]?.plain_text
  );

  console.log(`postNames: ${postNames}`);

  return {
    props: { posts },
  };
}
