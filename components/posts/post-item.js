import Image from "next/legacy/image";
import Tags from "./tags";
import Link from "next/link";
import { getDatabase } from "../../lib/notion";
import { Text } from "../../pages/[id]";
import styles from "./post-item.module.css";

export const databaseId = process.env.NOTION_DATABASE_POSTS_ID;

export default function PostItem({ data }) {
  // const title = data.properties.Name.title[0]?.plain_text;
  const description = data.properties.Description.rich_text[0]?.plain_text;
  const tags = data.properties.Tags.multi_select;
  const date = new Date(data.last_edited_time).toLocaleString("en-US", {
    month: "short",
    day: "2-digit",
    year: "numeric",
  });

  return (
    <li key={data.id} className="mb-12">
      <h1 className={styles.post_title} key={data.id}>
        <Link href={`/${data.id}`}>
          <Text text={data.properties.Name.title} />
        </Link>
      </h1>
      <div className="flex items-start mt-2">
        {tags.map((aTag) => (
          <Tags key={aTag.id} data={aTag}></Tags>
        ))}
      </div>
      <h3 className="mt-2 mb-1 text-md text-slate-500 dark:text-slate-">
        {description}
      </h3>
      <p className={styles.post_date}>{date}</p>
      <Link href={`/${data.id}`}>Read More →</Link>
    </li>
  );
}

export const getStaticProps = async () => {
  const database = await getDatabase(databaseId);

  return {
    props: {
      posts: database,
    },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every second
    revalidate: 1, // In seconds
  };
};
