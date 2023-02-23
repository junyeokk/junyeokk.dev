import Image from "next/legacy/image";
import Tags from "./tags";
import Link from "next/link";
import { getDatabase } from "../../lib/notion";
import { Text } from "../../pages/[id]";

export const databaseId = process.env.NOTION_DATABASE_POSTS_ID;

export default function PostItem({ data }) {
  // const title = data.properties.Name.title[0]?.plain_text;
  // const github = data.properties.Github.url;
  const description = data.properties.Description.rich_text[0]?.plain_text;
  const imgSrc = data.cover.file?.url || data.cover.external.url;
  const tags = data.properties.Tags.multi_select;
  // const date = data.properties.Date;

  return (
    <div className="posts-card">
      <Image
        className="rounded-t-xl"
        src={imgSrc}
        alt="cover image"
        width="100%"
        height="50%"
        layout="responsive"
        objectFit="cover"
        quality={100}
      />

      <div className="p-4 flex flex-col">
        <h1 className="text-2xl font-bold" key={data.id}>
          <Link href={`/${data.id}`}>
            <Text text={data.properties.Name.title} />
          </Link>
        </h1>
        <h3 className="mt-1 text-md text-slate-500 dark:text-slate-">
          {description}
        </h3>
        {/* <h3 className="my-1">{date}</h3> */}

        <div className="flex items-start mt-2">
          {tags.map((aTag) => (
            <Tags key={aTag.id} data={aTag}></Tags>
          ))}
        </div>
      </div>
    </div>
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
