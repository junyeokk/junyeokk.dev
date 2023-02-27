import Layout from "../components/layout";
import { TOKEN, DATABASE_PORTFOLIO_ID } from "../config";
import ProjectItem from "../components/projects/project-item";

export default function Projects({ projects }) {
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center min-height-calc p-7">
        <div className="grid grid-cols-1 md:grid-cols-2 py-10 m-6 gap-8">
          {projects.results.map((aProject) => (
            <ProjectItem key={aProject.id} data={aProject} />
          ))}
        </div>
      </div>
    </Layout>
  );
}

// getStaticProps(): 빌드 타임에 호출
// export async function getStaticProps() { ... }

// getServerSideProps(): 요청이 올 때마다 호출
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
    `https://api.notion.com/v1/databases/${DATABASE_PORTFOLIO_ID}/query`,
    options
  );
  const projects = await res.json();

  const projectNames = projects.results.map(
    (aProject) => aProject.properties.Name.title[0]?.plain_text
  );

  console.log(`projectNames: ${projectNames}`);

  return {
    props: { projects },
  };
}
